import { createClient } from '@vercel/postgres';
import { NextResponse } from 'next/server';

function getClient() {
  return createClient({
    connectionString: process.env.ncjm_POSTGRES_URL || process.env.POSTGRES_URL
  });
}

export async function GET() {
  const client = getClient();
  try {
    await client.connect();
    const { rows } = await client.sql`
      SELECT * FROM invoices 
      ORDER BY created_at DESC 
      LIMIT 50
    `;
    return NextResponse.json(rows);
  } catch (error: any) {
    if (error.message.includes('relation "invoices" does not exist')) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await client.end();
  }
}

export async function POST(request: Request) {
  const client = getClient();
  try {
    const { clientName, clientPhone, clientAddress, services, notes, total } = await request.json();

    await client.connect();

    // Create table if it doesn't exist
    await client.sql`
      CREATE TABLE IF NOT EXISTS invoices (
        id SERIAL PRIMARY KEY,
        client_name TEXT NOT NULL,
        client_phone TEXT,
        client_address TEXT,
        services JSONB NOT NULL,
        notes TEXT,
        total DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const result = await client.sql`
      INSERT INTO invoices (client_name, client_phone, client_address, services, notes, total)
      VALUES (${clientName}, ${clientPhone}, ${clientAddress}, ${JSON.stringify(services)}::jsonb, ${notes}, ${total})
      RETURNING *;
    `;

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await client.end();
  }
}

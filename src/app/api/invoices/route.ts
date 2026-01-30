import { createPool } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Create a custom pool that uses your specific prefixed variable
const pool = createPool({
  connectionString: process.env.ncjm_POSTGRES_URL || process.env.POSTGRES_URL
});

const sql = pool.sql;

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT * FROM invoices 
      ORDER BY created_at DESC 
      LIMIT 50
    `;
    return NextResponse.json(rows);
  } catch (error: any) {
    // If table doesn't exist, return empty array instead of erroring
    if (error.message.includes('relation "invoices" does not exist')) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { clientName, clientPhone, clientAddress, services, notes, total } = await request.json();

    // Create table if it doesn't exist
    await sql`
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

    const result = await sql`
      INSERT INTO invoices (client_name, client_phone, client_address, services, notes, total)
      VALUES (${clientName}, ${clientPhone}, ${clientAddress}, ${JSON.stringify(services)}::jsonb, ${notes}, ${total})
      RETURNING *;
    `;

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import { createClient } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  const url = process.env.ncjm_POSTGRES_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL;
  
  if (!url) {
    return NextResponse.json({ error: 'No se encontró la configuración de la base de datos (POSTGRES_URL missing)' }, { status: 500 });
  }

  const client = createClient({ connectionString: url });
  
  try {
    // Add a 5-second timeout to the connection
    const connectPromise = client.connect();
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout de conexión (5s)')), 5000));
    
    await Promise.race([connectPromise, timeoutPromise]);
    
    const { rows } = await client.sql`
      SELECT * FROM invoices 
      ORDER BY created_at DESC 
      LIMIT 50
    `;
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('Fetch Error:', error);
    if (error.message.includes('relation "invoices" does not exist')) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    try { await client.end(); } catch (e) {}
  }
}

export async function POST(request: Request) {
  const url = process.env.ncjm_POSTGRES_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL;
  const client = createClient({ connectionString: url });
  
  try {
    const data = await request.json();
    await client.connect();

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
      VALUES (${data.clientName}, ${data.clientPhone}, ${data.clientAddress}, ${JSON.stringify(data.services)}::jsonb, ${data.notes}, ${data.total})
      RETURNING *;
    `;

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error('Save Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    try { await client.end(); } catch (e) {}
  }
}

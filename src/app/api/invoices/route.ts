import { createClient } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('API GET: Starting fetch...');
  const url = process.env.ncjm_POSTGRES_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL;
  
  if (!url) {
    console.error('API GET: No URL found in env');
    return NextResponse.json({ error: 'Configuración faltante: No se encontró ncjm_POSTGRES_URL' }, { status: 500 });
  }

  console.log('API GET: URL found, creating client...');
  const client = createClient({ connectionString: url });
  
  try {
    console.log('API GET: Connecting...');
    await client.connect();
    console.log('API GET: Connected, running query...');
    
    const { rows } = await client.sql`SELECT * FROM invoices ORDER BY created_at DESC LIMIT 50`;
    console.log(`API GET: Success, found ${rows.length} rows`);
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('API GET Error:', error.message);
    if (error.message.includes('relation "invoices" does not exist')) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: `Error de base de datos: ${error.message}` }, { status: 500 });
  } finally {
    try { 
      await client.end(); 
      console.log('API GET: Connection closed');
    } catch (e) {}
  }
}

export async function POST(request: Request) {
  console.log('API POST: Starting save...');
  const url = process.env.ncjm_POSTGRES_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL;
  const client = createClient({ connectionString: url });
  
  try {
    const data = await request.json();
    console.log('API POST: Connecting...');
    await client.connect();
    console.log('API POST: Connected, building table/inserting...');

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

    console.log('API POST: Success');
    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error('API POST Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    try { 
      await client.end(); 
      console.log('API POST: Connection closed');
    } catch (e) {}
  }
}

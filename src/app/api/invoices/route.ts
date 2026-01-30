import { Client } from 'pg';
import { NextResponse } from 'next/server';

const DB_URL = process.env.ncjm_POSTGRES_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL;

async function runQuery(queryFn: (client: Client) => Promise<any>) {
  if (!DB_URL) throw new Error('DB_URL not found');
  
  const client = new Client({
    connectionString: DB_URL,
    connectionTimeoutMillis: 5000, // 5 second timeout
    ssl: { rejectUnauthorized: false } // Required for most cloud DBs
  });

  try {
    await client.connect();
    return await queryFn(client);
  } finally {
    try { await client.end(); } catch (e) {}
  }
}

export async function GET() {
  try {
    const rows = await runQuery(async (client) => {
      const res = await client.query('SELECT * FROM invoices ORDER BY created_at DESC LIMIT 50');
      return res.rows;
    });
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('DB GET Error:', error.message);
    if (error.message.includes('relation "invoices" does not exist')) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: `Error: ${error.message}` }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = await runQuery(async (client) => {
      // Create table
      await client.query(`
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
      `);

      // Insert
      const res = await client.query(
        'INSERT INTO invoices (client_name, client_phone, client_address, services, notes, total) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [data.clientName, data.clientPhone, data.clientAddress, JSON.stringify(data.services), data.notes, data.total]
      );
      return res.rows[0];
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('DB POST Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

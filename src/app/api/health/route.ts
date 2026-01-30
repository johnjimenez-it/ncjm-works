import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'API is reachable',
    env_keys: Object.keys(process.env).filter(k => k.toLowerCase().includes('postgres') || k.toLowerCase().includes('database'))
  });
}

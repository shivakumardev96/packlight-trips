import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'contacts.json');

function readContacts() {
  try {
    if (!fs.existsSync(DB_PATH)) return [];
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function GET() {
  const contacts = readContacts();
  return NextResponse.json({ success: true, contacts });
}

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

function writeContacts(contacts) {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(contacts, null, 2));
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const contacts = readContacts();

    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      subject: subject || '',
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    contacts.push(newContact);
    writeContacts(contacts);

    return NextResponse.json({
      success: true,
      message: 'Message sent! We will get back to you within 24 hours.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}

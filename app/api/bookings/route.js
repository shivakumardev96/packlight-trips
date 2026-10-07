import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'bookings.json');

function readBookings() {
  try {
    if (!fs.existsSync(DB_PATH)) return [];
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeBookings(bookings) {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(bookings, null, 2));
}

export async function GET() {
  const bookings = readBookings();
  return NextResponse.json({ success: true, bookings });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, tourName, tourDate, participants, message } = body;

    if (!name || !phone || !tourName) {
      return NextResponse.json(
        { success: false, error: 'Name, phone, and tour name are required' },
        { status: 400 }
      );
    }

    const bookings = readBookings();

    const newBooking = {
      id: Date.now().toString(),
      name,
      email: email || '',
      phone,
      tourName,
      tourDate: tourDate || '',
      participants: participants || 1,
      message: message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);
    writeBookings(bookings);

    return NextResponse.json({
      success: true,
      message: 'Booking request received! We will contact you within 24 hours.',
      booking: newBooking,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}

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

export async function PATCH(request) {
  try {
    const { id, status } = await request.json();
    const bookings = readBookings();
    const index = bookings.findIndex((b) => b.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Booking not found' }, { status: 404 });
    }

    bookings[index].status = status;
    writeBookings(bookings);

    return NextResponse.json({ success: true, booking: bookings[index] });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

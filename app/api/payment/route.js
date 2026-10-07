import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, currency = 'INR', receipt, notes = {} } = body;

    if (!amount) {
      return NextResponse.json(
        { success: false, error: 'Amount is required' },
        { status: 400 }
      );
    }

    const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
    const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        {
          success: false,
          error: 'Online payment is not configured yet. Please book via WhatsApp instead.',
          fallback: true,
        },
        { status: 200 }
      );
    }

    const orderData = {
      amount: amount * 100,
      currency,
      receipt: receipt || `order_${Date.now()}`,
      notes,
    };

    const auth = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();

    if (data.error) {
      return NextResponse.json(
        { success: false, error: data.error.description || 'Payment creation failed' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      orderId: data.id,
      amount: data.amount,
      currency: data.currency,
      keyId: RAZORPAY_KEY_ID,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Payment server error' },
      { status: 500 }
    );
  }
}

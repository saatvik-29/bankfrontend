import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/auth';

// Hardcoded admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    
    // Simple hardcoded credential check
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = generateToken('admin');
      return NextResponse.json({ token, message: 'Login successful' });
    } else {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}
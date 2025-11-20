import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import connectDB from './database';
import Admin from '@/models/Admin';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export const generateToken = (adminId: string) => {
  return jwt.sign({ adminId }, JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = async (request: NextRequest) => {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { adminId: string };
    
    // For hardcoded admin, just return a simple admin object
    if (decoded.adminId === 'admin') {
      return { _id: 'admin', username: 'admin' };
    }
    
    return null;
  } catch (error) {
    return null;
  }
};

export const authenticateAdmin = async (request: NextRequest) => {
  const admin = await verifyToken(request);
  if (!admin) {
    return Response.json({ message: 'Access denied. Invalid token.' }, { status: 401 });
  }
  return admin;
};
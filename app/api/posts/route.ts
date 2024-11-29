import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { Post } from './model';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Create session in MongoDB
      const { db } = await connectToDatabase();
      const session = await db.collection('sessions').insertOne({
        username,
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
      });

      // Set cookie with session ID
      const cookieStore = await cookies();
      cookieStore.set('isAdminLoggedIn', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 // 24 hours
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const category = searchParams.get('category');

    const { db } = await connectToDatabase();
    const query: any = {};
    if (type) query.type = type;
    if (category) query.category = category;

    const posts = await db.collection('posts')
      .find(query)
      .skip((page - 1) * 10)
      .limit(10)
      .toArray();

    const totalPosts = await db.collection('posts').countDocuments(query);
    const totalPages = Math.ceil(totalPosts / 10);

    return NextResponse.json({ posts, totalPages });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 
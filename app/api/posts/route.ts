import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { Post } from './model';

export async function POST(request: Request) {
  try {
    // This POST endpoint should now handle creating new posts
    const postData = await request.json();
    const { db } = await connectToDatabase();
    
    const result = await db.collection('posts').insertOne(postData);
    
    return NextResponse.json({ 
      success: true, 
      post: result 
    });
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
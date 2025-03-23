import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Post } from "./model";

export async function POST(request: Request) {
  try {
    // Ensure database connection
    await connectToDatabase();
    // Parse the request body for new post data
    const postData = await request.json();
    console.log("received post data", postData);

    // Create a new post using the Mongoose model
    const newPost = await Post.create(postData);
    console.log("created post", newPost);

    return NextResponse.json({
      success: true,
      post: newPost,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const category = searchParams.get("category");
    const id = searchParams.get("id");

    // Ensure database connection
    await connectToDatabase();

    if (id) {
      // Fetch a single post by ID
      const post = await Post.findById(id);
      if (!post) {
        return NextResponse.json(
          { success: false, message: "Post not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ post });
    }

    // Build query for multiple posts
    const query: any = {};
    if (type) query.type = type;
    if (category) query.category = category;

    // Pagination options
    const limit = 10;
    const skip = (page - 1) * limit;

    // Fetch posts and total count using Mongoose
    const posts = await Post.find(query).skip(skip).limit(limit).exec();
    const totalPosts = await Post.countDocuments(query).exec();
    const totalPages = Math.ceil(totalPosts / limit);

    return NextResponse.json({ posts, totalPages });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    // Get the post ID from the URL
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { success: false, message: "Post ID is required" },
        { status: 400 },
      );
    }

    // Parse the request body for updated post data
    const postData = await request.json();
    console.log("Received post data for update", postData);

    // Ensure database connection
    await connectToDatabase();

    // Find the post by ID and update it with the new data
    const updatedPost = await Post.findByIdAndUpdate(postId, postData, {
      new: true, // Return the updated document
      runValidators: true, // Validate the update operation based on schema
    });

    if (!updatedPost) {
      return NextResponse.json(
        { success: false, message: "Post not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      post: updatedPost,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    // Get the post ID from the URL
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { success: false, message: "Post ID is required" },
        { status: 400 },
      );
    }

    // Ensure database connection
    await connectToDatabase();

    // Find and delete the post by ID
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return NextResponse.json(
        { success: false, message: "Post not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

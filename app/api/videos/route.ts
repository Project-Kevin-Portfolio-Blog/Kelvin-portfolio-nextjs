import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Video } from "./model"; // Update the import to use the Video model

// Handle video creation
export async function POST(request: Request) {
  try {
    // Ensure database connection
    await connectToDatabase();

    // Parse the request body for new video data
    const videoData = await request.json();
    console.log("received video data", videoData);

    // Create a new video using the Mongoose model
    const newVideo = await Video.create(videoData);

    return NextResponse.json({
      success: true,
      video: newVideo,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

// Handle fetching videos
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10); // Pagination
    const limit = 10;
    const skip = (page - 1) * limit;

    // Ensure database connection
    await connectToDatabase();

    // Fetch videos and total count using Mongoose
    const videos = await Video.find().skip(skip).limit(limit).exec();
    const totalVideos = await Video.countDocuments().exec();
    const totalPages = Math.ceil(totalVideos / limit);

    return NextResponse.json({ videos, totalPages });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

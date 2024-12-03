import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Gallery } from "./model"; // Use the Gallery model instead of Video

// Handle gallery item creation
export async function POST(request: Request) {
  try {
    // Ensure database connection
    await connectToDatabase();

    // Parse the form data
    const formData = await request.formData();

    // Extract title and imageUrl from form data
    const title = formData.get("title") as string;
    const imageUrl = formData.get("imageUrl") as string;

    // Check if title and imageUrl are valid
    if (!imageUrl || typeof imageUrl !== "string") {
      return NextResponse.json(
        { success: false, message: "Image URL is required" },
        { status: 400 },
      );
    }

    // Create a new gallery item using the Mongoose model
    const newGalleryItem = await Gallery.create({ title, imageUrl });

    return NextResponse.json({
      success: true,
      gallery: newGalleryItem,
    });
  } catch (error) {
    console.error("Error creating gallery item:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

// Handle fetching gallery items
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10); // Pagination
    const limit = 10;
    const skip = (page - 1) * limit;

    // Ensure database connection
    await connectToDatabase();

    // Fetch gallery items and total count using Mongoose
    const galleryItems = await Gallery.find().skip(skip).limit(limit).exec();
    const totalGalleryItems = await Gallery.countDocuments().exec();
    const totalPages = Math.ceil(totalGalleryItems / limit);

    return NextResponse.json({ galleryItems, totalPages });
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

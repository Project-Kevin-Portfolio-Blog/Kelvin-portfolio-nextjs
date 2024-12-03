import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false; // Track the connection state

export async function connectToDatabase() {
  if (isConnected) {
    return; // Use the existing connection
  }

  try {
    await mongoose.connect(MONGODB_URI, {});
    isConnected = true;
    console.log("Connected to MongoDB via Mongoose");
  } catch (error) {
    console.error("Error connecting to MongoDB via Mongoose:", error);
    throw error;
  }
}

import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true }, // The link to the video
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  },
);

export const Video =
  mongoose.models.Video || mongoose.model("Video", VideoSchema);

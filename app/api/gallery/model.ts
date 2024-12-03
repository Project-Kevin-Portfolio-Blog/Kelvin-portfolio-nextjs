import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Title of the gallery item
    imageUrl: { type: String, required: true }, // URL to the image
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  },
);

export const Gallery =
  mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);

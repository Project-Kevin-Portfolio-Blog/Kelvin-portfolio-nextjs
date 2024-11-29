import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: {
    type: String,
    enum: ['article', 'video'],
    required: true
  },
  category: {
    type: String,
    enum: ['education', 'tech', 'blockchain', 'tutorials', 'cryptocurrency', 'reviews', 'opportunities'],
    required: true
  },
  imageUrl: { type: String },
  videoUrl: { type: String },
  externalUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema); 
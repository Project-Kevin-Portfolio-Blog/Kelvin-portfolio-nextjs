"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface Post {
  _id: string;
  title: string;
  content: string;
  type: string;
  slug: string;
  category: string;
  imageUrl: string;
  externalUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const ViewPost = () => {
  const pathName = usePathname();
  const postId = pathName ? pathName.split("/").pop() : null;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts?id=${postId}`);
        const data = await res.json();

        if (res.ok) {
          setPost(data.post);
        } else {
          console.error("Failed to fetch post:", data.message);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <p className="my-10 text-center text-lg font-semibold">Loading post...</p>;
  }

  if (!post) {
    return <p className="my-10 text-center text-red-500 text-lg">Post not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Featured Image */}
        {post.imageUrl && (
          <div className="w-full h-64 overflow-hidden rounded-lg mb-6">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover max-w-md"
            />
          </div>
        )}

        {/* Post Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs uppercase">
            {post.category}
          </span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>

        {/* Post Content */}
        <div className="text-gray-700 leading-7 space-y-4">
          <p>{post.content}</p>
        </div>

        {/* External Link (if available) */}
        {post.externalUrl && (
          <div className="mt-6">
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              Read More
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPost;

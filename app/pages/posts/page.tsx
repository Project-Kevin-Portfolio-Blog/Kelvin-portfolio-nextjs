"use client";

import { useState, useEffect } from "react";
import SideBar from "@/components/admin/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from "next/image";

interface Post {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  createdAt: string;
  content: string;
}

const fallbackImage = "/assests/gallery/gida.png"; // Default fallback image URL

// Function to format the date to "X hours ago"
const timeAgo = (date: string) => {
  const now = new Date();
  const createdDate = new Date(date);
  const diffInSeconds = Math.floor(
    (now.getTime() - createdDate.getTime()) / 1000,
  );

  const hours = Math.floor(diffInSeconds / 3600);
  if (hours < 1) {
    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes < 1) return "Just now";
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }
  return `${hours} hour${hours > 1 ? "s" : ""} ago`;
};

export default function AllPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        const formattedPosts = data.posts.map((post: any) => ({
          id: post._id,
          title: post.title,
          category: post.category,
          content: post.content,
          imageUrl: post.imageUrl || fallbackImage,
          createdAt: timeAgo(post.createdAt), // Format the time
        }));
        setPosts(formattedPosts);
      } catch (error) {
        setError("Failed to load posts. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = (post: Post) => {
    setSelectedPost(post);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedPost) {
      try {
        const response = await fetch(`/api/posts?postId=${selectedPost.id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete post");
        }
        setPosts(posts.filter((post) => post.id !== selectedPost.id));
        setIsDeleteModalOpen(false);
      } catch (error) {
        setError("Failed to delete the post. Please try again.");
        console.error(error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <main className="flex-1 px-14 py-24 md:px-8 md:py-16">
        <h1 className="mb-6 text-3xl font-semibold text-gray-800">All Posts</h1>
        {loading ? (
          <p className="text-gray-600">Loading posts...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200 text-sm text-gray-500">
                <tr>
                  <th className="px-6 py-4 text-left">Title</th>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Image</th>
                  <th className="px-6 py-4 text-left">Created At</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {posts.map((post) => (
                  <tr
                    key={`${post.id}-${post.title}`} // Ensure key is unique, combining id and title if needed
                    className="transition duration-150 hover:bg-gray-100"
                  >
                    <td className="px-6 py-4">{post.title}</td>
                    <td className="px-6 py-4">{post.category}</td>
                    <td className="px-6 py-4">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        width={100}
                        height={100}
                        className="h-20 w-20 rounded object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">{post.createdAt}</td>
                    <td className="flex space-x-4 px-6 py-4">
                      <button
                        onClick={() =>
                          alert("Edit functionality not implemented")
                        }
                        className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-blue-700"
                        aria-label="Edit post"
                      >
                        <FaEdit className="mr-2" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post)}
                        className="flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-red-700"
                        aria-label="Delete post"
                      >
                        <FaTrash className="mr-2" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Delete Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-96 rounded-lg bg-white p-8">
              <h2 className="mb-4 text-xl font-semibold">Confirm Deletion</h2>
              <p>Are you sure you want to delete this post?</p>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="rounded bg-gray-500 px-4 py-2 text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="rounded bg-red-600 px-4 py-2 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

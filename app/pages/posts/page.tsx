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
}

const fallbackImage = "/assests/gallery/gida.png"; // Default fallback image URL

export default function AllPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        const formattedPosts = data.posts.map((post: any) => ({
          id: post._id, // MongoDB ObjectId as string
          title: post.title,
          category: post.category,
          imageUrl: post.imageUrl || fallbackImage, // Fallback to default if no image
          createdAt: new Date(post.createdAt).toLocaleDateString(), // Format the date
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

  const handleEdit = (id: string) => {
    // Add your edit logic here
    console.log("Edit post:", id);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      // Add your delete API call here
      console.log("Delete post:", id);
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div className="z-50 flex min-h-screen ">
      <SideBar />
      <main className="flex-1 px-14 py-24 md:px-8 md:py-16">
        <h1 className="mb-6 text-2xl font-bold">All Posts</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td className="whitespace-nowrap px-6 py-4">
                      {post.title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {post.category}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={100}
                        height={100}
                        className="h-20 w-20 rounded object-cover"
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {post.createdAt}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button
                        onClick={() => handleEdit(post.id)}
                        className="mr-2 text-blue-600 hover:text-blue-900"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

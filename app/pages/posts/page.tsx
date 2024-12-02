"use client";

import { useState, useEffect } from "react";
import SideBar from "@/components/admin/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Post {
  id: string;
  title: string;
  type: "article" | "video";
  createdAt: string;
}

export default function AllPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Add your API call here to fetch posts
    // For now, using dummy data
    setPosts([
      {
        id: "1",
        title: "Sample Article",
        type: "article",
        createdAt: "2024-03-20",
      },
      {
        id: "2",
        title: "Sample Video",
        type: "video",
        createdAt: "2024-03-21",
      },
    ]);
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
    <div className="flex min-h-screen z-50 ">
      <SideBar />
      <main className="flex-1 md:px-8 px-14  py-24 md:py-16">
        <h1 className="mb-6 text-2xl font-bold">All Posts</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Type
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
                  <td className="whitespace-nowrap px-6 py-4">{post.title}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        post.type === "article"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {post.type}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{post.createdAt}</td>
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
      </main>
    </div>
  );
}

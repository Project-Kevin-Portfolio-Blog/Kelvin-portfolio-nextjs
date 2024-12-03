"use client";

import { useState, useEffect } from "react";
import SideBar from "@/components/admin/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  createdAt: string;
}

const extractYouTubeVideoId = (url: string): string | null => {
  const regex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\?v=|\S+\/\S+\/|\S+\S*\/?\S*\/|.*?\/))([\w-]{11})(?:[&?]|$)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const fallbackImage = "/assests/gallery/gida.png"; // Default fallback image URL

export default function AllVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        const formattedVideos = data.videos.map((video: any) => ({
          id: video._id, // MongoDB ObjectId as string
          title: video.title,
          description: video.description,
          videoUrl: video.videoUrl,
          createdAt: new Date(video.createdAt).toLocaleDateString(), // Format the date
        }));
        setVideos(formattedVideos);
      } catch (error) {
        setError("Failed to load videos. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleEdit = (id: string) => {
    // Add your edit logic here
    console.log("Edit video:", id);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      // Add your delete API call here
      console.log("Delete video:", id);
      setVideos(videos.filter((video) => video.id !== id));
    }
  };

  return (
    <div className="z-50 flex min-h-screen">
      <SideBar />
      <main className="flex-1 px-14 py-24 md:px-8 md:py-16">
        <h1 className="mb-6 text-2xl font-bold">All Videos</h1>
        {loading ? (
          <p>Loading videos...</p>
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
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Video Thumbnail
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
                {videos.map((video) => {
                  const videoId = extractYouTubeVideoId(video.videoUrl);
                  const thumbnailUrl = videoId
                    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                    : fallbackImage;

                  return (
                    <tr key={video.id}>
                      <td className="whitespace-nowrap px-6 py-4">
                        {video.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {video.description}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <a
                          href={video.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={thumbnailUrl}
                            alt={video.title}
                            width={100}
                            height={100}
                            className="h-20 w-20 rounded object-cover"
                          />
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {video.createdAt}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          onClick={() => handleEdit(video.id)}
                          className="mr-2 text-blue-600 hover:text-blue-900"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(video.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

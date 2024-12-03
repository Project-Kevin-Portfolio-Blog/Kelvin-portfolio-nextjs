"use client";

import { useState, useEffect } from "react";
import SideBar from "@/components/admin/Sidebar";

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: string;
}

const fallbackImage = "/assests/gallery/gida.png"; // Default fallback image URL

export default function AllGallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Failed to fetch gallery items");
        }
        const data = await response.json();
        const formattedGalleryItems = data.galleryItems.map((item: any) => ({
          id: item._id, // MongoDB ObjectId as string
          title: item.title,
          imageUrl: item.imageUrl,
          createdAt: new Date(item.createdAt).toLocaleDateString(), // Format the date
        }));
        setGalleryItems(formattedGalleryItems);
      } catch (error) {
        setError("Failed to load gallery items. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  return (
    <div className="z-50 flex min-h-screen">
      <SideBar />
      <main className="flex-1 px-14 py-24 md:px-8 md:py-16">
        <h1 className="mb-6 text-2xl font-bold">All Gallery Items</h1>
        {loading ? (
          <p>Loading gallery items...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative max-w-xs overflow-hidden rounded-lg shadow-md"
              >
                <a
                  href={item.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.imageUrl || fallbackImage}
                    alt={item.title}
                    className="h-56 w-full object-cover group-hover:opacity-75"
                  />
                </a>
                <div className="bg-white p-4 dark:bg-[#081825] dark:text-white">
                  <h3 className="text-xl font-semibold">
                    {item.title || "Untitled"}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {item.createdAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

"use client";
import { useState } from "react";
import SideBar from "@/components/admin/Sidebar";

export default function CreateVideo() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
  });

  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  }>({
    success: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create the data object to be sent in the request
    const videoData = {
      title: formData.title,
      description: formData.description,
      videoUrl: formData.videoUrl,
    };

    try {
      // Make API request to create the video
      const response = await fetch("/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videoData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          success: true,
          message: "Video uploaded successfully!",
        });
      } else {
        setStatus({
          success: false,
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error creating video:", error);
      setStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="z-50 flex min-h-screen">
      <SideBar />
      <main className="w-full overflow-y-auto bg-slate-100 px-14 py-24 text-[#081825] dark:bg-[#081825] dark:text-slate-100 md:mt-8 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-2xl font-bold">Upload New Video</h1>
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
            {/* Title Input */}
            <div>
              <input
                placeholder="Title"
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full rounded border p-2 dark:bg-[#081825]"
                required
              />
            </div>

            {/* Description Input */}
            <div>
              <textarea
                placeholder="Video Content"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="h-32 w-full rounded border p-2 dark:bg-[#081825]"
                required
              />
            </div>

            {/* Video URL Input */}
            <div className="pb-10">
              <input
                placeholder="Video URL"
                type="url"
                value={formData.videoUrl}
                onChange={(e) =>
                  setFormData({ ...formData, videoUrl: e.target.value })
                }
                className="w-full rounded border p-2 dark:bg-[#081825]"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mx-auto flex w-full items-center justify-center rounded bg-blue-500 px-4 py-3 text-white hover:bg-blue-600"
            >
              Upload Video
            </button>
          </form>

          {/* Success/Error Message */}
          {status.message && (
            <div
              className={`mt-4 rounded p-3 ${
                status.success
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

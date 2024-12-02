'use client'
import { useState } from 'react';
import SideBar from "@/components/admin/Sidebar";

export default function CreateVideo() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
    image: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your API call here to save the video
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen z-50 ">
      <SideBar />
      <main className="w-full md:mt-8 overflow-y-auto bg-slate-100 dark:bg-[#081825] text-[#081825] dark:text-slate-100 md:px-8 px-14  py-24 md:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-2xl font-bold">Create New Video</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
          <div>
            <label className="mb-2 block text-sm font-bold">Title</label>
            <input
            placeholder='Tittle'
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full rounded border p-2 dark:bg-[#081825]"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Description</label>
            <textarea
            placeholder='Video Content'
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="h-32 w-full rounded border p-2 dark:bg-[#081825]"
              required
            />
          </div>
          <div className='pb-10'>
            <label className="mb-2 block text-sm font-bold">Video URL</label>
            <input
            placeholder='Video Url (Optional)'
              type="url"
              value={formData.videoUrl}
              onChange={(e) =>
                setFormData({ ...formData, videoUrl: e.target.value })
              }
              className="w-full rounded border p-2 dark:bg-[#081825]"
              required
            />
          </div>
          
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-3 text-white hover:bg-blue-600 flex  justify-center items-center w-3/4 mx-auto"
          >
            Create Video
          </button>
        </form>
        </div>
      </main>
    </div>
  );
}


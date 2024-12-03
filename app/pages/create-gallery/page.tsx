"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/admin/Sidebar";

export default function CreatePost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "education",
    image: null as File | null,
    externalUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("content", formData.content);
      form.append("category", formData.category);
      if (formData.image) {
        form.append("image", formData.image);
      }
      form.append("externalUrl", formData.externalUrl);

      const res = await fetch("/api/posts", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        router.push("/admin/posts");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="flex h-screen z-50 ">
      <SideBar />
      <main className="w-full  md:mt-8 overflow-y-auto bg-slate-100 dark:bg-[#081825] text-[#081825] dark:text-slate-100 md:px-8 px-14  py-24 md:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-2xl font-bold">Add New Gallery</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
   <input
              type="file"
              accept="image/*"
              required
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files?.[0] || null })
              }
              className="w-full rounded  p-2 dark:bg-[#081825]"
            />
         
            <div className="pb-6">
            <input
              type="text"
              placeholder="Title (Optional)"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full rounded border p-2 capitalize dark:bg-[#081825]"
            />

              </div>
              <button
                type="submit"
              className="mx-auto flex w-2/5 items-center justify-center rounded bg-blue-500 py-2 text-white hover:bg-blue-600 w-3/4 mx-auto flex items-center justify-center"
            >
              Create Post
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

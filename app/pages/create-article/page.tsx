"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/admin/Sidebar";

export default function CreatePost() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    type: "article",
    slug: "",
    content: "",
    category: "blockchain",
    imageUrl: "",
    externalUrl: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({ ...formData, title, slug: generateSlug(title) });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setStatus("idle"); // Reset status
      setMessage("");

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Post created successfully!");
        setTimeout(() => router.push("/pages/posts"), 5000);
        // Redirect after 5 seconds
      } else {
        const errorData = await res.json();
        setStatus("error");
        setMessage(errorData.message || "Failed to create post.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred while creating the post.");
    }
  };

  return (
    <div className=" flex  h-screen ">
      <SideBar />
      <main className="w-full overflow-y-auto  bg-slate-100 px-14 py-24 text-[#081825] dark:bg-[#081825] dark:text-slate-100 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-2xl font-bold">Create New Article</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={handleTitleChange}
              className="w-full rounded border p-2 capitalize dark:bg-[#081825]"
            />

            <textarea
              placeholder="Content"
              value={formData.content}
              required
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="h-40 w-full rounded border p-2 dark:bg-[#081825]"
            />

            <select
              value={formData.category}
              required
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full rounded border p-2 dark:bg-[#081825]"
            >
              <option value="blockchain">Blockchain</option>
              <option value="education">Education</option>
              <option value="tech">Tech</option>
              <option value="tutorials">Tutorials</option>
              <option value="cryptocurrency">Cryptocurrency</option>
              <option value="reviews">Reviews</option>
              <option value="opportunities">Opportunities</option>
            </select>

            <input
              type="url"
              placeholder="Image URL"
              required
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
              className="w-full rounded border p-2 capitalize dark:bg-[#081825]"
            />
            <input
              type="url"
              placeholder="External URL (Optional)"
              value={formData.externalUrl}
              onChange={(e) =>
                setFormData({ ...formData, externalUrl: e.target.value })
              }
              className="w-full rounded border p-2 dark:bg-[#081825]"
            />

            <button
              type="submit"
              className="mx-auto flex w-full items-center justify-center rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Create Post
            </button>
          </form>

          {/* Display success or error messages */}
          {status === "success" && (
            <p className="mt-4 text-center text-green-600">{message}</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-red-600">{message}</p>
          )}
        </div>
      </main>
    </div>
  );
}

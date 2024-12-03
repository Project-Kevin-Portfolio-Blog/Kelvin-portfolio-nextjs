"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/admin/Sidebar";

// Define the type for the form data
interface FormData {
  title: string;
  imageUrl: string;
}

export default function CreateGallery() {
  const router = useRouter();

  // Initialize the form state with empty strings
  const [formData, setFormData] = useState<FormData>({
    title: "",
    imageUrl: "",
  });

  // State for loading, success, and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      // Create a FormData object and append the form fields
      const form = new FormData();
      form.append("title", formData.title);
      form.append("imageUrl", formData.imageUrl);

      // Send the data to the gallery API route
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setSuccess("Gallery item created successfully!");
        setFormData({ title: "", imageUrl: "" }); // Reset the form
        setTimeout(() => {
          router.push("/admin/gallery"); // Redirect after success
        }, 1500);
      } else {
        throw new Error("Failed to create gallery item");
      }
    } catch (error) {
      setError("Error creating gallery item. Please try again.");
      console.error("Error creating gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-50 flex h-screen">
      <SideBar />
      <main className="w-full overflow-y-auto bg-slate-100 px-14 py-24 text-[#081825] dark:bg-[#081825] dark:text-slate-100 md:mt-8 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-2xl font-bold">Add New Gallery</h1>
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="pb-6">
              <input
                type="text"
                placeholder="Image URL (Required)"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                className="w-full rounded border p-2 dark:bg-[#081825]"
                required
              />
            </div>
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
              className="mx-auto flex w-full items-center justify-center rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Creating..." : "Upload Gallery"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

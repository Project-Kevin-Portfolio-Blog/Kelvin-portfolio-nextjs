"use client";
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { PostCard } from "@/components/blog/PostCard";
import { VideoCard } from "@/components/blog/VideoCard";
import { Pagination } from "@/components/blog/Pagination";

interface Post {
  _id: string;
  title: string;
  content: string;
  type: string;
  thumbnail: string;
  slug: string;
  description: string;
  category: string;
  imageUrl: string;
  externalUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeType, setActiveType] = useState("article");
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = [
    "education",
    "tech",
    "blockchain",
    "tutorials",
    "cryptocurrency",
    "reviews",
    "opportunities",
  ];

  useEffect(() => {
    fetchPosts();
  }, [activeType, selectedCategory, currentPage]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(
        `/api/posts?type=${activeType}&page=${currentPage}&category=${selectedCategory}`,
      );
      const data = await res.json();
      console.log(data);

      if (data?.posts) {
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Tab.Group>
        <Tab.List className="mb-8 flex space-x-4 border-b">
          <Tab
            className={({ selected }) =>
              `px-4 py-2 ${selected ? "border-b-2 border-blue-500" : ""}`
            }
          >
            Articles
          </Tab>
          <Tab
            className={({ selected }) =>
              `px-4 py-2 ${selected ? "border-b-2 border-blue-500" : ""}`
            }
          >
            Videos
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="mb-8 hidden flex-wrap gap-4 md:flex">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <select
              className="mb-8 w-full rounded border p-2 md:hidden"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <div className="grid gap-6 md:grid-cols-3">
              {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post._id} post={post} />)
              ) : (
                <p className="col-span-3 text-center text-gray-500">
                  No posts yet.
                </p>
              )}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid gap-6 md:grid-cols-2">
              {posts.length > 0 ? (
                posts.map((post) => <VideoCard key={post._id} post={post} />)
              ) : (
                <p className="col-span-2 text-center text-gray-500">
                  No videos found.
                </p>
              )}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

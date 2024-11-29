'use client'
import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PostCard } from '@/components/blog/PostCard';
import { VideoCard } from '@/components/blog/VideoCard';
import { Pagination } from '@/components/blog/Pagination';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeType, setActiveType] = useState('article');
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = [
    'education', 'tech', 'blockchain', 'tutorials', 
    'cryptocurrency', 'reviews', 'opportunities'
  ];

  useEffect(() => {
    fetchPosts();
  }, [activeType, selectedCategory, currentPage]);

  const fetchPosts = async () => {
    const res = await fetch(
      `/api/posts?type=${activeType}&page=${currentPage}&category=${selectedCategory}`
    );
    const data = await res.json();
    setPosts(data.posts);
    setTotalPages(data.totalPages);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <Tab.Group>
        <Tab.List className="flex space-x-4 border-b mb-8">
          <Tab
            className={({ selected }) =>
              `px-4 py-2 ${selected ? 'border-b-2 border-blue-500' : ''}`
            }
          >
            Articles
          </Tab>
          <Tab
            className={({ selected }) =>
              `px-4 py-2 ${selected ? 'border-b-2 border-blue-500' : ''}`
            }
          >
            Videos
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            {/* Categories - Desktop */}
            <div className="hidden md:flex flex-wrap gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Categories - Mobile */}
            <select
              className="md:hidden w-full mb-8 p-2 border rounded"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {posts && posts.map((post: any) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            {/* Videos Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {posts && posts.map((post: any) => (
                <VideoCard key={post._id} post={post} />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
} 
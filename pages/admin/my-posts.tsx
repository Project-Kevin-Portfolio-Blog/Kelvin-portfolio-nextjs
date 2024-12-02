import { useState } from 'react';

interface Post {
  id: string;
  title: string;
  type: 'article' | 'video';
  date: string;
}

export default function MyPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleDelete = async (postId: string) => {
    try {
      // Make API call to delete post
      await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
      
      // Remove post from state
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Posts</h1>
      <div className="grid gap-4">
        {posts.map(post => (
          <div key={post.id} className="flex items-center justify-between p-4 bg-white rounded shadow">
            <div>
              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">
                {post.type} • {post.date}
              </p>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 
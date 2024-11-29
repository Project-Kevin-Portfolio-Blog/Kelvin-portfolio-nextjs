'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    type: 'article',
    title: '',
    content: '',
    category: 'education',
    imageUrl: '',
    videoUrl: '',
    externalUrl: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        router.push('/admin/posts');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <select
        value={formData.type}
        onChange={(e) => setFormData({...formData, type: e.target.value})}
        className="w-full p-2 border rounded"
      >
        <option value="article">Article</option>
        <option value="video">Video</option>
      </select>

      {formData.type === 'article' && (
        <select
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
          className="w-full p-2 border rounded"
        >
          <option value="education">Education</option>
          <option value="tech">Tech</option>
          <option value="blockchain">Blockchain</option>
          <option value="tutorials">Tutorials</option>
          <option value="cryptocurrency">Cryptocurrency</option>
          <option value="reviews">Reviews</option>
          <option value="opportunities">Opportunities</option>
        </select>
      )}

      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({...formData, content: e.target.value})}
        className="w-full p-2 border rounded h-40"
      />

      {formData.type === 'article' && (
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={formData.imageUrl}
          onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
          className="w-full p-2 border rounded"
        />
      )}

      {formData.type === 'video' && (
        <input
          type="text"
          placeholder="Video URL"
          value={formData.videoUrl}
          onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
          className="w-full p-2 border rounded"
        />
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Create Post
      </button>
    </form>
  );
} 
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: {
    _id: string;
    title: string;
    excerpt?: string;
    slug: string;
    coverImage?: string;
    date?: string;
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
        {post.coverImage && (
          <div className="relative h-48">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          {post.excerpt && (
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
          )}
          {post.date && (
            <p className="text-sm text-gray-500">{post.date}</p>
          )}
        </div>
      </div>
    </Link>
  );
} 
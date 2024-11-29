import Image from 'next/image';
import Link from 'next/link';

interface VideoPost {
  _id: string;
  title: string;
  thumbnail: string;
  slug: string;
  description: string;
  duration?: string;
}

export function VideoCard({ post }: { post: VideoPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="relative aspect-video mb-3">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
        {post.duration && (
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 text-sm rounded">
            {post.duration}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-600 line-clamp-2 text-sm mt-1">
        {post.description}
      </p>
    </Link>
  );
} 
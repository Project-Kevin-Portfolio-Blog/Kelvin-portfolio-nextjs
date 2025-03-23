import Link from "next/link";

interface PostCardProps {
  post: {
    _id: string;
    title: string;
    content?: string;
    slug: string;
    imageUrl?: string;
    createdAt?: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  console.log("post details from prop", post);
  return (
    <Link href={`/blog/${post._id}`} className="block">
      <div className="overflow-hidden rounded-lg border transition hover:shadow-lg">
        {post.imageUrl && (
          <div className="relative h-48">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="object-cover"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
          {post.content && <p className="mb-2 text-gray-600">{post.content}</p>}
          {post.createdAt && (
            <p className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

import { type Post } from "../../store/slices/postsSlice";
import PostCard from "./PostCard";

type PostContainerProps = {
  posts: Post[];
};

export default function PostsContainer({ posts }: PostContainerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}

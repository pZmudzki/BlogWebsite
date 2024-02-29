import { type RootState } from "@/store/store";
import { type Post } from "../../store/slices/postsSlice";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";

type PostContainerProps = {
  posts: Post[];
};

export default function PostsContainer({ posts }: PostContainerProps) {
  const filters = useSelector<RootState, String[]>(
    (state) => state.search.filters
  );
  const searchParams = useSelector<RootState, string>(
    (state) => state.search.input
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts
        .filter((post) => filters.includes(post.type))
        .filter(
          (post) =>
            post.title
              .toLocaleLowerCase()
              .includes(searchParams.toLocaleLowerCase()) ||
            post.content
              .toLocaleLowerCase()
              .includes(searchParams.toLowerCase())
        )
        .map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { setPosts, type Post } from "@/store/slices/postsSlice";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import PostCard from "@/components/MenagePostsComponents/PostCard";

export default function PostsPage() {
  const dispatch = useDispatch();
  const searchInput = useSelector<RootState>((state) => state.search.input);
  const posts = useSelector<RootState, Post[]>((state) => state.posts.posts);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const { data } = await axios.get("/posts/all");
        if (data.error) {
          toast({
            variant: "destructive",
            title: "Błąd",
            description: data.error,
          });
        } else {
          dispatch(setPosts(data));
        }
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          toast({
            variant: "destructive",
            title: "Błąd",
            description: error.message,
          });
          setLoading(false);
        }
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <span className="h-screen w-full flex justify-center items-center">
        Loading...
      </span>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}

import { useSelector } from "react-redux";
import { type RootState } from "@/store/store";
import { useEffect } from "react";

export default function PostsPage() {
  const searchInput = useSelector<RootState>((state) => state.search.input);
  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);
  return <div>Posts</div>;
}

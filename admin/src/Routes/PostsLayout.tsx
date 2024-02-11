import PostsNavBar from "@/components/Nav/PostsNavBar";
import { Outlet } from "react-router-dom";

export default function PostsLayout() {
  return (
    <div className="flex flex-col gap-3">
      <PostsNavBar />
      <Outlet />
    </div>
  );
}

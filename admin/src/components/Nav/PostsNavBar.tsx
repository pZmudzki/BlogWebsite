import { Link, useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import { setInput } from "../../store/slices/searchSlice";
import { ChangeEvent } from "react";

type PostsLink = {
  to: string;
  title: string;
};

const postsNavLinks: PostsLink[] = [
  {
    to: "/dashboard/posts",
    title: "Zarządzaj postami",
  },
  {
    to: "/dashboard/posts/create",
    title: "Nowy post",
  },
];

export default function PostsNavBar() {
  const location = useLocation();
  const dispatch = useDispatch();

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setInput(e.target.value));
  }

  return (
    <div className="flex justify-between items-center">
      <Input
        className="max-w-fit"
        placeholder="Wyszukaj post"
        name="search"
        onChange={handleSearch}
      />
      <div className="flex gap-3 justify-end">
        {postsNavLinks.map((link) => {
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-xl ${
                location.pathname === link.to
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

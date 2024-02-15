import { Link, useLocation } from "react-router-dom";

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

  return (
    <ul className="flex gap-3 justify-end">
      {postsNavLinks.map((link) => {
        return (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`px-4 py-2 rounded-xl ${
                location.pathname === link.to
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

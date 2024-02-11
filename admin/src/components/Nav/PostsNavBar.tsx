import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

type PostsLink = {
  to: string;
  title: string;
};

const postsNavLinks: PostsLink[] = [
  {
    to: "/dashboard/posts/create",
    title: "Nowy post",
  },
];

export default function PostsNavBar() {
  return (
    <ul className="flex gap-3 justify-end">
      {postsNavLinks.map((link) => {
        return (
          <li key={link.to}>
            <Button>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? "opacity-70" : "")}
              >
                {link.title}
              </NavLink>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

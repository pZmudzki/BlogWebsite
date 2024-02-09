import { NavLink, useLocation } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
type Link = {
  to: string;
  title: string;
};

const navLinks: Link[] = [
  {
    to: "/dashboard",
    title: "Home",
  },
  {
    to: "/dashboard/create",
    title: "Create new post",
  },
];

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === "/") return;

  return (
    <nav className="flex flex-col border border-gray-900 rounded-xl p-2">
      {navLinks.map((link) => (
        <NavLink key={link.title} to={link.to}>
          <HomeIcon />
        </NavLink>
      ))}
    </nav>
  );
}

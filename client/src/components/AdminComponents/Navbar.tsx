import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Link = {
  to: string;
  title: string;
};

const navLinks: Link[] = [
  {
    to: "/admin/dashboard",
    title: "Dashboard",
  },
  {
    to: "/admin/dashboard/create",
    title: "Create new post",
  },
];

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === "/admin") return;

  return (
    <nav className="flex flex-col">
      {navLinks.map((link) => (
        <NavLink key={link.title} to={link.to}>
          <Button>{link.title}</Button>
        </NavLink>
      ))}
    </nav>
  );
}

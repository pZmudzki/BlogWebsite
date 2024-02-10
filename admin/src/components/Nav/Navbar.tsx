import { type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HomeIcon,
  PencilSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LogoutButton from "../ui/LogoutButton";

type Link = {
  to: string;
  title: string;
  icon: ReactNode;
};

const navLinks: Link[] = [
  {
    to: "/dashboard",
    title: "Panel główny",
    icon: <HomeIcon className="h-10 w-10" aria-hidden="true" />,
  },
  {
    to: "/dashboard/posts",
    title: "Zarządzaj postami",
    icon: <PencilSquareIcon className="h-10 w-10" aria-hidden="true" />,
  },
  {
    to: "/dashboard/comments",
    title: "Zarządzaj komentarzami",
    icon: (
      <ChatBubbleBottomCenterTextIcon
        className="h-10 w-10"
        aria-hidden="true"
      />
    ),
  },
  {
    to: "/dashboard/analitics",
    title: "Analiza strony",
    icon: <ChartBarIcon className="h-10 w-10" aria-hidden="true" />,
  },
  {
    to: "/",
    title: "Wyloguj",
    icon: (
      <LogoutButton>
        <ArrowLeftEndOnRectangleIcon className="h-10 w-10" aria-hidden="true" />
      </LogoutButton>
    ),
  },
];

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === "/") return;

  return (
    <nav>
      <ul className="h-full flex flex-col border border-gray-900 rounded-xl p-3 gap-3">
        {navLinks.map((link) => (
          <li className="last:mt-auto" key={link.title}>
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <NavLink to={link.to}>{link.icon}</NavLink>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{link.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </nav>
  );
}

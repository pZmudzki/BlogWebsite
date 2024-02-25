import { Link, useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../../store/slices/searchSlice";
import { ChangeEvent } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { type RootState } from "@/store/store";
import { POSSIBLE_FILTERS } from "../../store/slices/searchSlice";
import { setFilters } from "../../store/slices/searchSlice";

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
  const filters = useSelector<RootState, String[]>(
    (state) => state.search.filters
  );

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setInput(e.target.value));
  }
  function handleFilter(e: Event) {
    e.preventDefault();
    const { innerText }: { innerText: String } = e.target;
    dispatch(setFilters(innerText));
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1">
        <Input
          className="max-w-fit"
          placeholder="Wyszukaj post"
          name="search"
          onChange={handleSearch}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <AdjustmentsHorizontalIcon
                className="h-full"
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Typ postu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {POSSIBLE_FILTERS.map((filter) => (
              <DropdownMenuCheckboxItem
                key={filter}
                checked={filters.includes(filter)}
                onSelect={handleFilter}
              >
                {filter}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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

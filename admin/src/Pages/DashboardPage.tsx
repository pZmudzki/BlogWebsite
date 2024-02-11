import CreatePostCard from "@/components/HomePageComponents/CreatePostCard";
import NewCommentsCard from "@/components/HomePageComponents/NewCommentsCard";
import LatestPostCard from "@/components/HomePageComponents/LatestPostCard";
import MonthlyUsersCard from "@/components/HomePageComponents/MonthlyUsersCard";
export default function DashboardPage() {
  return (
    <main className="h-full grid grid-cols-3 grid-rows-3 gap-3">
      <article className="col-span-2 row-span-2">
        <LatestPostCard />
      </article>
      <article className="row-span-1">
        <CreatePostCard />
      </article>
      <article className="col-span-2">
        <MonthlyUsersCard />
      </article>
      <article className="col-start-3 row-span-2 row-start-2">
        <NewCommentsCard />
      </article>
    </main>
  );
}

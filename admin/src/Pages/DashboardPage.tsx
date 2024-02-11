import CreatePostCard from "@/components/HomePageComponents/CreatePostCard";
import NewCommentsCard from "@/components/HomePageComponents/NewCommentsCard";
import LatestPostCard from "@/components/HomePageComponents/LatestPostCard";
export default function DashboardPage() {
  return (
    <main className="grid grid-cols-3 grid-rows-3 gap-3">
      <article className="col-span-1">
        <CreatePostCard />
      </article>
      <article className="">
        <NewCommentsCard />
      </article>
      <article className="">
        <LatestPostCard />
      </article>
    </main>
  );
}

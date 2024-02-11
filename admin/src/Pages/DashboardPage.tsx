import CreatePostCard from "@/components/HomePageComponents/CreatePostCard";
import NewCommentsCard from "@/components/HomePageComponents/NewCommentsCard";
export default function DashboardPage() {
  return (
    <main className="grid grid-cols-3 grid-rows-3 gap-3">
      <article className="col-span-1">
        <CreatePostCard />
      </article>
      <article className="">
        <NewCommentsCard />
      </article>
    </main>
  );
}

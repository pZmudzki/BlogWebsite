import CreatePostCard from "@/components/HomePageComponents/CreatePostCard";

export default function DashboardPage() {
  return (
    <main className="grid-cols-2 grid-rows-3">
      <article className="">
        <CreatePostCard />
      </article>
    </main>
  );
}

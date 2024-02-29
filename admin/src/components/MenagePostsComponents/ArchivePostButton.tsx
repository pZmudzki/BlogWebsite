import { type Post } from "@/store/slices/postsSlice";
import { Button } from "../ui/button";
import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { FormEvent } from "react";

export default function ArchivePostButton({ post }: { post: Post }) {
  async function handleClick(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      let postHelper = { ...post };
      postHelper.archived = true;
      const { data } = await axios.put(`/posts/post/${post._id}`, postHelper);
      if (data.error) {
        toast({
          variant: "destructive",
          title: "Błąd",
          content: data.error,
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          variant: "destructive",
          title: "Błąd",
          content: error.message,
        });
      }
    }
  }

  return (
    <Button onClick={handleClick} variant="outline" className="p-1">
      <ArchiveBoxIcon className="h-10 text-yellow-200" aria-hidden="true" />
    </Button>
  );
}

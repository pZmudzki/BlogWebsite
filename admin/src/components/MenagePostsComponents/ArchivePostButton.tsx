import { type Post } from "@/store/slices/postsSlice";
import { Button } from "../ui/button";
import { ArchiveBoxIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { FormEvent } from "react";

type ArchivePostButtonProps = {
  post: Post;
  setPost: (post: Post) => void;
};

const ArchivePostButton = ({ post, setPost }: ArchivePostButtonProps) => {
  async function handleClick(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      let postHelper = { ...post };
      postHelper.archived = !post.archived;
      const { data } = await axios.put(
        `/posts/post/${postHelper._id}`,
        postHelper
      );
      if (data.error) {
        toast({
          variant: "destructive",
          title: "Błąd",
          content: data.error,
        });
      } else {
        toast({
          variant: "default",
          title: "Pomyślnie zaktualizowano post",
        });
        setPost(data);
      }

      console.log(data);
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
    <Button onClick={handleClick} variant="ghost" className="p-1">
      {post.archived ? (
        <EyeIcon className="h-10" aria-hidden="true" />
      ) : (
        <ArchiveBoxIcon className="h-10 text-yellow-200" aria-hidden="true" />
      )}
    </Button>
  );
};

export default ArchivePostButton;

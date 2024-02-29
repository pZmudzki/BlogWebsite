import ArchivePostButton from "@/components/MenagePostsComponents/ArchivePostButton";
import { toast } from "@/components/ui/use-toast";
import { type Post } from "@/store/slices/postsSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [post, setPost] = useState<null | Post>(null);

  async function fetchPost() {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/posts/post/${id}`);
      if (data.error) {
        toast({
          variant: "destructive",
          title: "Błąd",
          description: data.error,
        });
        setIsLoading(false);
      } else {
        setPost(data);
        setIsLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          variant: "destructive",
          title: "Błąd",
          description: error.message,
        });
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!post) {
    return (
      <div>
        <span>Nie znaleziono postu</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col divide-y">
      <div className="flex items-center justify-between py-3">
        <div className="flex gap-3">
          <h1 className="text-3xl bold">{post.title}</h1>
          <span>
            {new Date(post.createdAt).toLocaleString("pl-PL", {
              year: "numeric",
              day: "numeric",
              month: "short",
            })}
          </span>
        </div>
        <ArchivePostButton post={post} />
      </div>
      <p className="whitespace-pre-wrap p-3">{post.content}</p>
      {post.imageUrl || post.videoUrl ? (
        <div className="flex flex-col gap-3 p-3">
          <h2>Załączniki:</h2>
          <div className="flex gap-3">
            {post.imageUrl?.map((img) => (
              <img
                className="max-h-48 object-cover"
                src={img}
                alt={`"${post.title}" image`}
              />
            ))}
          </div>
          {post.videoUrl ? (
            <div>
              <iframe
                src={
                  "https://www.youtube.com/embed/9n1dtmzqnCU?si=CoGJxamAYgQKvtfv"
                }
                height={300}
                width={533}
              ></iframe>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-col gap-3 py-3">
        <span>Typ postu: {post.type}</span>
        <span>Wyświetlenia: {post.views}</span>
      </div>
    </div>
  );
}

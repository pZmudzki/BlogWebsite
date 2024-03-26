import { useNavigate } from "react-router-dom";
import { type Post } from "../../store/slices/postsSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate();
  function cutStringWithEllipsis(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  }

  function handleClick() {
    navigate(`/dashboard/posts/${post._id}`);
  }

  return (
    <Card
      onClick={handleClick}
      className="flex flex-col justify-between hover:scale-[1.03] hover:cursor-pointer transition-all"
    >
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-2">
            {post.archived ? (
              <h2 className="text-yellow-200">Zarchiwizowany</h2>
            ) : null}
            <h1>{post.title}</h1>
          </div>
        </CardTitle>
        <CardDescription className="flex items-center justify-between">
          <span>{post.type}</span>
          <span>
            {new Date(post.createdAt).toLocaleString("pl-PL", {
              year: "numeric",
              day: "numeric",
              month: "short",
            })}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap">
          {cutStringWithEllipsis(post.content, 250)}
        </p>
      </CardContent>
      <CardFooter>
        <p>Wyświetlenia: {post.views}</p>
      </CardFooter>
    </Card>
  );
}

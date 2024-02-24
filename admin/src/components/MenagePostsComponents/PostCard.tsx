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
  function cutStringWithEllipsis(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  }

  return (
    <Card className="flex flex-col justify-between hover:scale-[1.03] hover:cursor-pointer transition-all">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

const placeholderComments = [
  {
    id: "gfoqwyencue901cum",
    postId: "d2h189cem1h9r1c",
    name: "Test",
    email: "test@test.com",
    comment: "Fajny post jest super i generalnie jest w pyte bo jest git",
    createdAt: new Date().toLocaleString(),
    read: false,
    accepted: false,
  },
  {
    id: "rc324rc325c2",
    postId: "d2h189cem1h9r1c",
    name: "Test",
    email: "test@test.com",
    comment: "Fajny post jest super i generalnie jest w pyte bo jest git",
    createdAt: new Date().toLocaleString(),
    read: false,
    accepted: false,
  },
  {
    id: "3c52veyb5sy5yv",
    postId: "d2h189cem1h9r1c",
    name: "Test",
    email: "test@test.com",
    comment: "Fajny post jest super i generalnie jest w pyte bo jest git",
    createdAt: new Date().toLocaleString(),
    read: false,
    accepted: false,
  },
  {
    id: "v4a5ca546baev6e4",
    postId: "d2h189cem1h9r1c",
    name: "Test",
    email: "test@test.com",
    comment: "Fajny post jest super i generalnie jest w pyte bo jest git",
    createdAt: new Date().toLocaleString(),
    read: false,
    accepted: false,
  },
];

export default function NewCommentsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Komentarze</CardTitle>
        <CardDescription>Najnowsze komentarze użytkowników</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {placeholderComments.map((comment) => (
          <div key={comment.id}>
            <div className="flex justify-between">
              <p>{comment.name}</p>
              <p>{comment.createdAt}</p>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Link to="/dashboard/comments">
          <Button>
            Zobacz wszystkie komentarze{" "}
            <ChevronDoubleRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

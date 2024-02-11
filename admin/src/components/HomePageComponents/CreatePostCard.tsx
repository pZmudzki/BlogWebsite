import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

export default function CreatePostCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kliknij poniżej aby utworzyć nowy post</CardTitle>
      </CardHeader>
      <CardContent>
        <Link to="/dashboard/posts/create">
          <Button>
            Nowy post <ChevronDoubleRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

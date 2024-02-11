import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const post = {
  id: "uwhr892hrc892",
  title: "PYTANIA",
  content:
    "Słyszę Twój krok w przedpokoju, Czuję już oddech na plecach, Strach obezwładnia mój umysł Odwaga schowała głowę już w piach I czekam na słowo lub zdanie, Które rozwieje codzienną niepewność Czy miłe czy nie będzie to spotkanie Czy wieczór we łzach czy pozorna radość",
  createdAt: new Date().toLocaleString(),
  views: 323,
  archived: false,
};

export default function LatestPostCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Post</CardTitle>
        <CardDescription>Najnowszy post</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl">{post.title}</h1>
            <p>{post.createdAt}</p>
          </div>
          <p className="text-2xl">{post.content}</p>
          <div className="flex justify-between">
            <img
              className=" max-h-[500px]	"
              src="https://monalizabezramy.com/wp-content/uploads/elementor/thumbs/wiersze1-p6kpbup0b6vwyv9fea9nspz2fpu0eu07mmspi81t0o.jpg"
            />
            <p className="ml-auto">Wyświetlenia: {post.views.toString()}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to="/dashboard/posts">
          <Button>
            Zarządzaj postami <ChevronDoubleRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

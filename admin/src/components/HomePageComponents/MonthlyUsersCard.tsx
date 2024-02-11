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

export default function MonthlyUsersCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wyświetlenia</CardTitle>
        <CardDescription>Miesięczne wyświetlenia strony</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-3xl">2137</p>
      </CardContent>
      <CardFooter>
        <Link to="/dashboard/analytics">
          <Button>
            Zobacz pełną analizę <ChevronDoubleRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authContext";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, admin } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (admin) navigate("/dashboard");
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(formData: z.infer<typeof formSchema>) {
    try {
      const { data } = await axios.post<string>("/login", formData);
      login(data);
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          variant: "destructive",
          title: "Błąd",
          description: error.response?.data.error,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Błąd",
          description: "Wystąpił niespodziewany błąd",
        });
      }
    }
  }

  return (
    <div className="h-screen bg-black text-white flex justify-center items-center px-6 sm:px-48">
      <div className="grow flex flex-col gap-5 p-5 border rounded-lg">
        <h1 className="font-bold text-2xl self-center underline">Logowanie</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hasło</FormLabel>
                  <FormControl>
                    <Input placeholder="Hasło" type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Zaloguj</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

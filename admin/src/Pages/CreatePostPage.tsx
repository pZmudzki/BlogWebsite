import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  type: z.string({ required_error: "Wybierz typ posta" }),
  title: z.string({ required_error: "Tytuł jest wymagany" }),
  content: z.string({ required_error: "Treść postu jest wymagana" }),
  img: z.instanceof(FileList).optional(),
  videoUrl: z
    .string()
    .url({ message: "Podany adres jest niewłaściwy" })
    .optional(),
});

export default function CreatePostPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const imgRef = form.register("img");

  function onSubmit(formData: z.infer<typeof formSchema>) {
    console.log(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Typ postu</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz typ postu" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Wierszem pisane">
                    Wierszem pisane
                  </SelectItem>
                  <SelectItem value="Scenariuse pisane życiem">
                    Scenariuse pisane życiem
                  </SelectItem>
                  <SelectItem value="Z medycznego punktu widzenia">
                    Z medycznego punktu widzenia
                  </SelectItem>
                  <SelectItem value="Taniec">Taniec</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Tytuł</FormLabel>
              <FormControl>
                <Input
                  placeholder="Tytuł posta"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Treść</FormLabel>
              <FormControl>
                <Textarea
                  rows={20}
                  placeholder="Treść postu"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="img"
          render={() => (
            <FormItem>
              <FormLabel>Zdjęcia</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/png, image/jpeg"
                  multiple
                  {...imgRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="videoUrl"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Wideo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Link do filmiku"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Utwórz</Button>
        </div>
      </form>
    </Form>
  );
}

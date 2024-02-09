import axios from "axios";
import { type ReactNode } from "react";
import { useToast } from "./use-toast";
import { useAuth } from "@/store/auth";

type LogoutButtonProps = {
  children: ReactNode;
};

type Response = {
  error?: string;
  message?: string;
};

export default function LogoutButton({ children }: LogoutButtonProps) {
  const { toast } = useToast();
  const { logout } = useAuth();

  async function logoutAdmin() {
    try {
      const { data } = await axios.get<Response>("/logout");
      if (data.error) {
        toast({
          variant: "destructive",
          title: "Błąd",
          description: data.error,
        });
      } else {
        toast({
          title: "Wylogowano",
          description: data.message,
        });
        logout();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return <button onClick={logoutAdmin}>{children}</button>;
}

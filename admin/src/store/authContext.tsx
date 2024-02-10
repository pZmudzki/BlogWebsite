import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

type contextValues = {
  login: (email: string) => void;
  logout: () => void;
  admin: string | null | false;
};

const AuthContext = createContext<contextValues | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<string | null | false>(null);

  async function isLoggedIn() {
    try {
      const { data } = await axios.get("/checkAuth");
      setAdmin(data.admin);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [admin]);

  function login(email: string) {
    setAdmin(email);
  }

  function logout() {
    setAdmin(false);
  }

  const ctxValues = { login, logout, admin };

  if (admin === null) return <p>Loading...</p>;

  return (
    <AuthContext.Provider value={ctxValues}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context Provider isn's set");
  }
  return context;
}

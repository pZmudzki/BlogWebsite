import { ReactNode, createContext, useContext, useState } from "react";

type contextValues = {
  login: (email: string) => void;
  logout: () => void;
  admin: string | null;
};

const AuthContext = createContext<contextValues | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<string | null>(null);

  function login(email: string) {
    setAdmin(email);
  }

  function logout() {
    setAdmin(null);
  }

  const ctxValues = { login, logout, admin };

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

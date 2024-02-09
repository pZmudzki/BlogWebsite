import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import { useAuth } from "../store/auth";
import { useEffect } from "react";

export default function AdminRoutes() {
  const navigate = useNavigate();
  const { admin } = useAuth();

  useEffect(() => {
    if (!admin) navigate("/", { replace: true });
  }, []);

  return (
    <div className="h-screen flex bg-black text-white p-3">
      <Navbar />
      <Outlet />
    </div>
  );
}

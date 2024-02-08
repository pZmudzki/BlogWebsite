import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/AdminComponents/Navbar";
import { useAuth } from "../store/auth";
import { useEffect } from "react";

export default function AdminRoutes() {
  const navigate = useNavigate();
  const { admin } = useAuth();

  useEffect(() => {
    if (!admin) navigate("/admin", { replace: true });
  }, []);

  return (
    <div className="h-screen flex bg-black text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}

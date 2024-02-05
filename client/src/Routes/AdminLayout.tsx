import { Outlet } from "react-router-dom";
import Navbar from "../components/AdminComponents/Navbar";

export default function AdminRoutes() {
  return (
    <div className="h-screen flex bg-gray-900">
      <Navbar />
      <Outlet />
    </div>
  );
}

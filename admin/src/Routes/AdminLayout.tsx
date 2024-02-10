import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import { useAuth } from "../store/authContext";
import { useEffect } from "react";

import { Provider } from "react-redux";
import { store } from "../store/store";

export default function AdminRoutes() {
  const navigate = useNavigate();
  const { admin } = useAuth();

  useEffect(() => {
    if (!admin) navigate("/", { replace: true });
  }, [admin]);

  return (
    <Provider store={store}>
      <div className="h-screen flex bg-black text-white p-3 gap-3">
        <Navbar />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import { useAuth } from "../store/authContext";
import { useEffect } from "react";

import { Provider } from "react-redux";
import { store } from "../store/store";

export default function ProtectedRoutes() {
  const navigate = useNavigate();
  const { admin } = useAuth();

  useEffect(() => {
    if (!admin) navigate("/", { replace: true });
  }, [admin]);

  return (
    <Provider store={store}>
      <div className="relative flex bg-black text-white gap-3">
        <Navbar />
        <div className="w-full p-3">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

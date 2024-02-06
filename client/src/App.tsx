import { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "./Routes/AdminLayout.tsx";
import ClientRoutes from "./Routes/ClientLayout.tsx";

// Admin pages
import LoginPage from "./Pages/AdminPages/LoginPage.tsx";
import DashboardPage from "./Pages/AdminPages/DashboardPage.tsx";
import ErrorPage from "./Pages/ErrorPage.tsx";
import Create from "./Pages/AdminPages/Create.tsx";
import HomePage from "./Pages/ClientPages/HomePage.tsx";

type Route = {
  to: string;
  element: ReactNode;
};

//admin routes
const adminRoutes: Route[] = [
  {
    to: "/admin",
    element: <LoginPage />,
  },
  {
    to: "/admin/dashboard",
    element: <DashboardPage />,
  },
  {
    to: "/admin/dashboard/create",
    element: <Create />,
  },
];

//client routes
const clientRoutes: Route[] = [
  {
    to: "/",
    element: <HomePage />,
  },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route element={<AdminRoutes />}>
          {adminRoutes.map((route, idx) => (
            <Route key={idx} path={route.to} element={route.element} />
          ))}
        </Route>
        <Route element={<ClientRoutes />}>
          {clientRoutes.map((route, idx) => (
            <Route key={idx} path={route.to} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

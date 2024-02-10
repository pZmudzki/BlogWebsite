import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "./Routes/AdminLayout.tsx";

import LoginPage from "./Pages/LoginPage.tsx";
import DashboardPage from "./Pages/DashboardPage.tsx";
import ErrorPage from "./Pages/ErrorPage.tsx";
import PostsPage from "./Pages/PostsPage.tsx";
import CommentsPage from "./Pages/CommentsPage.tsx";
import AnaliticsPage from "./Pages/AnaliticsPage.tsx";

//axios config
axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<LoginPage />} />
        {/* Protected Routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/posts" element={<PostsPage />} />
          <Route path="/dashboard/comments" element={<CommentsPage />} />
          <Route path="/dashboard/analitics" element={<AnaliticsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

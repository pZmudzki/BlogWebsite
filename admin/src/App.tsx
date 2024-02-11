import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Routes/ProtectedLayout.tsx";

import LoginPage from "./Pages/LoginPage.tsx";
import DashboardPage from "./Pages/DashboardPage.tsx";
import ErrorPage from "./Pages/ErrorPage.tsx";
import PostsPage from "./Pages/PostsPage.tsx";
import CommentsPage from "./Pages/CommentsPage.tsx";
import AnaliticsPage from "./Pages/AnaliticsPage.tsx";
import CreatePostPage from "./Pages/CreatePostPage.tsx";
import PostsLayout from "./Routes/PostsLayout.tsx";

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
        <Route path="dashboard" element={<ProtectedRoutes />}>
          <Route path="" element={<DashboardPage />} />
          <Route path="posts" element={<PostsLayout />}>
            <Route path="" element={<PostsPage />} />
            <Route path="create" element={<CreatePostPage />} />
          </Route>
          <Route path="comments" element={<CommentsPage />} />
          <Route path="analitics" element={<AnaliticsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

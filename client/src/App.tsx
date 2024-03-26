import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

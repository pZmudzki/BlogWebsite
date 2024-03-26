import navbar from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={navbar.navbar}>
      <Link to="/">Wierszem pisane</Link>
      <Link to="/">Pisane życiem</Link>
      <Link to="/" className={navbar.homeAnchor}>
        MONALIZA
      </Link>
      <Link to="/">Taniec</Link>
      <Link to="/">Z medycznego punktu widzenia</Link>
    </header>
  );
}

export default Navbar;

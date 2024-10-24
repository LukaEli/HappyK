import React from "react";
import { NavLink } from "react-router-dom";
import { Music, Heart, Image, Mail, Home } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <Home />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <Music />
        <span>Playlist</span>
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <Image />
        <span>Gallery</span>
      </NavLink>
      <NavLink
        to="/letter"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <Mail />
        <span>Letter</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;

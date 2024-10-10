import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src="/logos/bigLogo_-_Crop-removebg-preview.png" alt="Logo" />
        </NavLink>
      </div>

      <div
        className="hamberger"
        onClick={() => {
          /* your toggle logic */
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activepage" : "")}
        >
          Product
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) => (isActive ? "activepage" : "")}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/solution" // Changed to a valid route if needed
          className={({ isActive }) => (isActive ? "activepage" : "")}
        >
          Solution
        </NavLink>
        <a
          className="active"
          href="https://github.com/bishalde/Qr-Code-Generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>

      <div className="nav-buttons">
        <button className="btn">Sign In</button>
        <button className="btn btn-secondary">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

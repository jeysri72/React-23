import React from "react";
import { Link } from "react-router-dom";
import "../static/styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">HopeHands</div>
      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
    </header>
  );
}

export default Header;

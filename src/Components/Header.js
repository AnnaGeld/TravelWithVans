import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <h1 className="header-logo">#VANLIFE</h1>
      </Link>
      <nav className="nav-menu">
        <Link className="nav-link" to="/vans">
          Vans
        </Link>

        <Link className="nav-link" to="/about">
          About
        </Link>

        <Link className="nav-link" to="/host">
          Host
        </Link>
      </nav>
    </header>
  );
}

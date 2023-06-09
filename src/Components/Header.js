import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    borderBottom: "1px solid black",
  };
  return (
    <header className="header">
      <NavLink className="header-logo" to="/">
        <h1 className="header-logo">#VANLIFE</h1>
      </NavLink>
      <nav className="nav-menu">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans"
        >
          Vans
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          Host
        </NavLink>
      </nav>
    </header>
  );
}

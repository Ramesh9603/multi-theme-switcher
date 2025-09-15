



import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { theme1 } from "../themes/Theme1";
import { theme2 } from "../themes/Theme2";
import { theme3 } from "../themes/Theme3";

const Header: React.FC = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  const { theme, setTheme } = ctx;

  const [open, setOpen] = useState(false);

  // close mobile panel on resize > mobile
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const onThemeChange = (name: string) => {
    if (name === theme1.name) setTheme(theme1);
    if (name === theme2.name) setTheme(theme2);
    if (name === theme3.name) setTheme(theme3);
  };

  return (
    <header
      className="header"
      style={{
        background: theme.background,
        color: theme.text,
        fontFamily: theme.font,
      }}
    >
      <div className="brand" aria-hidden={false}>
        <div className="logo">Multi-Theme App</div>
        <div style={{ opacity: 0.85, fontSize: 12 }}>v1</div>
      </div>

      {/* Desktop nav */}
      <nav className="nav desktop-only" aria-label="Primary navigation">
        <NavLink to="/" style={({ isActive }) => ({ background: isActive ? "rgba(0,0,0,0.06)" : "transparent" })}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ background: isActive ? "rgba(0,0,0,0.06)" : "transparent" })}>About</NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ background: isActive ? "rgba(0,0,0,0.06)" : "transparent" })}>Contact</NavLink>

        <select
          className="theme-select"
          value={theme.name}
          onChange={(e) => onThemeChange(e.target.value)}
          aria-label="Select theme"
        >
          <option>{theme1.name}</option>
          <option>{theme2.name}</option>
          <option>{theme3.name}</option>
        </select>
      </nav>

      {/* Mobile menu button */}
      <button
        className="menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((s) => !s)}
        style={{ color: theme.text }}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile panel */}
      {open && (
        <div
          className="mobile-panel"
          style={{ background: theme.background, color: theme.text, fontFamily: theme.font }}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/About" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/Contact" onClick={() => setOpen(false)}>Contact</NavLink>

          <select
            className="theme-select"
            value={theme.name}
            onChange={(e) => { onThemeChange(e.target.value); setOpen(false); }}
            aria-label="Select theme"
          >
            <option>{theme1.name}</option>
            <option>{theme2.name}</option>
            <option>{theme3.name}</option>
          </select>
        </div>
      )}
    </header>
  );
};

export default Header;

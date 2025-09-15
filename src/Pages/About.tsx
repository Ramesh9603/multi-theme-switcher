


import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const About: React.FC = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  const { theme } = ctx;

  return (
    <div style={{ padding: "1rem 0", color: theme.text }}>
      <h1 style={{ fontSize: "1.4rem", marginBottom: ".75rem" }}>About This Project</h1>

      <p style={{ marginBottom: ".6rem" }}>
        The Multi-Theme Switcher App is a React + TypeScript project to demonstrate dynamic visual
        changes with themes. Each theme can modify colors, fonts, and structural hints.
      </p>

      <p style={{ marginBottom: ".6rem" }}>
        We use the Context API for global state and persist theme choice to localStorage.
      </p>

      <p>
        Demo uses <strong>Fake Store API</strong> to show components reacting to theme changes.
      </p>
    </div>
  );
};

export default About;

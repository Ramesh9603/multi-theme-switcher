


import React, { useContext } from "react";
import Header from "./Header";
import { ThemeContext } from "../Context/ThemeContext";
import { motion } from "framer-motion";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  const { theme } = ctx;

  // set CSS variables for easy theming
  const rootStyle: React.CSSProperties = {
    background: theme.background,
    color: theme.text,
    fontFamily: theme.font,
  };

  return (
    <div className="app" style={rootStyle}>
      <Header />
      <motion.main
        className="main"
        key={theme.name}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
        <footer className="footer" style={{ color: theme.text }}>
          © {new Date().getFullYear()} Multi-Theme App. All rights reserved.
        </footer>
      </motion.main>
    </div>
  );
};

export default Layout;


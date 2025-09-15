


import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Contact: React.FC = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  const { theme } = ctx;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // demo-only: fake send
    setSent(true);
    setTimeout(() => {
      setName(""); setEmail(""); setMsg(""); setSent(false);
      alert("Message sent (demo)");
    }, 700);
  };

  return (
    <div style={{ padding: "1rem 0", color: theme.text }}>
      <h1 style={{ fontSize: "1.4rem", marginBottom: ".75rem" }}>Contact & Support</h1>
      <p style={{ marginBottom: ".75rem" }}>Reach out for questions or contributions.</p>

      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: ".8rem", maxWidth: 420 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={{ padding: ".6rem", borderRadius: 8, border: "1px solid rgba(0,0,0,0.12)" }} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" style={{ padding: ".6rem", borderRadius: 8, border: "1px solid rgba(0,0,0,0.12)" }} />
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message" rows={4} style={{ padding: ".6rem", borderRadius: 8, border: "1px solid rgba(0,0,0,0.12)" }} />
        <button type="submit" disabled={sent} style={{ padding: ".7rem", borderRadius: 8, border: "none", background: "dodgerblue", color: "#fff", fontWeight: 700 }}>
          {sent ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;

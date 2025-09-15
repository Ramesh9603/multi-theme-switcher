



import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Context/ThemeContext";

type Product = {
  id: number;
  title: string;
  image: string;
};

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  const { theme } = ctx;

  useEffect(() => {
    let mounted = true;
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        setProducts(data);
      })
      .catch(() => {
        if (!mounted) return;
        setProducts([]);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section>
      <div className="hero" style={{ color: theme.text }}>
        <div className="title">
          <h1 style={{ fontSize: "1.6rem", marginBottom: ".5rem" }}>Welcome to Multi-Theme App</h1>
          <p style={{ opacity: 0.9 }}>
            Switch themes using the selector in the header — typography, background and layout adapt.
          </p>
        </div>
        <div className="cta">
          <button
            style={{
              padding: ".6rem 0.9rem",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              background: "dodgerblue",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Explore Products
          </button>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <h2 style={{ marginBottom: ".75rem" }}>Featured</h2>
        {loading ? (
          <div>Loading products…</div>
        ) : (
          <div className="grid" aria-live="polite">
            {products.map((p) => (
              <Card key={p.id} title={p.title} image={p.image} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;

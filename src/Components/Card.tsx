

import React from "react";
import { motion } from "framer-motion";

type CardProps = { title: string; image: string; id?: number | string };

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      role="article"
      aria-label={title}
    >
      <img src={image} alt={title} loading="lazy" />
      <h4>{title}</h4>
    </motion.div>
  );
};

export default Card;

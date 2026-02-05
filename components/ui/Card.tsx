import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={cn(
        "bg-white rounded-xl shadow-lg overflow-hidden",
        hover && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

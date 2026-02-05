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
      whileHover={hover ? { y: -8, transition: { duration: 0.3, ease: "easeOut" } } : {}}
      className={cn(
        "bg-white rounded-2xl shadow-lg shadow-neutral-200/50 overflow-hidden transition-all duration-300",
        hover && "cursor-pointer hover:shadow-xl hover:shadow-neutral-300/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

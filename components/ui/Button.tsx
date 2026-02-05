import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#FA5C40] text-white hover:bg-[#e54a2e] focus:ring-[#FA5C40]",
    secondary: "bg-[#29525E] text-white hover:bg-[#1e3d46] focus:ring-[#29525E]",
    outline: "border-2 border-[#FA5C40] text-[#FA5C40] hover:bg-[#FA5C40] hover:text-white focus:ring-[#FA5C40]",
    ghost: "text-[#FA5C40] hover:bg-[#FA5C40]/10 focus:ring-[#FA5C40]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

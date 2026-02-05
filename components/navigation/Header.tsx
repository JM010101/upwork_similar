"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FullscreenMenu } from "./FullscreenMenu";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          isScrolled
            ? "bg-[#29525E] shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold text-white relative group"
          >
            Premium
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FA5C40] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors duration-300",
                isScrolled ? "text-white/90 hover:text-white" : "text-white/80 hover:text-white"
              )}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors duration-300",
                isScrolled ? "text-white/90 hover:text-white" : "text-white/80 hover:text-white"
              )}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors duration-300",
                isScrolled ? "text-white/90 hover:text-white" : "text-white/80 hover:text-white"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors duration-300",
                isScrolled ? "text-white/90 hover:text-white" : "text-white/80 hover:text-white"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-white hover:text-[#FA5C40] transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

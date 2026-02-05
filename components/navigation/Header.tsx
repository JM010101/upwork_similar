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
            ? "bg-white/98 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-neutral-200/50"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FA5C40] to-[#e54a2e] bg-clip-text text-transparent hover:from-[#e54a2e] hover:to-[#FA5C40] transition-all duration-300"
          >
            Premium
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "px-4 py-2 rounded-lg text-neutral-700 hover:text-[#FA5C40] transition-all duration-300 font-medium relative group",
                isScrolled ? "hover:bg-neutral-100" : "hover:bg-white/10"
              )}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FA5C40] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/products"
              className={cn(
                "px-4 py-2 rounded-lg text-neutral-700 hover:text-[#FA5C40] transition-all duration-300 font-medium relative group",
                isScrolled ? "hover:bg-neutral-100" : "hover:bg-white/10"
              )}
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FA5C40] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/about"
              className={cn(
                "px-4 py-2 rounded-lg text-neutral-700 hover:text-[#FA5C40] transition-all duration-300 font-medium relative group",
                isScrolled ? "hover:bg-neutral-100" : "hover:bg-white/10"
              )}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FA5C40] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 rounded-lg text-neutral-700 hover:text-[#FA5C40] transition-all duration-300 font-medium relative group",
                isScrolled ? "hover:bg-neutral-100" : "hover:bg-white/10"
              )}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FA5C40] group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-all duration-300",
              isScrolled 
                ? "text-neutral-700 hover:text-[#FA5C40] hover:bg-neutral-100" 
                : "text-white hover:text-[#FA5C40] hover:bg-white/10"
            )}
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

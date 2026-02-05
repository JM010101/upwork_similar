"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { menuVariants, menuItemVariants } from "@/lib/animations";
import { scrollToElement } from "@/lib/utils";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "products", label: "Products", href: "/products" },
  { id: "features", label: "Features", href: "#features" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const elementId = href.substring(1);
      scrollToElement(elementId);
      onClose();
    } else {
      onClose();
      // Navigation will be handled by Next.js Link
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50"
            onClick={onClose}
          />
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white hover:text-[#FA5C40] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.div key={item.id} variants={menuItemVariants}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.href);
                      }}
                      className="text-4xl md:text-6xl font-bold text-white hover:text-[#FA5C40] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-4xl md:text-6xl font-bold text-white hover:text-[#FA5C40] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { fadeInUp, fadeIn } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Experience the Future",
  subtitle = "Premium Quality",
  description = "Discover innovative products designed to elevate your lifestyle with cutting-edge technology and exceptional craftsmanship.",
  imageUrl,
  videoUrl,
  ctaText = "Explore Products",
  ctaLink = "/products",
}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#29525E] to-[#1e3d46]">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Hero background"
                fill
                className="object-cover opacity-80"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#29525E] via-[#29525E] to-[#1e3d46]" />
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-[#FA5C40] font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider"
          >
            {subtitle}
          </motion.p>
          
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href={ctaLink}>
              <Button size="lg" variant="primary">
                {ctaText}
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#FA5C40]">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

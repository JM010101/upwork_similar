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
          <div className="w-full h-full bg-gradient-to-br from-[#29525E] via-[#1e3d46] to-[#0f2529]">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Hero background"
                fill
                className="object-cover opacity-70"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#29525E] via-[#1e3d46] to-[#0f2529]" />
            )}
          </div>
        )}
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FA5C40]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#29525E]/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FA5C40]/20 backdrop-blur-sm border border-[#FA5C40]/30 rounded-full text-[#FA5C40] font-semibold text-sm md:text-base uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#FA5C40] rounded-full animate-pulse" />
              {subtitle}
            </span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            <span className="block mb-2">{title}</span>
            <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>
          
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
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
              <Button size="lg" variant="primary" className="shadow-lg shadow-[#FA5C40]/30 hover:shadow-[#FA5C40]/50">
                {ctaText}
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-[#FA5C40] hover:border-white">
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

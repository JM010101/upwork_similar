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
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Dark background with subtle orange glow */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-black">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Hero background"
                fill
                className="object-cover opacity-20"
                priority
              />
            ) : null}
          </div>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Subtle orange glow from left */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#FA5C40]/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className="inline-block mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/40 backdrop-blur-md border border-[#FA5C40]/40 rounded-lg text-white font-semibold text-xs md:text-sm uppercase tracking-[0.15em]">
              <span className="w-1.5 h-1.5 bg-[#FA5C40] rounded-full" />
              {subtitle}
            </span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.95] tracking-[-0.02em]"
          >
            {title}
          </motion.h1>
          
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
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
              <Button size="lg" variant="primary" className="px-8 py-4 text-base font-semibold rounded-lg">
                {ctaText}
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="px-8 py-4 text-base font-semibold rounded-lg bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40">
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

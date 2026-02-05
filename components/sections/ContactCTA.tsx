"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#29525E] text-white overflow-hidden">
      {/* Curved white separator line */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="white" />
        </svg>
      </div>

      {/* Background image overlay */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 md:pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="inline-block mb-4 md:mb-6 px-5 py-2.5 bg-[#FA5C40] rounded-lg border border-white/20 text-white font-semibold text-xs md:text-sm uppercase tracking-wider"
          >
            Let's Connect
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-3 md:mb-4 leading-relaxed">
            Join thousands of satisfied customers who have chosen excellence.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed">
            Get in touch with us today and discover what we can do for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="bg-[#FA5C40] hover:bg-[#e54a2e] px-8 py-4">
                Contact Us
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4">
                View Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#29525E] via-[#1e3d46] to-[#0f2529] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FA5C40]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FA5C40]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="inline-block mb-6 px-4 py-2 bg-[#FA5C40]/20 backdrop-blur-sm border border-[#FA5C40]/30 rounded-full text-[#FA5C40] font-semibold text-sm md:text-base uppercase tracking-wider"
          >
            Let's Connect
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-white/30" />
            <div className="w-2 h-2 bg-white/50 rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-white/30" />
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have chosen excellence. 
            Get in touch with us today and discover what we can do for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="bg-[#FA5C40] hover:bg-[#e54a2e] shadow-lg shadow-[#FA5C40]/30 hover:shadow-[#FA5C40]/50">
                Contact Us
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-[#29525E] hover:border-white">
                View Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

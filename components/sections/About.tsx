"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#29525E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FA5C40]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="relative group"
          >
            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="About us"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FA5C40]/20 rounded-2xl blur-xl -z-10" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="lg:pl-8"
          >
            <motion.p
              variants={fadeInUp}
              className="inline-block text-[#FA5C40] font-semibold text-base md:text-lg uppercase tracking-wider mb-6 px-4 py-2 bg-[#FA5C40]/10 rounded-full"
            >
              Our Story
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Crafting Excellence Since Day One
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-[#FA5C40] to-transparent" />
              <div className="w-2 h-2 bg-[#FA5C40] rounded-full" />
            </div>
            <div className="space-y-6 mb-10">
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                We are passionate about creating products that combine innovative technology with exceptional design. Our commitment to quality and customer satisfaction drives everything we do.
              </p>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                With years of experience and a dedicated team of experts, we continue to push boundaries and set new standards in our industry. Every product is crafted with care, attention to detail, and a vision for the future.
              </p>
            </div>
            <Link href="/about">
              <Button size="lg" variant="primary" className="shadow-lg shadow-[#FA5C40]/30 hover:shadow-[#FA5C40]/50">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

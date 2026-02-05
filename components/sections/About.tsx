"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="About us"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <p className="text-[#FA5C40] font-semibold text-lg uppercase tracking-wider mb-4">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Crafting Excellence Since Day One
            </h2>
            <div className="w-24 h-1 bg-[#FA5C40] mb-6" />
            <p className="text-lg text-neutral-600 mb-4">
              We are passionate about creating products that combine innovative technology with exceptional design. Our commitment to quality and customer satisfaction drives everything we do.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              With years of experience and a dedicated team of experts, we continue to push boundaries and set new standards in our industry. Every product is crafted with care, attention to detail, and a vision for the future.
            </p>
            <Link href="/about">
              <Button size="lg" variant="primary">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

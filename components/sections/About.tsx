"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative w-full">
          {/* Background Image - Left Side */}
          <div className="absolute left-0 top-0 bottom-0 w-full lg:w-2/3 h-[600px] lg:h-[700px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="relative w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
                alt="About us"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* White Content Box - Right Side */}
          <div className="relative z-10 lg:ml-auto lg:w-2/3 lg:max-w-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="bg-white p-8 md:p-12 lg:p-16 shadow-2xl lg:ml-8 mt-8 lg:mt-16 lg:mb-16"
            >
              <motion.p
                variants={fadeInUp}
                className="text-[#FA5C40] font-semibold text-xs md:text-sm uppercase tracking-wider mb-6"
              >
                Our Story
              </motion.p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                Crafting Excellence Since Day One
              </h2>
              <div className="space-y-5 mb-8">
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                  We are passionate about creating products that combine innovative technology with exceptional design. Our commitment to quality and customer satisfaction drives everything we do.
                </p>
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                  With years of experience and a dedicated team of experts, we continue to push boundaries and set new standards in our industry. Every product is crafted with care, attention to detail, and a vision for the future.
                </p>
              </div>
              <Link href="/about">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

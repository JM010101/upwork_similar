"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#29525E] to-[#1e3d46] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied customers who have chosen excellence. 
            Get in touch with us today and discover what we can do for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="bg-[#FA5C40] hover:bg-[#e54a2e]">
                Contact Us
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#29525E]">
                View Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

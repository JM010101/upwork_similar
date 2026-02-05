"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Zap, Shield, Leaf, Award } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Cutting-Edge Technology",
    description: "Powered by the latest innovations to deliver exceptional performance and reliability.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Premium Quality",
    description: "Built with the finest materials and rigorous quality standards for lasting durability.",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Eco-Friendly",
    description: "Designed with sustainability in mind, reducing environmental impact without compromising quality.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Award-Winning Design",
    description: "Recognized for excellence in design, innovation, and user experience.",
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-[#FA5C40] font-semibold text-lg uppercase tracking-wider mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Exceptional Features
          </h2>
          <div className="w-24 h-1 bg-[#FA5C40] mx-auto" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-6 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FA5C40]/10 text-[#FA5C40] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

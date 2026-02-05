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
    <section id="features" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FA5C40]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#29525E]/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="inline-block text-[#FA5C40] font-semibold text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6"
          >
            Why Choose Us
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 md:mb-6 leading-tight">
            Exceptional Features
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
            Experience the difference with our premium features designed for excellence
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-neutral-50/50 border border-neutral-200/50 hover:border-[#FA5C40]/30 hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FA5C40]/10 to-[#FA5C40]/5 text-[#FA5C40] mb-6 group-hover:from-[#FA5C40]/20 group-hover:to-[#FA5C40]/10 transition-all duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#FA5C40] transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

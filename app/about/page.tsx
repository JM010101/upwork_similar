"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/navigation/Header";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { Award, Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To deliver exceptional products that enhance lives and inspire innovation.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "Quality, integrity, and customer satisfaction are at the heart of everything we do.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Team",
      description: "A diverse group of passionate professionals dedicated to excellence.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Commitment",
      description: "Continuous improvement and innovation to exceed expectations.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-[#29525E] to-[#1e3d46] text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                About Us
              </h1>
              <p className="text-xl text-white/90">
                We are passionate about creating products that make a difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                  Our Story
                </h2>
                <div className="w-24 h-1 bg-[#FA5C40] mb-6" />
                <p className="text-lg text-neutral-600 mb-4">
                  Founded with a vision to revolutionize the industry, we have grown from a small startup to a trusted name in premium products. Our journey has been marked by innovation, dedication, and an unwavering commitment to quality.
                </p>
                <p className="text-lg text-neutral-600 mb-4">
                  Every product we create is a testament to our passion for excellence. We combine cutting-edge technology with thoughtful design to deliver solutions that exceed expectations and create lasting value for our customers.
                </p>
                <p className="text-lg text-neutral-600">
                  Today, we continue to push boundaries, explore new possibilities, and set new standards in our industry. Our team of experts works tirelessly to ensure that every product meets our high standards of quality and innovation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                What Drives Us
              </h2>
              <div className="w-24 h-1 bg-[#FA5C40] mx-auto" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FA5C40]/10 text-[#FA5C40] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

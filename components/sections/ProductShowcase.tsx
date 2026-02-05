"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price?: string;
  features?: string[];
}

interface ProductShowcaseProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Premium Model X",
    description: "Experience cutting-edge innovation with our flagship product featuring advanced technology and premium materials.",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    price: "$2,999",
    features: ["Advanced Technology", "Premium Materials", "Eco-Friendly"],
  },
  {
    id: "2",
    name: "Elite Series Y",
    description: "Designed for professionals who demand excellence. Combining style, functionality, and unmatched performance.",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    price: "$3,499",
    features: ["Professional Grade", "Stylish Design", "High Performance"],
  },
  {
    id: "3",
    name: "Ultimate Edition Z",
    description: "The pinnacle of luxury and innovation. Every detail crafted to perfection for the ultimate experience.",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
    price: "$4,999",
    features: ["Luxury Design", "Premium Quality", "Exclusive"],
  },
];

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title = "Our Products",
  subtitle = "Discover Excellence",
  products = defaultProducts,
}) => {
  return (
    <section id="products" className="py-32 bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#FA5C40]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#29525E]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="inline-block text-[#FA5C40] font-semibold text-base md:text-lg uppercase tracking-wider mb-6 px-4 py-2 bg-[#FA5C40]/10 rounded-full"
          >
            {subtitle}
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#FA5C40]" />
            <div className="w-2 h-2 bg-[#FA5C40] rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#FA5C40]" />
          </div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products designed for excellence
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {products.map((product, index) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <Card className="h-full flex flex-col group border border-neutral-200/50 hover:border-[#FA5C40]/30 transition-all duration-500">
                <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {product.price && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[#FA5C40] font-bold text-sm shadow-lg">
                      {product.price}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#FA5C40] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  
                  {product.features && (
                    <ul className="mb-6 space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-600">
                          <span className="w-1.5 h-1.5 bg-[#FA5C40] rounded-full mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-200">
                    <Link 
                      href={`/products/${product.id}`}
                      className="group/link flex items-center gap-2 text-[#FA5C40] font-semibold hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <Link href="/products">
            <Button size="lg" variant="primary" className="shadow-lg shadow-[#FA5C40]/30 hover:shadow-[#FA5C40]/50">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

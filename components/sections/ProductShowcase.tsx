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
    <section id="products" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="inline-block text-[#FA5C40] font-semibold text-xs md:text-sm uppercase tracking-[0.15em] mb-4 md:mb-6"
          >
            {subtitle}
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-3 md:mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products designed for excellence
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {products.map((product, index) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <Card className="h-full flex flex-col group border border-neutral-200/50 hover:border-[#FA5C40]/30 transition-all duration-500">
                <div className="relative h-80 w-full overflow-hidden bg-white">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
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
                  {product.price && (
                    <div className="absolute top-5 right-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white rounded-lg transform rotate-3 opacity-20" />
                        <div className="relative px-4 py-2 bg-white rounded-lg shadow-xl border border-neutral-200">
                          <span className="text-[#FA5C40] font-bold text-lg">{product.price}</span>
                          {/* Speech bubble tail */}
                          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-neutral-200 transform rotate-45" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#FA5C40] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 mb-5 flex-grow leading-relaxed text-sm md:text-base">
                    {product.description}
                  </p>
                  
                  {product.features && (
                    <ul className="mb-5 space-y-2.5">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-600">
                          <span className="w-1.5 h-1.5 bg-[#FA5C40] rounded-full mr-2.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-200">
                    <Link 
                      href={`/products/${product.id}`}
                      className="group/link flex items-center gap-2 text-[#FA5C40] font-semibold text-base hover:gap-3 transition-all"
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

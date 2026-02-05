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
    <section id="products" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-[#FA5C40] font-semibold text-lg uppercase tracking-wider mb-4">
            {subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#FA5C40] mx-auto" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <Card className="h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">
                    {product.description}
                  </p>
                  
                  {product.features && (
                    <ul className="mb-4 space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-600">
                          <span className="w-2 h-2 bg-[#FA5C40] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center justify-between mt-auto pt-4">
                    {product.price && (
                      <span className="text-2xl font-bold text-[#FA5C40]">
                        {product.price}
                      </span>
                    )}
                    <Link href={`/products/${product.id}`}>
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
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
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button size="lg" variant="primary">
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

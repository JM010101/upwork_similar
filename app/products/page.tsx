import { Header } from "@/components/navigation/Header";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ContactCTA } from "@/components/sections/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Premium Showcase",
  description: "Explore our premium product collection featuring cutting-edge technology and exceptional design.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <ProductShowcase />
        <ContactCTA />
      </main>
    </>
  );
}

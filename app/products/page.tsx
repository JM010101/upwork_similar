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
      <main>
        <div className="pt-24">
          <ProductShowcase />
        </div>
        <ContactCTA />
      </main>
    </>
  );
}

import { Header } from "@/components/navigation/Header";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactCTA } from "@/components/sections/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Premium Showcase",
  description: "Get in touch with us. We'd love to hear from you and answer any questions you may have.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <ContactForm />
        <ContactCTA />
      </main>
    </>
  );
}

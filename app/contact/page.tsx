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
      <main>
        <div className="pt-24">
          <ContactForm />
        </div>
        <ContactCTA />
      </main>
    </>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-[#FA5C40] font-semibold text-lg uppercase tracking-wider mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-[#FA5C40] mx-auto mb-4" />
            <p className="text-lg text-neutral-600">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                Name *
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FA5C40] focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FA5C40] focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                Phone (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FA5C40] focus:border-transparent outline-none transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FA5C40] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your inquiry..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-lg"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-lg"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Something went wrong. Please try again later.</span>
              </motion.div>
            )}

            <Button
              type="submit"
              size="lg"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

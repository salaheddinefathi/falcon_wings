"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: "👕",
    title: "Custom T-Shirts",
    description:
      "High-quality screen printing and DTG for t-shirts of all styles and sizes.",
    image: "/images/falcon-wings/service-printing.jpg",
  },
  {
    icon: "🏋️",
    title: "Hoodies & Sweatshirts",
    description:
      "Premium fleece hoodies with custom designs. Perfect for branding or events.",
    image: "/images/falcon-wings/portfolio-3.jpg",
  },
  {
    icon: "⚽",
    title: "Football Jerseys",
    description:
      "Full sublimation jerseys for teams, clubs, and events. Vibrant colors guaranteed.",
    image: "/images/falcon-wings/portfolio-2.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-falcon-light pt-20 md:pt-28 pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-falcon-blue font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-falcon-navy leading-tight mt-3">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-falcon-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Anime Collection Lookbook",
    category: "Lifestyle",
    image: "/images/falcon-wings/hero.jpg",
  },
  {
    title: "Custom T-Shirt Print",
    category: "Premium Apparel",
    image: "/images/falcon-wings/hero-tshirt.jpg",
  },
  {
    title: "DTF Print Close-Up",
    category: "Print Quality",
    image: "/images/falcon-wings/service-printing.jpg",
  },
  {
    title: "Streetwear Lifestyle",
    category: "Brand Shoot",
    image: "/images/falcon-wings/portfolio-1.jpg",
  },
  {
    title: "Outdoor Collection",
    category: "Client Work",
    image: "/images/falcon-wings/portfolio-2.jpg",
  },
  {
    title: "REM Anime Design",
    category: "Custom Design",
    image: "/images/falcon-wings/portfolio-3.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-falcon-blue font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-falcon-navy leading-tight mt-3">
            Portfolio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-falcon-navy/0 group-hover:bg-falcon-navy/70 transition-all duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <span className="text-falcon-blue text-xs uppercase tracking-widest font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
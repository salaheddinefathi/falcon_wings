"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    title: "Custom T-Shirts",
    description:
      "Premium cotton t-shirts with your design. Perfect for events, businesses, and personal use.",
    image: "/images/falcon-wings/hero-tshirt-new.png",
  },
  {
    title: "Hoodies",
    description:
      "Warm and stylish hoodies with full-color custom printing. Ideal for branding and gifts.",
    image: "/images/falcon-wings/service-hoodie-new.png",
  },
  {
    title: "Football Jerseys",
    description:
      "Fully customized sublimation jerseys. Team names, numbers, sponsors — all included.",
    image: "/images/falcon-wings/service-jersey-new.png",
  },
  {
    title: "Tote Bags",
    description:
      "Custom printed canvas tote bags for your brand, events, or personal use. Eco-friendly and stylish.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Caps & Hats",
    description:
      "Premium embroidered caps. Great for sports teams, giveaways, and modern streetwear.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Custom Mugs",
    description:
      "High-quality ceramic mugs with vibrant full-color sublimation printing for corporate gifts.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-falcon-gold font-semibold text-sm uppercase tracking-widest">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-falcon-navy leading-tight mt-3">
            Featured Products
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-falcon-navy mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>
                <a
                  href="https://wa.me/212675847037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-falcon-gold text-falcon-navy px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:bg-falcon-gold/90 hover:shadow-lg hover:shadow-falcon-gold/25 w-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.143.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.71.227 1.356.195 1.869.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-falcon-navy overflow-hidden lg:min-h-[calc(100vh-88px)] lg:flex lg:items-center"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-falcon-navy/85 via-falcon-navy/70 to-falcon-navy/50" />
        <Image
          src="/images/falcon-wings/hero.jpg"
          alt="Falcon Wings custom printing products"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-falcon-gold font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
              Premium Custom Printing
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.08] mb-10">
              Your Vision,
              <br />
              <span className="text-falcon-gold">Perfectly Printed</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 w-full max-w-none mx-auto sm:mx-0">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 flex-1 bg-falcon-gold text-falcon-navy px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:bg-falcon-gold/90 hover:shadow-lg hover:shadow-falcon-gold/25"
              >
                Explore Products
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/212675847037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 flex-1 border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:border-falcon-gold hover:text-falcon-gold"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.143.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.71.227 1.356.195 1.869.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <Image
                src="/images/falcon-wings/hero-tshirt.jpg"
                alt="Falcon Wings custom t-shirt printing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-falcon-navy/15 to-transparent" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
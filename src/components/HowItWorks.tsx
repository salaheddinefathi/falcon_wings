"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell us what you want printed. Send your design, logo, reference image, or idea directly via WhatsApp.",
  },
  {
    number: "02",
    title: "Get a Quote",
    description:
      "We review your request and send you a clear competitive quote within minutes. No surprises, just fair pricing.",
  },
  {
    number: "03",
    title: "We Print It",
    description:
      "Our expert team prints your order with precision using high-quality materials and professional equipment.",
  },
  {
    number: "04",
    title: "Free Delivery",
    description:
      "We deliver your order for free in Tangier. Payment on delivery is available.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const runLoop = () => {
      timeouts.forEach(clearTimeout);
      timeouts.length = 0;

      setActiveStep(0);
      timeouts.push(setTimeout(() => setActiveStep(1), 400));
      timeouts.push(setTimeout(() => setActiveStep(2), 1300));
      timeouts.push(setTimeout(() => setActiveStep(3), 2200));
      timeouts.push(setTimeout(() => setActiveStep(4), 3100));
    };

    runLoop();
    const interval = setInterval(runLoop, 5000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-14 md:py-16 lg:py-20 bg-falcon-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-falcon-blue font-semibold text-sm uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-falcon-navy leading-tight mt-2">
            How It Works
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block relative h-14">
            <div className="absolute top-1/2 -translate-y-1/2 left-[6%] right-[6%] h-[3px] bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-falcon-blue rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </div>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-falcon-blue shadow-[0_0_12px_rgba(245,166,35,0.6)] z-10"
              initial={{ left: "6%" }}
              animate={{ left: "94%" }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </div>

          <div className="lg:hidden absolute left-[38px] top-0 bottom-0 w-[3px] bg-gray-200 rounded-full">
            <motion.div
              className="w-full bg-falcon-blue rounded-full"
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </div>
          <motion.div
            className="lg:hidden absolute left-[29px] top-0 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-falcon-blue shadow-[0_0_12px_rgba(245,166,35,0.6)] z-10"
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4 relative mt-0 lg:-mt-2">
            {steps.map((step, index) => {
              const stepNum = parseInt(step.number);
              const isActive = activeStep >= stepNum;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 p-4 lg:p-5 rounded-2xl transition-all duration-500 ${
                    isActive
                      ? "bg-white shadow-md border border-falcon-blue/30"
                      : "bg-transparent border border-transparent"
                  }`}
                >
                  <div className="relative z-10 lg:mb-6">
                    <div
                      className={`w-14 h-14 lg:w-[68px] lg:h-[68px] rounded-2xl flex items-center justify-center shrink-0 border-2 transition-all duration-500 ${
                        isActive
                          ? "bg-falcon-blue text-white border-falcon-blue shadow-lg shadow-falcon-blue/25"
                          : "bg-gray-100 text-gray-500 border-gray-300"
                      }`}
                    >
                      <span className="text-xl lg:text-2xl font-black">{step.number}</span>
                    </div>
                  </div>
                  <div className="lg:text-center flex-1 lg:px-3">
                    <h3
                      className={`text-base lg:text-lg font-bold transition-colors duration-500 mb-1 ${
                        isActive ? "text-falcon-navy" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-500 ${
                        isActive ? "text-gray-600" : "text-gray-500"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

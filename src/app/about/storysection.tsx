"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import Globe from "src/app/_components/ui/globe";

interface StorySectionProps {
  className?: string;
}

const StorySection: FC<StorySectionProps> = ({ className }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`relative w-full bg-gradient-to-b from-purple-800/10 to-slate-950 py-24 ${className}`}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Text content */}
          <motion.div
            variants={childVariants}
            className="z-10 space-y-8"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Global Engineering Excellence                </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
            To revolutionize how companies access and leverage global engineering expertise, bridging the gap between technical education and real-world industry needs through innovative, data-driven solutions.
             </p>

            <div className="flex">
              <Link
                href="/about"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-purple-600 px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 hover:bg-purple-700 transition-colors"
              >
                <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium transition-all group-hover:mr-4">
                  Discover Our Dragons Story
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right side: Globe */}
          <motion.div
            variants={childVariants}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-8">
                Global Talents
              </span>
              <div className="relative w-full h-full max-w-lg">
                <Globe className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StorySection;
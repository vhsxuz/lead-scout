"use client";

import React from "react";
import { Sparkles, Search, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="features" className="bg-[#0f0f19] py-16 px-6 pt-24">
      <motion.h2 
        className="text-4xl font-semibold text-white text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Why Leadscout?
      </motion.h2>

      <div ref={ref} className="overflow-x-auto overflow-y-hidden touch-pan-x snap-x snap-mandatory scrollbar-hide md:overflow-visible md:snap-none">
        <motion.div 
          className="w-max mx-auto md:mx-0 inline-flex space-x-8 text-left pb-4"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Feature 1 */}
          <motion.div 
            className="w-[240px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-lg flex-shrink-0 snap-start hover:ring-1 hover:ring-indigo-500/40 transition duration-200"
            variants={item}
          >
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 w-fit mb-6">
              <Sparkles className="text-indigo-400 w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
              AI-Powered Lead Scoring
            </h3>
            <p className="text-gray-400 text-sm leading-snug">
              Automatically rank leads using machine learning to focus on your best prospects first.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="w-[240px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-lg flex-shrink-0 snap-start hover:ring-1 hover:ring-indigo-500/40 transition duration-200"
            variants={item}
          >
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 w-fit mb-6">
              <Search className="text-indigo-400 w-5 h-5 color-[#8c95b0]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
              Fast, Targeted <br />Search
            </h3>
            <p className="text-gray-400 text-sm leading-snug">
              Instantly filter by industry and location. Discover ideal leads in seconds.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="w-[240px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-lg flex-shrink-0 snap-start hover:ring-1 hover:ring-indigo-500/40 transition duration-200"
            variants={item}
          >
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 w-fit mb-6">
              <BarChart3 className="text-indigo-400 w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
              Real-Time Demo Experience
            </h3>
            <p className="text-gray-400 text-sm leading-snug">
              Try the demo live with your inputs—get immediate, actionable results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
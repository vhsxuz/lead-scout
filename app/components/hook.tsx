import { Triangle } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const Hook = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="pt-42 pb-24 text-center"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div className="flex items-center justify-center" variants={item}>
        <h1 className="font-bold tracking-tight text-white pe-4 pb-2 flex items-center gap-2 text-2xl">
          <Triangle className="w-6 h-6" strokeWidth={1.5} />
          Leadscout
        </h1>
      </motion.div>
      
      <motion.h2 className="text-7xl font-semibold mb-6" variants={item}>
        Discover your next <br />
        <span className="text-indigo-500">hot sales lead</span>
      </motion.h2>
      
      <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10" variants={item}>
        Use AI to uncover high-converting business leads. <br />
        Score, sort, and sell — faster than ever.
      </motion.p>

      {/* View Demo Button */}
      <motion.div variants={item}>
        <a
          href="#demo"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition duration-200"
        >
          View Demo
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hook;
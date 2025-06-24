"use client";

import React, { useState, useMemo } from 'react';
import { Lead } from '@/types/leads';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface DemoProps {
  industry: string;
  location: string;
  limit: number;
  loading: boolean;
  leads: Lead[];
  error: string | null;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const RESULTS_PER_PAGE = 5;

const Demo = ({
  industry,
  location,
  limit,
  loading,
  leads,
  error,
  handleInputChange,
  handleSubmit
}: DemoProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const hasResult = leads.length > 0 || error;
  const totalPages = Math.ceil(leads.length / RESULTS_PER_PAGE);

  const paginatedLeads = useMemo(() => {
    const start = (currentPage - 1) * RESULTS_PER_PAGE;
    return leads.slice(start, start + RESULTS_PER_PAGE);
  }, [leads, currentPage]);

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const formItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const resultItem = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="demo" className="py-20" ref={ref}>
      <motion.div
        className={`max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 ${
          hasResult ? "flex flex-col md:flex-row gap-6" : "max-w-xl"
        }`}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={container}
      >
        {/* Form Section */}
        <motion.div 
          className={`flex-1 ${hasResult ? "md:max-w-[50%]" : ""}`}
          variants={formItem}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-6"
            variants={item}
          >
            Try the Leadscout Demo
          </motion.h3>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4 text-left"
            variants={container}
          >
            <motion.label className="block" variants={item}>
              <span className="text-sm font-medium text-gray-300">Industry</span>
              <input
                name="industry"
                value={industry}
                onChange={handleInputChange}
                placeholder="e.g. Retail"
                required
                className="mt-1 w-full rounded-md bg-gray-800 border border-gray-600 text-white px-4 py-2"
              />
            </motion.label>

            <motion.label className="block" variants={item}>
              <span className="text-sm font-medium text-gray-300">Location</span>
              <input
                name="location"
                value={location}
                onChange={handleInputChange}
                placeholder="e.g. New York"
                required
                className="mt-1 w-full rounded-md bg-gray-800 border border-gray-600 text-white px-4 py-2"
              />
            </motion.label>

            <motion.label className="block" variants={item}>
              <span className="text-sm font-medium text-gray-300">Limit</span>
              <input
                name="limit"
                type="number"
                value={limit}
                onChange={handleInputChange}
                min={1}
                max={20}
                className="mt-1 w-full rounded-md bg-gray-800 border border-gray-600 text-white px-4 py-2"
              />
            </motion.label>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Scouting..." : "Find Leads"}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence>
          {hasResult && (
            <motion.div 
              className="flex-1 md:max-w-[50%] max-h-[400px] overflow-y-auto mt-10 md:mt-0"
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={resultItem}
              exit={{ opacity: 0 }}
            >
              {error && (
                <motion.p 
                  className="text-red-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.p>
              )}

              {leads.length > 0 && (
                <motion.div 
                  className="space-y-4"
                  variants={container}
                >
                  <motion.h4 
                    className="text-lg font-semibold text-white mb-2"
                    variants={item}
                  >
                    Top Leads
                  </motion.h4>

                  <AnimatePresence>
                    {paginatedLeads.map((lead, i) => (
                      <motion.div 
                        key={i}
                        className="bg-gray-800 p-4 rounded-lg"
                        variants={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        layout
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-indigo-300 font-bold">{lead.Name}</span>
                          <span className={`text-sm font-medium ${lead.is_hot_lead ? "text-green-400" : "text-gray-400"}`}>
                            {lead.is_hot_lead ? "🔥 Hot Lead" : "Warm Lead"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{lead.Industry} — {lead.Headquarters}</p>
                        <p className="text-sm text-gray-500">Score: {(lead.hot_lead_score * 100).toFixed(1)}%</p>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <motion.div 
                      className="flex justify-between items-center pt-4"
                      variants={item}
                    >
                      <motion.button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Previous
                      </motion.button>
                      <span className="text-gray-300 text-sm">
                        Page {currentPage} of {totalPages}
                      </span>
                      <motion.button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Next
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Demo;
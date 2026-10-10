import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Data } from "../data/Data";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsAward, BsPatchCheck } from "react-icons/bs";

export default function Achievement() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { label: "All", value: "All" },
    { label: "Awards & Competitions", value: "award" },
    { label: "Certifications", value: "certification" },
  ];

  const filteredData = Data.filter((item) => {
    if (activeTab === "All") return true;
    return item.type === activeTab;
  });

  return (
    <>
      <Helmet>
        <title>Achievements & Honors — Muhammad Haikal</title>
        <meta
          name="description"
          content="Curated collection of competition awards, innovation honors, and professional certifications earned by Muhammad Haikal across Data Science and AI."
        />
        <link rel="canonical" href="https://muhammadhaikal.vercel.app/achievement" />
        <meta property="og:url" content="https://muhammadhaikal.vercel.app/achievement" />
        <meta property="og:title" content="Achievements & Honors — Muhammad Haikal" />
      </Helmet>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pb-16"
      >
        {/* Header — matches Project page pattern */}
        <div className="pt-2">
          <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400">
                  Credentials
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
                Achievements & Honors
              </h1>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                Competition awards, innovation honors, and professional certifications in Data Science, Machine Learning, and AI.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 self-start sm:self-auto">
              <span>{filteredData.length} Credentials</span>
            </div>
          </div>
          <hr className="w-full border-t border-neutral-200 dark:border-neutral-800 my-6" />
        </div>

        {/* Filter Tabs — matches Project page tab style */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab.value
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 border border-neutral-200 dark:border-neutral-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.map((cert, index) => {
              const hasLink = cert.imageUrl && cert.imageUrl.trim() !== "" && cert.imageUrl !== "waiting for link";

              return (
                <motion.div
                  key={cert.id + index}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161616] hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Thumbnail */}
                    <div className="relative w-full h-44 bg-neutral-50 dark:bg-neutral-900 overflow-hidden flex items-center justify-center p-2 border-b border-neutral-100 dark:border-neutral-800/80">
                      <img
                        src={cert.gambar}
                        alt={cert.title}
                        className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />

                      {/* Badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`text-[11px] px-2.5 py-1 rounded-md font-medium text-white shadow-sm flex items-center gap-1 ${
                            cert.type === "award" ? "bg-amber-600/90" : "bg-blue-600/90"
                          }`}
                        >
                          {cert.type === "award" ? <BsAward size={11} /> : <BsPatchCheck size={11} />}
                          {cert.badge || (cert.type === "award" ? "Award" : "Certification")}
                        </span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="p-5">
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1.5 line-clamp-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                        {cert.organization}
                      </p>
                      <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1">
                        Issued on {cert.issueDate}
                      </p>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="px-5 pb-4 pt-1 border-t border-neutral-100 dark:border-neutral-800/80">
                    {hasLink ? (
                      <a
                        href={cert.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        <span>View Certificate / Link</span>
                        <FaArrowUpRightFromSquare size={10} />
                      </a>
                    ) : (
                      <span className="text-[11px] text-neutral-400 dark:text-neutral-500 italic">
                        Verified Telkom University Honor
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}

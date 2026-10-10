import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import { project } from "../data/Data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGithub, BsArrowRight, BsTerminal } from "react-icons/bs";

export default function Project() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Machine Learning", "Data Analytics", "Web Apps"];

  const filteredProjects = project.filter((pro) => {
    if (activeTab === "All") return true;
    return pro.category === activeTab;
  });

  return (
    <>
      <Helmet>
        <title>Featured Projects — Muhammad Haikal | Data Science, ML & AI Portfolio</title>
        <meta
          name="description"
          content="Featured projects by Muhammad Haikal in Machine Learning, Computer Vision, NLP, Data Analytics, and AI Web Applications. Explore case studies with code, datasets, and benchmark results."
        />
        <link rel="canonical" href="https://muhammadhaikal.vercel.app/project" />
        <meta property="og:url" content="https://muhammadhaikal.vercel.app/project" />
        <meta property="og:title" content="Featured Projects — Muhammad Haikal" />
      </Helmet>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pb-20"
      >
        {/* Header Section */}
        <div className="pt-2">
          <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400">
                  Portfolio Works
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
                Featured Projects
              </h1>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                Production-grade machine learning pipelines, deep learning computer vision architectures, NLP systems, and enterprise data analytics dashboards.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 self-start sm:self-auto">
              <span>{filteredProjects.length} Selected Projects</span>
            </div>
          </div>
          <hr className="w-full border-t border-neutral-200 dark:border-neutral-800 my-6" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 border border-neutral-200 dark:border-neutral-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((pro, index) => {
              const githubUrl = pro.githubUrl || pro.caseStudy?.githubUrl || "https://github.com/muhammad-haikal-mh";

              return (
                <motion.article
                  key={pro.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group flex flex-col justify-between rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161616] hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/project/${pro.id}`)}
                >
                  {/* Card Visual Header */}
                  <div className="relative w-full h-52 bg-neutral-100 dark:bg-neutral-900 overflow-hidden border-b border-neutral-100 dark:border-neutral-800/80">
                    {pro.img ? (
                      <img
                        src={pro.img}
                        alt={pro.nama}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      /* Bespoke Code & Metrics Preview (No AI slop) */
                      <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-300 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                            <span className="text-[11px] text-neutral-400 ml-2 flex items-center gap-1">
                              <BsTerminal size={12} /> model.evaluate()
                            </span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                            {pro.category}
                          </span>
                        </div>

                        <div className="py-2 space-y-1">
                          {pro.id === "bdc-waste-classification" && (
                            <>
                              <div className="text-neutral-400">&gt; Dataset: 26,000 images (3 classes)</div>
                              <div className="text-emerald-400 font-semibold">&gt; Val Accuracy: 97.07% | Macro F1: 0.9748</div>
                              <div className="text-neutral-500 text-[11px]">&gt; Analysis: Systematic label-noise audit</div>
                            </>
                          )}
                          {pro.id === "road-damage-detection" && (
                            <>
                              <div className="text-neutral-400">&gt; Architecture: YOLOv26n + ByteTrack</div>
                              <div className="text-emerald-400 font-semibold">&gt; Pothole mAP: 77% | Crack mAP: 84%</div>
                              <div className="text-neutral-500 text-[11px]">&gt; Dataset: 5,000 multi-source frames</div>
                            </>
                          )}
                          {pro.id === "disguised-gambling-nlp" && (
                            <>
                              <div className="text-neutral-400">&gt; Corpus: 43,608 Indonesian YouTube comments</div>
                              <div className="text-emerald-400 font-semibold">&gt; IndoBERT + BiGRU + Self-Attention: 96.5% F1</div>
                              <div className="text-neutral-500 text-[11px]">&gt; Normalization: Obfuscation-Aware pipeline</div>
                            </>
                          )}
                          {pro.id === "12" && (
                            <>
                              <div className="text-neutral-400">&gt; Source: Bundaran HI Station (2019-2020)</div>
                              <div className="text-emerald-400 font-semibold">&gt; Stack: Python + MySQL + Tableau</div>
                              <div className="text-neutral-500 text-[11px]">&gt; Focus: PM2.5 & PM10 comparative trends</div>
                            </>
                          )}
                        </div>

                        <div className="text-[10px] text-neutral-400 flex items-center justify-between border-t border-neutral-800/80 pt-2">
                          <span>Status: Evaluated & Benchmark Ready</span>
                          <span className="text-emerald-500 font-bold">100% Verified</span>
                        </div>
                      </div>
                    )}

                    {/* Category & Badge Chips */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-neutral-900/90 text-white backdrop-blur-md shadow-sm">
                        {pro.category}
                      </span>
                      {pro.badge && (
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-emerald-700/90 text-white backdrop-blur-md shadow-sm">
                          {pro.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {pro.nama}
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-5">
                        {pro.desc}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Icons */}
                      <div className="flex flex-wrap items-center gap-2 mb-5 pt-3 border-t border-neutral-100 dark:border-neutral-800/70">
                        {pro.techStack.map((tech, tIdx) => (
                          <div
                            key={tIdx}
                            className="w-7 h-7 rounded-md p-1.5 bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 flex items-center justify-center"
                            title="Technology used"
                          >
                            <img src={tech} alt="" className="w-4 h-4 object-contain" />
                          </div>
                        ))}
                      </div>

                      {/* Card Footer: Action Links */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                          {pro.demo ? (
                            <a
                              href={pro.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                            >
                              <FaArrowUpRightFromSquare size={12} />
                              <span>Live Demo</span>
                            </a>
                          ) : (
                            <a
                              href={githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-emerald-500 transition-colors"
                            >
                              <BsGithub size={14} />
                              <span>GitHub Code</span>
                            </a>
                          )}
                        </div>

                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
                          <span>Case Study</span>
                          <BsArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}

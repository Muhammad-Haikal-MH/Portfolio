import React from "react";
import { useNavigate, useParams } from "react-router";
import { project } from "../data/Data";
import { motion } from "framer-motion";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import CaseStudyChart from "./CaseStudyChart";
import MethodologyStepper from "./MethodologyStepper";
import {
  BsBullseye,
  BsDatabase,
  BsListCheck,
  BsBarChartLine,
  BsLightbulb,
  BsGithub,
  BsJournalCode,
  BsDisplay,
  BsShieldCheck,
} from "react-icons/bs";

export default function DetailProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pro = project.find((pro) => pro.id === id);

  if (!pro) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <p className="text-xl font-semibold text-neutral-600 dark:text-neutral-400">Project not found.</p>
        <button
          onClick={() => navigate("/project")}
          className="mt-4 px-4 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const isDataProject = pro.caseStudy != null;
  const githubLink = pro.githubUrl || pro.caseStudy?.githubUrl || "https://github.com/muhammad-haikal-mh";

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pb-16"
    >
      {/* ── Back button ── */}
      <div
        className="cursor-pointer text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex gap-2 items-center transition-colors duration-200 pt-2"
        onClick={() => navigate(-1)}
      >
        <IoArrowBackCircleOutline size={26} />
        <span className="font-semibold text-sm">Back to Projects</span>
      </div>

      {/* ── Title & description ── */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20">
            {pro.category}
          </span>
          {pro.badge && (
            <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
              {pro.badge}
            </span>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">{pro.nama}</h1>
        <p className="mt-3 mb-6 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
          {pro.desc}
        </p>
      </div>
      <hr className="w-full border-t border-neutral-200 dark:border-neutral-800" />

      {/* ── Tech stack & links ── */}
      <div className="flex mt-6 justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex gap-2 items-center flex-wrap text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">Tech Stack:</span>
          <div className="flex items-center gap-2 ml-1">
            {pro.techStack.map((tec, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-lg p-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-xs"
              >
                <img src={tec} alt="" className="w-4 h-4 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          {pro.demo && (
            <a
              href={pro.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
            >
              <FaArrowUpRightFromSquare size={12} />
              <span>Live Demo</span>
            </a>
          )}

          {/* GitHub link */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-colors shadow-sm"
          >
            <BsGithub size={14} />
            <span>GitHub Repository</span>
          </a>

          {pro.caseStudy?.notebookUrl && (
            <a
              href={pro.caseStudy.notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 transition-colors shadow-sm"
            >
              <BsJournalCode size={14} />
              <span>Notebook</span>
            </a>
          )}
        </div>
      </div>

      {/* ── Render layout based on project type ── */}
      {isDataProject ? <CaseStudyLayout pro={pro} /> : <WebDevLayout pro={pro} />}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Web Dev Layout — AI-Powered Web Platforms
   ═══════════════════════════════════════════ */
function WebDevLayout({ pro }) {
  return (
    <div className="space-y-8">
      {pro.img && (
        <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm max-h-[460px] flex items-center justify-center bg-neutral-100 dark:bg-neutral-950">
          <img
            src={pro.img}
            className="w-full h-full object-cover hover:scale-101 transition-transform duration-300"
            alt={pro.nama}
          />
        </div>
      )}

      {pro.intro && (
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-sm">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
            <span>📌</span> Project Overview
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {pro.intro}
          </p>
        </div>
      )}

      {pro.porto && (
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-sm">
          <div className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
            <FcIdea size={22} />
            <h2>Implementation & Architecture</h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {pro.porto}
          </p>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Case Study Layout — Data Science & ML / NLP
   ═══════════════════════════════════════════════ */
function CaseStudyLayout({ pro }) {
  const cs = pro.caseStudy;

  return (
    <div className="space-y-12 pb-10">
      {/* Cover image if available */}
      {pro.img && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-950"
        >
          <img
            src={pro.img}
            className="w-full object-cover max-h-[420px]"
            alt={pro.nama}
          />
        </motion.div>
      )}

      {/* ── Problem Statement ── */}
      {cs.problem && (
        <Section icon={<BsBullseye size={22} />} title="Problem Statement">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161616] p-6 shadow-sm">
            <p className="leading-7 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              {cs.problem}
            </p>
          </div>
        </Section>
      )}

      {/* ── Dataset Overview ── */}
      {cs.dataset && (
        <Section icon={<BsDatabase size={20} />} title="Dataset Overview">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Source" value={cs.dataset.source} />
            <StatCard label="Volume / Rows" value={cs.dataset.rows?.toLocaleString ? cs.dataset.rows.toLocaleString() : cs.dataset.rows} />
            <StatCard label="Features" value={cs.dataset.features} />
            <StatCard label="Target Variable" value={cs.dataset.target} />
          </div>
          {cs.dataset.link && (
            <a
              href={cs.dataset.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <FaArrowUpRightFromSquare size={12} />
              View Original Dataset
            </a>
          )}
        </Section>
      )}

      {/* ── Obfuscation Patterns Visualizer (For NLP Disguised Gambling) ── */}
      {cs.obfuscationPatterns && cs.obfuscationPatterns.length > 0 && (
        <Section icon={<BsShieldCheck size={22} />} title="Obfuscation Patterns & Text Normalization Analysis">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm bg-white dark:bg-[#161616]">
            <div className="bg-neutral-50 dark:bg-neutral-900/80 p-4 border-b border-neutral-200 dark:border-neutral-800">
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Representative examples of deliberate promotional obfuscation patterns normalized by the preprocessing pipeline before IndoBERT & BiGRU classification:
              </p>
            </div>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800/80">
              {cs.obfuscationPatterns.map((pat, idx) => (
                <div key={idx} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-sm">
                  <div className="flex-1">
                    <span className="text-[11px] font-semibold text-rose-500 uppercase tracking-wide">
                      Raw Obfuscated Text:
                    </span>
                    <div className="font-mono text-sm font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 border border-rose-200/50 dark:border-rose-900/30 px-3 py-1.5 rounded-md mt-1 inline-block">
                      {pat.raw}
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="text-[11px] font-semibold text-emerald-500 uppercase tracking-wide">
                      Normalized Output:
                    </span>
                    <div className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-900/30 px-3 py-1.5 rounded-md mt-1 inline-block">
                      {pat.normalized}
                    </div>
                  </div>

                  <div className="md:w-64">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wide">
                      Obfuscation Technique:
                    </span>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 font-medium">
                      {pat.technique}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ── Methodology ── */}
      {cs.methodology && cs.methodology.length > 0 && (
        <Section icon={<BsListCheck size={22} />} title="Methodology & Architecture">
          <MethodologyStepper steps={cs.methodology} />
        </Section>
      )}

      {/* ── Visualizations (Chart.js) ── */}
      {cs.visualizations && cs.visualizations.length > 0 && (
        <Section icon={<BsBarChartLine size={20} />} title="Visualizations & Evaluation Metrics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cs.visualizations.map((viz, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.4 }}
              >
                <CaseStudyChart {...viz} />
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Dashboard Screenshots (for Data Analyst) ── */}
      {cs.screenshots && cs.screenshots.length > 0 && (
        <Section icon={<BsDisplay size={20} />} title="Dashboard Preview">
          <div className="space-y-6">
            {cs.screenshots.map((ss, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-950"
              >
                <img
                  src={ss.img}
                  alt={ss.caption || ""}
                  className="w-full object-contain"
                />
                {ss.caption && (
                  <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-3 border-t border-neutral-200 dark:border-neutral-800">
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 text-center font-medium">
                      {ss.caption}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Key Insights ── */}
      {cs.insights && cs.insights.length > 0 && (
        <Section icon={<BsLightbulb size={20} />} title="Key Insights & Findings">
          <div className="space-y-3">
            {cs.insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.35 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161616] hover:border-emerald-500/40 shadow-sm transition-all duration-200"
              >
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✦</span>
                <p className="text-xs sm:text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                  {insight}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

/* ── Helper: Section wrapper ── */
function Section({ icon, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-emerald-500">{icon}</span>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

/* ── Helper: Stat card ── */
function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161616] p-4 flex flex-col justify-between h-full shadow-sm">
      <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
        {label}
      </span>
      <div className="mt-2">
        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 block break-words">
          {value || "—"}
        </span>
      </div>
    </div>
  );
}

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
} from "react-icons/bs";

export default function DetailProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pro = project.find((pro) => pro.id === id);

  if (!pro) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-lg text-neutral-500">Project not found.</p>
      </div>
    );
  }

  const isDataProject = pro.caseStudy != null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {/* ── Back button ── */}
      <div
        className="cursor-pointer text-gray-500 flex gap-3 items-center hover:gap-4 transition-all duration-300"
        onClick={() => navigate(-1)}
      >
        <IoArrowBackCircleOutline size={30} />
        <span className="font-semibold ">Back</span>
      </div>

      {/* ── Title & description ── */}
      <h1 className="text-2xl font-semibold mt-7">{pro.nama}</h1>
      <p className="mt-3 mb-6 text-md">{pro.desc}</p>
      <hr className="w-full border-1 border-dashed"></hr>

      {/* ── Tech stack & links ── */}
      <div className="flex mt-5 justify-between mb-10 flex-wrap gap-4">
        <div className="flex gap-3 items-center mt-3 flex-wrap">
          Tech Stack:{" "}
          {pro.techStack.map((tec, index) => (
            <img src={tec} alt="" className="w-7 h-7 " key={index} />
          ))}
        </div>

        <div className="flex gap-5 items-center flex-wrap">
          {pro.demo && (
            <a
              href={pro.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm hover:text-green-500 transition-colors"
            >
              <FaArrowUpRightFromSquare size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {pro.caseStudy?.githubUrl && (
            <a
              href={pro.caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm hover:text-green-500 transition-colors"
            >
              <BsGithub size={18} />
              <span>GitHub</span>
            </a>
          )}
          {pro.caseStudy?.notebookUrl && (
            <a
              href={pro.caseStudy.notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm hover:text-green-500 transition-colors"
            >
              <BsJournalCode size={18} />
              <span>Notebook</span>
            </a>
          )}
        </div>
      </div>

      {/* ── Render layout based on project type ── */}
      {isDataProject ? (
        <CaseStudyLayout pro={pro} />
      ) : (
        <WebDevLayout pro={pro} />
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Web Dev Layout — existing layout preserved
   ═══════════════════════════════════════════ */
function WebDevLayout({ pro }) {
  return (
    <>
      <img
        src={pro.img}
        className="hover:scale-105 transition-all duration-300 rounded-xl"
        alt=""
      />

      <h2
        className={`text-xl font-semibold my-7 ${pro.intro ? "block" : "hidden"}`}
      >
        Introduction
      </h2>
      <p className="mb-5">{pro.intro}</p>
      <div
        className={`text-xl font-semibold my-7 flex ${pro.intro ? "block" : "hidden"}`}
      >
        <FcIdea size={25} />
        <h2 className="">Portofolio</h2>
      </div>
      <p className="mb-5">{pro.intro}</p>
    </>
  );
}

/* ═══════════════════════════════════════════════
   Case Study Layout — for Data Science / Analyst
   ═══════════════════════════════════════════════ */
function CaseStudyLayout({ pro }) {
  const cs = pro.caseStudy;

  return (
    <div className="space-y-12 pb-10">
      {/* Cover image */}
      {pro.img && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden border border-neutral-300 dark:border-[#333]"
        >
          <img
            src={pro.img}
            className="w-full object-cover max-h-[400px]"
            alt={pro.nama}
          />
        </motion.div>
      )}

      {/* ── Problem Statement ── */}
      {cs.problem && (
        <Section icon={<BsBullseye size={22} />} title="Problem Statement">
          <div className="rounded-xl border-[1.5px] border-neutral-300 dark:border-[#333333] p-1 shadow-sm">
            <div className="bg-gradient-to-b from-neutral-200 to-neutral-100 dark:from-[#242424] dark:to-neutral-900 p-6 rounded-lg">
              <p className="leading-7 text-md text-neutral-700 dark:text-neutral-300">
                {cs.problem}
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* ── Dataset Overview ── */}
      {cs.dataset && (
        <Section icon={<BsDatabase size={20} />} title="Dataset Overview">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Source" value={cs.dataset.source} />
            <StatCard label="Rows" value={cs.dataset.rows?.toLocaleString()} />
            <StatCard label="Features" value={cs.dataset.features} />
            <StatCard label="Target" value={cs.dataset.target} />
          </div>
          {cs.dataset.link && (
            <a
              href={cs.dataset.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-green-500 hover:text-green-400 transition-colors"
            >
              <FaArrowUpRightFromSquare size={12} />
              View Dataset
            </a>
          )}
        </Section>
      )}

      {/* ── Methodology ── */}
      {cs.methodology && cs.methodology.length > 0 && (
        <Section icon={<BsListCheck size={22} />} title="Methodology">
          <MethodologyStepper steps={cs.methodology} />
        </Section>
      )}

      {/* ── Visualizations (Chart.js) ── */}
      {cs.visualizations && cs.visualizations.length > 0 && (
        <Section icon={<BsBarChartLine size={20} />} title="Visualizations">
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
                className="rounded-xl overflow-hidden border-[1.5px] border-neutral-300 dark:border-[#333333] shadow-sm"
              >
                <img
                  src={ss.img}
                  alt={ss.caption || ""}
                  className="w-full object-contain"
                />
                {ss.caption && (
                  <div className="bg-neutral-100 dark:bg-neutral-800/70 px-4 py-3">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
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
        <Section icon={<BsLightbulb size={20} />} title="Key Insights">
          <div className="space-y-3">
            {cs.insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.35 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700/60 bg-neutral-50 dark:bg-neutral-800/40 hover:border-green-500/40 transition-colors duration-300"
              >
                <span className="text-green-500 mt-0.5 shrink-0">✦</span>
                <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
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
        <span className="text-green-500">{icon}</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

/* ── Helper: Stat card (same style as Dashboard page) ── */
function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border-[1.5px] border-neutral-300 p-1 shadow-sm dark:border-[#333333]">
      <div className="rounded-lg bg-gradient-to-b from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 flex flex-col px-4 py-3">
        <span className="text-sm dark:text-neutral-400 text-neutral-500">
          {label}
        </span>
        <div>
          <span className="text-md font-medium text-green-600 mt-1 block break-words">
            {value || "—"}
          </span>
        </div>
      </div>
    </div>
  );
}

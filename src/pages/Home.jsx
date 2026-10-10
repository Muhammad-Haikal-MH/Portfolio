import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import RotatingText from "../Home/RotatingText";
import { IoCodeSlash } from "react-icons/io5";
import { BsCardText, BsArrowRight } from "react-icons/bs";
import { GiTimeTrap } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router";
import Lanyard from "../Home/Lanyard";
import { icon } from "../data/Data";

export default function Home() {
  const [velocity, setVelocity] = useState(100);
  return (
    <>
      <Helmet>
        <title>Muhammad Haikal | Portfolio — Data Analyst, Data Scientist & AI Engineer</title>
        <meta
          name="description"
          content="Portfolio Muhammad Haikal — mahasiswa Smart City Information Systems Telkom University. Spesialis Data Analyst, Data Science, Machine Learning, AI Engineer, dan Fullstack Developer menggunakan Python, Tableau, Power BI, SQL, dan React."
        />
        <link rel="canonical" href="https://muhammadhaikal.vercel.app/" />
        <meta property="og:url" content="https://muhammadhaikal.vercel.app/" />
        <meta property="og:title" content="Muhammad Haikal | Portfolio — Data Analyst, Data Scientist & AI Engineer" />
        <meta property="og:description" content="Portfolio Muhammad Haikal — mahasiswa Smart City Information Systems Telkom University. Spesialis Data Analyst, Data Science, Machine Learning, dan AI Engineering." />
      </Helmet>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pb-16"
      >
        {/* Hero Section */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400">
              Available for opportunities
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <h1 className="md:text-4xl text-2xl font-bold tracking-tight wrap-txt">
              Hi, I'm
            </h1>
            <RotatingText
              texts={["Muhammad Haikal", "Data Scientist", "AI Engineer", "Data Analyst"]}
              mainClassName="md:text-4xl text-2xl font-bold tracking-tight wrap-txt text-emerald-600 dark:text-emerald-400"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 40, stiffness: 400 }}
              rotationInterval={3500}
            />
          </div>

          <ul className="ml-5 flex flex-wrap gap-5 sm:gap-10 mt-3">
            <li className="list-disc text-sm md:text-[15px] text-neutral-600 dark:text-neutral-400">
              Based In Bandung, Indonesia
            </li>
            <li className="list-disc text-sm md:text-[15px] text-neutral-600 dark:text-neutral-400">
              Telkom University &bull; Smart City Information Systems
            </li>
          </ul>

          <p className="mt-5 text-sm md:text-[15px] leading-7 text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Specializing in <b>Data Analytics</b>, <b>Data Science</b>, <b>Machine Learning</b>, and <b>AI Engineering</b>.
            Experienced in building end-to-end predictive pipelines, computer vision tracking systems, NLP architectures, and data-driven AI web platforms.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to="/project"
              className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2"
            >
              <span>🚀 Explore Projects</span>
              <BsArrowRight size={14} />
            </Link>
            <Link
              to="/ai-assistant"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors shadow-sm flex items-center gap-2"
            >
              <span>🤖 Ask AI</span>
            </Link>
          </div>

          <hr className="mt-8 border-neutral-200 dark:border-neutral-800" />
        </div>

        {/* Skills & Tools */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-1">
            <IoCodeSlash size={24} className="text-emerald-500" />
            <span className="text-xl font-bold">Skills & Tools</span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5">
            Core technologies powering my projects
          </p>
        </div>

        <div className="space-y-4 overflow-hidden">
          {/* Top row - scroll right */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee-right whitespace-nowrap w-fit">
              {[...icon, ...icon].map((tech, index) => (
                <div
                  key={`top-${index}`}
                  className="px-5 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm shadow-sm flex items-center space-x-2 mx-1.5 justify-center bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium hover:border-emerald-500/40 transition-colors"
                >
                  <img src={tech.icon} width={18} alt={tech.nama} />
                  <span>{tech.nama}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row - scroll left */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee-left whitespace-nowrap w-fit">
              {[...icon, ...icon].map((tech, index) => (
                <div
                  key={`bottom-${index}`}
                  className="px-5 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm shadow-sm flex items-center space-x-2 mx-1.5 justify-center bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium hover:border-emerald-500/40 transition-colors"
                >
                  <img src={tech.icon} width={18} alt={tech.nama} />
                  <span>{tech.nama}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="mt-10 border-neutral-200 dark:border-neutral-800" />

        {/* Services / CTA */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-1">
            <BsCardText size={22} className="text-emerald-500" />
            <span className="font-bold text-xl">Services</span>
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-7 max-w-3xl">
            Technology Enthusiast interested in data analytics, machine learning, and AI engineering
            with hands-on experience and a problem-solving mindset.
          </p>

          <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-1 mt-7">
            <div className="bg-gradient-to-b from-neutral-100 to-white p-6 rounded-xl dark:from-[#1a1a1a] dark:to-neutral-900">
              <div className="flex items-center gap-3 mt-1">
                <GiTimeTrap size={26} className="icon-ilang-timbul text-emerald-500" />
                <span className="text-lg font-semibold">Let's work together!</span>
              </div>

              <p className="my-5 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                I'm open for freelance projects, internship opportunities, and AI/Data Science collaborations.
                Feel free to reach out and see how we can work together.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 py-2.5 px-5 rounded-xl transition-all duration-300 hover:scale-105 text-sm font-semibold"
              >
                Contact me
                <BsArrowRight size={14} />
              </Link>
            </div>
          </div>

          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      </motion.div>
    </>
  );
}

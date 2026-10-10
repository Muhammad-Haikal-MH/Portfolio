import React from "react";
import { Helmet } from "react-helmet-async";
import telyu from "../assets/logo-telyu.png";
import sma from "../assets/sma5.png";
import alpro from "../assets/asprak/alpro.jpeg";
import webpro from "../assets/asprak/webpro.jpeg";
import ux from "../assets/asprak/ux.jpeg";
import { motion } from "framer-motion";
import { RiGraduationCapLine, RiBriefcaseLine } from "react-icons/ri";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Muhammad Haikal — AI Engineer & Data Scientist</title>
        <meta
          name="description"
          content="Learn more about Muhammad Haikal — Smart City Information Systems student at Telkom University, AI Engineer & Data Researcher Intern at Urbansolv., and Teaching Assistant."
        />
        <link rel="canonical" href="https://muhammadhaikal.vercel.app/about" />
        <meta property="og:url" content="https://muhammadhaikal.vercel.app/about" />
        <meta property="og:title" content="About Muhammad Haikal — AI Engineer & Data Scientist" />
      </Helmet>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pb-16"
      >
        {/* Header */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400">
              Background
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">About</h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">A short story of me</p>
          <hr className="w-full border-t border-neutral-200 dark:border-neutral-800 my-6" />
        </div>

        {/* Bio */}
        <div className="leading-7 text-sm sm:text-[15px] text-neutral-700 dark:text-neutral-300 space-y-4 max-w-3xl">
          <p>
            Hello and welcome to my personal website! I'm Muhammad Haikal, a Smart
            City Information Systems student at Telkom University with strong
            interests in technology, data analytics, machine learning, and
            software development. I enjoy exploring how technology and data can be
            used to solve real-world problems and create meaningful digital
            solutions.
          </p>

          <p>
            Throughout my academic journey, I have worked on various projects
            involving data analysis, machine learning, visualization dashboards,
            and modern web development using tools such as Python, SQL,
            JavaScript, React, Tableau, and other technologies. I also actively
            participate in competitions, collaborative projects, and
            organizational activities to continuously improve both my technical
            and problem-solving skills.
          </p>

          <p>
            I believe that continuous learning, consistency, and hands-on
            experience are essential for growth in the technology field. Beyond
            technical skills, I also value teamwork, communication, adaptability,
            and the ability to turn ideas into impactful solutions.
          </p>

          <p>
            Thank you for visiting my website. Feel free to explore my projects
            and connect with me!
          </p>
        </div>
        <hr className="mt-8 border-neutral-200 dark:border-neutral-800" />

        {/* Education */}
        <div className="flex items-center gap-3 mt-10 mb-1">
          <RiGraduationCapLine size={24} className="text-emerald-500" />
          <span className="text-xl font-bold">Education</span>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          Academic background and qualifications
        </p>

        <div className="space-y-4">
          <EducationCard
            logo={telyu}
            name="Telkom University"
            degree="Bachelor of Applied Science"
            field="Smart City Information System, (S.Tr Kom)"
            period="2024 - Now"
            location="Jawa Barat, Indonesia"
          />
          <EducationCard
            logo={sma}
            name="SMA Negeri 5 Jambi"
            degree="Senior High School"
            field="Social Sciences and Humanities"
            period="2021 - 2024"
            location="Jambi, Indonesia"
          />
        </div>

        {/* Experience */}
        <div className="flex items-center gap-3 mt-12 mb-1">
          <RiBriefcaseLine size={24} className="text-emerald-500" />
          <span className="text-xl font-bold">Experience</span>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          Professional & academic work experience
        </p>

        {/* Internship — Urbansolv */}
        <motion.div {...fadeInUp} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-1 shadow-sm">
          <div className="bg-gradient-to-b from-neutral-100 to-white p-5 rounded-xl dark:from-[#1a1a1a] dark:to-neutral-900 flex flex-col md:flex-row items-start gap-5">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
              MSP
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-lg font-bold">AI Engineer & Data Researcher</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20">
                  Internship
                </span>
              </div>

              <div className="my-2 text-neutral-600 dark:text-neutral-400 text-sm space-y-2">
                <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                  PT Multimedia Solusi Prima (Urbansolv.)
                </p>
                <p className="text-xs text-neutral-500">June 29, 2026 – October 29, 2026</p>

                <div className="mt-3 space-y-3 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm flex items-center gap-1.5">
                      🏢 SMART X: Smart Building Monitoring
                    </h4>
                    <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">
                      Focused on IoT telemetry data processing, feature engineering, energy and power consumption prediction, occupancy detection using Computer Vision, AI inference API development, and rigorous evaluation of energy consumption alongside building comfort indicators.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm flex items-center gap-1.5">
                      📑 SMART Asset Management (Research & Development)
                    </h4>
                    <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">
                      Engaged in structured R&D activities distinct from standard system development. Involved in formulation and development of structured research frameworks, scientific methodology, experimental activities, Key Performance Indicators (KPI), research deliverables, and resource requirement planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Teaching Assistants */}
        <div className="space-y-4 mt-4">
          <ExperienceCard
            image={alpro}
            title="Coordinator Teaching Assistant"
            subject="Programming Algorithms"
            subjectColor="text-blue-600 dark:text-blue-400"
            org="Telkom University"
            period="September 2025 – January 2026"
            desc="Led and coordinated a team of teaching assistants for the Programming Algorithms course, supporting 30+ undergraduate students in understanding foundational algorithm concepts, pseudocode design, and structured problem-solving. Responsible for scheduling lab sessions, reviewing student assignments, and ensuring consistent quality of academic assistance."
          />
          <ExperienceCard
            image={webpro}
            title="Teaching Assistant"
            subject="Web Programming"
            subjectColor="text-purple-600 dark:text-purple-400"
            org="Telkom University"
            period="February 2026 – June 2026"
            desc="Assisted 30+ students in grasping modern web development concepts including HTML, CSS, JavaScript, and server-side fundamentals. Guided hands-on lab sessions, provided constructive feedback on student projects, and helped troubleshoot technical issues to ensure every student progressed confidently throughout the semester."
          />
          <ExperienceCard
            image={ux}
            title="Teaching Assistant"
            subject="User Experience"
            subjectColor="text-emerald-600 dark:text-emerald-400"
            org="Telkom University"
            period="February 2026 – June 2026"
            desc="Mentored 30+ students in UX design principles, covering user research methodologies, wireframing, prototyping, and usability testing. Facilitated practical design workshops and critique sessions using tools such as Figma, helping students translate theoretical UX concepts into well-structured, user-centered digital products."
          />
        </div>
      </motion.div>
    </>
  );
}

/* ── Education Card Component ── */
function EducationCard({ logo, name, degree, field, period, location }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-1">
      <div className="bg-gradient-to-b from-neutral-100 to-white p-5 rounded-xl dark:from-[#1a1a1a] dark:to-neutral-900 flex items-center gap-5">
        <div className="flex-shrink-0">
          <img src={logo} alt={name} className="w-16 object-cover" />
        </div>
        <div>
          <span className="text-lg font-semibold">{name}</span>
          <div className="my-1.5 text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
            <p>{degree}</p>
            <p className="text-neutral-500">{field}</p>
            <p className="text-xs text-neutral-400">{period} &bull; {location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Experience Card Component ── */
function ExperienceCard({ image, title, subject, subjectColor, org, period, desc }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-1">
      <div className="bg-gradient-to-b from-neutral-100 to-white p-5 rounded-xl dark:from-[#1a1a1a] dark:to-neutral-900 flex items-start gap-5">
        <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="text-base font-semibold">{title}</span>
          <div className="my-1.5 text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
            <p className={`font-medium ${subjectColor}`}>{subject}</p>
            <p className="text-xs text-neutral-500">{org} &bull; {period}</p>
            <p className="mt-2 leading-relaxed text-xs sm:text-sm">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

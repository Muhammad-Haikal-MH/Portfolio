import React from "react";
import telyu from "../assets/logo-telyu.png";
import sma from "../assets/sma5.png";
import { motion } from "framer-motion";
import { RiGraduationCapLine } from "react-icons/ri";

export default function About() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h1 className="text-2xl font-semibold mt-7">About</h1>
      <p className="mt-3 mb-6">A short story of me</p>
      <hr className="w-full border-1 border-dashed"></hr>

      <div className="mt-7 leading-8 text-[15px]">
        <p className="mb-4">
          Hello and welcome to my personal website! I'm Muhammad Haikal, a Smart
          City Information Systems student at Telkom University with strong
          interests in technology, data analytics, machine learning, and
          software development. I enjoy exploring how technology and data can be
          used to solve real-world problems and create meaningful digital
          solutions.
        </p>

        <p className="mb-4">
          Throughout my academic journey, I have worked on various projects
          involving data analysis, machine learning, visualization dashboards,
          and modern web development using tools such as Python, SQL,
          JavaScript, React, Tableau, and other technologies. I also actively
          participate in competitions, collaborative projects, and
          organizational activities to continuously improve both my technical
          and problem-solving skills.
        </p>

        <p className="mb-4">
          I believe that continuous learning, consistency, and hands-on
          experience are essential for growth in the technology field. Beyond
          technical skills, I also value teamwork, communication, adaptability,
          and the ability to turn ideas into impactful solutions.
        </p>

        <p className="mb-4">
          Thank you for visiting my website. Feel free to explore my projects
          and connect with me!
        </p>
        <hr className="mt-7" />
      </div>

      <div className="flex gap-3 mt-10">
        <RiGraduationCapLine size={30} />
        <span className="text-xl font-semibold">Education</span>
      </div>

      <div className="border border-neutral-300 rounded-xl p-1 mt-7">
        <div className="bg-gradient-to-b from-neutral-200 to-neutral-100 p-5 rounded-xl dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 flex items-center gap-6">
          <div className="">
            <img src={telyu} alt="" className=" w-20 object-cover" />
          </div>

          <div className="mt-1">
            <span className="text-lg">Telkom University</span>

            <div className="my-2 text-neutral-600 dark:text-neutral-400 text-sm">
              <p className="mb-2"> Bachelor of Applied Science</p>
              <p>Smart City Information System, (S.Tr Kom)</p>
              <p className="mt-2">2024 - Now</p>
              <p className="mt-2">Jawa Barat, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-neutral-300 rounded-xl p-1 my-7">
        <div className="bg-gradient-to-b from-neutral-200 to-neutral-100 p-5 rounded-xl dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 flex items-center gap-6">
          <div className="">
            <img src={sma} alt="" className=" w-20 object-cover" />
          </div>

          <div className="mt-1">
            <span className="text-lg">SMA Negeri 5 Jambi</span>

            <div className="my-2 text-neutral-600 dark:text-neutral-400 text-sm">
              <p className="mb-2">Senior High School</p>
              <p>Social Sciences and Humanities</p>
              <p className="mt-2">2021 - 2024</p>
              <p className="mt-2">Jambi, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

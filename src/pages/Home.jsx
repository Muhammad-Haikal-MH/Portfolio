import React from "react";
import { motion } from "framer-motion";
import RotatingText from "../Home/RotatingText";
import { IoCodeSlash } from "react-icons/io5";
import { BsCardText } from "react-icons/bs";
import { GiTimeTrap } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router";
import Lanyard from "../Home/Lanyard";
import { icon } from "../data/Data";

export default function Home() {
  const [velocity, setVelocity] = useState(100);
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="flex flex-wrap gap-2">
        <h1 className="md:text-4xl text-2xl font-semibold wrap-txt mt-7">Hi, I'm</h1>
        <RotatingText
          texts={[
            "Muhammad Haikal",
            "Web Developer",
            "Frond End Developer",
            "Full Stack Developer",
          ]}
          mainClassName="md:text-4xl text-2xl font-semibold wrap-txt mt-7"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 40, stiffness: 400 }}
          rotationInterval={4000}
        />
      </div>

      <div>
        <ul className={`ml-5 flex flex-wrap gap-5 sm:gap-10 mt-3 text-md`}>
          <li className="list-disc text-sm md:text-[16px]">Based In Bandung, Indonesia</li>
          <li className="list-disc text-sm md:text-[16px]">Student</li>
        </ul>
      </div>

      <div>
        <p className="mt-5 text-md md:text-[15px] leading-7">
          Frontend-focused Web Developer in progress, passionate about crafting
          responsive and user-friendly interfaces. Currently deepening skills in
          React and modern frontend tools, while preparing to expand into
          full-stack development. Always eager to learn, build, and grow through
          real-world projects and continuous improvement.
        </p>

        <hr className="mt-8 text-gray-400" />
      </div>

      {/* skills */}

      <div className="mt-10">
        <div className="flex gap-5 items-center">
          <IoCodeSlash size={30} />
          <span className="text-xl font-semibold">Skills and Tools</span>
        </div>
      </div>

      {/* <div className="">
        <ScrollVelocity
          texts={['React Bits', 'Scroll Down']} 
          velocity={velocity}
          className="text-blue-500"
        />
      </div> */}

      <div className="space-y-4 overflow-hidden mt-5">
        {/* Atas - scroll ke kanan */}
         <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-right whitespace-nowrap w-fit">
            {[...icon, ...icon].map((tech, index) => (
              <div
                key={`top-${index}`}
                className="px-6 py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 text-md shadow flex items-center space-x-2 mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold"
              >
                <img src={tech.icon} width={20} alt={tech.nama} />
                <span>{tech.nama}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bawah - scroll ke kiri */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-left whitespace-nowrap w-fit">
            {[...icon, ...icon].map((tech, index) => (
              <div
                key={`bottom-${index}`}
                className="px-6 py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 text-md shadow flex items-center space-x-2 mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 text-neutral-800  dark:text-neutral-200 font-semibold"
              >
                <img src={tech.icon} width={22} alt={tech.nama} />
                <span>{tech.nama}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="mt-10 text-gray-400" />
      <div>
        <div className="flex items-center gap-5 mt-10">
          <BsCardText size={30} />
          <span className="font-semibold text-xl md:text-2xl ">Services</span>
        </div>
        <div className="mt-5">
          <span className="leading-7 text-md md:text-[15px] ">
            Freelance Frontend Development I offer custom, responsive, and
            user-focused web development using modern tools like React,
            Tailwind, and JavaScript—ideal for individuals, student projects,
            and small businesses.
          </span>
        </div>

        <div className="border border-neutral-300 rounded-xl p-1 mt-7">
          <div className="bg-gradient-to-b from-neutral-200 to-neutral-100 p-5 rounded-xl dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950">
            <div className="flex items-center gap-3 mt-3">
              <GiTimeTrap size={30} className="icon-ilang-timbul" />
              <span className="text-lg">Let's work together!</span>
            </div>

            <div className="my-5 text-neutral-600 dark:text-neutral-400 text-md md:text-[15px] ">
              <span>
                I'm open for freelance projects, feel free to contact me to see
                how can we collaborate.
              </span>
            </div>

            <div className="bg-neutral-500 hover:bg-neutral-600 w-[124px] text-center text-neutral-50 dark: dark:bg-neutral-600 dark:hover:bg-neutral-700 py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 ">
              <Link to={"Contact"}>Contact me</Link>
            </div>
          </div>
        </div>

        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* lanyard */}
    </motion.div>
  );
}

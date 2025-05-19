import React from "react";
import Chart from "../dashboard/Chart";
import { motion } from 'framer-motion'
import { useState } from "react";
import { useEffect } from "react";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 8) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h1 className="text-2xl font-semibold mt-7">Dashboard</h1>
      <p className="mt-3 mb-6 text-md">
        Several projects that I have worked on, both private and open source.
      </p>
      <hr className="w-full border-1 border-dashed"></hr>

      <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-4">

      <div class="rounded-xl w-full border-[1.5px] border-neutral-300 p-1 shadow-sm dark:border-[#333333]">
        <div
          class="rounded-lg bg-gradient-to-b
        from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 flex flex-col self-center bg-neutral-100 px-4 py-3"
        >
          <span class="text-sm dark:text-neutral-400">Technologies Learned</span>
          <div>
            <span class="text-xl font-medium text-green-600 lg:text-2xl">
              {count}
            </span>
          </div>
        </div>
      </div>

      <div class="rounded-xl w-full border-[1.5px] border-neutral-300 p-1 shadow-sm dark:border-[#333333]">
        <div
          class="rounded-lg bg-gradient-to-b
        from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 flex flex-col self-center bg-neutral-100 px-4 py-3"
        >
          <span class="text-sm dark:text-neutral-400">Learning Hours</span>
          <div>
            <span class="text-xl font-medium text-green-600 lg:text-2xl">
              1 - 2
              <span className="ml-2 text-sm">hour/ day</span>
            </span>
          </div>
        </div>
      </div>

      <div class="rounded-xl w-full border-[1.5px] border-neutral-300 p-1 shadow-sm dark:border-[#333333]">
        <div
          class="rounded-lg bg-gradient-to-b
        from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 flex flex-col self-center bg-neutral-100 px-4 py-3"
        >
          <span class="text-sm dark:text-neutral-400">Projects Built</span>
          <div>
            <span class="text-xl font-medium text-green-600 lg:text-2xl">
              7++
            </span>
          </div>
        </div>
      </div>

      <div class="rounded-xl w-full border-[1.5px] border-neutral-300 p-1 shadow-sm dark:border-[#333333]">
        <div
          class="rounded-lg bg-gradient-to-b
        from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 flex flex-col self-center bg-neutral-100 px-4 py-3"
        >
          <span class="text-sm dark:text-neutral-400">Active Since</span>
          <div>
            <span class="text-xl font-medium text-green-600 lg:text-2xl">
              Aug 
              <span className="ml-2 text-sm">2024</span>
            </span>
          </div>
        </div>
      </div>

      {/* dashboard */}

      </div>
      <div className="w-full h-[500px] mt-10">
        <Chart/>

      </div>
    </motion.div>
  );
}

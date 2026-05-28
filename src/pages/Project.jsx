import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { project } from "../data/Data";

export default function Project() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = project.filter((pro) => {
    if (activeTab === "All") return true;
    return pro.category === activeTab;
  });

  const tabs = ["All", "Web Dev", "Data"];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h1 className="text-2xl font-semibold mt-7">Projects</h1>
      <p className="mt-3 mb-6 text-md">
        Several projects that I have worked on, both private and open source.
      </p>
      <hr className="w-full border-1 border-dashed"></hr>

      <div className="flex flex-wrap gap-3 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="min-h-screen py-10 px-4">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((pro, index) => (
            <div
              className="cursor-pointer hover:scale-105 transition-all duration-200"
              key={index}
              onClick={() => navigate(`/project/${pro.id}`)}
            >
              <div className="m-2 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-neutral-300 dark:border-neutral-600 hover:border-2 dark:bg-neutral-800 group">
                {pro.img ? (
                  <img
                    src={pro.img}
                    alt=""
                    className="w-full object-contain group-hover:brightness-50 transition-all duration-200"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-blue-500/20 dark:from-green-500/10 dark:via-emerald-500/5 dark:to-blue-500/10 flex items-center justify-center group-hover:brightness-75 transition-all duration-200">
                    <span className="text-5xl opacity-60">📊</span>
                  </div>
                )}

                <div className="p-4 ">
                  <h3 className="text-lg font-medium  mb-1 line-clamp-2">
                    {pro.nama}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {pro.desc}
                  </p>
                  <div className="flex gap-4 items-center mt-5">
                    {pro.techStack.map((tech, index) => (
                      <img src={tech} alt="" className="w-6 h-6 " key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

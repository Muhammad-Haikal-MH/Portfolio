import React from "react";
import { Data } from '../data/Data'
import { motion } from 'framer-motion'

export default function Achievement() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h1 className="text-2xl font-semibold mt-7">Achievement</h1>
      <p className="mt-3 mb-6 text-md">
        A collection of certificates and badges that I have earned throughout my
        professional journey.
      </p>
      <hr className="w-full border-1 border-dashed"></hr>

      <div className="min-h-screen py-10 px-4">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg lg:grid-cols-3 gap-6 ">
          {Data.map((cert, index) => (
            <a href={cert.imageUrl}
              key={index}
              className="rounded-xl shadow-md overflow-hidden hover:shadow-xl duration-200 border hover:border-2 hover:scale-105 transition-all border-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-800 group"
            >
              <div className="m-2 rounded-md overflow-hidden ">
                <img
                  src={cert.gambar}
                  alt={cert.title}
                  className="w-full object-contain group-hover:brightness-50 transition-all duration-200"
                />
                
                <div className="p-4 ">
                  <h3 className="text-lg font-medium  mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-gray-500">
                    Issued on {cert.issueDate}
                  </p>
                </div>
              </div>

            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

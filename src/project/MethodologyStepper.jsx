import React from "react";
import { motion } from "framer-motion";

export default function MethodologyStepper({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <div className="relative">
      {/* ── Desktop: Horizontal ── */}
      <div className="hidden md:flex items-start overflow-x-auto pb-4 gap-0">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * index, duration: 0.4 }}
            className="flex items-start flex-1 min-w-[150px]"
          >
            <div className="flex flex-col items-center text-center flex-1 relative">
              {/* Connector line — between circles */}
              {index < steps.length - 1 && (
                <div className="absolute top-5 left-[55%] w-[90%] h-0.5 bg-gradient-to-r from-green-500/60 to-green-500/10" />
              )}

              {/* Circle */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-green-500/25 ring-4 ring-green-500/10">
                {index + 1}
              </div>

              {/* Label */}
              <h4 className="font-semibold text-sm mt-3 leading-tight">
                {step.step}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 px-2 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Mobile: Vertical ── */}
      <div className="md:hidden space-y-0">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.35 }}
            className="flex items-start gap-4"
          >
            {/* Left column: circle + connector */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-green-500/25 ring-4 ring-green-500/10 shrink-0">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 flex-1 min-h-[40px] bg-gradient-to-b from-green-500/50 to-green-500/5 mt-1" />
              )}
            </div>

            {/* Right column: text */}
            <div className="pb-8 pt-1">
              <h4 className="font-semibold text-sm leading-tight">
                {step.step}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

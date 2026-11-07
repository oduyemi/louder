"use client";

import { motion, useReducedMotion } from "framer-motion";

const phrases = ["WE'RE OUTSIDE", "LET'S GO TOGETHER", "LOUDER ON THE STREET", "ONE SOUND", "ONE GENERATION"];

export function LouderTicker() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#0B2265] py-5">
      <motion.div
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-8"
      >
        {[...phrases, ...phrases].map((phrase, index) => (
          <span key={`${phrase}-${index}`} className="flex items-center gap-8 text-sm font-black uppercase tracking-[.12em] text-white sm:text-base">
            {phrase}<span className="text-[#FFC72C]">✳</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

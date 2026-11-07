"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Asterisk, ArrowUpRight } from "lucide-react";

const phrases = [
  { text: "WE'RE OUTSIDE", color: "text-white" },
  { text: "LET'S GO TOGETHER", color: "text-[#FFC72C]" },
  { text: "LOUDER ON THE STREET", color: "text-white" },
  { text: "ONE SOUND", color: "text-[#FFC72C]" },
  { text: "ONE GENERATION", color: "text-white" },
];

export function LouderTicker() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Louder campaign highlights"
      className="relative isolate overflow-hidden bg-[#0B2265]"
    >
      {/* Brand accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00A3E0]/70 to-transparent" />

      <div className="absolute -left-20 top-0 h-24 w-64 rounded-full bg-[#00A3E0]/10 blur-[70px]" />

      <div className="absolute -right-20 bottom-0 h-24 w-64 rounded-full bg-[#FFC72C]/10 blur-[70px]" />
      <div className="relative overflow-hidden border-y border-white/10 py-5 sm:py-7">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { x: ["0%", "-50%"] }
          }
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center"
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {phrases.map((phrase, index) => (
                <div
                  key={`${phrase.text}-${index}`}
                  className="flex shrink-0 items-center gap-8 px-7 sm:gap-12 sm:px-12 lg:gap-16 lg:px-16"
                >
                  <span
                    className={`whitespace-nowrap text-[clamp(1.5rem,3.5vw,3.1rem)] font-black uppercase leading-none tracking-[-0.065em] ${phrase.color}`}
                  >
                    {phrase.text}
                  </span>

                  {index === 1 || index === 4 ? (
                    <span className="flex h-10 w-10 shrink-0 rotate-12 items-center justify-center rounded-xl bg-[#E87722] text-white sm:h-12 sm:w-12">
                      <Asterisk
                        size={27}
                        strokeWidth={2.5}
                      />
                    </span>
                  ) : (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#00A3E0]/50 text-[#00A3E0] sm:h-11 sm:w-11">
                      <ArrowUpRight size={19} />
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00A3E0]/50 to-transparent" />
    </section>
  );
}

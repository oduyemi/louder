
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  Heart,
  Music2,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { experiences } from "./data";

const icons = [Music2, Users, AudioLines];

const accents = {
  gold: {
    color: "#FFC72C",
    text: "text-[#FFC72C]",
    bg: "bg-[#FFC72C]",
    soft: "bg-[#FFC72C]/10",
    border: "border-[#FFC72C]/25",
  },
  cyan: {
    color: "#00A3E0",
    text: "text-[#41B6E6]",
    bg: "bg-[#00A3E0]",
    soft: "bg-[#00A3E0]/10",
    border: "border-[#00A3E0]/25",
  },
  orange: {
    color: "#E87722",
    text: "text-[#E87722]",
    bg: "bg-[#E87722]",
    soft: "bg-[#E87722]/10",
    border: "border-[#E87722]/25",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function LouderExperience() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  return (
    <section
      id="experience"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#091B40] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-14 lg:py-36"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 45, 0],
                  y: [0, -35, 0],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-[#00A3E0]/10 blur-[130px]"
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -40, 0],
                  y: [0, 35, 0],
                  scale: [1, 1.15, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 bottom-0 h-[520px] w-[520px] rounded-full bg-[#E87722]/[0.08] blur-[140px]"
        />

        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:20px_20px]" />

        <div className="absolute right-[8%] top-[15%] h-40 w-40 rounded-full border border-white/[0.04]" />
        <div className="absolute right-[10%] top-[17%] h-32 w-32 rounded-full border border-white/[0.04]" />
      </div>

      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <motion.div {...reveal}>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#FFC72C]/20 bg-[#FFC72C]/[0.07] px-4 py-2.5">
              <motion.span
                animate={reduceMotion ? undefined : { rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
              </motion.span>
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#FFC72C] sm:text-[10px]">
                The Louder Experience
              </span>
            </div>

          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.6fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[#41B6E6]">
                Not your ordinary gathering
              </p>

              <h2 className="text-[clamp(3.5rem,8.5vw,8rem)] font-black leading-[0.82] tracking-[-0.09em]">
                GOOD TIMES.
                <br />
                <span className="relative inline-block text-[#41B6E6]">
                  REAL PEOPLE.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute -bottom-2 left-1 h-1.5 w-[80%] origin-left rounded-full bg-[#FFC72C] sm:h-2"
                  />
                </span>
                <br />
                <span className="text-white">ONE PURPOSE.</span>
              </h2>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md pb-2 lg:pb-3"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#E87722]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E87722]">
                  Come find your people
                </span>
              </div>

              <p className="text-base leading-8 text-blue-100/65 sm:text-lg">
                From unforgettable worship to friendships that go deeper,
                there&apos;s room to be yourself, grow together and live out
                something bigger.
              </p>

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-7 flex items-center gap-3 text-[#FFC72C]"
              >
                <ArrowDownRight size={19} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Take a look around
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience cards */}
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-16 grid items-stretch gap-5 md:grid-cols-3 lg:mt-24"
        >
          {experiences.map((item, index) => {
            const Icon = icons[index % icons.length];
            const accent =
              accents[item.tone as keyof typeof accents] ?? accents.gold;

            return (
              <motion.article
                key={item.number}
                variants={reduceMotion ? undefined : cardVariants}
                whileHover={reduceMotion ? undefined : { y: -10 }}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[#07132F] transition-[border-color,box-shadow] duration-500 hover:border-white/25 hover:shadow-[0_30px_70px_-35px_rgba(0,163,224,0.3)] ${
                  index === 1 ? "md:translate-y-9" : ""
                }`}
              >
                {/* Image area */}
                <div className="relative h-[270px] overflow-hidden sm:h-[300px]">
                  <motion.div
                    role="img"
                    aria-label={item.alt}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${item.image}")` }}
                    whileHover={reduceMotion ? undefined : { scale: 1.09 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07132F] via-[#07132F]/10 to-[#07132F]/20" />

                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />

                  {/* Image metadata */}
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-[#07132F]/60 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      {item.tag}
                    </span>

                    <motion.div
                      whileHover={reduceMotion ? undefined : { rotate: 45 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md"
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>

                  {/* Bottom image details */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2">
                    <motion.span
                      animate={reduceMotion ? undefined : { scale: [1, 1.4, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className={`h-2 w-2 rounded-full ${accent.bg}`}
                    />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
                      The Louder moments
                    </span>
                  </div>

                  <span className="absolute bottom-0 right-5 text-[5.5rem] font-black leading-[0.8] tracking-[-0.1em] text-white/[0.22]">
                    {item.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { rotate: -8, scale: 1.08 }
                      }
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.border} ${accent.soft} ${accent.text}`}
                    >
                      <Icon size={23} strokeWidth={1.8} />
                    </motion.div>

                    <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
                      0{index + 1} / 03
                    </span>
                  </div>

                  <h3 className="mt-7 text-[1.8rem] font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-blue-100/55">
                    {item.copy}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
                      Be part of it
                    </span>

                    <motion.div
                      whileHover={reduceMotion ? undefined : { scale: 1.15 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors duration-300 group-hover:border-[#FFC72C]/40 group-hover:bg-[#FFC72C] group-hover:text-[#07132F]"
                    >
                      <ArrowUpRight size={17} />
                    </motion.div>
                  </div>

                  {/* Animated bottom accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.35 + index * 0.15,
                    }}
                    className={`absolute bottom-0 left-0 h-[3px] w-full origin-left ${accent.bg}`}
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col gap-7 border-t border-white/10 pt-9 sm:mt-28 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <span className="h-9 w-9 rounded-full border-[3px] border-[#091B40] bg-[#00A3E0]" />
              <span className="h-9 w-9 rounded-full border-[3px] border-[#091B40] bg-[#FFC72C]" />
              <span className="h-9 w-9 rounded-full border-[3px] border-[#091B40] bg-[#E87722]" />
              <span className="h-9 w-9 rounded-full border-[3px] border-[#091B40] bg-[#00A859]" />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Your people are here.
              </p>
              <p className="mt-1 text-xs text-white/40">
                Different stories. One community.
              </p>
            </div>
          </div>

          <motion.div
            whileHover={reduceMotion ? undefined : { x: 5 }}
            className="flex items-center gap-3 text-[#FFC72C]"
          >
            <Zap size={17} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              More than a moment. It&apos;s a movement.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

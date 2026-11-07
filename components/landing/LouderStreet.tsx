"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Globe2,
  Heart,
  MoveUpRight,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";

const VIDEO_ID = "Ux_G--ONJ3g";

const floatingWords = ["LOVE LOUDLY", "LIVE BOLDLY", "GO BEYOND"];

export function LouderStreet() {
  const reduceMotion = useReducedMotion();

  const enter = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#07132F] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-14 lg:py-36">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#07132F_0%,#091B40_55%,#06112B_100%)]" />

        <motion.div
          animate={reduceMotion ? undefined : { x: [0, 55, 0], y: [0, -35, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#00A3E0]/10 blur-[130px]"
        />

        <motion.div
          animate={reduceMotion ? undefined : { x: [0, -45, 0], y: [0, 35, 0] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#E87722]/10 blur-[130px]"
        />

        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#fff_0.7px,transparent_0.7px)] [background-size:20px_20px]" />
      </div>

      <div className="mx-auto max-w-[1440px]">
        {/* Top label */}
        <motion.div
          variants={enter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-5"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#E87722]/30 bg-[#E87722]/10 px-4 py-2.5">
            <Zap size={14} className="fill-[#E87722] text-[#E87722]" />
            <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#ffad75]">
              The movement goes beyond
            </span>
          </div>

          <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 sm:block">
            Not confined. Not contained.
          </span>
        </motion.div>

        {/* Headline */}
        <div className="relative mt-12 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-end">
          <motion.div
            variants={enter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(4.2rem,10vw,9.5rem)] font-black leading-[0.77] tracking-[-0.095em]">
              LOUDER
              <br />
              <span className="text-[#FFC72C]">ON THE</span>
              <br />
              <span className="relative inline-block text-[#00A3E0]">
                STREET
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.35 }}
                  className="absolute -bottom-2 left-1 h-2 w-[75%] origin-left rounded-full bg-[#E87722] sm:h-3"
                />
              </span>
              <span className="ml-2 inline-block text-[0.35em] align-top tracking-[-0.04em] text-white/35">
                !
              </span>
            </h2>
          </motion.div>

          {/* Floating mission stamp */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, rotate: 15, scale: 0.7 }}
            whileInView={{ opacity: 1, rotate: -7, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, type: "spring" }}
            className="relative mx-auto flex h-40 w-40 items-center justify-center sm:h-44 sm:w-44 lg:mb-2"
          >
            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#FFC72C]/50"
            />
            <div className="absolute inset-3 rounded-full border border-[#FFC72C]/20" />
            <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#FFC72C] text-center text-[#07132F] shadow-[0_15px_45px_-15px_rgba(255,199,44,0.4)] sm:h-36 sm:w-36">
              <Globe2 size={22} strokeWidth={2.2} />
              <span className="mt-2 text-[11px] font-black uppercase leading-tight tracking-tight">
                Faith
                <br />
                Out There
              </span>
              <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] opacity-60">
                Matthew 28:19
              </span>
            </div>
          </motion.div>
        </div>

        {/* Main composition */}
        <div className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-14">
          {/* Video feature */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 45, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Offset colour backing */}
            <motion.div
              animate={reduceMotion ? undefined : { rotate: [2, 3.5, 2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-2 rounded-[2rem] bg-[#00A3E0] sm:-inset-3 sm:rounded-[2.5rem]"
            />

            <div className="relative rounded-[1.7rem] border border-white/20 bg-[#0C2049] p-2.5 shadow-[0_35px_100px_-35px_rgba(0,0,0,0.8)] sm:rounded-[2.2rem] sm:p-3">
              {/* Video header */}
              <div className="flex items-center justify-between gap-3 px-3 pb-3 pt-1 sm:px-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#E87722] shadow-[0_0_12px_rgba(232,119,34,0.8)]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/65">
                    Louder. Out in the world.
                  </span>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-[8px] font-black uppercase tracking-widest text-white/50">
                  Featured video
                </span>
              </div>

              {/* YouTube player */}
              <div className="relative aspect-video overflow-hidden rounded-[1.35rem] bg-black sm:rounded-[1.75rem]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&playsinline=1`}
                  title="Louder on the Street"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Video caption */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-1 pt-4 sm:px-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-white">
                    Take the love out.
                  </p>
                  <p className="mt-1 text-[10px] text-white/40">
                    Beyond the rooftop. Into the world.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#FFC72C]/20 bg-[#FFC72C]/10 px-3 py-2">
                  <Play size={11} className="fill-[#FFC72C] text-[#FFC72C]" />
                  <span className="text-[8px] font-black uppercase tracking-[0.15em] text-[#FFC72C]">
                    Press play
                  </span>
                </div>
              </div>
            </div>

            {/* Floating sticker */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: [8, -7, 8], y: [0, -8, 0] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-9 -left-3 z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#FFC72C] text-center text-[#07132F] shadow-xl sm:-bottom-10 sm:-left-7 sm:h-28 sm:w-28"
            >
              <Heart size={18} className="mb-1 fill-[#E87722] text-[#E87722]" />
              <span className="text-[10px] font-black uppercase leading-tight">
                Love
                <br />
                In Action
              </span>
            </motion.div>

            {/* Small floating arrow */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 -top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E87722] text-white shadow-xl sm:-right-5 sm:-top-6 sm:h-14 sm:w-14"
            >
              <ArrowUpRight size={23} />
            </motion.div>
          </motion.div>

          {/* Supporting copy */}
          <motion.div
            variants={enter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative pb-2 pt-4 lg:pl-2"
          >
            <div className="mb-7 inline-flex items-center gap-2 text-[#41B6E6]">
              <MoveUpRight size={17} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                More than a moment
              </span>
            </div>

            <h3 className="max-w-md text-4xl font-black leading-[0.94] tracking-[-0.07em] sm:text-5xl">
              THE WORLD
              <br />
              IS OUR
              <span className="text-[#FFC72C]"> MISSION.</span>
            </h3>

            <p className="mt-7 max-w-md text-sm leading-8 text-blue-100/65 sm:text-base">
              We don&apos;t just gather to make noise. We show up to make a
              difference. Taking love, hope, faith and the message of Jesus
              beyond the rooftop and into the world around us.
            </p>

            <div className="mt-8 space-y-4">
              {floatingWords.map((word, index) => (
                <motion.div
                  key={word}
                  initial={reduceMotion ? false : { opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduceMotion ? 0 : 0.2 + index * 0.13 }}
                  className="flex items-center gap-4"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                      index === 0
                        ? "bg-[#FFC72C]/15 text-[#FFC72C]"
                        : index === 1
                          ? "bg-[#00A3E0]/15 text-[#41B6E6]"
                          : "bg-[#E87722]/15 text-[#E87722]"
                    }`}
                  >
                    {index === 0 ? (
                      <Heart size={15} />
                    ) : index === 1 ? (
                      <Sparkles size={15} />
                    ) : (
                      <Globe2 size={15} />
                    )}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/75">
                    {word}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </motion.div>
              ))}
            </div>

            <div className="mt-9 border-t border-white/10 pt-6">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FFC72C]">
                A missional community.
              </p>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Focused on obeying the Great Commission, wherever life takes us.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom campaign strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
            One generation. One message. Everywhere.
          </p>

          <motion.div
            animate={reduceMotion ? undefined : { x: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 text-[#41B6E6]"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.18em]">
              The mission continues
            </span>
            <ArrowDownRight size={17} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

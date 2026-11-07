"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, AudioLines, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { louderImages } from "./data";

type Props = { onJoin: () => void };

export function LouderHero({ onJoin }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-14 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-20 h-[540px] w-[540px] rounded-full bg-[#00A3E0]/15 blur-[150px]" />
        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#E87722]/10 blur-[150px]" />
        <div className="absolute inset-0 opacity-[.08]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.7) .7px, transparent .7px)", backgroundSize: "18px 18px" }} />
      </div>

      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.04fr_.96fr] lg:gap-8">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .12 } } }} className="relative z-10">
          <motion.div variants={rise}>
            <span className="inline-flex -rotate-2 items-center gap-2 rounded-md bg-[#00A3E0] px-4 py-2 text-[9px] font-black uppercase tracking-[.16em] text-[#07132F] shadow-lg sm:text-[10px]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#07132F]" />
              A GENERATION THAT SHOWS UP
            </span>
          </motion.div>

          <motion.div variants={rise} className="mt-9">
            <p className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.28em] text-[#FFC72C] sm:text-xs">
              <Sparkles size={15} /> NOT YOUR USUAL GATHERING
            </p>
            <h1 className="text-[clamp(4.6rem,10.8vw,9.5rem)] font-black leading-[.76] tracking-[-.095em]">
              WE'RE
              <span className="block text-[#FFC72C]">OUTSIDE<span className="text-[#00A3E0]">.</span></span>
              <span className="mt-3 block text-[.39em] leading-none tracking-[-.055em] text-white/80">AND YOU'RE INVITED.</span>
            </h1>
          </motion.div>

          <motion.p variants={rise} className="mt-8 max-w-[490px] text-sm leading-8 text-blue-100/65 sm:text-base">
            A whole lot of worship, real people, big energy and a reason to come together. Bring your friends. Bring your voice. Bring all of you.
          </motion.p>

          <motion.div variants={rise} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={onJoin} className="group h-14 rounded-full bg-[#FFC72C] px-7 text-xs font-black text-[#07132F] shadow-[0_12px_35px_rgba(255,199,44,.18)] hover:-translate-y-1 hover:bg-[#ffda69]">
              I'M IN. LET'S GO <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <a href="#experience" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[.04] px-7 text-xs font-black text-white/80 transition hover:border-[#00A3E0] hover:bg-[#00A3E0]/10">
              GET THE VIBE <ArrowDown size={15} className="text-[#00A3E0]" />
            </a>
          </motion.div>

          <motion.div variants={rise} className="mt-10 flex items-center gap-3 text-[9px] font-black uppercase tracking-[.18em] text-white/40">
            <span className="text-[#FFC72C]">FAITH</span><span>✳</span><span>FRIENDSHIP</span><span>✳</span><span>FREEDOM</span>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: reduceMotion ? 0 : .9, delay: .15 }} className="relative mx-auto w-full max-w-[610px] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#00A3E0]/15 blur-3xl" />
          <div className="relative aspect-[4/4.55] overflow-hidden rounded-[2rem] border border-white/15 bg-[#10264b] shadow-[0_35px_100px_rgba(0,0,0,.5)] sm:aspect-[4/4.1]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${louderImages.hero}")` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06112B] via-[#071744]/15 to-[#071744]/10" />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#07132F]/60 px-3 py-2 backdrop-blur-xl sm:left-7 sm:top-7">
              <Zap size={14} className="text-[#FFC72C]" />
              <span className="text-[9px] font-black uppercase tracking-[.16em]">THE SOUND OF US</span>
            </div>

            <motion.div animate={reduceMotion ? undefined : { rotate: [7, -5, 7], y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute right-5 top-[27%] flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#E87722] text-center text-[10px] font-black uppercase leading-tight text-white shadow-xl sm:right-8 sm:h-24 sm:w-24">
              GOOD<br />ENERGY<br />ONLY
              <Sparkles className="absolute -right-2 -top-2 text-[#FFC72C]" size={23} />
            </motion.div>

            <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8">
              <p className="text-[9px] font-black uppercase tracking-[.3em] text-[#00A3E0]">LOUDER ON THE ROOFTOP</p>
              <p className="mt-3 text-5xl font-black leading-[.83] tracking-[-.075em] sm:text-7xl">MAKE<span className="block text-[#FFC72C]">SOME</span>NOISE<span className="text-[#00A3E0]">.</span></p>
            </div>
            <div className="absolute bottom-8 right-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
              <AudioLines size={20} className="text-[#FFC72C]" />
            </div>
          </div>

          <motion.div animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [-3, 0, -3] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute -bottom-6 -left-3 rounded-2xl border border-white/15 bg-[#10264b] px-5 py-4 shadow-2xl sm:-left-8">
            <p className="text-[9px] font-black uppercase tracking-[.2em] text-white/45">YOUR PEOPLE ARE HERE</p>
            <p className="mt-1 text-lg font-black">YOU BELONG HERE<span className="text-[#FFC72C]">.</span></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: .6, ease: "easeOut" as const } },
};

"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Heart,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = { onJoin: () => void };

const communityWords = [
  "REAL PEOPLE",
  "SHARED FAITH",
  "BIG PURPOSE",
  "GOOD ENERGY",
];

export function LouderCommunity({ onJoin }: Props) {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#07132F] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-14 lg:py-36">
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-[#00A3E0]/15 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#FFC72C]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(11,34,101,.65),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Top signature */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-y border-white/10 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFC72C] text-[#07132F]">
            <Asterisk size={19} strokeWidth={2.8} />
          </span>
          <span className="text-[9px] font-black uppercase tracking-[.25em] text-white/65 sm:text-[10px]">
            The Louder Community
          </span>
        </div>

        <span className="hidden text-[9px] font-bold uppercase tracking-[.2em] text-white/35 sm:block">
          Faith is better together
        </span>

        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.18em] text-[#00A3E0]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00A3E0]" />
          YOU BELONG HERE
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl py-20 sm:py-24 lg:py-28">
        {/* Floating decorative elements */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-4 hidden h-16 w-16 items-center justify-center rounded-2xl border border-[#00A3E0]/30 bg-[#00A3E0]/10 text-[#00A3E0] lg:flex"
        >
          <Heart size={25} />
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute left-[3%] top-[36%] hidden text-[#FFC72C]/80 lg:block"
        >
          <Sparkles size={34} />
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_290px] lg:gap-12">
          {/* Main statement */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={reveal} className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E87722]" />
              <span className="text-[10px] font-black uppercase tracking-[.3em] text-[#E87722]">
                More than a gathering
              </span>
            </motion.div>

            <motion.h2
              variants={reveal}
              className="max-w-5xl text-[clamp(3.6rem,9.2vw,8.7rem)] font-black leading-[.83] tracking-[-.085em]"
            >
              YOUR PEOPLE.
              <br />
              <span className="text-[#FFC72C]">YOUR PLACE.</span>
              <br />
              <span className="relative inline-block">
                YOUR
                <span className="ml-3 text-[#00A3E0]">PURPOSE.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-3 left-0 h-2 w-full origin-left rounded-full bg-[#E87722]"
                />
              </span>
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-10 max-w-xl text-sm leading-8 text-blue-100/65 sm:text-base"
            >
              You don't have to have it all figured out. Come as you are,
              meet people who share your faith, grow together and discover
              how your life can make a difference beyond these walls.
            </motion.p>

            <motion.div variants={reveal} className="mt-9 flex flex-wrap items-center gap-5">
              <Button
                onClick={onJoin}
                className="group h-14 rounded-full bg-[#FFC72C] px-8 text-[11px] font-black uppercase tracking-[.12em] text-[#07132F] shadow-[0_12px_40px_rgba(255,199,44,.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffda69] hover:shadow-[0_18px_45px_rgba(255,199,44,.25)]"
              >
                I'M IN. LET'S GO
                <ArrowUpRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-white/40">
                <Users size={15} className="text-[#00A3E0]" />
                Come find your people
              </div>
            </motion.div>
          </motion.div>

          {/* Community visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[290px] lg:mt-10"
          >
            <div className="relative aspect-[.82] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0B2265] p-6 shadow-[0_30px_100px_rgba(0,0,0,.3)]">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#00A3E0]/30" />
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-[#FFC72C]/30" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[.25em] text-white/45">
                    LOUDER / 001
                  </span>
                  <Zap size={17} className="text-[#FFC72C]" />
                </div>

                <div>
                  <div className="mb-5 flex -space-x-3">
                    {[0, 1, 2, 3].map((item) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + item * 0.12 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#0B2265] ${
                          item % 2 === 0
                            ? "bg-[#FFC72C] text-[#07132F]"
                            : "bg-[#00A3E0] text-[#07132F]"
                        }`}
                      >
                        <Users size={19} />
                      </motion.div>
                    ))}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#0B2265] bg-[#E87722] text-[10px] font-black">
                      +
                    </div>
                  </div>

                  <p className="text-4xl font-black leading-[.92] tracking-[-.07em]">
                    BETTER
                    <br />
                    <span className="text-[#FFC72C]">TOGETHER.</span>
                  </p>
                  <p className="mt-4 max-w-[190px] text-[11px] leading-6 text-blue-100/55">
                    Different stories. One faith. A shared mission.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/15 pt-4">
                  <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/45">
                    Find your place
                  </span>
                  <ArrowDownRight size={20} className="text-[#00A3E0]" />
                </div>
              </div>
            </div>

            {/* Floating purpose sticker */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [-8, -5, -8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-7 top-[26%] flex h-24 w-24 rotate-[-8deg] flex-col items-center justify-center rounded-full bg-[#FFC72C] text-center text-[#07132F] shadow-xl sm:-right-10"
            >
              <Sparkles size={17} />
              <span className="mt-1 text-[9px] font-black uppercase leading-3 tracking-[.08em]">
                Made for
                <br />
                more
              </span>
            </motion.div>

            <div className="absolute -bottom-5 -left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[#E87722] text-white shadow-xl">
              <Heart size={23} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Moving community signature */}
      <div className="relative border-y border-white/10 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-9">
          {communityWords.map((word, index) => (
            <div key={word} className="flex items-center gap-5 sm:gap-9">
              <span className={`text-[9px] font-black uppercase tracking-[.2em] sm:text-[10px] ${
                index % 2 === 0 ? "text-white/55" : "text-[#00A3E0]"
              }`}>
                {word}
              </span>
              <Asterisk size={15} className="text-[#FFC72C]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
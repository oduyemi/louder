
"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Cross,
  Globe2,
  Heart,
  MoveUpRight,
} from "lucide-react";

type Props = {
  onJoin: () => void;
};

const pillars = [
  {
    number: "01",
    icon: Cross,
    title: "ENCOUNTER",
    description: "We gather to worship Jesus, grow in faith and encounter His presence.",
    color: "#00A3E0",
  },
  {
    number: "02",
    icon: Heart,
    title: "BELONG",
    description: "We build genuine friendships and a community where everyone has a place.",
    color: "#E87722",
  },
  {
    number: "03",
    icon: Globe2,
    title: "GO",
    description: "We take the Gospel beyond the rooftop and make disciples wherever we go.",
    color: "#00A859",
  },
];

export function LouderManifesto({ onJoin }: Props) {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, ease: "easeOut" as const },
  };

  return (
    <section
      id="movement"
      className="relative isolate overflow-hidden bg-[#F7F5EF] py-24 text-[#071744] sm:py-28 lg:py-36"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[#00A3E0]/[0.07] blur-[110px]" />
        <div className="absolute -bottom-40 -left-40 h-[440px] w-[440px] rounded-full bg-[#FFC72C]/[0.10] blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#071744_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Intro */}
        <motion.div {...reveal} className="mb-14 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E87722]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#071744]/65 sm:text-xs">
              The heart of Louder
            </span>
          </div>

          <span className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-[#071744]/35 sm:block">
            Faith · Community · Mission
          </span>
        </motion.div>

        {/* Main statement */}
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <motion.div {...reveal}>
            <p className="mb-7 max-w-md text-sm font-medium leading-7 text-[#071744]/60 sm:text-base">
              More than a meet-up. More than a moment. We are here for something
              bigger.
            </p>

            <h2 className="max-w-4xl text-[clamp(3.4rem,8vw,7.6rem)] font-black leading-[0.86] tracking-[-0.085em]">
              NOT HERE
              <br />
              TO FIT IN.
              <br />
              <span className="relative inline-block text-[#1265A8]">
                HERE TO
                <span className="absolute -bottom-1 left-0 h-[5px] w-[72%] rounded-full bg-[#FFC72C] sm:h-2" />
              </span>
              <br />
              <span className="text-[#E87722]">LIGHT IT UP.</span>
            </h2>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full border-[3px] border-[#F7F5EF] bg-[#00A3E0]" />
                <span className="h-8 w-8 rounded-full border-[3px] border-[#F7F5EF] bg-[#FFC72C]" />
                <span className="h-8 w-8 rounded-full border-[3px] border-[#F7F5EF] bg-[#E87722]" />
                <span className="h-8 w-8 rounded-full border-[3px] border-[#F7F5EF] bg-[#00A859]" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#071744]/55 sm:text-xs">
                One generation. One mission.
              </p>
            </div>
          </motion.div>

          {/* Mission statement */}
          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.12 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-[#071744] p-7 text-white shadow-[0_28px_80px_-35px_rgba(7,23,68,0.55)] sm:p-10 lg:p-11">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/[0.08]"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#00A3E0]/30 bg-[#00A3E0]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#41B6E6]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#41B6E6]" />
                  Our assignment
                </span>

                <h3 className="mt-9 max-w-md text-3xl font-black leading-[1.04] tracking-[-0.055em] sm:text-4xl">
                  THE GOSPEL
                  <br />
                  DOESN&apos;T STOP
                  <br />
                  <span className="text-[#FFC72C]">AT THE ROOFTOP.</span>
                </h3>

                <div className="my-8 h-px w-full bg-white/15" />

                <p className="max-w-md text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  Louder is a missional community focused on obeying the Great
                  Commission. We gather to worship, grow as disciples and take
                  the love of Jesus into our everyday world.
                </p>

                <div className="mt-9 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    Matthew 28:19–20
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFC72C] text-[#071744]">
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden -rotate-6 items-center gap-2 rounded-xl bg-[#FFC72C] px-5 py-3 text-[#071744] shadow-lg sm:flex">
              <span className="text-xs font-black uppercase tracking-[0.12em]">
                Faith in action
              </span>
              <MoveUpRight size={15} />
            </div>
          </motion.div>
        </div>

        {/* Mission pillars */}
        <motion.div {...reveal} className="mt-28 sm:mt-36">
          <div className="mb-9 flex flex-col justify-between gap-4 border-b border-[#071744]/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1265A8]">
                What moves us
              </span>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-4xl">
                OUR FAITH. OUR PEOPLE.
                <span className="text-[#E87722]"> OUR MISSION.</span>
              </h3>
            </div>
            <span className="text-xs font-medium text-[#071744]/45">
              Three expressions. One purpose.
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={reduceMotion ? {} : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#071744]/10 bg-white/65 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#071744]/20 hover:bg-white hover:shadow-[0_20px_50px_-35px_rgba(7,23,68,0.35)] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${item.color}16`, color: item.color }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-black tracking-widest text-[#071744]/25">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-10 text-xl font-black tracking-[-0.04em]">
                    {item.title}
                  </h4>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-[#071744]/60">
                    {item.description}
                  </p>

                  <div
                    className="mt-7 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          {...reveal}
          className="mt-20 flex flex-col gap-8 rounded-[1.75rem] bg-[#E8EDF5] p-7 sm:mt-24 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1265A8]">
              The invitation
            </span>
            <h3 className="mt-3 text-3xl font-black leading-[1.05] tracking-[-0.06em] sm:text-4xl">
              THE ROOFTOP IS JUST THE BEGINNING.
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#071744]/60">
              Come be part of a community that gathers with purpose and lives
              on mission.
            </p>
          </div>

          <button
            onClick={onJoin}
            className="group inline-flex shrink-0 items-center justify-between gap-8 rounded-full bg-[#071744] px-6 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#1265A8] sm:min-w-[220px]"
          >
            JOIN THE MOVEMENT
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFC72C] text-[#071744] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MoveUpRight,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { louderImages } from "./data";

type Props = {
  onJoin: () => void;
};

const values = ["Faith", "Friendship", "Worship", "Purpose"];

export function LouderHero({ onJoin }: Props) {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#071744] pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-48 top-0 h-[550px] w-[550px] rounded-full bg-[#00A3E0]/10 blur-[150px]" />

        <div className="absolute -right-48 top-[20%] h-[600px] w-[600px] rounded-full bg-[#123C8C]/50 blur-[150px]" />

        <div className="absolute bottom-[-200px] left-[35%] h-[450px] w-[450px] rounded-full bg-[#00A3E0]/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.9) .7px, transparent .7px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Main composition */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10 xl:gap-16">

          {/* Left content */}
          <div className="relative z-10">

            <motion.div {...reveal(0.12)}>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2.5 backdrop-blur-xl">
                <span className="text-[9px] font-bold uppercase tracking-[0.19em] text-white/75">
                  YOUR PEOPLE. YOUR PLACE.
                </span>

                <ArrowUpRight size={13} className="text-[#00A3E0]" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div {...reveal(0.2)}>
              <h1 className="text-[clamp(3.2rem,9.5vw,8.5rem)] font-black leading-[0.79] tracking-[-0.09em]">
                LET&apos;S GO

                <span className="relative mt-3 block text-[#FFC72C]">
                  TOGETHER<span className="text-[#00A3E0]">.</span>

                  <svg
                    viewBox="0 0 400 24"
                    fill="none"
                    className="absolute -bottom-4 left-1 h-3 w-[65%] sm:-bottom-5 sm:h-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 17C105 1 278 1 395 11"
                      stroke="#00A3E0"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Supporting statement */}
            <motion.div
              {...reveal(0.3)}
              className="mt-11 flex items-center gap-3 sm:mt-14"
            >
              <span className="h-px w-9 bg-[#00A3E0]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65 sm:text-xs">
                WELCOME TO THE
              </p>

              <span className="-rotate-2 rounded-sm bg-[#E87722] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-white sm:text-xs">
                LOUDER MOVEMENT.
              </span>

              <Zap size={17} fill="#FFC72C" className="text-[#FFC72C]" />
            </motion.div>

            <motion.p
              {...reveal(0.38)}
              className="mt-7 max-w-[470px] text-sm leading-[2] text-blue-100/65 sm:text-[15px]"
            >
              We&apos;re a community of people on a mission to 
              spread the Gospel. GO ye into all the world and 
              preach the Gospel. In the Louder Movement we would 
              come together to GO Together, using Afrogospel 
              Music & Creative Expressions as a vehicle.

              {/* <span className="text-white/90">
                {" "}Come as you are. Worship freely. Find your people.
                Make memories.
              </span> */}
            </motion.p>

            {/* Actions */}
            <motion.div
              {...reveal(0.46)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                onClick={onJoin}
                className="group h-[58px] rounded-full bg-[#FFC72C] px-8 text-[10px] font-black uppercase tracking-[0.13em] text-[#071744] shadow-[0_12px_35px_rgba(255,199,44,.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffda69] hover:shadow-[0_18px_40px_rgba(255,199,44,.2)]"
              >
                LET&apos;S GO TOGETHER

                <ArrowUpRight
                  size={17}
                  className="ml-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Button>

              <a
                href="#experience"
                className="group inline-flex h-[58px] items-center justify-center gap-3 rounded-full border border-white/15 px-7 text-[10px] font-bold uppercase tracking-[0.13em] text-white/80 transition-all duration-300 hover:border-[#00A3E0]/60 hover:bg-[#00A3E0]/10 hover:text-white"
              >
                EXPLORE THE VIBE

                <ArrowDown
                  size={15}
                  className="text-[#00A3E0] transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </motion.div>

            {/* Values */}
            <motion.div
              {...reveal(0.55)}
              className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-6 sm:mt-14"
            >
              {values.map((item, index) => (
                <div key={item} className="flex items-center gap-5">
                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.17em] ${
                      index === 0
                        ? "text-[#FFC72C]"
                        : "text-white/45"
                    }`}
                  >
                    {item}
                  </span>

                  {index !== values.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-[#00A3E0]" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual composition */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.94, y: 30 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              delay: reduceMotion ? 0 : 0.25,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative mx-auto w-full max-w-[590px] lg:ml-auto"
          >
            {/* Backdrop frame */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[#00A3E0]/25 sm:-right-5 sm:-top-5" />

            {/* Main photo */}
            <div className="relative aspect-[4/4.65] overflow-hidden rounded-[1.8rem] bg-[#102B60] shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:aspect-[4/4.2]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] hover:scale-[1.04]"
                style={{
                  backgroundImage: `url("${louderImages.hero}")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071744] via-[#071744]/20 to-[#071744]/5" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#071744]/25 to-transparent" />

              {/* Top photo metadata */}
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#071744]/45 px-4 py-2.5 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFC72C]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-white">
                    THIS IS OUR MOMENT
                  </span>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl">
                  <MoveUpRight size={17} />
                </div>
              </div>

              {/* Image typography */}
              <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-9 sm:right-9">
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-[#00A3E0]" />

                  <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#41B6E6] sm:text-[9px]">
                    LOUDER ON THE ROOFTOP
                  </p>
                </div>

                <h2 className="mt-5 text-[clamp(3.7rem,8vw,6.6rem)] font-black leading-[0.78] tracking-[-0.09em]">
                  MAKE

                  <span className="block text-[#FFC72C]">
                    SOME
                  </span>

                  NOISE<span className="text-[#00A3E0]">.</span>
                </h2>

                <div className="mt-7 flex items-center justify-between border-t border-white/25 pt-5">
                  <p className="text-[8px] font-bold uppercase tracking-[0.19em] text-white/70 sm:text-[9px]">
                    COME AS YOU ARE. BELONG AS YOU ARE.
                  </p>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC72C] text-[#071744] transition-transform duration-300 hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating invitation card */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -7, 0], rotate: [-3, -1, -3] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-3 z-20 rounded-2xl bg-[#FFC72C] px-5 py-4 text-[#071744] shadow-[0_15px_40px_rgba(0,0,0,.25)] sm:-left-8 sm:px-7 sm:py-5"
            >
              <div className="flex items-center gap-2">
                <Star size={12} fill="currentColor" />

                <span className="text-[8px] font-black uppercase tracking-[0.19em]">
                  WELCOME TO THE
                </span>
              </div>

              <p className="mt-1 text-lg font-black tracking-[-0.06em] sm:text-2xl">
                LOUDER MOVEMENT.
              </p>
            </motion.div>

            {/* Small decorative detail */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: [0, 12, 0] }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-[36%] z-20 hidden h-[76px] w-[76px] items-center justify-center rounded-full border border-white/20 bg-[#071744] shadow-xl sm:flex"
            >
              <div className="flex flex-col items-center">
                <Sparkles size={17} className="text-[#00A3E0]" />

                <span className="mt-1 text-[7px] font-black uppercase tracking-[0.14em] text-white">
                  GOOD
                </span>

                <span className="text-[7px] font-black uppercase tracking-[0.14em] text-[#FFC72C]">
                  ENERGY
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Asterisk, Camera, MoveUpRight } from "lucide-react";
import { galleryItems } from "./data";

export function LouderGallery() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="moments"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#F7F5EF] px-5 py-24 text-[#07132F] sm:px-8 sm:py-32 lg:px-14"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#FFC72C]/10 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#00A3E0]/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(#07132F_0.6px,transparent_0.6px)] [background-size:18px_18px]" />
      </div>

      <div className="mx-auto max-w-[1440px]">
        {/* Editorial heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="relative mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_350px] lg:items-end"
        >
          <div>
            <motion.div variants={reveal} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0B2265] text-[#FFC72C]">
                <Camera size={17} />
              </span>
              <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#0B2265]">
                The Louder archives / 001
              </span>
            </motion.div>

            <motion.h2
              variants={reveal}
              className="mt-8 text-[clamp(3.6rem,8.5vw,8rem)] font-black leading-[.79] tracking-[-.085em]"
            >
              LIFE HAPPENS.
              <br />
              <span className="text-[#E87722]">WE CAPTURE</span>
              <br />
              THE <span className="text-[#0B2265]">MOMENTS.</span>
            </motion.h2>
          </div>

          <motion.div variants={reveal} className="relative pb-1 lg:pl-5">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-px w-8 bg-[#E87722]" />
              <span className="text-[9px] font-black uppercase tracking-[.24em] text-[#E87722]">
                A life in community
              </span>
            </div>

            <p className="max-w-sm text-sm leading-8 text-[#07132F]/65 sm:text-base">
              The faces, the laughter, the worship, the moments that stay with
              you. Every frame tells a little part of the Louder story.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[9px] font-black uppercase tracking-[.18em] text-[#0B2265]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0B2265]/20">
                <ArrowUpRight size={15} />
              </span>
              Scroll through the memories
            </div>
          </motion.div>

          <Asterisk className="absolute right-[30%] top-0 hidden h-12 w-12 rotate-12 text-[#FFC72C] lg:block" />
        </motion.div>

        {/* Gallery composition */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[112px]">
          {galleryItems.map((item, index) => {
            const layouts = [
              "lg:col-span-7 lg:row-span-4",
              "lg:col-span-5 lg:row-span-3",
              "lg:col-span-4 lg:row-span-3",
              "lg:col-span-3 lg:row-span-3",
              "lg:col-span-5 lg:row-span-3",
              "lg:col-span-4 lg:row-span-3",
            ];

            return (
              <motion.figure
                key={item.label}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 35,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.75,
                  delay: reduceMotion ? 0 : (index % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative isolate min-h-[260px] overflow-hidden rounded-[1.5rem] bg-[#0B2265] sm:min-h-[300px] lg:min-h-0 ${
                  layouts[index % layouts.length]
                }`}
              >
                {/* Image */}
                <div
                  role="img"
                  aria-label={item.alt}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.07]"
                  style={{ backgroundImage: `url("${item.image}")` }}
                />

                {/* Layered image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06112B]/90 via-[#06112B]/10 to-[#06112B]/5 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 border border-white/0 transition-all duration-500 group-hover:border-white/30" />

                {/* Top index */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#07132F]/25 px-3 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFC72C]" />
                  <span className="text-[8px] font-black uppercase tracking-[.2em] text-white">
                    Frame {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Hover icon */}
                <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#FFC72C] text-[#07132F] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <MoveUpRight size={17} />
                </div>

                {/* Caption */}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <span className="mb-2 block text-[8px] font-black uppercase tracking-[.22em] text-[#FFC72C]">
                      LOUDER MOMENTS
                    </span>
                    <span className="block text-sm font-black uppercase tracking-[.08em] text-white sm:text-base">
                      {item.label}
                    </span>
                  </div>

                  <Asterisk
                    size={23}
                    className="shrink-0 text-white/70 transition-transform duration-700 group-hover:rotate-90 group-hover:text-[#FFC72C]"
                  />
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
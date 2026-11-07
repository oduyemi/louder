"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Heart, Music2, Users, AudioLines } from "lucide-react";
import { experiences } from "./data";

const icons = [Music2, Users, AudioLines];
const accents = {
  gold: "text-[#FFC72C]",
  cyan: "text-[#00A3E0]",
  orange: "text-[#E87722]",
};

export function LouderExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-28 bg-[#091B40] px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-[10px] font-black uppercase tracking-[.3em] text-[#FFC72C]">THE LOUDER EXPERIENCE</p>
          <h2 className="mt-6 max-w-4xl text-5xl font-black leading-[.9] tracking-[-.075em] sm:text-7xl">
            COME FOR THE VIBE.<br /><span className="text-[#00A3E0]">STAY FOR THE PEOPLE.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-8 text-blue-100/55 sm:text-base">
            Big moments, genuine connections and a place where you can show up as your full self.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article key={item.number} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .1, duration: .55 }} whileHover={reduceMotion ? undefined : { y: -7 }} className="group overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#07132F]">
                <div className="relative h-[245px] overflow-hidden">
                  <div role="img" aria-label={item.alt} className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${item.image}")` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07132F] via-transparent to-[#07132F]/10" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#07132F]/65 px-3 py-2 text-[9px] font-black tracking-[.17em] backdrop-blur">{item.tag}</span>
                  <span className="absolute bottom-4 right-5 text-4xl font-black text-white/35">{item.number}</span>
                </div>
                <div className="p-7">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${accents[item.tone as keyof typeof accents]}`}>
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-2xl font-black leading-tight tracking-[-.04em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-blue-100/55">{item.copy}</p>
                  <div className="mt-7 flex items-center justify-between">
                    <span className="h-1 w-10 rounded-full bg-[#FFC72C] transition-all group-hover:w-20" />
                    <Heart size={17} className="text-white/20 transition-colors group-hover:fill-[#E87722] group-hover:text-[#E87722]" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

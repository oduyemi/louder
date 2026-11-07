"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

type Props = { onJoin: () => void };

export function LouderManifesto({ onJoin }: Props) {
  return (
    <section id="movement" className="scroll-mt-28 bg-[#F7F5EF] px-5 py-24 text-[#07132F] sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-flex -rotate-2 items-center gap-2 rounded-md bg-[#FFC72C] px-4 py-2 text-[9px] font-black uppercase tracking-[.18em]">
            <Sparkles size={14} /> MORE THAN A MEET-UP
          </span>
          <h2 className="mt-8 text-[clamp(3.7rem,7vw,7rem)] font-black leading-[.82] tracking-[-.085em]">
            NOT HERE<br />TO FIT IN<span className="text-[#E87722]">.</span><br />
            <span className="text-[#0B2265]">HERE TO</span><br />LIGHT IT UP<span className="text-[#00A3E0]">.</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: .1 }} className="flex flex-col justify-center">
          <p className="text-xl font-black leading-[1.35] tracking-[-.035em] sm:text-3xl">
            We&apos;re a generation with something to say, something to share and a whole lot of love to give.
          </p>
          <p className="mt-6 text-sm leading-8 text-[#07132F]/65 sm:text-base">
            Louder on the Rooftop is a youth expression of worship, faith and fellowship. A place to encounter God, celebrate life, build genuine friendships and discover the beauty of belonging.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#07132F]/65 sm:text-base">
            And it doesn't end when the music stops. We take the love, the hope and the message beyond the rooftop — into our streets, our communities and our everyday lives.
          </p>
          <button onClick={onJoin} className="mt-8 inline-flex w-fit items-center gap-3 text-xs font-black uppercase tracking-[.15em] text-[#0B2265] transition-all hover:gap-5">
            FIND YOUR PLACE HERE <ArrowUpRight size={17} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

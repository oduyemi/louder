"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = { onJoin: () => void };

export function LouderCommunity({ onJoin }: Props) {
  return (
    <section className="relative isolate overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A3E0]/15 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,34,101,.35),transparent_65%)]" />
      </div>

      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} className="mx-auto max-w-4xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FFC72C]/25 bg-[#FFC72C]/10 text-[#FFC72C]">
          <Users size={27} />
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[.3em] text-[#00A3E0]"><Sparkles size={14} /> YOUR PEOPLE ARE HERE</p>
        <h2 className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-black leading-[.84] tracking-[-.085em]">
          DON'T JUST<br /><span className="text-[#FFC72C]">HEAR ABOUT IT.</span><br />BE PART OF IT<span className="text-[#00A3E0]">.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-blue-100/60 sm:text-base">
          No pressure to have it all figured out. Just show up, meet your people, find your place and be part of something bigger.
        </p>
        <Button onClick={onJoin} className="mt-9 h-14 rounded-full bg-[#FFC72C] px-9 text-xs font-black text-[#07132F] shadow-[0_12px_40px_rgba(255,199,44,.18)] hover:-translate-y-1 hover:bg-[#ffda69]">
          I'M IN. LET'S GO <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="mt-6 text-[9px] font-black uppercase tracking-[.2em] text-white/30">ONE COMMUNITY. ONE SHARED PASSION.</p>
      </motion.div>
    </section>
  );
}

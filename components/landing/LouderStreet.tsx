"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Heart, MoveUpRight } from "lucide-react";
import { louderImages } from "./data";

export function LouderStreet() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${louderImages.crowd}")` }} />
        <div className="absolute inset-0 bg-[#06112B]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07132F] via-[#07132F]/70 to-[#07132F]/20" />
      </div>

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E87722]/35 bg-[#E87722]/10 px-4 py-2 text-[9px] font-black uppercase tracking-[.2em] text-[#ff9b59]">
            <MoveUpRight size={14} /> THE MOVEMENT GOES BEYOND
          </span>
          <h2 className="mt-8 text-[clamp(4rem,8vw,8rem)] font-black leading-[.79] tracking-[-.09em]">
            LOUDER<br /><span className="text-[#FFC72C]">ON THE</span><br /><span className="text-[#00A3E0]">STREET.</span>
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-8 text-blue-100/70 sm:text-base">
            We don't just gather to make noise. We show up to make a difference. Taking love, hope, faith and the message of Jesus beyond the rooftop and into the world around us.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["FAITH IN ACTION", "REAL CONNECTIONS", "POSITIVE IMPACT"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[9px] font-black tracking-[.12em] text-white/75">{tag}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .7 }} className="relative mx-auto w-full max-w-[430px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url("${louderImages.street}")` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06112B] via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] font-black tracking-[.2em] text-[#FFC72C]">THIS IS BIGGER THAN US.</p>
              <h3 className="mt-3 text-4xl font-black leading-none tracking-[-.06em] sm:text-5xl">TAKE THE<br /><span className="text-[#00A3E0]">LOVE OUT.</span></h3>
            </div>
          </div>
          <motion.div animate={reduceMotion ? undefined : { rotate: [6, -5, 6] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-4 -top-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#FFC72C] p-4 text-center text-[10px] font-black uppercase leading-tight text-[#07132F] shadow-xl sm:-right-8 sm:h-28 sm:w-28">
            LOVE<br />IN<br />ACTION <Heart className="absolute -right-1 -top-2 fill-[#E87722] text-[#E87722]" size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

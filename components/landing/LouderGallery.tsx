"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { galleryItems } from "./data";

export function LouderGallery() {
  return (
    <section id="moments" className="scroll-mt-28 bg-[#F7F5EF] px-5 py-24 text-[#07132F] sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.3em] text-[#0B2265]"><Camera size={15} /> MOMENTS THAT MATTER</p>
            <h2 className="mt-5 text-5xl font-black leading-[.86] tracking-[-.075em] sm:text-7xl">THE VIBE IS<br /><span className="text-[#E87722]">UNMATCHED.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#07132F]/60">The moments, the memories, the people and the energy. This is what being part of Louder feels like.</p>
        </motion.div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[245px] md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <motion.figure key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .08 }} className={`group relative overflow-hidden rounded-[1.4rem] bg-[#0B2265] ${item.className}`}>
              <div role="img" aria-label={item.alt} className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${item.image}")` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06112B]/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC72C]" /> {item.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-8 text-center text-[9px] font-black uppercase tracking-[.22em] text-[#07132F]/35">MORE THAN AN EVENT. A WHOLE EXPERIENCE.</p>
      </div>
    </section>
  );
}

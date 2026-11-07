"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, AudioLines, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { louderNav } from "./data";

type Props = { onJoin: () => void };

export function LouderNav({ onJoin }: Props) {
  const [open, setOpen] = useState(false);

  const join = () => {
    setOpen(false);
    onJoin();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between rounded-2xl border border-white/10 bg-[#07132F]/85 px-4 shadow-[0_12px_50px_rgba(0,0,0,.2)] backdrop-blur-2xl sm:px-6">
        <a href="#" aria-label="Louder home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC72C] text-[#07132F] transition-transform group-hover:-rotate-6">
            <AudioLines size={21} strokeWidth={2.7} />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-[-.075em] text-white">LOUDER<span className="text-[#00A3E0]">.</span></span>
            <span className="mt-1 block text-[8px] font-extrabold uppercase tracking-[.23em] text-white/45">ON THE ROOFTOP</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {louderNav.map((item) => (
            <a key={item.href} href={item.href} className="text-[12px] font-bold text-white/60 transition hover:text-[#FFC72C]">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button onClick={onJoin} className="h-11 rounded-full bg-[#FFC72C] px-5 text-[11px] font-black text-[#07132F] hover:bg-[#ffda69]">
            LET'S GO TOGETHER <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            className="mx-3 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#091B40] p-4 shadow-2xl sm:mx-6 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {louderNav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-bold text-white/75 hover:bg-white/5 hover:text-[#FFC72C]">
                  {item.label}
                </a>
              ))}
              <Button onClick={join} className="mt-3 h-12 rounded-full bg-[#FFC72C] font-black text-[#07132F] hover:bg-[#ffda69]">
                LET'S GO TOGETHER <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

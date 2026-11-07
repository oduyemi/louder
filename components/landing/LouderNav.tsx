
"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  MoveUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { louderNav } from "./data";

type Props = {
  onJoin: () => void;
};

export function LouderNav({ onJoin }: Props) {
  const [open, setOpen] = useState(false);

  const join = () => {
    setOpen(false);
    onJoin();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="relative mx-auto flex h-[72px] max-w-[1440px] items-center justify-between rounded-2xl border border-white/10 bg-[#07132F]/90 px-4 shadow-[0_16px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#top"
          aria-label="Louder on the Rooftop home"
          className="group relative flex shrink-0 items-center"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Louder on the Rooftop"
            width={180}
            height={64}
            priority
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-12"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {louderNav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white/60 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#FFC72C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            onClick={onJoin}
            className="group h-11 rounded-full bg-[#FFC72C] px-5 text-[10px] font-black uppercase tracking-[0.1em] text-[#07132F] shadow-[0_5px_20px_rgba(255,199,44,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffda69] hover:shadow-[0_8px_28px_rgba(255,199,44,0.22)]"
          >
            LET&apos;S GO TOGETHER
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="louder-mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-300 hover:border-[#FFC72C]/60 hover:bg-white/10 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="absolute"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="louder-mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-3 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#091B40]/[.98] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:mx-6 lg:hidden"
          >
            {/* Menu heading */}
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#00A3E0]">
                  YOUR PEOPLE. YOUR PLACE.
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  Find your way around.
                </p>
              </div>

              <span className="rounded-full bg-[#FFC72C] px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-[#07132F]">
                WE&apos;RE OUTSIDE
              </span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col">
              {louderNav.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.055 }}
                  className="group flex items-center justify-between border-b border-white/[0.07] py-4 text-base font-black tracking-tight text-white/75 transition-colors hover:text-[#FFC72C]"
                >
                  <span>{item.label}</span>
                  <MoveUpRight
                    size={17}
                    className="text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FFC72C]"
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA */}
            <Button
              onClick={join}
              className="mt-5 h-13 w-full rounded-full bg-[#FFC72C] text-[11px] font-black uppercase tracking-[0.12em] text-[#07132F] transition-all hover:bg-[#ffda69]"
            >
              LET&apos;S GO TOGETHER
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="mt-5 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
              LOUDER ON THE ROOFTOP
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { YoutubeFilled, InstagramFilled } from "@ant-design/icons";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Menu,
  Music2,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { JoinCommunityDialog } from "@/dialogs/join-community-dialog";

const experiences = [
  {
    number: "01",
    eyebrow: "THE SOUND",
    title: "Worship without holding back.",
    description:
      "A space to lift our voices, express our hearts and celebrate the goodness of God.",
    icon: Music2,
    accent: "cyan",
  },
  {
    number: "02",
    eyebrow: "THE PEOPLE",
    title: "Find your people.",
    description:
      "Connect with people who share your passion for faith, worship and meaningful relationships.",
    icon: Users,
    accent: "gold",
  },
  {
    number: "03",
    eyebrow: "THE PURPOSE",
    title: "Take the sound beyond the rooftop.",
    description:
      "More than a gathering. A generation expressing its faith and making its voice heard.",
    icon: AudioLines,
    accent: "cyan",
  },
];

const navItems = [
  { label: "The story", href: "#about" },
  { label: "The experience", href: "#experience" },
  { label: "Community", href: "#community" },
];

const marqueeItems = [
  "ONE SOUND",
  "ONE GENERATION",
  "ALL HEART",
  "ALL WORSHIP",
  "ONE COMMUNITY",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export const Louder = () => {
  const [joinOpen, setJoinOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const openJoinDialog = () => {
    setMobileMenuOpen(false);
    setJoinOpen(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#07132F] text-white selection:bg-brand-gold selection:text-brand-blue-dark">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-[#07132F]/85 backdrop-blur-2xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14"
        >
          <a href="#" aria-label="Louder on the Rooftop home" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-brand-gold text-brand-blue-dark shadow-[0_0_28px_rgba(255,199,44,0.18)] transition-transform group-hover:rotate-[-8deg]">
              <AudioLines className="h-5 w-5" strokeWidth={2.6} />
            </span>
            <span className="leading-none">
              <span className="block text-lg font-black tracking-[-0.06em]">
                LOUDER<span className="text-brand-cyan">.</span>
              </span>
              <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.24em] text-white/45">
                ON THE ROOFTOP
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-semibold text-white/60 transition-colors hover:text-brand-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              onClick={openJoinDialog}
              className="h-11 rounded-full bg-brand-gold px-6 text-xs font-black tracking-wide text-brand-blue-dark shadow-[0_8px_30px_rgba(255,199,44,0.12)] transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light"
            >
              JOIN THE COMMUNITY <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-brand-cyan hover:text-brand-cyan lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#091B4F] lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/5 hover:text-brand-gold"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  onClick={openJoinDialog}
                  className="mt-3 h-12 rounded-full bg-brand-gold font-black text-brand-blue-dark hover:bg-brand-gold-light"
                >
                  JOIN THE COMMUNITY <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="relative isolate min-h-[850px] overflow-hidden pt-28 sm:min-h-[900px] lg:min-h-[790px]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-brand-cyan/15 blur-[150px]" />
          <div className="absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full bg-brand-gold/10 blur-[150px]" />
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07132F] to-transparent" />
        </div>

        <div className="section-container relative z-10 grid items-center gap-14 pb-24 pt-12 lg:min-h-[690px] lg:grid-cols-[1.08fr_.92fr] lg:gap-8 lg:pb-28 lg:pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="relative z-10"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-brand-sky sm:text-[10px]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
                </span>
                A GLOBAL HARVEST CHURCH EXPERIENCE
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-white/45 sm:text-xs">
                ONE SOUND. ONE GENERATION.
              </p>
              <h1 className="max-w-[850px] text-[clamp(4.1rem,10.4vw,8.8rem)] font-black leading-[0.79] tracking-[-0.085em]">
                LOUDER
                <span className="block text-brand-gold">ON THE</span>
                <span className="block">
                  ROOFTOP<span className="text-brand-cyan">.</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-sm leading-7 text-blue-100/65 sm:text-base sm:leading-8"
            >
              Not just a sound you hear. A community you belong to. Come as you are,
              lift your voice and be part of something bigger.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={openJoinDialog}
                className="group h-14 rounded-full bg-brand-gold px-7 text-xs font-black tracking-wide text-brand-blue-dark shadow-[0_12px_38px_rgba(255,199,44,0.18)] transition-all hover:-translate-y-1 hover:bg-brand-gold-light"
              >
                I'M IN. JOIN THE COMMUNITY
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <a
                href="#about"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 text-xs font-black tracking-wide text-white/80 transition hover:border-brand-cyan/60 hover:bg-brand-cyan/10 hover:text-white"
              >
                FEEL THE VIBE <ArrowDown className="h-4 w-4 text-brand-cyan" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3 text-xs text-white/40">
              <span className="flex items-center gap-1.5 text-brand-gold">
                <Sparkles className="h-4 w-4" />
                <span className="font-bold">FAITH</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>WORSHIP</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>COMMUNITY</span>
            </motion.div>
          </motion.div>

          {/* Replace this local image with an approved rooftop worship photograph. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-brand-cyan/15 blur-3xl" />
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] border border-white/15 bg-brand-blue-deep shadow-[0_35px_100px_rgba(0,0,0,.45)] sm:aspect-[4/4.2]">
              <div
                className="absolute inset-0 scale-105 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/louder/rooftop-worship.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06112B] via-[#071744]/30 to-[#071744]/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07132F]/35 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#07132F]/55 px-3 py-2 backdrop-blur-xl sm:left-7 sm:top-7">
                <Zap className="h-3.5 w-3.5 text-brand-gold" />
                <span className="text-[9px] font-black uppercase tracking-[0.17em] text-white">
                  THE SOUND OF A GENERATION
                </span>
              </div>

              <div className="absolute inset-x-0 top-[38%] flex items-center justify-center gap-1.5 px-8">
                {Array.from({ length: 19 }).map((_, index) => (
                  <motion.span
                    key={index}
                    animate={reduceMotion ? undefined : { height: [14, 30 + ((index * 7) % 48), 18] }}
                    transition={{
                      duration: 0.75 + (index % 4) * 0.16,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    className="w-1.5 rounded-full bg-brand-gold shadow-[0_0_18px_rgba(255,199,44,.5)] sm:w-2"
                    style={{ height: 20 }}
                  />
                ))}
              </div>

              <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8">
                <p className="text-[9px] font-black uppercase tracking-[0.32em] text-brand-cyan">
                  LOUDER ON THE ROOFTOP
                </p>
                <p className="mt-3 text-5xl font-black leading-[0.82] tracking-[-0.07em] sm:text-7xl">
                  MAKE
                  <span className="block text-brand-gold">SOME</span>
                  NOISE<span className="text-brand-cyan">.</span>
                </p>
                <div className="mt-5 h-1 w-16 rounded-full bg-brand-cyan" />
              </div>
              <div className="absolute bottom-7 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl sm:right-8">
                <AudioLines className="h-5 w-5 text-brand-gold" />
              </div>
            </div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [2, 0, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/15 bg-[#0B1C43]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
                THIS IS YOUR INVITE
              </p>
              <p className="mt-1 text-lg font-black tracking-tight">
                FIND YOUR PEOPLE<span className="text-brand-gold">.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/70 to-transparent" />
      </section>

      {/* Moving brand strip */}
      <div className="overflow-hidden border-y border-white/10 bg-brand-blue">
        <motion.div
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center gap-8 py-4"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.24em] text-white/90 sm:text-xs">
              {item}
              <span className="text-brand-gold">✳</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* About */}
      <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
        <div className="section-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-cyan">
              SO, WHAT'S LOUDER?
            </p>
            <h2 className="mt-6 text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              MORE THAN
              <span className="block text-brand-gold">AN EVENT.</span>
              IT'S A
              <span className="block text-brand-cyan">MOVEMENT.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="flex flex-col justify-center"
          >
            <p className="text-base leading-8 text-blue-100/70 sm:text-lg">
              Louder on the Rooftop is a creative expression of worship, faith and
              fellowship. It is about creating an atmosphere where people can come
              together, celebrate God and discover the beauty of belonging to
              something bigger than themselves.
            </p>
            <p className="mt-5 text-base leading-8 text-blue-100/55 sm:text-lg">
              And the experience doesn't have to end when the music stops. The
              Louder Community gives us a reason to stay connected.
            </p>
            <button
              type="button"
              onClick={openJoinDialog}
              className="mt-8 inline-flex w-fit items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-brand-gold transition-all hover:gap-5"
            >
              FIND YOUR PLACE HERE <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="scroll-mt-24 border-y border-white/[0.08] bg-[#091B40] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
      >
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">
              THE LOUDER EXPERIENCE
            </p>
            <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl">
              COME FOR THE SOUND.
              <span className="block text-brand-cyan">STAY FOR THE PEOPLE.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-blue-100/55 sm:text-base sm:leading-8">
              More than music. More than a gathering. It is about the people, the
              atmosphere and the connections that make every experience meaningful.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const isGold = item.accent === "gold";
              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  whileHover={reduceMotion ? undefined : { y: -7 }}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07132F] p-7 transition-colors duration-300 hover:border-brand-cyan/45 sm:p-8"
                >
                  <div className={`absolute -right-14 -top-14 h-40 w-40 rounded-full blur-[70px] transition-opacity group-hover:opacity-100 ${isGold ? "bg-brand-gold/15 opacity-50" : "bg-brand-cyan/15 opacity-50"}`} />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black tracking-[0.25em] ${isGold ? "text-brand-gold" : "text-brand-cyan"}`}>
                        {item.eyebrow}
                      </span>
                      <span className="text-xs font-black text-white/25">{item.number}</span>
                    </div>
                    <div className={`mt-9 flex h-14 w-14 items-center justify-center rounded-2xl border ${isGold ? "border-brand-gold/25 bg-brand-gold/10 text-brand-gold" : "border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan"} transition-all duration-300 group-hover:scale-105`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 max-w-[260px] text-2xl font-black leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-blue-100/55">
                      {item.description}
                    </p>
                    <div className={`mt-8 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-20 ${isGold ? "bg-brand-gold" : "bg-brand-cyan"}`} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section id="community" className="relative isolate scroll-mt-24 overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/15 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,34,101,.28),transparent_65%)]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="section-container relative mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-gold/25 bg-brand-gold/10 text-brand-gold shadow-[0_0_40px_rgba(255,199,44,.08)]">
            <Users className="h-7 w-7" />
          </div>
          <p className="mt-8 text-[10px] font-black uppercase tracking-[0.32em] text-brand-gold">
            YOUR PEOPLE ARE HERE
          </p>
          <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
            DON'T JUST
            <span className="block text-brand-cyan">HEAR ABOUT IT.</span>
            <span className="block">BE PART OF IT.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-blue-100/60 sm:text-base sm:leading-8">
            Stay connected beyond the moment. Meet people, share the journey and
            be part of the Louder Community.
          </p>
          <Button
            onClick={openJoinDialog}
            className="mt-9 h-14 rounded-full bg-brand-gold px-9 text-xs font-black tracking-wide text-brand-blue-dark shadow-[0_12px_40px_rgba(255,199,44,.18)] transition-all hover:-translate-y-1 hover:bg-brand-gold-light"
          >
            COUNT ME IN <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
            ONE COMMUNITY. ONE SHARED PASSION.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#06102A] px-5 py-10 sm:px-8 lg:px-14">
        <div className="section-container flex flex-col items-center justify-between gap-7 sm:flex-row">
          <a href="#" className="text-center sm:text-left">
            <span className="text-xl font-black tracking-[-0.06em]">
              LOUDER<span className="text-brand-cyan">.</span>
            </span>
            <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
              ON THE ROOFTOP
            </span>
          </a>
          <p className="text-center text-xs text-white/40">
            An experience by Global Harvest Church, Maryland, Lagos.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-brand-gold hover:text-brand-gold"
            >
              <InstagramFilled  />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-brand-gold hover:text-brand-gold"
            >
              <YoutubeFilled  />
            </a>
          </div>
        </div>
        <div className="section-container mt-8 border-t border-white/[0.07] pt-6 text-center text-[10px] text-white/25">
          © {new Date().getFullYear()} Louder on the Rooftop. All rights reserved.
        </div>
      </footer>

      <JoinCommunityDialog open={joinOpen} onOpenChange={setJoinOpen} />
    </main>
  );
}

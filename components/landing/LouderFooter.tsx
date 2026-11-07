"use client";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "The Movement", href: "#movement" },
  { label: "Experiences", href: "#experience" },
  { label: "Moments", href: "#moments" },
];

export function LouderFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#07132F] px-5 pb-8 pt-16 text-white sm:px-8 sm:pt-20 lg:px-14">
      <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-96 w-96 rounded-full bg-[#00A3E0]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-12 border-b border-white/10 pb-12 lg:flex-row lg:items-center">
          {/* Brand */}
          <div>
            <Link href="#home" className="group inline-flex items-center gap-3">
                <Image
                    src="/images/logo/logo.png"
                    alt="Louder on the Rooftop"
                    width={180}
                    height={64}
                    priority
                    className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-12"
                />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/50">
              A missional community focused on obeying the Great Commission.
              Living loud for Jesus, wherever life takes us.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[9px] font-black uppercase tracking-[.25em] text-[#FFC72C]">
              Explore
            </p>

            <nav className="flex flex-wrap gap-x-7 gap-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-1 text-xs font-bold text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[.15em] text-white/35">
            © 2026 Louder | All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-white/40">
            Made with
            <Heart size={11} className="fill-[#E87722] text-[#E87722]" />
            for His glory.
          </p>

          <Link
            href="#home"
            className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[.18em] text-[#00A3E0] transition-colors hover:text-[#FFC72C]"
          >
            Back to top
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
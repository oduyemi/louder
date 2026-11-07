import { Instagram, Youtube } from "lucide-react";
import { louderNav } from "./data";

export function LouderFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#06102A] px-5 py-11 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="#" className="text-center sm:text-left">
            <span className="text-2xl font-black tracking-[-.075em]">LOUDER<span className="text-[#00A3E0]">.</span></span>
            <span className="mt-1 block text-[8px] font-black uppercase tracking-[.25em] text-white/35">ON THE ROOFTOP</span>
          </a>
          <div className="flex flex-wrap justify-center gap-6">
            {louderNav.map((item) => <a key={item.href} href={item.href} className="text-xs font-semibold text-white/45 transition hover:text-[#FFC72C]">{item.label}</a>)}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#FFC72C] hover:text-[#FFC72C]"><Instagram size={17} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#FFC72C] hover:text-[#FFC72C]"><Youtube size={17} /></a>
          </div>
        </div>
        <div className="mt-9 flex flex-col items-center justify-between gap-3 border-t border-white/[.07] pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] text-white/30">© {new Date().getFullYear()} Louder on the Rooftop. All rights reserved.</p>
          <p className="text-[10px] text-white/30">An experience by Global Harvest Church, Maryland, Lagos.</p>
        </div>
      </div>
    </footer>
  );
}

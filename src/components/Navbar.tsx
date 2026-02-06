"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-sm transition-colors ${pathname === href ? "text-black font-semibold" : "text-[#666] hover:text-black"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(255,255,255,0.85)] border-b border-black/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image src="/LOGOD.png" alt="DVM Logo" width={48} height={48} />
          <span>DecentraVM</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/manifesto" className={linkClass("/manifesto")}>
            Manifesto
          </Link>
          <Link href="#" className="text-sm text-[#666] hover:text-black transition-colors">
            Nerd wall
          </Link>
          <Link href="https://x.com/Decentra_VM" target="_blank" className="text-sm text-[#666] hover:text-black transition-colors">
            X
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-black rounded-sm transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-black rounded-sm transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-black rounded-sm transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-black/[0.08] bg-[rgba(255,255,255,0.97)] px-6 py-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className={linkClass("/")}>Home</Link>
          <Link href="/manifesto" onClick={() => setOpen(false)} className={linkClass("/manifesto")}>Manifesto</Link>
          <Link href="#" className="text-sm text-[#666] hover:text-black">Nerd wall</Link>
          <Link href="https://x.com/Decentra_VM" target="_blank" className="text-sm text-[#666] hover:text-black">X</Link>
        </div>
      )}
    </nav>
  );
}

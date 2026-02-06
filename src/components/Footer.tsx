import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] pt-0 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border-t border-white/[0.08] mb-8" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-white/30">
            &copy; 2026 DecentraVM — Virtual Machine. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/in/decentra-vm-18b3473ab/" target="_blank" className="text-sm text-white/40 hover:text-white transition-colors">LinkedIn</Link>
            <Link href="https://github.com/Decentra-VM" target="_blank" className="text-sm text-white/40 hover:text-white transition-colors">GitHub</Link>
            <Link href="https://x.com/Decentra_VM" target="_blank" className="text-sm text-white/40 hover:text-white transition-colors">X</Link>
            <Link href="https://docs.decentravm.top/" target="_blank" className="text-sm text-white/40 hover:text-white transition-colors">Docs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

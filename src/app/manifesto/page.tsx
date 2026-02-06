import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Manifesto() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex items-center justify-center bg-[#1c1c1c] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <Image
            src="/test.png"
            alt=""
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-white leading-[1.15] mb-4">
            DecentraVM — Virtual Machine
          </h1>
          <p className="text-white/60 text-lg mb-16">
            Built for AI-Generated Code. Trusted by Humans.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[800px] mx-auto">
            <div>
              <p className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white">32</p>
              <p className="text-white/40 text-sm">beta users</p>
            </div>
            <div>
              <p className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white">870</p>
              <p className="text-white/40 text-sm">instances</p>
            </div>
            <div>
              <p className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white">240GB</p>
              <p className="text-white/40 text-sm">data processed</p>
            </div>
            <div>
              <p className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white">120K+</p>
              <p className="text-white/40 text-sm">executions</p>
            </div>
          </div>
          <p className="text-white text-xs mt-4">* during closed beta</p>
        </div>
      </main>
    </>
  );
}

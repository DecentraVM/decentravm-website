import Link from "next/link";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#1c1c1c] to-[#2c2c2c] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative text-center py-24 px-8">
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

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold mb-5 text-white leading-[1.1]">
              Ready to Build
              <br />
              What Do Agents Need?
            </h2>
            <p className="text-white text-lg mb-8">
              Start deploying autonomous software, running AI logic, and scaling your impact today.
            </p>
            <Link
              href="https://docs.decentravm.top/"
              target="_blank"
              className="inline-flex px-10 py-4 rounded-none text-base font-semibold bg-white text-black border border-white hover:bg-transparent hover:text-white hover:-translate-y-0.5 transition-all"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

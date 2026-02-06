import Image from "next/image";

const topCards = [
  {
    num: "01",
    title: "Zero-Risk Execution, Every Time",
    desc: "Every agent operates in its own fresh, isolated sandbox environment.",
    image: "/asset1.webp",
    textFirst: false,
  },
  {
    num: "02",
    title: "No More DevOps Overhead",
    desc: "Provisioning, execution, and container teardown are handled automatically by default.",
    image: "/asset2.webp",
    textFirst: true,
  },
  {
    num: "03",
    title: "Scale Without the Complexity",
    desc: "Grow effortlessly\u2014launch agents instantly with powerful preconfigured sandboxes, or take full control by running your own custom environments using a simple Docker image.",
    image: "/asset3.webp",
    textFirst: false,
  },
];

const bottomCards = [
  {
    num: "04",
    title: "Run Anything, Anywhere",
    desc: "Python, TypeScript, even Rust. Fully isolated, disposable VMs ready to execute tasks on demand.",
  },
  {
    num: "05",
    title: "If it works locally, it works on DVM",
    desc: "Easily integrate code execution and shell access through a simple MCP server or SDK.",
  },
];

export default function WhyDVM() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-3">
          Why DVM
        </p>
        <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.25] max-w-[720px] mb-10">
          Built for developers driving the{" "}
          <span className="text-black">Agent Economy</span>
        </h2>

        {/* Top row — 3 cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {topCards.map((card) => (
            <div
              key={card.num}
              className={`bg-[rgba(0,0,0,0.02)] border border-black/[0.08] rounded-none overflow-hidden hover:border-black/20 transition-colors flex flex-col ${card.textFirst ? "flex-col" : ""}`}
            >
              {card.textFirst && (
                <div className="p-6">
                  <span className="block text-xs font-bold text-black/40 mb-2">
                    {card.num}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-[#666] text-[0.95rem]">{card.desc}</p>
                </div>
              )}
              <div className={`h-[240px] overflow-hidden ${card.textFirst ? "mt-auto" : ""}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={240}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              {!card.textFirst && (
                <div className="p-6">
                  <span className="block text-xs font-bold text-black/40 mb-2">
                    {card.num}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-[#666] text-[0.95rem]">{card.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom row — 2 cards text only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {bottomCards.map((card) => (
            <div
              key={card.num}
              className="bg-[rgba(0,0,0,0.02)] border border-black/[0.08] rounded-none p-8 hover:border-black/20 transition-colors"
            >
              <span className="block text-xs font-bold text-black/40 mb-2">
                {card.num}
              </span>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-[#666] text-[0.95rem]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

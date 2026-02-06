import Link from "next/link";

const plans = [
  {
    label: "Plan 01",
    name: "Free Tier",
    tagline: "For those who are willing to try",
    price: "$0",
    period: "",
    features: [
      "5 max concurrent sandboxes",
      "1 GB persistent storage per sandbox",
      "1 GB RAM",
      "1 vCPU",
      "Suits best for testing",
    ],
    badge: null,
    cta: "Selected plan",
    primary: false,
    popular: false,
  },
  {
    label: "Plan 02",
    name: "Boot",
    tagline: "For those who are willing to try",
    price: "$10",
    period: "/mo",
    features: [
      "10,000 credits",
      "Suits best for Indie devs",
      "Effective Rate: 36,000 credits/$1",
    ],
    badge: "LIMITED TIME OFFER: -11.1%",
    cta: "Select",
    primary: true,
    popular: false,
  },
  {
    label: "Plan 03",
    name: "Launch",
    tagline: "For those who are willing to try",
    price: "$100",
    period: "/mo",
    features: [
      "4,000,000 credits",
      "Suits best for Startups, MVPs, Hackers",
      "Effective Rate: 40,000 credits/$1",
    ],
    badge: "LIMITED TIME OFFER: -25%",
    cta: "Select",
    primary: true,
    popular: true,
  },
  {
    label: "Plan 04",
    name: "Control",
    tagline: "For those who are willing to try",
    price: "$400",
    period: "/mo",
    features: [
      "18,000,000 credits",
      "Suits best for Mid-scale tools, Agent, SaaS, Production use",
      "Effective Rate: 45,000 credits/$1",
    ],
    badge: null,
    cta: "Select",
    primary: true,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative pt-10 pb-24 text-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-3">
          Pricing
        </p>
        <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.25] mb-4">
          Launch quickly and grow with ease
        </h2>
        <p className="text-[#888] text-lg max-w-[600px] mx-auto mb-10">
          Pick the plan that fits your needs today and scale seamlessly as you expand.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {plans.map((plan, index) => (
            <div
              key={plan.label}
              className={`flex flex-col rounded-none p-8 border transition-all ${
                index === 0
                  ? "bg-[rgba(240,255,240,0.6)] border-black/[0.08] hover:-translate-y-1"
                  : "bg-white/60 border-black/[0.08] blur-[2px] pointer-events-none select-none"
              }`}
            >
              <span className="text-xs font-semibold text-black/40 uppercase tracking-[0.1em]">
                {plan.label}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-1">{plan.name}</h3>
              <p className="text-[#888] text-sm mb-5">{plan.tagline}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && (
                  <span className="text-base text-[#888]">{plan.period}</span>
                )}
              </div>
              <ul className="mb-6 flex-1 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-sm text-[#666] pl-6 relative">
                    <span className="absolute left-0 text-green-500 font-bold">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              {plan.badge && (
                <span className="inline-block bg-black text-white text-[0.7rem] font-bold px-3 py-1 rounded-none mb-4 self-start">
                  {plan.badge}
                </span>
              )}
              <Link
                href="#"
                className={`w-full text-center py-3 rounded-none text-sm font-semibold transition-all ${
                  plan.primary
                    ? "bg-black text-white border border-black hover:bg-white hover:text-black hover:-translate-y-0.5"
                    : "border border-black/[0.15] text-black bg-white/80 hover:bg-black hover:text-white hover:-translate-y-0.5"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-[rgba(0,0,0,0.02)] border border-black/[0.08] rounded-none py-12 px-8 mt-6 text-left">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-3">
              Enterprise Solutions
            </p>
            <h2 className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold leading-[1.3] mb-3">
              Purpose-built solutions for organizations of any size that require self-hosted or
              on-premise deployment.
            </h2>
            <p className="text-[#888] text-base">
              Interested in secure execution for AI or exploring custom
              integration options for your agents? Let&apos;s talk.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="https://t.me/decentravmdev"
              target="_blank"
              className="inline-flex px-8 py-3 rounded-none text-sm font-semibold bg-black text-white border border-black hover:bg-white hover:text-black hover:-translate-y-0.5 transition-all"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

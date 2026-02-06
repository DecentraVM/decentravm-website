const cases = [
  {
    title: "Data Pipelines",
    desc: "Collect, analyze, and produce insights from large datasets. DVM handles long-running, persistent tasks with ease.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h24M4 12h24M4 18h16M4 24h20" />
      </svg>
    ),
  },
  {
    title: "AI-Driven SaaS",
    desc: "Create autonomous applications that respond to user input, connect with APIs, and deliver results in seconds.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="24" height="24" rx="4" />
        <circle cx="16" cy="16" r="5" />
        <path d="M16 11v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Internal Automation",
    desc: "Empower your team with agent-driven workflows for operations, compliance, and support.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 6h16a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
        <path d="M12 16l3 3 5-6" />
      </svg>
    ),
  },
];

export default function UseCases() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-3">
          Use Cases
        </p>
        <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.25] max-w-[720px] mb-10">
          Designed to Enable True Autonomy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cases.map((c) => (
            <div key={c.title}>
              <div className="text-black mb-4">{c.icon}</div>
              <h3 className="text-lg font-bold mb-2">{c.title}</h3>
              <p className="text-[#666] text-[0.95rem]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

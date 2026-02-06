const features = [
  {
    num: "01",
    title: "Isolated execution environments",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="4" />
        <path d="M9 9h10M9 14h6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Persistent, fast, and scalable storage",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V8a2 2 0 012-2h16a2 2 0 012 2v12" />
        <path d="M2 20h24" />
        <path d="M12 6v14" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Instant snapshots and rollbacks",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="11" />
        <path d="M14 8v6l4 2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Bring your own tools and libraries",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2L4 7v14l10 5 10-5V7z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Verifiable outputs with transparent logs",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-4" />
        <path d="M9 3h6v4H9z" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f) => (
            <div
              key={f.num}
              className="bg-[rgba(0,0,0,0.02)] border border-black/[0.08] rounded-2xl p-8 sm:p-6 hover:-translate-y-1 hover:border-[rgba(108,92,231,0.3)] transition-all"
            >
              <span className="block text-xs font-bold text-[#6C5CE7] mb-3">
                {f.num}
              </span>
              <div className="text-[#a29bfe] mb-4">{f.icon}</div>
              <h3 className="text-base font-semibold">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Running large-scale NLP experiments used to be a major headache. Every project required custom environments, manual setup, and constant debugging just to maintain consistency. With DVM, I can launch isolated environments in seconds and focus entirely on the research. The verifiable logs and MCP integration make it easy to trust what's running and connect our models with other tools or data sources. It's saved us days of setup time and significantly reduced compute costs. For anyone working on serious NLP or large-scale text analysis, DVM makes experimentation far smoother and faster.",
    name: "Marko Čuljak (MC)",
    initials: "MC",
    role: "PhD Student, TakeLab, University of Zagreb",
  },
  {
    quote:
      "Creating autonomous tools used to be a constant battle with infrastructure. Every test and iteration needed DevOps support, sandbox setups, and endless debugging across environments—it really slowed progress. After moving to DVM, I could prototype, test, and deploy AI agent logic all in one place, with no setup and zero overhead. The secure containers and modular tools let me focus on building the product, not wrestling with infrastructure. DVM doesn't just save time—it transforms what's possible with AI automation.",
    name: "Stjepko Zrncic (SZ)",
    initials: "SZ",
    role: "iOS Developer, Automotive Industry",
  },
  {
    quote:
      "Integrating AI agents into complex e-commerce workflows used to mean building everything from scratch—custom logic, infrastructure setup, and manual scaling. It was powerful, but incredibly inefficient. With DVM, I can plug in agent logic just like any API. The platform takes care of execution, sandboxing, and scaling, letting me focus on creating smarter storefronts, automating backend tasks, and shipping faster.",
    name: "Renan Souza (RS)",
    initials: "RS",
    role: "Full-Stack Web Developer & E-commerce Specialist",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-3">
          Testimonials
        </p>
        <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.25] mb-8">
          Trusted by Developers
        </h2>

        <div className="relative min-h-[280px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${
                i === current ? "block animate-fade-in" : "hidden"
              } bg-[rgba(0,0,0,0.02)] border border-black/[0.08] rounded-none p-10 max-w-[800px] mx-auto`}
            >
              <p className="text-base text-[#555] leading-[1.7] mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-none bg-black flex items-center justify-center font-bold text-sm text-white shrink-0">
                  {t.initials}
                </div>
                <div>
                  <strong className="block text-[0.95rem]">{t.name}</strong>
                  <span className="text-[#888] text-sm">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2.5 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-none border-none cursor-pointer transition-colors ${
                i === current
                  ? "bg-black"
                  : "bg-[rgba(0,0,0,0.15)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

const infra = [
  {
    num: "01",
    title: "Execution Engine",
    desc: "Secure, containerized environments launched on demand.",
  },
  {
    num: "02",
    title: "Storage System",
    desc: "Optional persistent storage for extended tasks.",
  },
  {
    num: "03",
    title: "MCP Protocol",
    desc: "Smooth, reliable communication between agents.",
  },
  {
    num: "04",
    title: "Monitoring",
    desc: "Real-time visibility with full observability and audit logging.",
  },
];

export default function TechStack() {
  const sceneRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
    script.onload = () => {
      (window as any).UnicornStudio?.addScene({
        elementId: "unicorn-infra",
        projectId: "jVj9buRQikHiy4OLBemG",
        fps: 60,
        scale: 1,
        lazyLoad: true,
        production: true,
      }).then((scene: any) => {
        sceneRef.current = scene;
      });
    };
    document.head.appendChild(script);

    return () => {
      if (sceneRef.current) {
        (sceneRef.current as any).destroy?.();
      }
      script.remove();
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 infra-grid-bg" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-3 text-center">
          Tech Stack
        </p>
        <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.25] mb-10 text-center">
          DVM Infrastructure
        </h2>

        <div className="relative">
          {/* Central 3D animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div id="unicorn-infra" className="w-[500px] h-[500px] overflow-hidden" />
          </div>

          {/* 2x2 grid of cards */}
          <div className="grid grid-cols-2 gap-x-[320px] gap-y-[240px]">
            {infra.map((item, i) => (
              <div
                key={item.num}
                className="relative bg-white border border-black/[0.08] rounded-none p-10 hover:border-black/20 transition-colors z-10"
              >
                {/* Inner corner square */}
                <span
                  className={`absolute w-2.5 h-2.5 bg-black z-20 ${
                    i === 0 ? "bottom-0 right-0 translate-x-1/2 translate-y-1/2" :
                    i === 1 ? "bottom-0 left-0 -translate-x-1/2 translate-y-1/2" :
                    i === 2 ? "top-0 right-0 translate-x-1/2 -translate-y-1/2" :
                    "top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                  }`}
                />
                <span className="block text-xs font-bold text-black/40 mb-2">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#666] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const cards = [
  { num: "01", title: "Isolated execution environments", image: "/card-image-1.webp" },
  { num: "02", title: "Persistent, fast, and scalable storage", image: "/card-image-2.webp" },
  { num: "03", title: "Instant snapshots and rollbacks", image: "/card-image-1.webp" },
  { num: "04", title: "Bring your own tools and libraries", image: "/card-image-2.webp" },
  { num: "05", title: "Verifiable outputs with transparent logs", image: "/card-image-1.webp" },
];

export default function ValueProp() {
  const [offset, setOffset] = useState(0);
  const maxOffset = cards.length - 2;
  const dragRef = useRef<{ startX: number; startOffset: number; dragging: boolean }>({ startX: 0, startOffset: 0, dragging: false });
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { startX: e.clientX, startOffset: offset, dragging: true };
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.dragging || !containerRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth = containerWidth * 0.5;
    const delta = -dx / cardWidth;
    const newOffset = Math.max(0, Math.min(maxOffset, dragRef.current.startOffset + delta));
    setOffset(newOffset);
  };

  const onPointerUp = () => {
    dragRef.current.dragging = false;
    setOffset((o) => Math.max(0, Math.min(maxOffset, Math.round(o))));
  };

  return (
    <section id="manifesto" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side — text + arrows */}
          <div className="lg:w-[45%] shrink-0">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.25] mb-12">
              DVM delivers the execution layer that ensures AI-generated code is{" "}
              <span className="text-black">
                secure, compliant, and ready for production use.
              </span>
            </h2>
            <div className="flex gap-3">
              <button
                onClick={prev}
                disabled={offset <= 0}
                className="w-20 h-12 rounded-none border border-black/[0.1] flex items-center justify-center text-black/60 hover:text-black hover:border-black/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 14H6M6 14l7-7M6 14l7 7" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={offset >= maxOffset}
                className="w-20 h-12 rounded-none border border-black/[0.1] flex items-center justify-center text-black/60 hover:text-black hover:border-black/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 14h16M22 14l-7-7M22 14l-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side — draggable cards carousel */}
          <div
            ref={containerRef}
            className="lg:w-[55%] overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <div
              className="flex gap-3"
              style={{
                transform: `translateX(-${offset * 50.8}%)`,
                transition: dragRef.current.dragging ? "none" : "transform 0.4s ease-out",
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.num}
                  className="min-w-[calc(50%-6px)] bg-[rgba(0,0,0,0.02)] border border-black/[0.08] rounded-none overflow-hidden hover:-translate-y-1 hover:border-[rgba(108,92,231,0.3)] transition-all"
                >
                  <div className="h-[340px] overflow-hidden pointer-events-none">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={600}
                      height={340}
                      className="w-full h-full object-contain object-bottom"
                      draggable={false}
                    />
                  </div>
                  <div className="p-6">
                    <span className="block text-xs font-bold text-black/40 mb-2">
                      {card.num}
                    </span>
                    <h3 className="text-base font-semibold">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

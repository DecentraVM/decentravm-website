import Link from "next/link";

export default function Enterprise() {
  return (
    <section className="pt-3">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-[rgba(0,0,0,0.02)] border border-black/[0.08] rounded-none py-12 px-8">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-3">
              Enterprise Solutions
            </p>
            <h2 className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold leading-[1.3] mb-3">
              Solutions built for companies of any size that need self-hosted or
              on-premise deployment.
            </h2>
            <p className="text-[#888] text-base">
              Curious about secure execution for AI? Want to explore tailored
              integration options for your agents? Let&apos;s connect.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="#"
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

import Image from "next/image";

const logos = [
  { src: "/67b4bbf247e28952fad4a614_Qwen.svg", alt: "Qwen", size: 180 },
  { src: "/67b4bbf1ca02d0ed4322e47a_Mistral.svg", alt: "Mistral AI", size: 180 },
  { src: "/67b4bbf19f5675d1b7f18ef9_Gemma.svg", alt: "Gemma", size: 180 },
  { src: "/67b4bbf14dd4684a6bc4c2fb_OpenAI.svg", alt: "OpenAI", size: 180 },
  { src: "/67b4bbf1defe16943d41ad06_Phi.svg", alt: "Phi", size: 110 },
  { src: "/67b4bbf181d1fb959e352277_Llama.svg", alt: "Llama", size: 180 },
];

export default function LogoCarousel() {
  return (
    <section className="py-0 overflow-hidden -mt-16">
      <div className="relative">
        <div className="flex items-center animate-scroll gap-24 w-max">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="shrink-0 opacity-40 hover:opacity-70 transition-opacity flex items-center h-[180px]">
              <Image src={logo.src} alt={logo.alt} width={logo.size} height={logo.size} className="object-contain brightness-0 opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

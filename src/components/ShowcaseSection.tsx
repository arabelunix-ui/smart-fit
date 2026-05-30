export default function ShowcaseSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(35,233,116,0.1)] border border-white/5">
          <img 
            src="/image.png" 
            alt="BoudaMed Knowledge Interface Showcase" 
            className="w-full h-auto object-cover"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-[32px] sm:rounded-[40px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

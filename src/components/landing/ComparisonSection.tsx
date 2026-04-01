const ComparisonSection = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 bg-burgundy film-grain overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,200,180,0.08)_0%,_transparent_70%)]" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.3)_100%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="reveal opacity-0">
          {/* Tulip side */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <p className="font-serif text-base sm:text-lg text-linen/50 mb-3 sm:mb-4 tracking-wide">tulip</p>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-linen leading-tight">
              one introduction.
              <br />
              <span className="italic">ready to go.</span>
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
            <div className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-transparent to-linen/30" />
            <span className="text-2xl opacity-60">🌷</span>
            <div className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-transparent to-linen/30" />
          </div>

          {/* Dating apps side */}
          <div className="opacity-60">
            <p className="font-serif text-base sm:text-lg text-linen/40 mb-3 sm:mb-4 tracking-wide">dating apps</p>
            <p className="font-sans text-sm sm:text-base md:text-lg text-linen/35 leading-relaxed max-w-md mx-auto">
              <span className="line-through decoration-linen/20">200 profiles. 50 swipes. 10 matches.</span>
              <br />
              <span className="line-through decoration-linen/20">3 conversations. 1 date that feels like a job interview.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

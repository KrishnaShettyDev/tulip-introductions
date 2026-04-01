import heroBg from "@/assets/paris-dinner.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image — more visible */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Intimate candlelit café"
          className="w-full h-full object-cover amber-filter"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white lowercase mb-3 sm:mb-4 animate-fade-in-up">
          tulip
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-serif italic mb-6 sm:mb-8 animate-fade-in-up stagger-1">
          bringing back <span className="text-shimmer">90s dating.</span>
        </p>
        <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-4 sm:mb-6 max-w-md mx-auto font-sans animate-fade-in-up stagger-2">
          one introduction. one person. one evening.
        </p>
        <p className="text-xs sm:text-sm text-white/50 font-sans mb-8 sm:mb-12 animate-fade-in-up stagger-3">
          dates over imessage. iphone only. no app.
        </p>
        <a
          href="#waitlist"
          className="glass-button inline-flex items-center gap-2 px-5 py-2.5 sm:py-2 rounded-full font-sans text-sm text-white/90 border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] transition-all duration-500 animate-fade-in-up stagger-4 hover-lift"
        >
          join beta <span className="text-lg">↗</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

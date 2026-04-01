const ComparisonSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-burgundy film-grain">
      <div className="max-w-3xl mx-auto text-center">
        <div className="reveal opacity-0">
          {/* Tulip side */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <p className="font-serif text-lg sm:text-xl text-linen/60 mb-2 sm:mb-3">tulip</p>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-linen leading-tight">
              one introduction.<br />ready to go.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <div className="h-px flex-1 max-w-[60px] sm:max-w-[100px] bg-linen/20" />
            <span className="text-linen/40 font-sans text-xs tracking-widest uppercase">vs</span>
            <div className="h-px flex-1 max-w-[60px] sm:max-w-[100px] bg-linen/20" />
          </div>

          {/* Dating apps side */}
          <div>
            <p className="font-serif text-lg sm:text-xl text-linen/60 mb-2 sm:mb-3">dating apps</p>
            <p className="font-sans text-base sm:text-lg md:text-xl text-linen/50 leading-relaxed">
              200 profiles. 50 swipes. 10 matches.<br />
              3 conversations. 1 date that feels like a job interview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

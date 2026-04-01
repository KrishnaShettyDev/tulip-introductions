const FooterSection = () => {
  return (
    <footer className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 border-t border-ink-border">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-ink leading-relaxed mb-6 sm:mb-8 reveal opacity-0">
          dating got complicated somewhere around 2012.
          <br />
          tulip is taking it back.
          <br />
          <span className="italic">to 90s.</span>
        </p>

        <p className="text-3xl sm:text-4xl mb-8 sm:mb-10 reveal opacity-0">🌷</p>

        <div className="reveal opacity-0 space-y-2 sm:space-y-3">
          <p className="ink-muted font-sans text-[10px] sm:text-xs tracking-widest uppercase">
            made with love from bangalore
          </p>
          <a
            href="https://www.plutas.in/landing.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ink-muted font-sans text-[10px] sm:text-xs tracking-widest uppercase hover:text-burgundy transition-colors"
          >
            plutas lab
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

import vintageLove from "@/assets/vintage-love.jpeg";

const BeforeAppsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="reveal opacity-0 order-2 md:order-1">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink mb-5 sm:mb-6 md:mb-8 leading-snug">
              before apps, dating was simple.
            </h2>
            <p className="ink-body font-sans text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
              someone who knew you — actually knew you — said "i know someone you should meet." you showed up. you talked. that was it.
            </p>
            <p className="ink-body font-sans text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
              no profile. no bio. no swipe quota. no "hey" that went nowhere. just an introduction from someone you trusted.
            </p>
            <p className="font-serif text-lg sm:text-xl italic text-burgundy">
              tulip is that someone.
            </p>
          </div>

          <div className="reveal opacity-0 overflow-hidden order-1 md:order-2">
            <img
              src={vintageLove}
              alt="Intimate couple in a café"
              className="w-full amber-filter hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAppsSection;

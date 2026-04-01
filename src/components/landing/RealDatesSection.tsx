import parisDinner from "@/assets/paris-dinner.jpeg";
import vintageLove from "@/assets/vintage-love.jpeg";
import dancing from "@/assets/dancing.jpeg";
import bookstoreCouple from "@/assets/bookstore-couple.jpeg";
import sunsetRoad from "@/assets/sunset-road.jpeg";
import flowersHands from "@/assets/flowers-hands.jpeg";

const photos = [
  { src: dancing, alt: "Couple dancing", rotate: "-3deg", span: "col-span-1 sm:col-span-2 sm:row-span-2" },
  { src: parisDinner, alt: "Candlelit dinner in Paris", rotate: "2deg", span: "col-span-1" },
  { src: flowersHands, alt: "Holding hands with flowers", rotate: "-1.5deg", span: "col-span-1 sm:row-span-2" },
  { src: vintageLove, alt: "Intimate café moment", rotate: "2.5deg", span: "col-span-1" },
  { src: bookstoreCouple, alt: "Couple in bookstore", rotate: "-2deg", span: "col-span-1" },
  { src: sunsetRoad, alt: "Sunset road trip", rotate: "1.5deg", span: "col-span-1" },
];

const RealDatesSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Scattered photo collage */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16 md:mb-20 reveal opacity-0">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} overflow-hidden`}
              style={{ transform: `rotate(${photo.rotate})` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover amber-filter hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Copy blocks */}
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
          <p className="reveal opacity-0 font-serif text-lg sm:text-xl md:text-2xl text-ink leading-relaxed">
            tulip tries its best to set you up on a date. a real one. romantic. intellectual. funny. whatever you two turn it into.
          </p>
          <p className="reveal opacity-0 font-serif text-base sm:text-lg md:text-xl text-ink/80 leading-relaxed">
            tulip is very old school about this. one person. full attention. no backup options.
          </p>
          <p className="reveal opacity-0 ink-body font-sans text-sm sm:text-base md:text-lg leading-relaxed">
            and honestly — we don't want you here long. the whole point is that you find someone and never text tulip again.
            <span className="block mt-3 font-serif italic text-burgundy text-base sm:text-lg">
              that's not a business problem. that's the product working.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealDatesSection;

import dancing from "@/assets/dancing.jpeg";
import flowersHands from "@/assets/flowers-hands.jpeg";
import parisDinner from "@/assets/paris-dinner.jpeg";
import vintageLove from "@/assets/vintage-love.jpeg";

const steps = [
  {
    num: "①",
    title: "text tulip",
    description: "one conversation. about 5 minutes. tulip asks real questions and remembers every answer.",
    image: dancing,
    imageAlt: "Couple dancing",
    imageRotate: "-2deg",
  },
  {
    num: "②",
    title: "the 7pm drop",
    description: "every evening, one person. not a list. one introduction. tulip's honest take on why you two should meet.",
    image: vintageLove,
    imageAlt: "Intimate café moment",
    imageRotate: "2deg",
  },
  {
    num: "③",
    title: "say yes or pass",
    description: "👍 or 👎. both say yes? tulip sets up the date.",
    image: flowersHands,
    imageAlt: "Holding hands with flowers",
    imageRotate: "-1.5deg",
  },
  {
    num: "④",
    title: "show up",
    description: "a curated spot in your city. a real person across the table. like the 90s, except someone actually vetted them first.",
    image: parisDinner,
    imageAlt: "Candlelit dinner",
    imageRotate: "1.5deg",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink text-center mb-12 sm:mb-16 md:mb-20 reveal opacity-0">
          how it works
        </h2>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.title}
                className={`reveal opacity-0 flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full aspect-[4/3] object-cover amber-filter hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                    style={{ transform: `rotate(${step.imageRotate})` }}
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <span className="text-3xl sm:text-4xl md:text-5xl text-burgundy font-serif mb-3 sm:mb-4 block">{step.num}</span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-ink mb-2 sm:mb-3">{step.title}</h3>
                  <p className="ink-body font-sans text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

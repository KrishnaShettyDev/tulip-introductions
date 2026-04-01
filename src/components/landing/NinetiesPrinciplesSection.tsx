import bookstoreCouple from "@/assets/bookstore-couple.jpeg";
import sunsetRoad from "@/assets/sunset-road.jpeg";

const principles = [
  {
    title: "someone else does the finding.",
    body: "in the 90s, you didn't search for your own date. someone who knew both people made the call. tulip does the same — talks to everyone, finds the match, makes the introduction.",
  },
  {
    title: "one person at a time.",
    body: "no parallel conversations. no \"keeping options open.\" one person. give them your full attention. like your parents did before \"talking to multiple people\" became normal.",
  },
  {
    title: "you actually show up.",
    body: "no three weeks of texting. no \"let's plan something\" that never happens. tulip picks the place. you just walk in.",
  },
  {
    title: "nobody's performing.",
    body: "no curated photos. no clever prompts. no bio written by chatgpt. tulip knows you from a conversation, not a profile. so does your match.",
  },
];

const NinetiesPrinciplesSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink text-center mb-10 sm:mb-12 md:mb-16 reveal opacity-0">
          what makes this 90s
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Left column */}
          <div className="md:col-span-5 space-y-6 sm:space-y-8">
            <div className="reveal opacity-0 overflow-hidden">
              <img
                src={bookstoreCouple}
                alt="Couple browsing in a bookstore"
                className="w-full amber-filter hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
            {principles.slice(0, 2).map((p, i) => (
              <div key={i} className="reveal opacity-0">
                <h3 className="font-serif text-base sm:text-lg text-ink mb-2">{p.title}</h3>
                <p className="ink-body font-sans text-xs sm:text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="md:col-span-7 space-y-6 sm:space-y-8">
            {principles.slice(2).map((p, i) => (
              <div key={i} className="reveal opacity-0">
                <h3 className="font-serif text-base sm:text-lg text-ink mb-2">{p.title}</h3>
                <p className="ink-body font-sans text-xs sm:text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
            <div className="reveal opacity-0 overflow-hidden">
              <img
                src={sunsetRoad}
                alt="Sunset road trip together"
                className="w-full amber-filter hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NinetiesPrinciplesSection;

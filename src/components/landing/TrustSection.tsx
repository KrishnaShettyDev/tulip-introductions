import { Shield, Eye, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "background verified",
    body: "tulip's AI runs a background check on every person before they enter. if something doesn't check out, they don't get in.",
  },
  {
    icon: Eye,
    title: "only your date sees you",
    body: "no public profile. no one browsing your photos. the only person who knows about you is the one tulip picked.",
  },
  {
    icon: MapPin,
    title: "curated spots",
    body: "dates happen at places tulip selects. somewhere that makes sense for two people meeting for the first time.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 border-y border-ink-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink mb-10 sm:mb-12 md:mb-16 reveal opacity-0">
          verified. private. safe.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="reveal opacity-0" style={{ animationDelay: `${i * 0.15}s` }}>
              <p.icon className="w-6 h-6 sm:w-7 sm:h-7 text-burgundy mx-auto mb-4 sm:mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-base sm:text-lg text-ink mb-2 sm:mb-3">{p.title}</h3>
              <p className="ink-body font-sans text-xs sm:text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

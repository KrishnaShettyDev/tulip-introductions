import { useState } from "react";
import marbleStaircase from "@/assets/marble-staircase.jpg";

const WaitlistSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={marbleStaircase}
          alt="Grand marble staircase"
          className="w-full h-full object-cover amber-filter opacity-60"
          loading="lazy"
          width={600}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/40 via-transparent to-[hsl(var(--background))]/70" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <div className="reveal opacity-0">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-ink mb-2">bangalore.</p>
          <p className="font-serif text-base sm:text-lg text-ink mb-1">this beta.</p>
          <p className="font-serif text-base sm:text-lg italic text-burgundy mb-8 sm:mb-10 md:mb-12">first 100 get in free.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 max-w-sm mx-auto">
              <input
                type="text"
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border border-ink-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-sans text-sm text-ink placeholder:ink-muted focus:outline-none focus:border-burgundy transition-colors"
              />
              <input
                type="email"
                placeholder="founders@heytulip.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border border-ink-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-sans text-sm text-ink placeholder:ink-muted focus:outline-none focus:border-burgundy transition-colors"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 glass-button px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-sans text-sm text-ink border border-[hsl(var(--ink))]/15 bg-[hsl(var(--ink))]/8 backdrop-blur-xl hover:bg-[hsl(var(--ink))]/12 transition-all duration-500"
              >
                join beta <span className="text-lg">↗</span>
              </button>
            </form>
          ) : (
            <div className="border border-ink-border rounded-2xl p-6 sm:p-8">
              <p className="font-serif text-lg sm:text-xl text-ink mb-2">you're in.</p>
              <p className="ink-body font-sans text-xs sm:text-sm">tulip will text you soon. keep your imessage close.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;

import { useState } from "react";
import marbleStaircase from "@/assets/marble-staircase.jpg";
import { supabase } from "@/lib/supabase";
import { posthog } from "@/lib/posthog";

const WaitlistSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    setError("");

    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([{ name, email, phone: phone || null }]);

    setLoading(false);

    if (insertError) {
      if (insertError.code === "23505") {
        setError("this email is already on the waitlist.");
      } else {
        setError("something went wrong. please try again.");
      }
      return;
    }

    // Track conversion event
    posthog.capture('waitlist_signup', {
      has_phone: !!phone,
    });

    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={marbleStaircase}
          alt="Grand marble staircase"
          className="w-full h-full object-cover amber-filter opacity-90"
          loading="lazy"
          width={600}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/20 via-transparent to-[hsl(var(--background))]/40" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <div className="reveal opacity-0">
          {/* Text with subtle backdrop for readability */}
          <div className="bg-black/15 backdrop-blur-[2px] rounded-2xl py-6 px-4 mb-6 sm:mb-8">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white drop-shadow-sm mb-2">bangalore.</p>
            <p className="font-serif text-base sm:text-lg text-white/90 mb-1">this beta.</p>
            <p className="font-serif text-base sm:text-lg italic text-[#e8b4b4] drop-shadow-sm">first 100 get in free.</p>
          </div>

          <p className="text-xs text-white/70 font-sans mb-6 sm:mb-8 drop-shadow-sm">iphone only. no app download.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 max-w-sm mx-auto">
              <input
                type="text"
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full input-warm px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-sans text-sm text-ink placeholder:text-[hsl(30_20%_40%/0.5)] focus:outline-none"
              />
              <input
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full input-warm px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-sans text-sm text-ink placeholder:text-[hsl(30_20%_40%/0.5)] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="iphone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full input-warm px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-sans text-sm text-ink placeholder:text-[hsl(30_20%_40%/0.5)] focus:outline-none"
              />
              {error && (
                <p className="text-[#c45c5c] font-sans text-xs sm:text-sm animate-fade-in-up drop-shadow-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 liquid-glass-warm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-sans text-sm text-ink disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "joining..." : "join beta"} {!loading && <span className="text-lg">↗</span>}
              </button>
            </form>
          ) : (
            <div className="liquid-glass-warm rounded-2xl p-6 sm:p-8 max-w-sm mx-auto animate-scale-in">
              <p className="font-serif text-lg sm:text-xl text-ink mb-2">you're in.</p>
              <p className="text-ink/70 font-sans text-xs sm:text-sm">tulip will text you on imessage soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;

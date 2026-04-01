import { useState } from "react";
import marbleStaircase from "@/assets/marble-staircase.jpg";
import { supabase } from "@/lib/supabase";

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
              <input
                type="tel"
                placeholder="phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border border-ink-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-sans text-sm text-ink placeholder:ink-muted focus:outline-none focus:border-burgundy transition-colors"
              />
              {error && (
                <p className="text-burgundy font-sans text-xs sm:text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 glass-button px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-sans text-sm text-ink border border-[hsl(var(--ink))]/15 bg-[hsl(var(--ink))]/8 backdrop-blur-xl hover:bg-[hsl(var(--ink))]/12 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "joining..." : "join beta"} {!loading && <span className="text-lg">↗</span>}
              </button>
            </form>
          ) : (
            <div className="border border-ink-border rounded-2xl p-6 sm:p-8 bg-white/80 backdrop-blur-sm max-w-sm mx-auto">
              <p className="font-serif text-lg sm:text-xl text-ink mb-2">you're in.</p>
              <p className="text-ink/70 font-sans text-xs sm:text-sm">tulip will text you soon. keep your imessage close.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;

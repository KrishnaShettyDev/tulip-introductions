import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "how does tulip match people?",
    a: "the same way your mom's friend did in 1996 — by actually knowing both people. except tulip's had real conversations with everyone in the pool and remembers every word. tulip matches on how you think, how you joke, what you care about. not your height or your college.",
  },
  {
    q: "how does it work?",
    a: "text tulip on iMessage. 5-minute conversation. every day at 7pm, you get one match — a card with their name, city, and tulip's take on why you two might work. 👍 or 👎. both yes? date gets set up.",
  },
  {
    q: "what will i know before the date?",
    a: "first name. age. area. and a few lines tulip wrote about who they actually are. not a bio they wrote about themselves. tulip's read is more honest.",
  },
  {
    q: "what if i don't like my match?",
    a: "tell tulip why. be specific. tulip adjusts. tomorrow's match will be different.",
  },
  {
    q: "who's in the pool?",
    a: "bangalore. verified. everyone had a real conversation with tulip and passed a background check.",
  },
  {
    q: "iphone only?",
    a: "yes. tulip lives on iMessage.",
  },
  {
    q: "how long until my first match?",
    a: "most people get their first introduction within 48 hours.",
  },
  {
    q: "what does it cost?",
    a: "first 500 people — free. after that, ₹500/month for women. ₹1,000/month for men. the price is the filter.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink text-center mb-10 sm:mb-12 md:mb-16 reveal opacity-0">
          questions
        </h2>

        <Accordion type="single" collapsible className="reveal opacity-0">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-ink-border">
              <AccordionTrigger className="font-serif text-sm sm:text-base text-ink hover:no-underline py-4 sm:py-5 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="ink-body font-sans text-xs sm:text-sm leading-relaxed pb-4 sm:pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

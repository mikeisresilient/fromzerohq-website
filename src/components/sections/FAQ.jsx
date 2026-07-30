import { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const faqs = [
  {
    question: "How does FromZeroHQ select creators?",
    answer:
      "Every creator is evaluated using audience quality, engagement authenticity, content relevance and campaign fit before being recommended.",
  },
  {
    question: "Can you work with startups and small businesses?",
    answer:
      "Yes. We partner with businesses of all sizes, helping them launch creator campaigns that align with their goals, audience and budget.",
  },
  {
    question: "How do you measure campaign performance?",
    answer:
      "We provide transparent reporting covering reach, engagement, creator performance and campaign outcomes so you understand what's working.",
  },
  {
    question: "Do you manage campaigns from start to finish?",
    answer:
      "Absolutely. We handle creator discovery, outreach, communication, execution, reporting and ongoing optimisation.",
  },
  {
    question: "How quickly can a campaign launch?",
    answer:
      "Most campaigns can begin within a few days once the strategy, creators and deliverables have been approved.",
  },
  {
    question: "Do you work with international creators?",
    answer:
      "Yes. We help brands identify and manage creators across multiple regions based on campaign objectives and audience demographics.",
  },
];

const FAQ = forwardRef(function FAQ(_, ref) {
  const [open, setOpen] = useState(0);

  return (
    <section
      ref={ref}
      className="relative py-28"
    >
      <Container>
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.3fr]">
          {/* Left */}
          <div className="sticky top-28 self-start">
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know about how FromZeroHQ helps brands build trusted creator partnerships."
            />
          </div>

          {/* Right */}
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const active = open === index;

              return (
                <motion.div
                  key={faq.question}
                  layout
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-green-500/30"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(active ? -1 : index)}
                    aria-expanded={active}
                    aria-controls={`faq-${index}`}
                    className="flex w-full items-center justify-between px-8 py-7 text-left transition-colors duration-300 hover:bg-white/[0.02]"
                  >
                    <h3 className="pr-6 text-lg font-semibold text-white">
                      {faq.question}
                    </h3>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "border-green-500/40 bg-green-500/10 text-green-400"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      {active ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        id={`faq-${index}`}
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="border-t border-white/5 px-8 py-6 text-[17px] leading-8 text-gray-400">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
});

export default FAQ;
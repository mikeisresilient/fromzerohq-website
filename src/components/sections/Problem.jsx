import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const problems = [
  {
    title: "Fake Engagement",
    description:
      "Inflated follower counts and artificial engagement make it difficult to identify creators who genuinely influence purchasing decisions.",
  },
  {
    title: "Missed Deadlines",
    description:
      "Delayed content disrupts campaign timelines, affecting launches, promotions and overall marketing momentum.",
  },
  {
    title: "No Measurable ROI",
    description:
      "Without reliable reporting, brands struggle to understand which creator partnerships actually generate business results.",
  },
  {
    title: "Poor Communication",
    description:
      "Managing conversations across multiple channels creates confusion, missed updates and unnecessary friction.",
  },
  {
    title: "No Accountability",
    description:
      "When expectations aren't clearly tracked, brands have little visibility into creator performance and delivery.",
  },
  {
    title: "No Campaign Optimisation",
    description:
      "Campaigns often launch once and never improve, leaving valuable performance insights unused.",
  },
];

function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden py-32"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-red-500/5 blur-[140px]" />
        <div className="absolute right-0 top-20 h-60 w-60 rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          centered
          label="The Problem"
          title="Creator Marketing Shouldn't Feel Like Gambling."
          description="Too many brands waste time, budget and opportunities because creator partnerships are managed through spreadsheets, guesswork and inconsistent processes."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              delay={index * 0.08}
              className="group relative overflow-hidden bg-[#111827]/80 backdrop-blur-xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />
              </div>

              <motion.div
                whileHover={{
                  rotate: -8,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10"
              >
                <AlertTriangle
                  className="text-red-400"
                  size={30}
                />
              </motion.div>

              <h3 className="relative z-10 mt-8 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-red-300">
                {problem.title}
              </h3>

              <p className="relative z-10 mt-4 leading-8 text-gray-400">
                {problem.description}
              </p>

              {/* Card Number */}
              <span className="absolute bottom-6 right-6 text-5xl font-bold text-white/5 transition-all duration-300 group-hover:text-red-500/10">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Problem;
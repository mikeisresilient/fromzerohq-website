import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Search,
  ShieldCheck,
  FileText,
  Rocket,
  BarChart3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    icon: Briefcase,
    title: "Discovery",
    description:
      "We begin by understanding your brand, target audience, campaign objectives and success metrics.",
  },
  {
    icon: Search,
    title: "Creator Discovery",
    description:
      "Using our framework, we identify creators who genuinely align with your audience and campaign goals.",
  },
  {
    icon: ShieldCheck,
    title: "Creator Vetting",
    description:
      "Every creator is evaluated for authenticity, audience quality, engagement and previous performance.",
  },
  {
    icon: FileText,
    title: "Offer Design",
    description:
      "Campaign deliverables, timelines and commercial terms are structured for clarity and measurable outcomes.",
  },
  {
    icon: Rocket,
    title: "Campaign Launch",
    description:
      "We coordinate onboarding, communication and execution to ensure campaigns launch smoothly.",
  },
  {
    icon: BarChart3,
    title: "Optimisation",
    description:
      "Performance is reviewed continuously so campaigns can improve while they're still running.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Successful creator partnerships are expanded using proven data instead of assumptions.",
  },
];

const Process = forwardRef(function Process(_, ref) {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-green-500/5 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-400/5 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          centered
          label="How We Work"
          title="A Proven Workflow Built For Sustainable Growth"
          description="Every creator campaign follows a structured operational framework that minimizes risk, improves execution and delivers measurable business outcomes."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Timeline */}
          <div className="absolute left-8 top-0 hidden h-full w-px rounded-full bg-gradient-to-b from-green-500 via-green-400 to-transparent md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="relative md:ml-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[58px] top-10 z-20 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-[#030712] bg-green-400 shadow-[0_0_20px_rgba(34,197,94,.4)] md:flex" />

                  <Card className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-xl">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent" />
                    </div>

                    {/* Step Number */}
                    <span className="absolute right-8 top-6 text-5xl font-bold text-white/5 transition-all duration-300 group-hover:text-green-500/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 6,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10"
                    >
                      <Icon
                        className="text-green-400"
                        size={30}
                      />
                    </motion.div>

                    <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="relative z-10 mt-4 leading-8 text-gray-400">
                      {step.description}
                    </p>

                    <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-green-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      Step {index + 1} of {steps.length}
                      <ArrowRight size={16} />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
});

export default Process;
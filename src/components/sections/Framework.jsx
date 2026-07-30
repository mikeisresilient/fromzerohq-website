import { motion } from "framer-motion";
import {
  Search,
  UserCheck,
  ClipboardCheck,
  Rocket,
  BarChart4,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const framework = [
  {
    icon: Search,
    title: "Creator Discovery",
    description:
      "Identify creators whose audience, niche and content naturally align with your campaign goals.",
  },
  {
    icon: UserCheck,
    title: "Creator Verification",
    description:
      "Review audience quality, engagement, authenticity and professionalism before every recommendation.",
  },
  {
    icon: ClipboardCheck,
    title: "Campaign Planning",
    description:
      "Define objectives, deliverables, timelines and KPIs before execution begins.",
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    description:
      "Coordinate creators, manage communication and ensure timely content delivery.",
  },
  {
    icon: BarChart4,
    title: "Reporting & Attribution",
    description:
      "Measure campaign performance through transparent reporting and actionable insights.",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Optimisation",
    description:
      "Improve campaign performance through ongoing analysis and data-driven refinement.",
  },
];

function Framework() {
  return (
    <section
      id="framework"
      className="relative overflow-hidden bg-[#050B18] py-32"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/5 blur-[170px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/5 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          centered
          label="The FromZeroHQ Framework"
          title="A Proven System Designed Around Results"
          description="Every creator partnership follows a structured methodology that minimizes risk, improves execution and delivers measurable outcomes."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {framework.map(({ icon: Icon, title, description }, index) => (
            <Card
              key={title}
              delay={index * 0.08}
              className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-xl"
            >
              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent" />
              </div>

              {/* Step Number */}

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-lg font-bold text-green-400">
                {index + 1}
              </div>

              <motion.div
                whileHover={{
                  rotate: 8,
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
                {title}
              </h3>

              <p className="relative z-10 mt-4 leading-8 text-gray-400">
                {description}
              </p>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-green-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                Framework Step
                <ArrowRight size={16} />
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-20 rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/5 p-10 text-center backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-green-300">
            Why This Framework Works
          </p>

          <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight">
            Consistent systems create consistent campaign results.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            By following the same structured process every time, brands gain
            better creator quality, improved campaign execution and more
            predictable marketing outcomes.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Framework;
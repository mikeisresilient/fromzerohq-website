import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Users,
  Rocket,
  BarChart3,
  FileCheck,
  ArrowRight,
} from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const solutions = [
  {
    title: "Discover",
    icon: Search,
    description:
      "Find creators who genuinely align with your audience, objectives and brand values instead of relying on guesswork.",
  },
  {
    title: "Vet",
    icon: ShieldCheck,
    description:
      "Every creator is evaluated for audience quality, authenticity, engagement and brand suitability.",
  },
  {
    title: "Recruit",
    icon: Users,
    description:
      "Connect with creators most likely to deliver measurable results for your campaign goals.",
  },
  {
    title: "Launch",
    icon: Rocket,
    description:
      "Coordinate campaign execution from onboarding to content delivery with structured workflows.",
  },
  {
    title: "Measure",
    icon: BarChart3,
    description:
      "Monitor campaign performance through transparent reporting and actionable insights.",
  },
  {
    title: "Protect",
    icon: FileCheck,
    description:
      "Manage contracts, compliance and creator obligations with confidence throughout every campaign.",
  },
];

const Solution = forwardRef(function Solution(_, ref) {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#050B18] py-32"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-green-500/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/5 blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          centered
          label="Our Infrastructure"
          title="Everything Needed To Run High Performing Creator Campaigns."
          description="From discovery to reporting, FromZeroHQ becomes the operational layer powering every successful creator partnership."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map(({ title, icon: Icon, description }, index) => (
            <Card
              key={title}
              delay={index * 0.08}
              className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent" />
              </div>

              <span className="absolute right-6 top-6 text-5xl font-bold text-white/5 transition-all duration-300 group-hover:text-green-500/10">
                {String(index + 1).padStart(2, "0")}
              </span>

              <motion.div
                whileHover={{ rotate: 6, scale: 1.08 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10"
              >
                <Icon
                  size={30}
                  className="text-green-400"
                />
              </motion.div>

              <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">
                {title}
              </h3>

              <p className="relative z-10 mt-4 leading-8 text-gray-400">
                {description}
              </p>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-green-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                Learn more
                <ArrowRight size={16} />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
});

export default Solution;
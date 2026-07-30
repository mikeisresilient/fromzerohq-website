import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Users,
  BarChart3,
  Clock3,
  FileCheck,
  ArrowRight,
} from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Creators",
    text: "Every creator is screened for authenticity, audience quality and professionalism before joining a campaign.",
  },
  {
    icon: TrendingUp,
    title: "Performance Driven",
    text: "Campaign decisions are guided by real data instead of assumptions, improving ROI over time.",
  },
  {
    icon: Users,
    title: "Dedicated Management",
    text: "Our team coordinates creators, timelines and communication so your campaigns stay on track.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    text: "Access clear performance reports with actionable insights after every campaign.",
  },
  {
    icon: Clock3,
    title: "Continuous Optimisation",
    text: "Weekly reviews help improve campaign performance while it's still running.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Contracts",
    text: "Professional agreements and disclosure standards reduce campaign risk from day one.",
  },
];

const WhyChooseUs = forwardRef(function WhyChooseUs(_, ref) {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-green-500/5 blur-[150px]" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-emerald-400/5 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Why FromZeroHQ</SectionLabel>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Infrastructure That Turns Creator Marketing Into A Predictable
              Growth Channel.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              From strategy and creator discovery to reporting and optimisation,
              FromZeroHQ provides the operational layer that helps brands execute
              creator campaigns with confidence.
            </p>

            <div className="mt-12 rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(34,197,94,.08)]">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-green-300">
                Our Mission
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-relaxed">
                Create trusted partnerships that generate measurable business
                growth.
              </h3>

              <div className="mt-8 inline-flex items-center gap-2 text-green-400">
                Built for ambitious brands
                <ArrowRight size={18} />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  delay={index * 0.08}
                  className="group flex items-start gap-5 bg-white/[0.04] p-6 backdrop-blur-xl"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-500/10"
                  >
                    <Icon
                      size={30}
                      className="text-green-400"
                    />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-8 text-gray-400">
                      {feature.text}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
});

export default WhyChooseUs;
import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  Users,
  TrendingUp,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const stats = [
  {
    title: "Campaign Health",
    value: "98%",
    icon: Activity,
    color: "text-green-400",
  },
  {
    title: "Verified Creators",
    value: "247",
    icon: BadgeCheck,
    color: "text-blue-400",
  },
  {
    title: "Active Campaigns",
    value: "18",
    icon: Users,
    color: "text-purple-400",
  },
  {
    title: "Weekly Growth",
    value: "+41%",
    icon: TrendingUp,
    color: "text-yellow-400",
  },
];

const chartData = [40, 60, 55, 80, 65, 90, 100];

const checklist = [
  "Identity Verified",
  "Audience Checked",
  "Contract Signed",
  "Content Approved",
];

const Dashboard = forwardRef(function Dashboard(_, ref) {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#050B18] py-24 lg:py-36"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-green-500/20 blur-[150px]" />

      <Container>
        <SectionHeading
          centered
          label="Platform Preview"
          title="Campaign Intelligence At A Glance"
          description="Every campaign is monitored through transparent reporting, performance insights and creator accountability."
        />

        {/* Dashboard Shell */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 lg:p-8">
          {/* Top Metrics */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  delay={index * 0.08}
                  className="rounded-2xl bg-[#101826] p-6"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className={item.color}
                      size={30}
                    />

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                      LIVE
                    </span>
                  </div>

                  <h3 className="mt-8 text-3xl font-bold sm:text-4xl">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {item.title}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Bottom Grid */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Performance Chart */}
            <div className="rounded-2xl border border-white/10 bg-[#101826] p-6 lg:col-span-2">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  Weekly Campaign Performance
                </h3>

                <BarChart3 className="text-green-400" />
              </div>

              <div
                className="flex h-56 items-end justify-between gap-4"
                role="img"
                aria-label="Weekly campaign performance chart"
              >
                {chartData.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="w-full rounded-t-xl bg-gradient-to-t from-green-600 to-green-400"
                  />
                ))}
              </div>
            </div>

            {/* Compliance Panel */}
            <div className="rounded-2xl border border-white/10 bg-[#101826] p-6">
              <ShieldCheck
                className="text-green-400"
                size={40}
              />

              <h3 className="mt-6 text-2xl font-bold">
                Compliance Status
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Every creator agreement includes campaign expectations,
                disclosure requirements, and quality standards to ensure
                consistent campaign execution.
              </p>

              <ul className="mt-8 space-y-4">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
});

export default Dashboard;
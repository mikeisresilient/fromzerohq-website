import { motion } from "framer-motion";

import useMouseParallax from "../../hooks/useMouseParallax";

import FloatingCard from "./FloatingCard";
import MetricCard from "./MetricCard";
import DashboardHeader from "./DashboardHeader";
import CampaignHealth from "./CampaignHealth";
import ActivityFeed from "./ActivityFeed";
import PerformanceChart from "./PerformanceChart";
import CampaignPipeline from "./CampaignPipeline";
import TopCreators from "./TopCreators";

import { heroMetrics } from "../../data/hero";

function HeroDashboard() {
  const offset = useMouseParallax(18);

  return (
    <motion.div
      className="relative mx-auto w-full max-w-2xl"
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
    >
      {/* Floating Metric Card */}
      <div className="absolute -left-50 top-10 z-10 hidden w-56 lg:block">
        <MetricCard
          delay={0}
          {...heroMetrics[0]}
        />
      </div>

      {/* Floating Metric Card */}
      <div className="absolute -left-50 top-60 z-20 hidden w-56 lg:block">
        <MetricCard
          delay={0.4}
          {...heroMetrics[1]}
        />
      </div>

      {/* Main Dashboard */}
      <FloatingCard
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.06]
          p-8
          shadow-[0_30px_90px_rgba(0,0,0,.45)]
        "
      >
        {/* Ambient Glow 1 */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -top-20
            -left-20
            -z-10
            h-64
            w-64
            rounded-full
            bg-green-400/10
            blur-[120px]
          "
        />

        {/* Ambient Glow 2 */}
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            -z-10
            h-56
            w-56
            rounded-full
            bg-emerald-400/10
            blur-[110px]
          "
        />

        {/* Soft Glass Highlight */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -top-24
            left-1/2
            -translate-x-1/2
            h-40
            w-[75%]
            rounded-full
            bg-white/5
            blur-[90px]
          "
        />

        {/* Dashboard Content */}
        <div className="relative z-10">
          <DashboardHeader />

          <div className="mt-6">
            <CampaignHealth />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ActivityFeed />

            <PerformanceChart />
          </div>

          <div className="mt-6">
            <CampaignPipeline />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <TopCreators />

            <div className="grid gap-6">
              {heroMetrics.slice(2).map((metric, index) => (
                <MetricCard
                  key={metric.title}
                  delay={0.8 + index * 0.2}
                  {...metric}
                />
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  );
}

export default HeroDashboard;
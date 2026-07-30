import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import {
  heroChart,
  chartSummary,
} from "../../data/hero";

function PerformanceChart() {
  return (
    <FloatingCard className="p-6">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">
            Weekly Performance
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {chartSummary.label}
          </p>
        </div>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
          {chartSummary.growth}
        </span>
      </div>

      {/* Chart */}

      <div className="mt-8">
        <div className="flex h-44 items-end gap-3">
          {heroChart.map((item, index) => (
            <div
              key={item.day}
              className="flex w-full flex-col items-center"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: `${item.value}%`,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className="relative w-full rounded-t-xl bg-gradient-to-t from-green-600 to-green-400"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.6 + index * 0.08,
                  }}
                  className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-green-300 ring-4 ring-green-500/20"
                />
              </motion.div>

              <span className="mt-3 text-xs text-gray-500">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FloatingCard>
  );
}

export default PerformanceChart;
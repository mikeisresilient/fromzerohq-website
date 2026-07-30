import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  Radio,
} from "lucide-react";

const stages = [
  {
    title: "Discovery",
    status: "completed",
    progress: 100,
  },
  {
    title: "Creator Matching",
    status: "completed",
    progress: 100,
  },
  {
    title: "Vetting",
    status: "completed",
    progress: 100,
  },
  {
    title: "Campaign Live",
    status: "active",
    progress: 72,
  },
  {
    title: "Reporting",
    status: "pending",
    progress: 0,
  },
];

function StageIcon({ status }) {
  if (status === "completed") {
    return (
      <CheckCircle2
        size={18}
        className="text-green-400"
      />
    );
  }

  if (status === "active") {
    return (
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Radio
          size={18}
          className="text-green-400"
        />
      </motion.div>
    );
  }

  return (
    <Circle
      size={18}
      className="text-gray-500"
    />
  );
}

function CampaignPipeline() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
      <h4 className="font-semibold text-white">
        Campaign Pipeline
      </h4>

      <p className="mt-1 text-sm text-gray-400">
        Live campaign progress
      </p>

      <div className="mt-6 space-y-5">
        {stages.map((stage, index) => (
          <div
            key={stage.title}
            className="relative flex gap-4"
          >
            {index !== stages.length - 1 && (
              <div className="absolute left-[8px] top-6 h-12 w-px bg-white/10" />
            )}

            <div className="mt-1">
              <StageIcon status={stage.status} />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span
                  className={
                    stage.status === "pending"
                      ? "text-gray-500"
                      : "font-medium text-gray-200"
                  }
                >
                  {stage.title}
                </span>

                <span className="text-xs text-gray-500">
                  {stage.progress}%
                </span>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${stage.progress}%`,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignPipeline;
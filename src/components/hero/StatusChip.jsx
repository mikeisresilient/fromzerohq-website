import { motion } from "framer-motion";

function StatusChip() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2"
    >
      <motion.div
        animate={{
          opacity: [1, 0.4, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="h-2.5 w-2.5 rounded-full bg-green-400"
      />

      <span className="text-sm text-green-400">
        18 Campaigns Syncing
      </span>
    </motion.div>
  );
}

export default StatusChip;
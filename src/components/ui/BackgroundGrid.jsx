import { motion } from "framer-motion";

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Top Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-green-500 blur-[180px]"
      />

      {/* Bottom Right Glow */}

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-[-200px] right-[-150px] h-[450px] w-[450px] rounded-full bg-green-400/20 blur-[150px]"
      />

    </div>
  );
}

export default BackgroundGrid;
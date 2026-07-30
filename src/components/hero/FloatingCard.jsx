import { motion } from "framer-motion";

function FloatingCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotate: [-0.4, 0.4, -0.4],
      }}
      transition={{
        opacity: {
          delay,
          duration: 0.8,
        },

        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },

        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-xl
        shadow-[0_25px_80px_rgba(0,0,0,.35)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default FloatingCard;

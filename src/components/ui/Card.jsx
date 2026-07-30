import { motion } from "framer-motion";

function Card({
  children,
  className = "",
  delay = 0,
  hover = true,
  as: Component = "div",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={
        hover
          ? {
              y: -8,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }
          : undefined
      }
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-green-500/40
        hover:bg-white/[0.06]
        hover:shadow-[0_25px_70px_rgba(0,0,0,.35)]
        ${className}
      `}
    >
      {/* Subtle Hover Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      <Component className="relative z-10">
        {children}
      </Component>
    </motion.div>
  );
}

export default Card;
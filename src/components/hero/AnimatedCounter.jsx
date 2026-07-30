import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

function AnimatedCounter({
  value,
  duration = 2,
}) {
  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) => Math.round(latest)
  );

  useEffect(() => {
    const controls = animate(
      count,
      value,
      {
        duration,
      }
    );

    return controls.stop;
  }, [count, duration, value]);

  return (
    <motion.span>
      {rounded}
    </motion.span>
  );
}

export default AnimatedCounter;
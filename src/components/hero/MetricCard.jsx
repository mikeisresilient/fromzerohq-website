import FloatingCard from "./FloatingCard";
import AnimatedCounter from "./AnimatedCounter";
import { TrendingUp } from "lucide-react";

function MetricCard({ title, value, change, delay = 0 }) {
  return (
    <FloatingCard delay={delay} className="p-5">
      <p className="text-sm text-gray-400">{title}</p>

      <h3 className="mt-3 text-3xl font-bold">
        {typeof value === "number" ? <AnimatedCounter value={value} /> : value}
      </h3>

      <div className="mt-3 flex items-center gap-2 text-sm text-green-400">
        <TrendingUp size={16} />

        <span>{change}</span>
      </div>
    </FloatingCard>
  );
}

export default MetricCard;

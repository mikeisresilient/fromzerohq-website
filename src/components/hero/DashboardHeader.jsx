import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Activity,
} from "lucide-react";

function DashboardHeader() {
  return (
    <div className="flex items-start justify-between border-b border-white/10 pb-6">
      {/* Left */}
      <div>
        <div className="flex items-center gap-3">
          <Activity
            size={20}
            className="text-green-400"
          />

          <h3 className="text-lg font-semibold text-white">
            Creator Operations Dashboard
          </h3>
        </div>

        <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
          <span>Updated 2 mins ago</span>

          <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-green-400"
            />

            <span className="text-xs font-medium text-green-400">
              LIVE
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex gap-3">
        <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <Search
            size={18}
            className="text-gray-300"
          />
        </button>

        <button className="relative rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <Bell
            size={18}
            className="text-gray-300"
          />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-green-400" />
        </button>
      </div>
    </div>
  );
}

export default DashboardHeader;
import { motion } from "framer-motion";

function CampaignHealth() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">
          Campaign Health
        </h4>

        <span className="text-green-400 font-bold">
          98%
        </span>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "98%" }}
          transition={{
            duration: 1.5,
          }}
          className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-300"
        />
      </div>

      <div className="mt-5 flex justify-between text-sm text-gray-400">
        <span>18 Active Campaigns</span>

        <span>247 Verified Creators</span>
      </div>
    </div>
  );
}

export default CampaignHealth;
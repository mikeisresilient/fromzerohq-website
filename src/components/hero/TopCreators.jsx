import { motion } from "framer-motion";

const creators = [
  {
    name: "Lois Code",
    niche: "Trading",
    score: "98%",
  },
  {
    name: "Michael Ace",
    niche: "Web3",
    score: "95%",
  },
  {
    name: "David Wealth",
    niche: "Forex",
    score: "94%",
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function TopCreators() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
      <h4 className="font-semibold text-white">
        Top Creators
      </h4>

      <div className="mt-6 space-y-3">
        {creators.map((creator) => (
          <div
            key={creator.name}
            className="flex items-center justify-between rounded-xl p-2 transition-all duration-300 hover:bg-white/5"
          >
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-sm font-semibold text-green-400 shadow-lg shadow-green-500/10">
                {initials(creator.name)}

                {/* Verified Status */}
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0B1120] bg-green-400"
                />
              </div>

              {/* Creator Info */}
              <div>
                <p className="font-medium text-white">
                  {creator.name}
                </p>

                <p className="text-sm text-gray-400">
                  {creator.niche}
                </p>
              </div>
            </div>

            {/* Performance Badge */}
            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
              {creator.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCreators;
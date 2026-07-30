import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import BackgroundGrid from "../ui/BackgroundGrid";
import Button from "../ui/Button";
import Container from "../ui/Container";

import HeroDashboard from "../hero/HeroDashboard";

import { company } from "../../data/company";
import { useContext } from "react";
import { ScrollContext } from "../../context/ScrollContext";

const trustPoints = [
  "Verified creators only",
  "Transparent campaign reporting",
  "Performance focused execution",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

function Hero() {
  const { dashboardRef } = useContext(ScrollContext);
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-24"
    >
      <BackgroundGrid />

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-green-500/10 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[160px]"
        />
      </div>

      <Container className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="-mt-10 lg:mt-0">
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400"
          >
            Trusted Creator Infrastructure
          </motion.div>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="mt-8 max-w-xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {company.tagline}
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-400 lg:text-xl"
          >
            {company.description}
          </motion.p>

          {/* CTA */}

          <motion.div
            custom={0.3}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              onClick={() =>
                window.open(
                  "https://calendar.app.google/bLpy1afX6e6HUCMs6",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <span className="flex items-center gap-2">
                Book Strategy Call
                <ArrowRight size={18} />
              </span>
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                dashboardRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Explore Platform
            </Button>
          </motion.div>

          {/* TRUST */}

          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {trustPoints.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="rounded-full bg-green-500/10 p-1">
                  <CheckCircle2 size={16} className="text-green-400" />
                </div>

                <span className="text-sm text-gray-300 sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="relative"
        >
          {/* Glow */}

          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10 scale-125 rounded-full bg-green-500/10 blur-[160px]"
          />

          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/3 top-1/4 -z-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, 15, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 right-10 -z-10 h-44 w-44 rounded-full bg-green-300/5 blur-[100px]"
          />

          <HeroDashboard />
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;

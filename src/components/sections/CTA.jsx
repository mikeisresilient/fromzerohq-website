import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Button from "../ui/Button";
import Container from "../ui/Container";

function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent px-8 py-14 backdrop-blur-xl sm:px-12 lg:px-20 lg:py-20"
        >
          {/* Decorative Elements */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full border border-green-500/20" />

          <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-green-500/10 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              <Sparkles size={16} />

              Let's Build Something Great
            </div>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Turn Creator Marketing Into

              <span className="mt-2 block text-green-400">
                Your Competitive Advantage
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Discover the right creators, manage campaigns with confidence and
              measure every result through one trusted creator marketing
              infrastructure platform.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button>
                <CalendarDays size={18} />

                Book Strategy Call
              </Button>

              <Button variant="secondary">
                Learn More

                <ArrowRight size={18} />
              </Button>
            </div>

            {/* Trust Points */}

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
              <span>✓ Verified Creator Network</span>

              <span>✓ Transparent Performance Reporting</span>

              <span>✓ Campaigns Built to Scale</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Cta;
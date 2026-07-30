import { motion } from "framer-motion";

import Container from "../ui/Container";

const companies = [
  "Your Brand",
  "Next Campaign",
  "Ecommerce",
  "SaaS Startup",
  "Consumer Brand",
  "Enterprise",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function TrustedBy() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-[#050B18] py-20"
      id="trusted"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-green-500/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            Trusted Infrastructure
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Built for ambitious brands ready to scale creator marketing.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Whether you're launching your first creator campaign or managing
            partnerships at scale, FromZeroHQ provides the infrastructure to
            discover, manage and measure every collaboration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {companies.map((company) => (
            <motion.div
              key={company}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
              "
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 flex h-20 flex-col items-center justify-center">
                <span className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {company}
                </span>

                <span className="mt-3 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-green-400">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default TrustedBy;
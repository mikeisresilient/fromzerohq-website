import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, Elevate Media",
    quote:
      "FromZeroHQ transformed our creator campaigns. We saw stronger engagement, better partnerships, and measurable business growth.",
  },
  {
    name: "David Kim",
    role: "Marketing Director, NovaTech",
    quote:
      "Working with FromZeroHQ was effortless. Their strategy and execution exceeded our expectations from start to finish.",
  },
  {
    name: "Jessica Brown",
    role: "CEO, Bloom Digital",
    quote:
      "Their understanding of creator marketing is exceptional. They delivered results that directly impacted our revenue.",
  },
];

function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionLabel>
            Testimonials
          </SectionLabel>

          <SectionHeading>
            Trusted by brands that value measurable growth.
          </SectionHeading>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <p className="leading-8 text-gray-300">
                "{testimonial.quote}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold text-white">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-green-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import SectionLabel from "../ui/SectionLabel";

function Contact() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>
              Contact
            </SectionLabel>

            <SectionHeading>
              Let's build your next creator marketing campaign.
            </SectionHeading>

            <p className="mt-6 text-gray-400 leading-8">
              Whether you're launching a new campaign or scaling an existing
              one, we'd love to hear about your goals.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-green-400" />
                <span>hello@fromzerohq.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-green-400" />
                <span>+234 xxx xxx xxxx</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-green-400" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-2xl font-bold">
              Ready to grow?
            </h3>

            <p className="mt-4 text-gray-400">
              Book a strategy session and discover how creator marketing
              can accelerate your business.
            </p>

            <button className="mt-10 flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-semibold text-black transition hover:bg-green-400">
              Book Strategy Call
              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
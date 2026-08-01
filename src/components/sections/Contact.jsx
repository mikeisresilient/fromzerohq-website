import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaTelegram, FaDiscord, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import SectionLabel from "../ui/SectionLabel";

const socialLinks = [
  {
    icon: FaTelegram,
    label: "Telegram",
    href: "https://t.me/pleasurestack",
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/FromZeroHQ",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    href: "https://discord.com/users/pleasurestack",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/2347067924568",
  },
];

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
            <SectionLabel>Contact</SectionLabel>

            <SectionHeading>
              Let's build your next creator marketing campaign.
            </SectionHeading>

            <p className="mt-6 text-gray-400 leading-8">
              Whether you're launching a new campaign or scaling an existing
              one, we'd love to hear about your goals.
            </p>

            <div className="mt-10 space-y-6">
              <div className="mt-6 flex flex-wrap gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-400 hover:shadow-[0_10px_30px_rgba(34,197,94,.15)]"
                    >
                      <Icon className="text-lg" />

                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
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
            <h3 className="text-2xl font-bold">Ready to grow?</h3>

            <p className="mt-4 text-gray-400">
              Book a strategy session and discover how creator marketing can
              accelerate your business.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://calendar.app.google/bLpy1afX6e6HUCMs6",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="mt-10 flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-semibold text-black transition hover:bg-green-400"
            >
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

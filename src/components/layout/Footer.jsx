import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { company } from "../../data/company";

const platformLinks = [
  {
    label: "Creator Discovery",
    href: "#platform",
  },
  {
    label: "Campaign Management",
    href: "#process",
  },
  {
    label: "Analytics",
    href: "#framework",
  },
  {
    label: "Reporting",
    href: "#faq",
  },
];

const companyLinks = [
  {
    label: "About",
    href: "#home",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Framework",
    href: "#framework",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
];

const socialLinks = [
  {
    icon: FaXTwitter,
    href: null,
    label: "X",
  },
  {
    icon: FaLinkedin,
    href: null,
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: null,
    label: "Instagram",
  },
  {
    icon: FaGithub,
    href: null,
    label: "GitHub",
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      <Container>
        {/* CTA Section */}

        <div className="relative z-10 py-24">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-green-500/10 via-[#0b0b0b] to-emerald-500/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-12">
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                  Let's Build Something Exceptional
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                  Ready to scale your creator marketing?
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-gray-400">
                  Discover how FromZeroHQ can help your team find the right
                  creators, streamline campaign management and measure
                  performance with confidence.
                </p>
              </div>

              <Button
                onClick={() =>
                  window.open(
                    "https://calendar.app.google/bLpy1afX6e6HUCMs6",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="whitespace-nowrap px-8 py-4 text-base"
              >
                Schedule a Strategy Call
              </Button>
            </div>
          </div>

          {/* Footer Content */}

          <div className="mt-24 grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">
                        {/* Brand */}

            <div>
              <img
                src="/FromZeroHQ.png"
                alt="FromZeroHQ Logo"
                className="h-24 w-auto transition-transform duration-300 hover:scale-[1.03]"
              />

              <p className="mt-4 text-sm font-medium tracking-[0.25em] uppercase text-green-400">
                Creator Marketing Infrastructure
              </p>

              <p className="mt-6 max-w-md leading-8 text-gray-400">
                We help ambitious brands discover, vet, manage and measure
                creator partnerships through intelligent infrastructure built
                for modern marketing teams.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href ?? undefined}
                      aria-label={social.label}
                      onClick={(e) => {
                        if (!social.href) e.preventDefault();
                      }}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 ${
                        social.href
                          ? "hover:-translate-y-1 hover:border-green-500/30 hover:bg-green-500/15 hover:text-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                          : "cursor-not-allowed opacity-40"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm font-semibold text-white">
                  Need something custom?
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Every creator marketing strategy is different. Book a free
                  strategy session and let's discuss how FromZeroHQ can help
                  your team achieve measurable results.
                </p>

                <Button
                  onClick={() =>
                    window.open(
                      "https://calendar.app.google/bLpy1afX6e6HUCMs6",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="mt-6"
                >
                  Book a Call
                </Button>
              </div>
            </div>
                        {/* Platform */}

            <div>
              <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
                Platform
              </h3>

              <ul className="space-y-5">
                {platformLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-green-400"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}

            <div>
              <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
                Company
              </h3>

              <ul className="space-y-5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-green-400"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6">
                <p className="text-sm font-semibold text-white">
                  Have a project in mind?
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  We'd love to hear about your goals and explore how creator
                  marketing can accelerate your growth.
                </p>

                <a
                  href="https://calendar.app.google/bLpy1afX6e6HUCMs6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-green-400 transition-colors hover:text-green-300"
                >
                  Schedule a strategy call
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Divider */}

          <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    {/* Bottom Bar */}

          <div className="flex flex-col items-center justify-between gap-6 pb-12 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} {company.name}. All rights
                reserved.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Creator Marketing, Engineered for Results.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">
              <span>Built with React</span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-600 md:block" />

              <span>Vite</span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-600 md:block" />

              <span>Tailwind CSS</span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-600 md:block" />

              <span>Framer Motion</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
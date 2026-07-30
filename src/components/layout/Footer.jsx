import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "../ui/Container";
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
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: FaXTwitter,
    href: "#",
    label: "X",
  },
  {
    icon: FaLinkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaGithub,
    href: "#",
    label: "GitHub",
  },
];

function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/5 bg-[#050505]"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500/5 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500/5 blur-[140px]" />
      </div>

      <Container>
        <div className="relative z-10 grid gap-16 py-24 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-5">
              {/* Logo */}

              <img
                src="/FromZeroHQ.jpeg"
                alt="FromZeroHQ Logo"
                className="h-[72px] w-auto object-contain drop-shadow-[0_0_25px_rgba(34,197,94,.25)]"
              />

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {company.name}
                </h3>

                <p className="text-sm font-medium text-green-400">
                  Creator Marketing Infrastructure
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Helping brands discover, vet, manage and measure creator
              partnerships through intelligent campaign infrastructure built for
              modern marketing teams.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-gray-300
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:border-green-500/30
                      hover:bg-green-500/15
                      hover:text-green-400
                      hover:shadow-[0_0_25px_rgba(34,197,94,.2)]
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Platform */}

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Platform
            </h4>

            <ul className="space-y-4">
              {platformLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-white"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={13}
                      className="
                        -translate-x-2
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Company
            </h4>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-white"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={13}
                      className="
                        -translate-x-2
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Legal
            </h4>

            <ul className="space-y-4">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-white"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={13}
                      className="
                        -translate-x-2
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="relative z-10 flex flex-col items-center justify-between gap-6 border-t border-white/5 py-8 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. Built with React, Vite
            & Tailwind CSS.
          </p>

          <div className="text-center md:text-right">
            <p>Creator Marketing, Engineered for Results.</p>

            <p className="mt-1 text-xs text-gray-600">
              Built for ambitious brands.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
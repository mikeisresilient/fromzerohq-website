import { ArrowUpRight } from "lucide-react";
import { FaDiscord, FaTelegram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { company } from "../../data/company";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ScrollContext } from "../../context/ScrollContext";
import { Mail } from "lucide-react";

const platformLinks = [
  {
    label: "Creator Discovery",
    section: "platform",
  },
  {
    label: "Campaign Management",
    section: "process",
  },
  {
    label: "Reporting",
    section: "faq",
  },
];

const companyLinks = [
  {
    label: "Process",
    section: "process",
  },
  {
    label: "FAQ",
    section: "faq",
  },
  {
    label: "Case Studies",
    action: "case-studies",
  },
];

const socialLinks = [
  {
    icon: FaTelegram,
    href: "https://t.me/pleasurestack",
    label: "Telegram",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/FromZeroHQ",
    label: "X",
  },
  {
    icon: FaDiscord,
    href: "https://discord.com/users/pleasurestack",
    label: "Discord",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/2347067924568",
    label: "WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:fromzerotohq@gmail.com",
  },
];

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollContext = useContext(ScrollContext);

  const dashboardRef = scrollContext?.dashboardRef;
  const processRef = scrollContext?.processRef;
  const faqRef = scrollContext?.faqRef;
  const scrollToSection = (section) => {
    const refs = {
      platform: dashboardRef,
      process: processRef,
      faq: faqRef,
    };

    const ref = refs[section];

    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate("/", {
      state: {
        scrollTo: section,
      },
    });
  };
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
                  Ready to build creator campaigns that actually perform?
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-gray-400">
                  From creator discovery to campaign reporting, FromZeroHQ helps
                  ambitious brands build high performing partnerships with
                  confidence.
                </p>
              </div>

              <Button
                onClick={() =>
                  window.open(
                    "https://calendar.app.google/bLpy1afX6e6HUCMs6",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="whitespace-nowrap px-8 py-4 text-base"
              >
                Schedule a Discovery Call
              </Button>
            </div>
          </div>

          {/* Footer Content */}

          <div className="mt-24 grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">
            {/* Brand */}

            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-green-500/10 blur-3xl" />

              <img
                src="/FromZeroHQ.png"
                alt="FromZeroHQ"
                className="relative -ml-5 h-24 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
              />

              <p className="mt-4 text-sm font-medium tracking-[0.25em] uppercase text-green-400">
                Creator Marketing Infrastructure
              </p>

              <p className="mt-6 max-w-md leading-8 text-gray-400">
                We help ambitious brands discover, vet, manage and measure
                creator partnerships through intelligent infrastructure built
                for modern marketing teams.
              </p>
              <div className="mt-8 ml-5 flex flex-wrap items-center gap-5">
                {" "}
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
                      <span
                        className="
                          pointer-events-none
                          absolute
                          -top-10
                          left-1/2
                          -translate-x-1/2
                          rounded-lg
                          bg-black
                          px-3
                          py-1
                          text-xs
                          text-white
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:opacity-100
                        "
                      >
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="group relative mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 hover:shadow-[0_20px_50px_rgba(34,197,94,.15)]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  {" "}
                  <p className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                    Meet the Founder
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-3xl bg-green-500/20 blur-xl opacity-70 transition-all duration-500 group-hover:opacity-100" />

                      <img
                        src="/pleasure.jpg"
                        alt="Pleasure"
                        className="relative h-28 w-28 rounded-3xl border border-green-500/20 object-cover object-top shadow-[0_12px_35px_rgba(34,197,94,.2)] transition-all duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-green-400">
                        Pleasure
                      </h3>

                      <p className="mt-1 text-sm font-medium text-green-400">
                        Creator • Strategist • Trader
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-gray-400">
                    Founder of FromZeroHQ, helping brands connect with creators
                    through intelligent campaign management, measurable growth
                    and scalable marketing infrastructure.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                      CFD Trader
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                      Product Manager
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                      Growth Strategist
                    </span>
                  </div>
                  <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <a
                    href="https://x.com/pleasurestack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 font-medium text-green-400 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-500 hover:text-black hover:shadow-[0_12px_30px_rgba(34,197,94,.25)]"
                  >
                    Follow on X
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>
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
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => scrollToSection(link.section)}
                      className="group inline-flex items-center gap-2 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-green-400"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </button>
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
                    {link.action === "case-studies" ? (
                      <button
                        type="button"
                        onClick={() => {
                          navigate("/case-studies");
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        className="group inline-flex items-center gap-2 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-green-400"
                      >
                        <span>{link.label}</span>

                        <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => scrollToSection(link.section)}
                        className="group inline-flex items-center gap-2 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-green-400"
                      >
                        <span>{link.label}</span>

                        <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                      </button>
                    )}
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
                  Schedule a Discovery call
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
              <p className="mt-3 text-xs text-gray-500">
                Website developed by{" "}
                <a
                  href="https://linktr.ee/mikeisresilient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-medium text-green-400 transition-colors duration-300 hover:text-green-300"
                >
                  Michael Ege
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </p>
            </div>

            {/*<div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">
              <span>Built with React</span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-600 md:block" />

              <span>Vite</span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-600 md:block" />

              <span>Tailwind CSS</span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-600 md:block" />

              <span>Framer Motion</span>
            </div>*/}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

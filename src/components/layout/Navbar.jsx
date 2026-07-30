import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { useScrollContext } from "../../context/ScrollContext";
import { useActiveSection } from "../../context/ActiveSectionContext";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import BookingForm from "../ui/BookingForm";
import SuccessMessage from "../ui/SuccessMessage";

const homeLinks = [
  { label: "Platform", section: "platform" },
  { label: "Solutions", section: "solutions" },
  { label: "Process", section: "process" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "FAQ", section: "faq" },
];

const caseStudyLinks = [
  { label: "Home", to: "/" },
  { label: "Platform", section: "platform" },
  { label: "Solutions", section: "solutions" },
  { label: "Process", section: "process" },
  { label: "FAQ", section: "faq" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const activeSectionContext = useActiveSection();
  const activeSection = activeSectionContext?.activeSection ?? "";

  const scrollContext = useScrollContext();

  const isHome = location.pathname === "/";
  const isCaseStudies = location.pathname === "/case-studies";

  const links = isCaseStudies ? caseStudyLinks : homeLinks;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (section) => {
    setOpen(false);

    if (isHome && scrollContext?.dashboardRef && scrollContext?.solutionRef) {
      const refs = {
        platform: scrollContext.dashboardRef,
        solutions: scrollContext.solutionRef,
        process: scrollContext.processRef,
        faq: scrollContext.faqRef,
      };

      refs[section]?.current?.scrollIntoView({
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

  const handleBookingClick = () => {
    // For now, open the booking form.
    // When the client sends the Calendly link,
    // this is the only function you'll need to change.
    setBookingComplete(false);
    setBookingOpen(true);
  };

  const handleBookingSubmit = (formData) => {
    console.log("Booking Request:", formData);

    // EmailJS or Calendly integration comes later.

    setBookingComplete(true);
  };

  const desktopItem = (link) => {
    if (link.to) {
      return (
        <Link
          to={link.to}
          className="group relative text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
        >
          {link.label}

          <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-green-400 transition-all duration-300 group-hover:w-full" />
        </Link>
      );
    }

    const active = activeSection === link.section;

    return (
      <button
        type="button"
        onClick={() => scrollToSection(link.section)}
        className={`group relative text-sm font-medium transition-colors duration-300 ${
          active ? "text-green-400" : "text-gray-300 hover:text-white"
        }`}
      >
        {link.label}

        <span
          className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-green-400 transition-all duration-300 ${
            active ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </button>
    );
  };

  const mobileItem = (link) => {
    if (link.to) {
      return (
        <Link
          to={link.to}
          onClick={() => setOpen(false)}
          className="block rounded-xl px-4 py-4 text-gray-300 transition hover:bg-white/5 hover:text-white"
        >
          {link.label}
        </Link>
      );
    }

    const active = activeSection === link.section;

    return (
      <button
        type="button"
        onClick={() => scrollToSection(link.section)}
        className={`block w-full rounded-xl px-4 py-4 text-left transition ${
          active
            ? "bg-green-500/10 text-green-400"
            : "text-gray-300 hover:bg-white/5 hover:text-white"
        }`}
      >
        {link.label}
      </button>
    );
  };

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-50">
        <Container>
          <div
            className={`flex h-[72px] items-center justify-between rounded-2xl border px-6 transition-all duration-500 lg:h-20 ${
              scrolled
                ? "border-white/10 bg-[#050505]/80 shadow-[0_10px_50px_rgba(0,0,0,.35)] backdrop-blur-2xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <Link to="/" className="group flex items-center gap-4">
              <img
                src="/FromZeroHQ.jpeg"
                alt="FromZeroHQ Logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
              />

              <div className="hidden sm:block">
                <h3 className="font-bold text-white">FromZeroHQ</h3>

                <p className="text-xs text-green-400">
                  Creator Marketing Infrastructure
                </p>
              </div>
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {links.map((link) => (
                  <li key={link.label}>{desktopItem(link)}</li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:block">
              <Button onClick={handleBookingClick}>
                Book Strategy Call
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="rounded-xl border border-white/10 p-2 transition hover:border-green-500/30 lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#050505]/95 backdrop-blur-2xl lg:hidden"
              >
                <nav className="p-6">
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.label}>{mobileItem(link)}</li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button
                      className="w-full"
                      onClick={() => {
                        setOpen(false);
                        handleBookingClick();
                      }}
                    >
                      Book Strategy Call
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </header>

      <Modal
        open={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setBookingComplete(false);
        }}
        title="Book Your Strategy Call"
        description="Tell us about your business and we'll reach out within 24 hours."
      >
        {bookingComplete ? (
          <SuccessMessage
            onClose={() => {
              setBookingOpen(false);
              setBookingComplete(false);
            }}
          />
        ) : (
          <BookingForm onSubmit={handleBookingSubmit} />
        )}
      </Modal>
    </>
  );
}

export default Navbar;
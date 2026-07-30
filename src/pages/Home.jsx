import { useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ScrollContext } from "../context/ScrollContext";
import { ActiveSectionProvider } from "../context/ActiveSectionContext";

import Navbar from "../components/layout/Navbar";

import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import Process from "../components/sections/Process";
import Dashboard from "../components/sections/Dashboard";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Framework from "../components/sections/Framework";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import SectionObserver from "../components/layout/SectionObserver";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const dashboardRef = useRef(null);
  const solutionRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

  const scrollValue = useMemo(
    () => ({
      dashboardRef,
      solutionRef,
      processRef,
      faqRef,
    }),
    []
  );

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const sections = {
      platform: dashboardRef,
      solutions: solutionRef,
      process: processRef,
      faq: faqRef,
    };

    const ref = sections[location.state.scrollTo];

    requestAnimationFrame(() => {
      ref?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    navigate(location.pathname, {
      replace: true,
      state: {},
    });
  }, [location, navigate]);

  return (
    <ActiveSectionProvider>
      <ScrollContext.Provider value={scrollValue}>
        <div className="min-h-screen overflow-x-hidden bg-[#030712] text-white">
          <Navbar />
          <SectionObserver />

          <main>
            <Hero />
            <TrustedBy />
            <Problem />
            <Solution ref={solutionRef} />
            <Process ref={processRef} />
            <Dashboard ref={dashboardRef} />
            <Testimonials />
            <WhyChooseUs />
            <Framework />
            <FAQ ref={faqRef} />
            <Contact />
            <CTA />
          </main>

          <Footer />

          <ScrollToTopButton />
        </div>
      </ScrollContext.Provider>
    </ActiveSectionProvider>
  );
}

export default Home;
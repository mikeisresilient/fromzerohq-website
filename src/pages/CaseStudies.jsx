import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

function CaseStudies() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030712] text-white">
      <Navbar />

      <main className="pt-40 pb-24">
        <Container>
          {/* Hero */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
              Case Studies
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Real Campaigns.
              <br />
              Real Growth.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Explore how brands use FromZeroHQ to discover creators, launch
              campaigns, and measure performance with complete transparency.
            </p>
          </div>

          <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_25px_80px_rgba(0,0,0,.35)] backdrop-blur-xl lg:grid lg:grid-cols-2">
            {/* LEFT */}
            <div className="group relative overflow-hidden">
              <img
                src="/case-studies/traderlab-preview.png"
                alt="TraderLab Case Study"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                  Preview Only
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-center p-10">
              <span className="inline-flex w-fit rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                Featured Case Study
              </span>

              <h2 className="mt-6 text-3xl font-bold">TraderLab</h2>

              <p className="mt-6 leading-8 text-gray-400">
                Discover how FromZeroHQ partnered with TraderLab to strengthen
                its creator marketing strategy, improve community engagement and
                build sustainable growth through data driven campaigns.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-gray-300">
                  Creator Strategy
                </span>

                <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-gray-300">
                  Community Growth
                </span>

                <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-gray-300">
                  Campaign Execution
                </span>
              </div>

              <Button className="mt-4"
                onClick={() =>
                  window.open(
                    "https://t.me/pleasurestack?text=Hi%20Pleasure!%20I%20just%20read%20the%20TraderLab%20case%20study%20preview%20on%20FromZeroHQ.%20I'd%20love%20to%20read%20the%20full%20case%20study.",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Read Full Case Study
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                The full case study is available upon request.
              </p>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default CaseStudies;

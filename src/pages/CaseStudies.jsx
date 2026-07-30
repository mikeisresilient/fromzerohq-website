import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

function CaseStudies() {
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

          {/* Placeholder */}
          <div className="mt-20 rounded-3xl border border-dashed border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
            <h2 className="text-2xl font-semibold">
              Case studies coming soon
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              We're documenting campaign results, creator partnerships, and
              measurable outcomes. Check back soon to explore detailed success
              stories.
            </p>

            <Button href="#contact" className="mt-8">
              Book Strategy Call
            </Button>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default CaseStudies;
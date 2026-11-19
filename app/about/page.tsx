import MissionVisionValues from "../components/about/Mission-vision-values";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-off-white">
      <div className="container-main relative grid min-h-66.25 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-10 lg:py-10">
        {/* Introduction */}
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              About Us
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            About LXB Group
          </h1>

          <p className="mt-5 max-w-xl border-l-2 border-gold pl-5 text-base leading-6 text-navy sm:text-lg sm:leading-7">
            LXB Group is a multidisciplinary professional services company that
            brings together expertise in construction consultancy, architectural
            design and digital technology to deliver integrated, practical and
            high-quality solutions for our clients.
          </p>
        </div>

        {/* Architectural Illustration */}
        <div
          className="pointer-events-none absolute -right-16 bottom-0 top-0 hidden w-[58%] lg:block"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 650 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full text-gold opacity-70"
            preserveAspectRatio="xMidYMid meet"
          >
            <g stroke="currentColor" strokeWidth="1">
              {/* Main building outline */}
              <path d="M80 285 L390 30 L650 220 L650 340" />
              <path d="M390 30 L390 340" />
              <path d="M80 285 L80 340" />

              {/* Upper roof structure */}
              <path d="M390 30 L390 100 L650 285" />
              <path d="M390 100 L145 300" />
              <path d="M390 100 L650 285" />

              {/* Main facade */}
              <path d="M145 300 L390 125 L650 305" />
              <path d="M145 300 L145 340" />
              <path d="M390 125 L390 340" />
              <path d="M650 305 L650 340" />

              {/* Window divisions */}
              <path d="M205 253 L205 340" />
              <path d="M265 209 L265 340" />
              <path d="M325 166 L325 340" />
              <path d="M455 170 L455 340" />
              <path d="M520 216 L520 340" />
              <path d="M585 260 L585 340" />

              {/* Horizontal facade lines */}
              <path d="M145 300 L390 340 L650 305" />
              <path d="M205 253 L455 300" />
              <path d="M265 209 L520 260" />
              <path d="M325 166 L585 216" />

              {/* Architectural framing */}
              <path d="M165 284 L390 120 L625 288" />
              <path d="M185 270 L390 140 L605 295" />
              <path d="M390 30 L650 220" />
              <path d="M390 30 L650 220 L650 285" />
            </g>
          </svg>
        </div>

        {/* Mobile illustration */}
        <div
          className="pointer-events-none absolute -right-20 bottom-0 top-0 w-3/5 opacity-20 lg:hidden"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 650 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full text-gold"
            preserveAspectRatio="xMidYMid meet"
          >
            <g stroke="currentColor" strokeWidth="1.5">
              <path d="M80 285 L390 30 L650 220 L650 340" />
              <path d="M390 30 L390 340" />
              <path d="M145 300 L390 125 L650 305" />
              <path d="M205 253 L205 340" />
              <path d="M265 209 L265 340" />
              <path d="M325 166 L325 340" />
              <path d="M455 170 L455 340" />
              <path d="M520 216 L520 340" />
              <path d="M585 260 L585 340" />
              <path d="M145 300 L390 340 L650 305" />
              <path d="M390 100 L145 300" />
              <path d="M390 100 L650 285" />
            </g>
          </svg>
        </div>
      </div>

      <MissionVisionValues />
    </section>
  );
}

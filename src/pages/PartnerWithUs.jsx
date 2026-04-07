import { partner } from "../data/data";

function PartnerWithUs() {
  return (
    <section
      id="partnership"
      className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-16"
    >
      {/* --- HEADER SECTION --- */}
      <header className="max-w-3xl mx-auto text-center space-y-6 mb-16">
        <div className="flex items-center justify-center gap-3">
          <span className="h-0.5 w-8 bg-primary-500 rounded-full hidden md:block"></span>
          <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">
            Corporate Alliances
          </span>
          <span className="h-0.5 w-8 bg-primary-500 rounded-full hidden md:block"></span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Partner With <span className="text-primary-500">Us</span>
        </h2>

        <p className="text-lg leading-relaxed pt-2">
          <span className="text-primary-500 font-bold tracking-wide">
            HWCT INDIA FOUNDATION
          </span>{" "}
          invites your esteemed organization to explore a transformative
          partnership. By pooling our strengths and resources, we can co-develop
          innovative solutions and drive sustainable growth together. Let’s
          collaborate to amplify our impact and shape the future of{" "}
          <span className="text-primary-400 font-semibold">
            community empowerment and education
          </span>{" "}
          in India.
        </p>
      </header>

      {/* --- PARTNER BENEFITS GRID --- */}
      <ul className="grid md:grid-cols-2 gap-4 lg:gap-6">
        {partner.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <li
              key={index}
              className="group relative bg-main-bg-600/50 flex items-start gap-5 rounded-2xl p-6 md:p-8 border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:bg-main-bg-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 cursor-pointer overflow-hidden"
            >
              {/* Subtle hover glow background */}
              <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Icon Box */}
              <div className="p-3 md:p-4 rounded-xl bg-main-bg-700 border border-white/5 text-primary-500 group-hover:bg-primary-500 group-hover:text-main-bg-900 group-hover:scale-110 transition-all duration-300 z-10 shrink-0">
                <IconComponent size={28} strokeWidth={2} />
              </div>

              {/* Text Content */}
              <p className="text-sm md:text-base text-main-text/70 group-hover:text-main-text/90 leading-relaxed transition-colors duration-300 z-10 pt-1 md:pt-2">
                {item.label}
              </p>
            </li>
          );
        })}
      </ul>

      {/* --- CALL TO ACTION BANNER --- */}
      <div className="mt-16 bg-linear-to-br from-main-bg-700 to-main-bg-600 border border-primary-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
        {/* Decorative background blur */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 text-center md:text-left space-y-2">
          <h4 className="text-2xl md:text-3xl font-bold text-main-text">
            Ready to make an impact?
          </h4>
          <p className="text-main-text/70 text-lg">
            Here’s to a future of collaboration and achievement!
          </p>
        </div>

        <a
          href="mailto:partnerships@hwctindia.org"
          className="relative z-10 inline-flex items-center justify-center gap-3 bg-primary-500 text-main-bg-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1 active:scale-95 transition-all duration-300 group whitespace-nowrap"
        >
          Email Partnerships
          <span className="transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </section>
  );
}

export default PartnerWithUs;

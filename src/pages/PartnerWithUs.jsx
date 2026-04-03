import { partner } from "../data/data";

function PartnerWithUs() {
  return (
    <section id="partnership" className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-16">

      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
          Partner With <span className="text-primary-500">Us</span>
        </h3>

        <p className="text-lg leading-relaxed">
          HWCT INDIA FOUNDATION invites your esteemed organization to explore a
          transformative partnership. By pooling our strengths and resources, we
          can co-develop innovative solutions and drive sustainable growth
          together. Let’s collaborate to amplify our impact and shape the future
          of{" "}
          <span className="text-primary-400 font-semibold">
            community empowerment and education
          </span>{" "}
          in India.
        </p>

        <div className="bg-main-bg-600 border border-white/10 rounded-2xl p-6 mt-6 inline-block">
          <p className="text-main-text font-medium mb-2">
            Here’s to a future of collaboration and achievement!
          </p>
          <a
            href="mailto:partnerships@hwctindia.org"
            className="inline-flex items-center gap-2 text-primary-500 font-bold hover:text-primary-400 transition-colors text-lg group"
          >
            partnerships@hwctindia.org
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-2 lg:gap-6 mt-16">
        {partner.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <div
              key={index}
              className="group bg-main-bg-600 flex flex-col items-center text-center gap-5 rounded-2xl p-8 border border-white/5 hover:border-primary-500/40 hover:bg-main-bg-light transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10 cursor-pointer"
            >
              <div className="p-4 rounded-full bg-main-bg border border-white/5 group-hover:border-primary-500/30 text-primary-500 group-hover:scale-110 transition-all duration-300">
                <IconComponent size={32} strokeWidth={2} />
              </div>
              <p className="text-sm md:text-base text-main-text/70 group-hover:text-main-text/90 leading-relaxed transition-colors duration-300">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PartnerWithUs;

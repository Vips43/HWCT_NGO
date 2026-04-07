import Typewriter from "typewriter-effect";
import Button from "../components/Button";
import { ABOUT_US, DONATION_LINK } from "../data/data";
import Socials from "../components/Socials";

function Home() {
  // Mock data to replace the empty "live data" comment.
  // You can replace this with your actual Axios fetch logic later.
  const impactStats = [
    { label: "Lives Impacted", value: "50,000" },
    { label: "Villages Reached", value: "120" },
    { label: "Active Projects", value: "12" },
  ];

  return (
    <section
      id="home"
      className="grid lg:grid-cols-2 min-h-[85vh] bg-main-bg-600"
    >
      {/* ================= LEFT COLUMN: THE HOOK & ACTION ================= */}
      <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-10 relative z-10">
        {/* Headline */}
        <header>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-primary-500 rounded-full"></span>
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">
              Human Welfare Charitable Trust
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold flex flex-col gap-2 text-main-text tracking-tight leading-tight">
            <span>Empowering</span>
            <span className="text-primary-400 font-script min-h-[1.2em] font-normal tracking-normal">
              <Typewriter
                options={{
                  strings: [
                    "Tribal Communities.",
                    "Rural Futures.",
                    "Slum Children.",
                    "Women Artisans.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                }}
              />
            </span>
            <span>Across India.</span>
          </h1>
        </header>

        {/* Mission Statement */}
        <p className="text-lg text-main-text/80 leading-relaxed max-w-xl text-justify md:text-left">
          We work at the grassroots level to eradicate malnutrition, provide
          quality education, and create sustainable livelihoods. By connecting
          education to employment, we are building a foundation for a stronger,
          self-reliant India.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-b border-main-text/10 pb-12">
          <Button
            bgcolor="border border-white/20 bg-transparent w-full sm:w-fit"
            textclr="text-white hover:bg-white hover:text-main-bg-600 hover:border-white transition-all duration-300"
            text="Learn About Us"
            link={ABOUT_US}
          />
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          {impactStats.map((stat, index) => (
            <div key={index} className="flex flex-col mx-auto space-y-1">
              <span className="text-3xl md:text-4xl font-black text-white">
                {stat.value}
                <span className="text-primary-500">+</span>
              </span>
              <span className="text-xs md:text-sm font-semibold text-main-text/60 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ==== RIGHT COLUMN: VISION & PROOF ==== */}
      <div className="bg-main-bg-200 text-black p-8 md:p-12 lg:p-16 flex flex-col justify-between group relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-125 pointer-events-none"></div>

        <div className="space-y-10 relative z-10 flex-1 flex flex-col justify-center">
          {/* Vision Block */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-10 bg-primary-700 rounded-full"></div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-primary-700">
                Our Vision
              </h3>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-gray-900">
              Until every child has{" "}
              <span className="font-bold relative inline-block text-black">
                access to quality education
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary-500/30 -z-10 transition-all duration-500 group-hover:bg-primary-500/50"></span>
              </span>{" "}
              — let's{" "}
              <span className="font-script text-primary-700 text-5xl inline-block ml-1">
                change India.
              </span>
            </h2>

            <p className="leading-relaxed text-lg text-gray-700 max-w-lg">
              We believe in innovative ideas to uplift the underprivileged.
              Through our targeted grassroots initiatives, we have brought
              tangible change to the lives of marginalized men, women, and
              children.
            </p>
          </div>

          <a
            href="http://human-welfare.org/wp-content/uploads/2022/12/HWCT-Brief-Brochure-Email.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:-translate-y-1 hover:bg-primary-700 w-fit hover:shadow-xl transition-all duration-300 whitespace-nowrap flex items-center gap-2"
          >
            <span>Download Brochure</span>
            <span className="text-lg">↓</span>
          </a>
        </div>

        {/* Bottom Footer Area (Socials & Brochure aligned together) */}
        <div className="relative z-10 mt-16 pt-8 border-t border-gray-300 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          {/* Socials Block */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Connect With Us
            </h3>
            {/* The wrapper inside your Socials component handles the row layout */}
            <Socials />
          </div>

          {/* Brochure Download */}
        </div>
      </div>
    </section>
  );
}

export default Home;

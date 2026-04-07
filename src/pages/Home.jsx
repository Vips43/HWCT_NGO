import Typewriter from "typewriter-effect";
import Button from "../components/Button";
import { ABOUT_US, DONATION_LINK } from "../data/data";
import Socials from "../components/Socials";

function Home() {

  return (
    <section id="home" className="grid lg:grid-cols-2 min-h-[85vh]">
      {/* LEFT COLUMN */}
      <div className="bg-main-bg-600 p-8 md:p-16 flex flex-col justify-center space-y-12 overflow-hidden">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold flex flex-col gap-2 text-main-text tracking-tight">
          <span>Transforming</span>
          <span className="text-primary-400 font-script min-h-[1.2em]">
            <Typewriter
              options={{
                strings: ["Lives Across", "Communities In", "Futures For"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
          <span>Smart India</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-8 justify-between pb-12 border-b border-main-text/20">
          <p className="text-lg text-main-text/80 leading-relaxed md:w-3/5 text-justify md:text-left">
            HWCT India connects education to employment — working across tribal,
            rural, and urban communities to eradicate malnutrition, enable
            digital learning, and build lasting opportunities.
          </p>
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 justify-center md:w-2/5">
            <Button
              bgcolor="outline w-full sm:w-fit md:w-full"
              textclr="text-white hover:bg-white hover:text-main-bg-600 transition-colors"
              text="About us"
              link={ABOUT_US}
            />
          </div>
        </div>

        {/* live data  */}


      </div>

      <div className="bg-main-bg-200 p-8 md:p-16 flex flex-col justify-center space-y-10 group relative overflow-hidden">
        <div className="absolute top-[-15%] right-[-15%] w-96 h-96 bg-primary-500/5 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-125 pointer-events-none"></div>

        <div className="space-y-6 relative z-10 text-black">
          <div className="flex items-center gap-4">
            <div className="h-1 w-10 bg-primary-700 rounded-full"></div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-primary-700">
              Our Vision
            </h3>
          </div>

          <h5 className="text-3xl md:text-4xl font-medium leading-tight ">
            Until every child has{" "}
            <span className="font-bold relative inline-block">
              access to quality education
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary-700 transition-all duration-500 group-hover:w-full"></span>
            </span>{" "}
            — let's{" "}
            <span className="font-script text-primary-700 text-5xl inline-block ml-1">
              change India.
            </span>
          </h5>

          <p className="leading-relaxed text-lg pt-2">
            HWCT believes in innovative ideas to change the lives of the
            underprivileged. With our initiatives:{" "}
            <span className="text-primary-700 font-semibold hover:text-primary-400 transition-colors cursor-pointer">
              Shelter of Love, Project Kartavya, Project Poshan, and Project
              Magic Box
            </span>
            , we have brought a huge change to the lives of many underprivileged
            men, women, and children.
          </p>
        </div>

        <div className="relative z-10">
          
          <Socials />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative z-10">
          <div className="space-y-2">
            <h3 className="text-primary-700 font-bold uppercase tracking-wider text-sm">
              HWCT India
            </h3>
            <h2 className="text-3xl font-bold">Why Us?</h2>
            <p className="max-w-sm text-sm">
              Our vision and dedication have proven to create a significant
              impact in changing the lives of many for the better.
            </p>
          </div>

          <a
            href="http://human-welfare.org/wp-content/uploads/2022/12/HWCT-Brief-Brochure-Email.pdf"
            target="_blank"
            className="px-8 py-4 sticky bottom-0 bg-main-text text-gray-700 font-bold rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-main-text/20 transition-all duration-300 whitespace-nowrap"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

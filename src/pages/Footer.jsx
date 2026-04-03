import { initiatives, quickLinks } from "../data/data";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import logo from "../assets/human-welfare-logo.png";

function Footer() {
  return (
    <footer className="bg-main-bg-900 text-main-bg-50 pt-16 pb-8 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <div className="flex flex-col gap-6">
          <img src={logo} alt="Logo" className="w-48 object-contain" />
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Dedicated to uplifting lives through sustainable social
            initiatives and community welfare programs.
          </p>
        </div>

        <nav className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold tracking-wide uppercase">
            Initiatives
          </h3>
          <ul className="flex flex-col gap-2">
            {initiatives.map((ini, i) => (
              <li key={i}>
                <a
                  href={ini.link}
                  className="text-main-bg-500 hover:text-white transition-colors text-sm capitalize"
                >
                  {ini.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.link}
                  target={link.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="text-main-bg-500 hover:text-white transition-colors text-sm capitalize"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold tracking-wide uppercase">
            Contact Us
          </h3>
          <address className="not-italic flex flex-col gap-4 text-main-bg-200 text-sm">
            <p className="leading-relaxed">
              401, Meghdoot Apartments, <br />
              Evershine Nagar, Malad West, <br />
              Mumbai, 400064
            </p>
            <div className="flex flex-col gap-3 text-main-bg-500">
              <a
                href="tel:+919820737841"
                className="flex items-center gap-3 hover:text-white transition-colors w-fit"
              >
                <span className="p-2 bg-main-bg-700 rounded-full text-blue-400">
                  <BsFillTelephoneFill />
                </span>
                <span>+91 9820737841</span>
              </a>
              <a
                href="mailto:info@human-welfare.org"
                className="flex items-center gap-3 hover:text-white transition-colors w-fit"
              >
                <span className="p-2 bg-main-bg-700 rounded-full text-blue-400">
                  <MdOutlineAlternateEmail />
                </span>
                <span className="break-all">info@human-welfare.org</span>
              </a>
            </div>
          </address>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Human Welfare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

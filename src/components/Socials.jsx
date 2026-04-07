import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn, 
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/hwctindia",
    color: "text-blue-500",
    hoverBg: "hover:bg-blue-600 hover:text-white hover:shadow-blue-500/20",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/hwctindia",
    color: "text-pink-600",
    hoverBg: "hover:bg-pink-600 hover:text-white hover:shadow-pink-600/20",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@hwctindia",
    color: "text-red-600",
    hoverBg: "hover:bg-red-600 hover:text-white hover:shadow-red-600/20",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/hwctindia",
    color: "text-blue-600",
    hoverBg: "hover:bg-blue-700 hover:text-white hover:shadow-blue-700/20",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/hwctindia",
    color: "text-cyan-500",
    hoverBg: "hover:bg-cyan-500 hover:text-white hover:shadow-cyan-500/20",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/0919820737841",
    color: "text-green-600",
    hoverBg: "hover:bg-green-600 hover:text-white hover:shadow-green-600/20",
  },
  {
    name: "Partnerships Email",
    icon: MdEmail,
    url: "mailto:partnerships@hwctindia.org",
    color: "text-white/80",
    hoverBg: "hover:bg-main-bg-50 hover:text-main-text",
  },
  {
    name: "General Info Email",
    icon: MdEmail,
    url: "mailto:info@human-welfare.org",
    color: "text-white/80",
    hoverBg: "hover:bg-main-bg-50 hover:text-main-text",
  },
  {
    name: "Location",
    icon: FaLocationDot,
    url: "https://maps.app.goo.gl/zsmu2NinAePRuuYC8",
    color: "text-primary-500",
    hoverBg:
      "hover:bg-primary-600 hover:text-white hover:shadow-primary-500/20",
  },
];

function Socials() {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-3">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;

        return (
          <a
            key={index}
            href={link.url}
            title={link.name}
            aria-label={link.name}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-12 h-12 flex items-center justify-center rounded-full bg-white/5 
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-110 hover:shadow-lg
              ${link.color} ${link.hoverBg}
            `}
          >
            <Icon className="text-2xl md:text-3xl" />
          </a>
        );
      })}
    </div>
  );
}

export default Socials;

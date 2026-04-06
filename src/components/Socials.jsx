import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaLocationArrow,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Socials() {
  return (
    <div className="flex flex-wrap justify-center gap-3 *:w-10 *:aspect-square *:rounded-full *:grid *:place-items-center *:transition-all">
      <a href="https://www.facebook.com/hwctindia" className="text-xl text-blue-700 bg-white/5 hover:text-white hover:bg-blue-700">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/hwctindia" className="text-xl text-pink-700 bg-white/5 hover:text-white hover:bg-pink-700">
        <FaInstagram />
      </a>
      <a href="https://www.youtube.com/@hwctindia" className="text-xl text-red-700 bg-white/5 hover:text-white hover:bg-red-700">
        <FaYoutube />
      </a>
      <a href="https://www.linkedin.com/company/hwctindia" className="text-xl text-blue-700 bg-white/5 hover:text-white hover:bg-blue-700">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/hwctindia" className="text-xl text-cyan-500 bg-white/5 hover:text-white hover:bg-cyan-700">
        <FaTwitter />
      </a>
      <a href="https://wa.me/0919820737841" className="text-xl text-green-700 bg-white/5 hover:text-white hover:bg-green-700">
        <FaWhatsapp />
      </a>
      <a title="partner-mail" href="mailto:partnerships@hwctindia.org" className="text-xl text-white bg-white/5 hover:text-main-bg-600 hover:bg-main-bg-50">
        <MdEmail />
      </a>
      <a title="mail" href="mailto:info@human-welfare.org" className="text-xl text-white bg-white/5 hover:text-main-bg-600 hover:bg-main-bg-50">
        <MdEmail />
      </a>
      <a title="location" href="https://maps.app.goo.gl/zsmu2NinAePRuuYC8" className="text-xl text-primary-700 bg-white/5 hover:text-main-bg-600 hover:bg-primary-700">
        <FaLocationArrow />
      </a>
    </div>
  );
}

export default Socials;
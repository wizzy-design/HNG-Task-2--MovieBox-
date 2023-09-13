import insta from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mb-8 space-y-6">
      {/* Social Icons */}
      <div id="social-icons" className="flex gap-8">
        <img className="cursor-pointer" src={facebook} alt="Facebook" />
        <img className="cursor-pointer" src={insta} alt="Instagram" />
        <img className="cursor-pointer" src={twitter} alt="Twitter" />
        <img className="cursor-pointer" src={youtube} alt="Youtube" />
      </div>

      {/* Links */}
      <div>
        <ul className="flex gap-8 font-bold">
          <li className="cursor-pointer">Conditions of Use</li>
          <li className="cursor-pointer">Privacy & Policy</li>
          <li className="cursor-pointer">Press Room</li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="font-bold text-gray-500">&copy; 2021 MovieBox by Adriana Eka Prayudha </div>
    </footer>
  );
};

export default Footer;

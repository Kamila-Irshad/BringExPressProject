import { Link } from "react-router-dom";
import Logo from "../assets/Images/logo245a6755.png";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-gray-100 mt-20 pt-10 pb-6 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-start md:justify-evenly gap-10 md:gap-20">
        <div className="text-left md:text-left">
          <img src={Logo} alt="Logo" className="h-10" />
          <p className="mt-4">© Copyright 2021 bring Express GmbH.</p>
          <p>All rights reserved.</p>
        </div>

        <div className="text-left">
          <h1 className="text-lg font-bold">Company</h1>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/About"
                onClick={scrollUp}
                className="hover:text-[#F97316] font-semibold text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                onClick={scrollUp}
                className="hover:text-[#F97316] font-semibold text-sm"
              >
                Contact
              </Link>
            </li>
            <li ><Link  to= "/Jobs" className="hover:text-[#F97316] font-semibold text-sm">Jobs</Link></li>
          </ul>
        </div>

        <div className="text-left">
          <h1 className="text-lg font-bold">Legal</h1>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/Imprint"
                onClick={scrollUp}
                className="hover:text-[#F97316] font-semibold text-sm"
              >
                Imprint
              </Link>
            </li>
            <li>
              <Link
                to="/TermsAndConditions"
                onClick={scrollUp}
                className="hover:text-[#F97316] font-semibold text-sm"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                to="/PrivacyAndPolicy"
                onClick={scrollUp}
                className="hover:text-[#F97316] font-semibold text-sm"
              >
                Privacy and Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h1 className="text-lg font-bold">Get in touch</h1>
          <p className="mt-4 text-gray-500">
            <a
              href="mailto:career@bring-express.com"
              className="block hover:text-[#FF6C2F]"
            >
              career@bring-express.com
            </a>
            <a
              href="mailto:info@bring-express.com"
              className="block hover:text-[#FF6C2F]"
            >
              info@bring-express.com
            </a>
          </p>
        </div>

        <div className="text-left">
          <h1 className="text-lg font-bold">Follow Us</h1>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="hover:text-blue-600 border rounded-full h-9 p-1 w-9 "
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-pink-600 border rounded-full h-9 p-1 w-9"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="hover:text-blue-500 border rounded-full h-9 p-1 w-9"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Pic from "../assets/Images/banner1.a1718c7d.jpg";
import Partners from "./Partners";
import BodyPart4 from "./BodyPart4";
import Container from "./Container";
import JobOpportunities from "./JobOpportunities";
import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Body() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-10 text-lg items-center gap-16">
          <div className="md:col-span-1">
            <h1 className="text-2xl text-[#FF6C2F] font-bold animate-slideUp transition-all">
              Find a job as a driver
            </h1>
            <h2 className="text-3xl md:text-5xl text-[#A633DB] font-bold mt-4 animate-slideUp transition-all">
              Become a bringExpress driver
            </h2>
            <p className="lg:leading-6 mt-4 text-[13px] font-sans font-medium animate-slideUp transition-all">
              We work as courier partners for leading companies such as Amazon,
              UPS, DHL, Zalando, bring, Paket-Taxi, Hermes, Lieferando, Wolt,
              Uber Eats, and many others. Our priority is to save time and money
              for our partners.
            </p>
            <div className="border w-36 h-10 pt-1 rounded-full text-orange-600 bg-[#FBD6C4] text-center justify-center mt-5 hover:cursor-pointer animate-slideUp transition-all">
              <a href="#" className="text-[13px] font-semibold">
               <Link to="/TableOfJobs"> Open Positions</Link>
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <img
              src={Pic}
              alt="Driver Banner"
              className="w-full h-auto animate-slideUp transition-all"
            />
          </div>
        </div>
        <div>
          <ul className="relative right-14  bottom-28">
            <li className="absolute top-10 border rounded-full h-8 w-8 p-1 text-[12px] ">
              {" "}
              <a
                href="https://www.facebook.com"
                className="hover:text-blue-600 "
              >
                <FaFacebookF size={20} />
              </a>
            </li>
            <li className="absolute top-20 border rounded-full h-8 w-8 p-1 ">
              {" "}
              <a
                href="https://www.instagram.com"
                className="hover:text-pink-600 "
              >
                <FaInstagram size={20} />
              </a>
            </li>
            <li className="absolute top-28 border rounded-full h-8 w-8 p-1 ">
              {" "}
              <a
                href="https://www.linkedin.com"
                className="hover:text-blue-500 "
              >
                <FaLinkedinIn size={20} />
              </a>
            </li>
          </ul>
        </div>
      
      </Container>
      <Partners />
      <JobOpportunities></JobOpportunities>
      <BodyPart4 />
    </>
  );
}

export default Body;

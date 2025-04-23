import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Container from "./Container";
import Subscribe from "./SubscribeButton";

const Map = () => {
  return (
    <Container>
      <div className=" text-center text-4xl font-bold mt-10 leading-10 animate-slideUp transition-all ">
        <h1 className="text-[#a633db] text-base">CONTACT US</h1>
        <p>Get in touch with us</p>
      </div>
      <div className=" grid lg:grid-cols-2 animate-slideUp transition-all">
        <div className="bg-gray-200 col-span-1 mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.3482316594445!2d13.35805037650945!3d52.54522563436168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85181aa7983eb%3A0xa8152f2b4a9b7c74!2sM%C3%BCllerstra%C3%9Fe%20156B%2C%2013353%20Berlin%2C%20Germany!5e0!3m2!1sen!2s!4v1730817184087!5m2!1sen!2s"
            width="100%"
            height="400"
          ></iframe>
        </div>
        <div className="col-span-1 animate-slideUp transition-all">
          <h1 className="text-3xl font-bold mx-8 mt-6">
            Contact us if you need further assistance
          </h1>
          <p className="text-base mx-8 mt-6 my-8 ">
            Headquarters located in Berlin, Germany
          </p>
          <div className="m-10">
 
            <div className="flex items-center mb-4 font-sans text-lg">
              <LocationOnIcon className="mr-10 text-[#a633db]" />
              <div>
                <h1 className="font-bold">Our Location</h1>
                <a
                  href="https://www.google.com/maps?q=156b,+13353+Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6C2F]"
                >
                  156b, 13353 Berlin
                </a>
              </div>
            </div>

     
            <div className="flex items-center mb-4">
              <LocalPhoneIcon className="mr-10 text-[#a633db]" />
              <div>
                <h1 className="font-bold">Phone</h1>
                <a
                  href="tel:03039881100"
                  className="block hover:text-[#FF6C2F]"
                >
                  030 39 88 11 00
                </a>
              </div>
            </div>


            <div className="flex items-center mb-4">
              <EmailIcon className="mr-10 text-[#a633db]" />
              <div>
                <h1 className="font-bold">Email</h1>
                <a
                  href="mailto:info@bring-express.com"
                  className="block hover:text-[#FF6C2F]"
                >
                  info@bring-express.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </Container>
  );
};

export default Map;

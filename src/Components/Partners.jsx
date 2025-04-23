import Logo1 from "../assets/Images/amazon.c28f70d5.png";
import Logo2 from "../assets/Images/bring.458096bf.png";
import Logo3 from "../assets/Images/download (1).png";
import Logo4 from "../assets/Images/download (2).png";
import Logo5 from "../assets/Images/download.png";
import Logo6 from "../assets/Images/fedex.34136364.png";
import Logo7 from "../assets/Images/liefer24.61c0a755.png";
import Logo8 from "../assets/Images/lieferando.15710b87.png";
import Logo9 from "../assets/Images/pakettaxi.c65f2d6d.png";

function Partners() {
  return (
    <div className=" text-center flex flex-col items-center py-16 mt-20 bg-gray-100 w-full animate-slideUp transition-all">
      <p className="text-[#a633db] text-2xl font-bold mt-10">Partners</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 mt-6">
        Trusted by our partners
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-16 p-4">
        <img
          src={Logo1}
          alt="Amazon Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo2}
          alt="Bring Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo3}
          alt="Download Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo4}
          alt="Download Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo5}
          alt="Download Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo6}
          alt="Fedex Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo7}
          alt="Liefer24 Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo8}
          alt="Lieferando Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo9}
          alt="Paket Taxi Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo7}
          alt="Liefer24 Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo4}
          alt="Download Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
        <img
          src={Logo3}
          alt="Download Logo"
          className="filter grayscale w-24 h-24 lg:w-32 lg:h-32 object-contain"
        />
      </div>
    </div>
  );
}

export default Partners;

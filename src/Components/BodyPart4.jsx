import PicFirst from "../assets/Images/partner-banner1.76fec965.png";
import PicSecond from "../assets/Images/partner-banner2.e40571aa.png";

const BodyPart4 = () => {
  return (
    <>
      <div className="text-center mt-20  animate-slideUp transition-all lg:mx-10">
        <h1 className="text-purple-500 font-bold ">Why Choose Us</h1>
        <p className="font-bold text-3xl   text-black">
          A Choice That Makes The Difference
        </p>
      </div>

      <div className="grid  lg:grid-cols-2 gap-20  mt-10  items-center animate-slideUp transition-all lg:mx-10">
        <div className="lg:w-4/5">
          <h1 className="text-2xl  lg:text-4xl font-bold  ">
            Specializing in timely deliveries
          </h1>
          <p className="text-[13px]  leading-6 mt-6    ">
            We make things happen with unmatched speed, precision, and
            creativity. We’re faster, more convenient, and our prices are lower.
          </p>
        </div>
        <div className=" ">
          <img src={PicFirst} alt="Timely Deliveries" className="" />
        </div>
      </div>
      <div className="grid  lg:grid-cols-2  gap-20 mt-4  items-center animate-slideUp transition-all lg:mx-10">
        <div className="">
          <img src={PicSecond} alt="Good Service" className="" />
        </div>
        <div className="lg:w-4/5">
          <h1 className="text-2xl  lg:text-4xl font-bold   ">
            Good service is our top priority
          </h1>
          <p className="text-[13px]  leading-6 mt-6      ">
            We strive to deliver quality with every delivery. Guaranteed on-time
            deliveries by our dedicated team of friendly and professional
            drivers.
          </p>
        </div>
      </div>
    </>
  );
};

export default BodyPart4;

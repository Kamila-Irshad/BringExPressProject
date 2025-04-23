import Partners from "./Partners";
import Container from "./Container";
const About = () => {
  return (
    <>
      <Container>
        <div className="leading-relaxed max-w-4xl mt-16 lg:mx-14 animate-slideUp transition-all px-4 text-start">
          <div className="max-w-3xl text-start">
            <h1 className=" font-bold mt-4 text-[50px] ">
              About Us
            </h1>
            <p className="leading-relaxed mt-4 md:mr-20 text-[13px]  ">
              Bring Express GmbH is a courier company operating in Germany that
              has already successfully delivered more than 20 million parcels.
              With more than 600 drivers and in cooperation with leading
              partners around the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 animate-slideUp transition-all lg:mx-10">

  <div className="grid grid-cols-2 gap-4 mx-10">
   
    <div className="bg-[#FFF3ED] sm:gap-8 gap-4 rounded-tl-3xl rounded-br-3xl shadow-md pt-6 max-w-40 max-h-40 text-center">
      <h3 className="text-xl md:text-2xl font-bold ">20M +</h3>
      <p className="text-sm md:text-base mt-2">Packages delivered</p>
    </div>
    
    <div className="bg-[#EEFDFD] rounded-tl-3xl rounded-br-3xl p-4 shadow-md max-w-40 max-h-40 text-center">
      <h3 className="text-xl md:text-2xl font-bold ">600 +</h3>
      <p className="text-sm md:text-base  mt-2">Drivers</p>
    </div>
   
    <div className="bg-[#F4FDED] rounded-tl-3xl rounded-br-3xl p-4 shadow-md max-w-40 max-h-40 text-center pt-4">
      <h3 className="text-xl md:text-2xl font-bold ">1000 +</h3>
      <p className="text-sm md:text-base mt-2">Vehicles</p>
    </div>

    <div className="bg-[#FAF0FF] rounded-tl-3xl rounded-br-3xl p-4 shadow-md max-w-40 max-h-40   text-center">
      <h3 className="text-xl md:text-2xl font-bold ">10 +</h3>
      <p className="text-sm md:text-base mt-2">Years of experience</p>
    </div>
  </div>


  <div className="p-6  rounded-xl ">
    <h1 className="text-xl md:text-3xl font-bold text-gray-800">
      Bring Express - Your partner for express delivery
    </h1>
    <p className="text-[12px]  text-gray-600 mt-4 leading-4 md:leading-5">
      By providing our customers and carriers with the highest level of
      professional service, reliability, and peace of mind, we have become one
      of the largest and most trusted courier companies in Germany, employing
      more than 600 drivers. We are proud of our long-standing partnerships. No
      destination is too far, no load too heavy, no task too complex. We make
      courier delivery easy. And we do more than just a job. We will continue to
      grow because we are committed to being the leading service provider in the
      industry.
    </p>
  </div>
</div>


      </Container>
      <Partners />
    </>
  );
};

export default About;

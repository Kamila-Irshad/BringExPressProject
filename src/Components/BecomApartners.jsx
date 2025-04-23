import { useState, useEffect } from "react";
import PicFirst from "../assets/Images/partner-banner1.76fec965.png";
import PicSecond from "../assets/Images/partner-banner2.e40571aa.png";
import Container from "./Container";
function BePartners() {
  const initialValues = {
    companyName: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    comment: "",
  };

  const [formValues, setFormValues] = useState(initialValues );

  const [formErrors, setFormErrors] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      window.location.reload();
    }
  }, [formErrors, isSubmit, formValues]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.companyName) {
      errors.companyName = "*Required";
    }
    if (!values.name) {
      errors.name = "*Required";
    }
    if (!values.email) {
      errors.email = "*Required";
    } else if (!regex.test(values.email)) {
      errors.email = "*Enter a valid email address";
    }

    if (!values.phone) {
      errors.phone = "*Required";
    }

    if (!values.location) {
      errors.location = "*Required";
    }

    if (!values.comment) {
      errors.comment = "*Required";
    }
    return errors;
  };

  return (
    <Container>
      <div className="grid grid-cols-1 gap-20   md:grid-cols-2 m-auto animate-slideUp transition-all lg:mx-10 ">
        <div className="md:col-span-1 md:grid-rows-1 rounded-lg px-4 md:mt-20 lg:mt-16">
          <h1 className="font-bold text-[50px] mt-10 text-[#A633DB]">
            We are the solution for your company
          </h1>
          <p className="mt-6 leading-relaxed text-[14px]">
            Great things start with a reliable partner. We are committed to
            providing quality in each and every delivery. Good service is our
            top priority.
          </p>
        </div>
        <div className="md:col-span-1 pl-6 pr-6 shadow-lg rounded-lg">
          <h1 className="text-center text-[24px] font-bold">
            Become a partner
          </h1>


          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 font-semibold text-[11px]">
            <label  htmlFor="companyName" className="">
              Company name
            </label>
            <input
              name="companyName"
              type="text"
              className="border rounded p-2"
              value={formValues.companyName}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs">{formErrors.companyName}</p>

            <label htmlFor="name" className="">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="border rounded p-2"
              value={formValues.name}
              onChange={handleChange}
            />
            <p className="text-red-500">{formErrors.name}</p>

            <label htmlFor="email" className="">
              Email
            </label>
            <input
              name="email"
              type="text"
              className="border rounded p-2"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs">{formErrors.email}</p>

            <label htmlFor="phone" className="">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              className="border rounded p-2"
              value={formValues.phone}
              onChange={handleChange}
            />
            <p className="text-red-500 ">{formErrors.phone}</p>

            <label htmlFor="location" className="">
              Location
            </label>
            <input
              name="location"
              type="text"
              className="border rounded p-2"
              value={formValues.location}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs">{formErrors.location}</p>

            <label htmlFor="comment" className="">
              Additional Comment
            </label>
            <textarea
              name="comment"
              className="border rounded p-2"
              rows="3"
              value={formValues.comment}
              onChange={handleChange}
            ></textarea>
            <p className="text-red-500 text-sm">{formErrors.comment}</p>

            <button className="border rounded bg-[#A633DB] text-white w-24 m-auto p-2 mt-2 mb-4">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="text-[16px] lg:mt-20">
        <div className=" lg:grid lg:grid-cols-2 gap-10  animate-slideUp transition-all lg:mx-10 ">
          <div>
            <img src={PicFirst} alt="" className="" />
          </div>

          <div className=" ">
            <h1 className=" w-full font-bold mt-4 text-[32px]">
              Let us manage your courier delivery hassle
            </h1>
            <p className=" leading-8 font-semibold mt-8">
              We are the simple and easiest solution for any kind of logistic
              companies.
            </p>
            <ul className="list-disc ml-5  mt-5 text-[12px] space-y-2">
              <li>
                We ensure your package gets to your customers when they need it
              </li>
              <li>
                No mistakes, quick service, professional team, and expert
                drivers
              </li>
              <li>Operating throughout the region</li>
              <li>10 years in business</li>
            </ul>
          </div>

          <div className=" ">
            <h1 className=" font-bold text-[32px]  mt-4">
              Let us take the weight off your shoulders!
            </h1>
            <p className=" leading-5 font-semibold mt-8">
              Sit back and relax while your items are safely delivered by us.
            </p>
            <ul className="list-disc ml-5  mt-5 space-y-2 font-sans text-[12px]">
              <li>Capable of scaling up the team at any time</li>
              <li>Using the latest vehicles</li>
              <li>Helping companies to grow more</li>
              <li>Quality services assured</li>
              <li>Trusted to Deliver</li>
            </ul>
          </div>

          <div>
            <img src={PicSecond} alt="" className="" />
          </div>
        </div>
      </div>
    </Container>
  );
}
export default BePartners;

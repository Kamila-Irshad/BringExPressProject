import Map from "./Map";
import Container from "./Container";
import { useState, useEffect } from "react";

const Contact = () => {

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };


  const [formsValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formsValues, [name]: value }); 
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formsValues);
    setFormErrors(errors);  
    setIsSubmit(true); 
    if (Object.keys(errors).length > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };


  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {

      console.log(formsValues); 
      window.location.reload();  
    }
  }, [formErrors, isSubmit, formsValues]);


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

 
    if (!values.name) {
      errors.name = "*Required";
    }

    if (!values.email) {
      errors.email = "*Required";
    } else if (!regex.test(values.email)) {
      errors.email = "*Enter a valid email address";
    }

    if (!values.subject) {
      errors.subject = "*Required";
    }

    if (!values.message) {
      errors.message = "*Required";
    }

    return errors;
  };

  return (
    <Container>
      <div className="leading-relaxed max-w-4xl mt-16 px-4 text-start animate-slideUp transition-all">
        <div className="max-w-3xl text-start">
          <h1 className="text-5xl font-bold animate-slideUp transition-all">Contact Us</h1>
          <p className="mt-4 leading-loose text-[14px] animate-slideUp transition-all">
            Many years of experience in the logistics and transport industry make Bring Express your reliable, fast, and leading logistics partner. Whether your shipment is small or large or requires special handling for safety reasons - Bring Express will get it to your desired destination safely and on time. In order to reach support, do not hesitate to contact us by submitting the form below.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 mx-4 mt-16 p-4 sm:p-6 md:p-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slideUp transition-all">
          <div className="col-span-1 flex flex-col">
            <h1 className="text-[24px] font-bold">Quick Contact Form</h1>

            <label htmlFor="name" className=" text-sm pb-2">
              Name
            </label>
            <input
              value={formsValues.name}
              onChange={handleChange}
              type="text"
              name="name"
             
              className="border p-2 rounded "
            />
            <p className="text-red-500 text-xs">{formErrors.name}</p>

            <label htmlFor="email" className=" text-sm pb-2">
              Email
            </label>
            <input
              value={formsValues.email}
              type="email"
              name="email"
 
              className="border p-2 rounded "
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs">{formErrors.email}</p>

            <label htmlFor="subject" className=" text-sm pb-2">
              Subject
            </label>
            <input
              value={formsValues.subject}
              type="text"
              name="subject"

              className="border p-2 rounded "
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs">{formErrors.subject}</p>

            <div>
              <button className="border rounded bg-[#A633DB] text-white w-full md:w-auto px-4 py-2 mt-4">
                Submit
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <label htmlFor="message" className="font-bold pb-2 block">
              Message
            </label>
            <textarea
              value={formsValues.message}
              id="message"
       
              className="border p-2 w-full h-48 md:h-64 rounded"
              onChange={handleChange}
            ></textarea>
            <p className="text-red-500 text-xs">{formErrors.message}</p>
          </div>
        </form>
      </div>

      <Map />
    </Container>
  );
};

export default Contact;

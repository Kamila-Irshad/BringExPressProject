import { useState } from "react";
import Container from "./Container";

function SubscribeButton() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is Required");
    } else if (!validateEmail(email)) {
      setError("Invalid Email Format");
    } else {
      setError("");
      alert("Subscribed successfully!");
    }
  };

  return (
    <Container>
      <div className="lg:grid grid-cols-2 bg-pink-50 mt-10 animate-slideUp transition-all">
        <div className="lg:grid-span-1 mx-10 my-12">
          <h1 className="text-[36px]">Let's Discuss</h1>
          <h2 className="text-[16px]">
            Send us your email and our team will reach out to you.
          </h2>
        </div>
        <div className="grid-span-1 mx-6 my-12">
          <form className="relative" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Enter-Email"
              className="border p-4 w-full m-auto my-2 rounded-full"
            />
                  <div style={{ minHeight: "20px" }}>
              <p className="text-red-600 text-xs">{error}</p>
            </div>
        
            <div>
              <button
                type="submit"
                className="absolute transform right-3 bottom-9 bg-[#a633db] px-5 py-2 rounded-full text-white font-bold"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default SubscribeButton;

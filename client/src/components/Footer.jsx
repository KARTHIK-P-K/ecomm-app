import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import newsletter from "../images/newsletter.jpg";

const Footer = () => {
  const [text, setText] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      return;
    }
    setSubscribe(true);
  };
  return (
    <div className="h-full text-center w-full newsletter-section">
      {!subscribe ? (
        <div className="flex flex-col gap-y-6 items-center">
          <div className="md:text-2xl text-xl  ">Newsletter</div>
          <div className="uppercase font-bold text-2xl  md:text-3xl">
            Sign up for latest updates and offers
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-y-6"
          >
            <input
              type="text"
              placeholder="Email Address"
              className="border-2 px-4 py-2 mx-4 rounded-lg"
              onChange={(e) => setText(e.target.value)}
            />
            <button className="bg-black text-white px-4 py-2 font-semibold rounded-lg max-w-[150px] mx-auto">
              Subscribe
            </button>
          </form>
          <div className="text-md">
            Will be used in accordance with our Privacy Policy
          </div>
          <div className="flex gap-x-4 text-sm md:text-md md:mb-10 mb-32">
            <div className="text-lg md:text-xl">
              <FaLinkedinIn size={18} />
            </div>
            <div className="text-lg md:text-xl">
              <FaFacebookF size={18} />
            </div>
            <div className="text-lg md:text-xl">
              <FaTwitter size={18} />
            </div>
            <div className="text-lg md:text-xl">
              <FaInstagram size={18} />
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-24 text-2xl font-semibold">
          Thanks for Subscribing...
        </div>
      )}
    </div>
  );
};

export default Footer;

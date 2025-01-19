import React from "react";
import "./homeservices.css";
import { FaPhoneVolume } from "react-icons/fa6";

function HomeContact() {
  return (
    <section className="p-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Information */}
        <div className="text-black  p-6">
          <h2 className="text-5xl font-medium mb-16 text-start text-gray-900">
            Explore Our Services
          </h2>

          {/* Phone Section */}
          <div className="mb-6 flex flex-col items-start space-y-2">
            <p className="text-md  text-gray-700">Talk to our team</p>
            
            <a
              href="tel:+919809978396"
              className="text-xl  text-black hover:text-red-600"
            >
             +91 9809978396
            </a>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-start space-y-2">
            <p className="text-md  text-gray-700">Send Us an Email</p>
            <a
              href="mailto:contact@company.com"
              className="text-xl text-black hover:text-red-600"
            >
              praveenramachandran@company.com
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className=" p-6 rounded-lg ">
          <h3 className="text-2xl font-medium  text-gray-800 mb-6">
            Get Connected
          </h3>
          <form>
            {/* First Name and Last Name in Parallel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="first-name" className="block text-gray-700">
                  First Name*
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
              className="w-full p-3 mt-2 border-t border-l border-r border-b-2 border-slate-500 border-opacity-80 border-b-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="last-name" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="w-full p-3 mt-2 border-t border-l border-r border-b-2 border-slate-500 border-opacity-80 border-b-black"
                  required
                />
              </div>
            </div>

            {/* Email and Phone Number in Parallel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                   className="w-full p-3 mt-2 border-t border-l border-r border-b-2 border-slate-500 border-opacity-80 border-b-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 mt-2 border-t border-l border-r border-b-2 border-slate-500 border-opacity-80 border-b-black"
                  required
                />
              </div>
            </div>

            {/* Message Text Area */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
               className="w-full p-3 mt-2 border-t border-l border-r border-b-2 border-slate-500 border-opacity-80 border-b-black"
                rows="4"
                placeholder="Tell us more about your project"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="max-w-max p-10 bg-black text-white py-3  hover:bg-white border border-red-950 hover:text-red-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;

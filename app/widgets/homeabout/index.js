"use client"
import React from "react";
import CountUp from 'react-countup';
const HomeAbout = () => {
  return (
    <div className="bg-white p-20 flex flex-col md:flex-row">
      {/* Left Side: Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-1/2">
        <div>
          <h2 className="text-7xl  text-black">
          <CountUp start={0} end={50} duration={2} /><span className="text-red-500">+</span>
          </h2>
          <p className="text-gray-700 mt-2">Projects</p>
          <p className="text-gray-500">
          Our portfolio includes specialized government and UAE-based projects.
          </p>
        </div>
        <div>
        <h2 className="text-7xl  text-black">
            0<CountUp start={0} end={5} duration={2} /><span className="text-red-500">+</span>
          </h2>
          <p className="text-gray-700 mt-2">Experience</p>
          <p className="text-gray-500">
          Backed by over five years of experience, we deliver exceptional project outcomes.
          </p>
        </div>
        <div>
        <h2 className="text-7xl  text-black">
        0<CountUp start={0} end={3} duration={2} /><span className="text-red-500">+</span>
          </h2>
          <p className="text-gray-700 mt-2">Locations</p>
          <p className="text-gray-500">
          Our projects span across three countries, showcasing our global reach and expertise.
          </p>
        </div>
        <div>
        <h2 className="text-7xl  text-black">
        <CountUp start={0} end={10} duration={2} /><span className="text-red-500">+</span>
          </h2>
          <p className="text-gray-700 mt-2">Clients</p>
          <p className="text-gray-500">
            We have successfully served over 10 clients worldwide.
          </p>
        </div>
      </div>

      {/* Right Side: Main Text Content */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-5xl font-bold text-black leading-tight">
          Streamline your projects with expert management services tailored to
          meet your goals.
        </h1>
        <p className="text-black-100 mt-4 font-medium">
          We specialize in delivering top-tier project management solutions
          designed to enhance productivity and ensure seamless execution.
          Whether you’re managing large-scale projects or navigating complex
          operations, our expert services provide the foundation for success.
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;

"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all fixed w-full top-0 left-0 p-6 z-50 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          <a
            href="/"
            className={`transition-colors ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-violet-200`}
          >
            <span className={isScrolled ? "text-red-500" : ""}>P</span>rimetech{" "}
            {/* <span className={isScrolled ? "text-red-500" : ""}>T</span>ech */}
          </a>
        </div>

        <ul className="hidden md:flex space-x-8 items-center">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={` transition-colors text-lg font-medium ${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-red-500`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
       
      </nav>
    </header>
  );
}

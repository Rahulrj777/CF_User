import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlinePhoneAndroid } from "react-icons/md";

import logo from "../images/cf_logo.webp";
import black from "../images/footer_logo-1.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-black/90");
  const [showCourses, setShowCourses] = useState(false);

  const toggleCourses = () => {
    setShowCourses((prev) => !prev);
  };

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-black/80 shadow-md");
      } else {
        setNavbarBg("bg-black/90");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function topPage() {
    window.scroll(0, 0);
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#ffA500] h-8 md:h-10 flex items-center">
        {/* Phone */}
        <div className="w-[40%] md:w-[20%] bg-[#fc4141] flex justify-center items-center py-2 md:py-3">
          <a
            href="tel:+919884683888"
            target="_blank"
            className="flex items-center gap-1 text-white text-xs md:text-sm font-semibold"
          >
            <MdOutlinePhoneAndroid className="text-base md:text-lg" />
            +91 9884683888
          </a>
        </div>

        {/* Marquee */}
        <div className="w-[60%] md:w-[80%] overflow-hidden whitespace-nowrap">
          <div className="animate-marquee py-1 px-2">
            <p className="font-semibold text-[11px] md:text-sm capitalize text-gray-950 tracking-wide">
              Your <span className="text-[#ff0000]">filmmaking</span> future
              starts here!
            </p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-30 w-full py-4 md:py-5 shadow-sm shadow-gray-400 ${navbarBg}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link to="/" onClick={topPage}>
            <img
              src={logo}
              alt="CF Logo"
              title="Cinema Factory Logo"
              className="w-40 sm:w-48 md:w-56 object-contain"
              loading="lazy"
              fetchpriority="high"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-12 font-semibold text-white text-sm">
            <li>
              <Link to="/" onClick={topPage}>
                <button className="hover:text-white/60 transition">Home</button>
              </Link>
            </li>

            <li className="relative group">
              <button className="hover:text-white/60 transition">
                Courses
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-0 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                {[
                  "Direction",
                  "Cinematography",
                  "Editing",
                  "Visual Effects",
                  "Virtual Production",
                  "Acting",
                  "Photography",
                  "DI",
                ].map((course, idx) => (
                  <Link
                    to={
                      course === "Visual Effects"
                        ? "/vfx"
                        : `/${course.toLowerCase().replace(/\s+/g, "_")}`
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-900 hover:text-white"
                    onClick={topPage}
                  >
                    {course}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link to="contact" onClick={topPage}>
                <button className="hover:text-white/60 transition">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>

          {/* Apply Button */}
          <div className="hidden lg:flex">
            <Link to="/apply" onClick={topPage}>
              <button className="bg-[#ff0000] text-white text-xs md:text-sm px-3 md:px-5 py-1.5 md:py-2 rounded hover:bg-red-600 transition uppercase">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden" onClick={handleNav}>
            {nav ? (
              <AiOutlineClose className="text-xl text-white" />
            ) : (
              <AiOutlineMenu className="text-xl text-white" />
            )}
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 sm:w-2/5 bg-white z-40 transform transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5">
            {/* Mobile Logo */}
            <Link
              to="/"
              onClick={() => {
                topPage();
                handleNav();
              }}
            >
              <img src={black} alt="CF Logo" className="w-32 mb-6" />
            </Link>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col gap-4 text-gray-700 font-semibold text-sm">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    topPage();
                    handleNav();
                  }}
                >
                  Home
                </Link>
              </li>

              <li>
                <div>
                  <span
                    className="cursor-pointer flex justify-between items-center"
                    onClick={toggleCourses}
                  >
                    Courses
                    <span>{showCourses ? "▲" : "▼"}</span>
                  </span>

                  {showCourses && (
                    <ul className="pl-4 mt-2 flex flex-col gap-2 text-gray-600">
                      {[
                        "Direction",
                        "Cinematography",
                        "Editing",
                        "Visual Effects",
                        "Virtual Production",
                        "Acting",
                        "Photography",
                        "DI",
                      ].map((course, idx) => (
                        <li key={idx}>
                          <Link
                            to={course.toLowerCase().replace(/\s+/g, "_")}
                            onClick={() => {
                              topPage();
                              handleNav();
                            }}
                            className="hover:text-red-600"
                          >
                            {course}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>

              <li>
                <Link
                  to="contact"
                  onClick={() => {
                    topPage();
                    handleNav();
                  }}
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/apply"
                  onClick={() => {
                    topPage();
                    handleNav();
                  }}
                >
                  <button className="bg-[#ff0000] text-white px-4 py-2 rounded hover:bg-red-600 transition uppercase text-xs">
                    Apply Now
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

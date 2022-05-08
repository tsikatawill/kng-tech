import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav
      className="navbar bg-slate-900 fixed w-full h-24 sm:h-20 top-0 z-50 shadow-md"
      data-scroll-section
    >
      <div className="container flex flex-col py-2 sm:flex-row items-center h-full text-white font-semibold gap-2">
        <Logo />
        <ul className="nav-menu flex gap-5 ml-0 sm:ml-auto">
          <li>
            <Link
              className="p-2 hover:border-white border-b-2 border-slate-900"
              to="/#services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="p-2 hover:border-white border-b-2 border-slate-900"
              to="/outsourcing"
            >
              Outsourcing
            </Link>
          </li>
          <li>
            <Link
              className="p-2 hover:border-white border-b-2 border-slate-900"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
        <div className="cta ml-5 hidden sm:inline-flex">
          <Link
            to="/contact-us"
            className="btn bg-blue-500 flex items-center gap-2"
          >
            <FaPhoneAlt />
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

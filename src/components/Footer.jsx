import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  let data = new Date();
  let date = data.getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-500" data-scroll-section>
      <div className="container flex flex-col gap-5 sm:gap-10 py-20">
        <div className="first flex justify-between items-center sm:items-start sm:text-left flex-col gap-5 sm:flex-row">
          <div>
            <Logo />
            <p className="text-slate-500">Agile and clean code development</p>
            <div className="social-media-links flex justify-center sm:justify-start gap-3 mt-5">
              <a
                href="https"
                rel="noreferrer"
                target="_blank"
                className="p-2 hover:text-slate-900 hover:bg-slate-500  border-slate-500 rounded-md border-2"
              >
                <FaLinkedin />
              </a>
              <a
                href="https"
                rel="noreferrer"
                target="_blank"
                className="p-2 hover:text-slate-900 hover:bg-slate-500  border-slate-500 rounded-md border-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https"
                rel="noreferrer"
                target="_blank"
                className="p-2 hover:text-slate-900 hover:bg-slate-500  border-slate-500 rounded-md border-2"
              >
                <FaFacebook />
              </a>
              <a
                href="https"
                rel="noreferrer"
                target="_blank"
                className="p-2 hover:text-slate-900 hover:bg-slate-500  border-slate-500 rounded-md border-2"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <ul className="bottom-navigation flex gap-5 items-center sm:items-start flex-col sm:flex-row text-slate-500">
            <li className="w-fit h-fit hover:text-white">
              <Link className="p-2" to="/#services" children="Services" />
            </li>
            <li className="w-fit h-fit hover:text-white">
              <Link className="p-2" to="/outsourcing" children="Outsourcing" />
            </li>
            <li className="w-fit h-fit hover:text-white">
              <Link className="p-2" to="/about" children="About" />
            </li>
            <li className="w-fit h-fit hover:text-white">
              <Link className="p-2" to="/contact-us" children="Contact" />
            </li>
          </ul>
        </div>
        <div className="second flex justify-between sm:flex-row items-center flex-col-reverse gap-5">
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-white">All rights reserved</p>
            <p>Copyright &copy; {date}</p>
            <p>KNG Technologies, LTD</p>
          </div>
          <ul className="text-center sm:flex gap-5">
            <li className="hover:text-white capitalize cursor-pointer">
              Privacy policy
            </li>
            <li className="hover:text-white capitalize cursor-pointer">
              Terms & conditions
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

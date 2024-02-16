import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import "./style.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#2d3436] text-white">
        <aside>
          <p className="font-bold text-xl navbarText">
            SoftMax Industries Ltd.
            <br />
            Providing reliable tech since 2023
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-xl font-bold">Services</h6>
          <a className="link link-hover text-xl font-bold">Scholarship</a>
          <a className="link link-hover text-xl font-bold">Stipend</a>
          <a className="link link-hover text-xl font-bold">Courses</a>
          <a className="link link-hover text-xl font-bold">Tutor Finding</a>
          <a className="link link-hover text-xl font-bold">Model Test</a>
          <a className="link link-hover text-xl font-bold">Contest</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Company</h6>
          <a className="link link-hover text-xl font-bold">About us</a>
          <a className="link link-hover text-xl font-bold">Contact</a>
          <a className="link link-hover text-xl font-bold">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Legal</h6>
          <a className="link link-hover text-xl font-bold">Terms of use</a>
          <a className="link link-hover text-xl font-bold">Privacy policy</a>
          <a className="link link-hover text-xl font-bold">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

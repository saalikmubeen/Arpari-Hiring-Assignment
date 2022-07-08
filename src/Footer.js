import React from 'react';
import { Link } from "react-router-dom";
import logo from "./logo.png";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
import ig from "./ig.svg";
import fb from "./fb.svg";
import "./footer.css";

const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer-img">
              <img src={logo} alt="logo" />
          </div>

          <div className="footer-account">
              <h2>Create an account</h2>
              <p>Log In</p>
              <p>iOS App</p>
              <p>Android App</p>
          </div>

          <div className="footer-support">
              <h2>Support</h2>
              <p>
                  <Link to="/contact">Contact us</Link>
              </p>
              <p>FAQs</p>
          </div>

          <div className="footer-product">
              <h2>Product</h2>
              <p>Security deposits</p>
              <p>Operating Accounts</p>
              <p>Tools</p>
              <p>Market Place</p>
          </div>

          <div className="footer-company">
              <h2>Company</h2>
              <p>
                  <Link to="/about">About</Link>
              </p>
              <p>Legal</p>
              <p>
                  <Link to="/careers">Careers</Link>
              </p>
          </div>

          <div className="footer-social">
              <h2>Follow us</h2>
              <img src={fb} alt="facebook" />
              <img src={ig} alt="instagram" />
              <img src={linkedin} alt="linkedin" />
              <img src={twitter} alt="twitter" />
          </div>
      </footer>
  );
}

export default Footer
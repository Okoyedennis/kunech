import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper container">
        <div className="footer__row">
          <div className="footer__logo">
            <h3>
              <span>Connection</span>
              <span>Growth</span>
              <span>Vision</span>
            </h3>
            {/* <img src="logo" alt="" /> */}
            <h5>logo</h5>
          </div>
          <div className="footer__links">
            <div>
              <h5>You & Your Business</h5>
              <ul>
                <li>
                  <Link to="#">About You</Link>
                </li>
                <li>
                  <Link to="#">Your Profile</Link>
                </li>
                <li>
                  <Link to="#">Your Opportunity</Link>
                </li>
                <li>
                  <Link to="#">Your Challenges</Link>
                </li>
                <li>
                  <Link to="#">Success Stories</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>About Kunech</h5>
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Who is Kunech?</Link>
                </li>
                <li>
                  <Link to="#">What we do</Link>
                </li>
                <li>
                  <Link to="#">How we do it</Link>
                </li>
                <li>
                  <Link to="#">Investments</Link>
                </li>
                <li>
                  <Link to="#">Work with us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>Working Together</h5>
              <ul>
                <li>
                  <Link to="#">Working Together</Link>
                </li>
                <li>
                  <Link to="#">A Structured Process</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div>
            <ul className="social">
              <li>
                <Link to="#">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
            <p>© Kunech Group Limited. All rights reserved.</p>
          </div>
          <div>
            <Link to="#">Privacy Policy </Link> |
            <Link to="#"> Privacy Policy </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

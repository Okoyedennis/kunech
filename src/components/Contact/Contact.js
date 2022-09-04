import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__wrapper container">
        <div className="contact__left">
          <h2>Contact Us</h2>
          <div className="contact__details">
            <div className="cotact__links">
              <div>
                <span>For Partnerships</span>
                <Link to="#">mail@kunech.com</Link>
              </div>
              <div>
                <span>For Partnerships</span>
                <Link to="#">mail@kunech.com</Link>
              </div>
            </div>
            <div>
              <span>Office Headquarters</span>
              <p>
                KM 18, Lekki - Epe Express way, Osapa London, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
        <div className="contact__right">
          <div className="contact__right-top">
            <h3>Subscribe to our newsletter</h3>
            <p>
              To be current about news of the latest investment opportunities in
              Africa, please fill out the form below.
            </p>
          </div>
          <form action="">
            <div className="contact__right-input">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="contact__right-bottom">
              <p>
                By clicking on the “Subscribe” button, you accept our 
                <Link to="#"> Privacy Policy </Link>and{" "}
                <Link to="#">Terms of Use</Link>
              </p>
              <button type="sumbit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

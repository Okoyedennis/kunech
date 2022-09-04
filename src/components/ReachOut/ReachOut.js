import React, { useState } from "react";
import "./ReachOut.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReachOut = ({ position, name, text }) => {
  const [isFront, setIsFront] = useState(true);
  const [isBack, setIsBack] = useState(false);

  const handleHoverOn = () => {
    setIsFront(false);
    setIsBack(true);
  };

  const handleHoverOut = () => {
    setIsFront(true);
    setIsBack(false);
  };

  return (
    <div>
      <div
        className="card"
        onMouseOver={handleHoverOn}
        onMouseOut={handleHoverOut}
      >
        {isFront && (
          <div className="card__front">
            <span>{position}</span>
            <h5>{name}</h5>
            <div className="social__links">
              <Link to="#">
                <FaFacebook />
              </Link>
              <Link to="#">
                <FaTwitter />
              </Link>
              <Link to="#">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        )}
        {isBack && (
          <div className="card__back">
            <p>
              <span>{name}</span>
              {text}
            </p>
            <div className="social__links">
              <Link to="#">
                <FaFacebook />
              </Link>
              <Link to="#">
                <FaTwitter />
              </Link>
              <Link to="#">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReachOut;

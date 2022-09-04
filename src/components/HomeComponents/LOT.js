import React from "react";
import "./LOT.css";
import img2 from "../../asset/group-shot.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const LOT = ({
  img,
  pattern,
  color,
  icon,
  title,
  text,
  sideTitle,
  count,
  sideText,
}) => {
  return (
    <div className="lot">
      <div className="lot__wrapper container">
        <div className="lot__left">
          <img src={img} alt="" />
          <div
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundColor: `${color}`,
            }}
            className="lot__stat-count"
          >
            <h5>{sideTitle}</h5>
            <div className="count">
              <span>{count}+</span>
            </div>
            <div className="lot__people">
              <img src={img2} alt="" />
              <p>
                <span>{count}+</span> {sideText}
              </p>
            </div>
          </div>
        </div>
        <div className="lot__right">
          <img src={icon} alt="icon" />
          <h3>{title}</h3>
          <p>{text}</p>
          <Link to="#">
            <span>View More</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LOT;

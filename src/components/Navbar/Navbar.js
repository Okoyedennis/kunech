import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import {
  FaBars,
  FaFacebook,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";

const Navbar = ({bg, color, img}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const data = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About You",
      url: "/about_you",
    },
    {
      title: "About Us",
      url: "/about_us",
    },
    {
      title: "Investments",
      url: "/investment",
    },
    {
      title: "Working Together",
      url: "/working_together",
    },
  ];

  return (
    <nav className="navbar" style={{ backgroundColor: `${bg}` }}>
      <div className="container navbar-wrapper">
        <div className="navbar__logo">
          <Link to="/">
            <img src={img} alt="logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="icons" style={{ color: `${color}` }} />
          ) : (
            <FaBars className="icons" style={{ color: `${color}` }} />
          )}
        </div>
        <div className={click ? "navbar__right active" : "navbar__right"}>
          <ul className="nav-links">
            {data.map((item) => (
              <li key={item.title}>
                <NavLink
                  style={{ color: `${color}` }}
                  exact={true}
                  className="li"
                  to={item.url}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="ul__footer">
            <h3>
              <span>Connection</span>
              <span>Growth</span>
              <span>Vision</span>
            </h3>
            <div className="social">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

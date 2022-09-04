import React from "react";
import "./HomeComponents.css";
import img1 from "../../asset/img1.png";
import img2 from "../../asset/img2.png";
import img3 from "../../asset/autonation.png";
import img4 from "../../asset/spacePAD.png";
import img5 from "../../asset/apt.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import LOT from "./LOT";
import img6 from "../../asset/img3.png";
import pattern1 from "../../asset/green-pattern.svg";
import pattern2 from "../../asset/dark-pattern.svg";
import pattern3 from "../../asset/lightblue-pattern.svg";
import icon1 from "../../asset/icon1.svg";
import img8 from "../../asset/img4.png";
import img9 from "../../asset/img5.png";
import icon2 from "../../asset/icon2.svg";
import icon3 from "../../asset/icon3.svg";
import img10 from "../../asset/img6.png";
import img11 from "../../asset/img7.png";
import img12 from "../../asset/img8.png";
import img13 from "../../asset/img11.png";
import { motion } from "framer-motion";

const HomeComponents = () => {
  const [width, setWidth] = useState(false);

  const handleWidth = () => {
    if (window.innerWidth <= 768) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  };

  window.addEventListener("scroll", handleWidth);

  const data = [
    {
      img: img10,
      text: "Automative",
      title: "Invest in engines and parts",
    },
    {
      img: img11,
      text: "Property",
      title: "Invest in real estate",
    },
    {
      img: img12,
      text: "Energy",
      title: "Invest in renewable power",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="homeComponent">
        <div className="homeComponent_wrapper container">
          <div className="homeComponent__left">
            <h1>Invest today in the Africa of tomorrow</h1>
            <p>
              There has never been a better time to invest in the African
              economy. The fields are white for harvesting and with a growing
              and awakened market, it is time to make a mark in Africa.
            </p>
            <div className="homeComponent__stat">
              <div>
                <p>
                  <span>1000</span>
                  <span>+</span>
                </p>
                <p>Lives impacted</p>
              </div>
              <div>
                <p>
                  <span>500</span>
                  <span>+</span>
                </p>
                <p>Opportunities</p>
              </div>
              <div>
                <p>
                  <span>200</span>
                  <span>+</span>
                </p>
                <p>Testimonials</p>
              </div>
            </div>
            <div className="homeComponent__imgBox">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="homeComponent__right">
            <div className="homeComponent__imgBox">
              <img src={img2} alt="" />
            </div>
            <div className="homeComponent__patterns">
              <p>
                We are building businesses ready to take over the African market
                and become industry giants.
              </p>
              <div>
                <Link to="#">
                  <img src={img3} alt="autonation" />
                </Link>
                <Link to="#">
                  <img src={img4} alt="spacePAD" />
                </Link>
                <Link to="#">
                  <img src={img5} alt="pattern" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="explore__wrapper container">
          {width ? <span>HOW WE HELP YOU</span> : <span>EXPLORE SECTORS</span>}
          {width ? (
            <h2>
              We’re focused on building connections with you and great
              opportunities.
            </h2>
          ) : (
            <h2>
              Connecting you with opportunities and a chance to prosper in
              Africa
            </h2>
          )}
        </div>
      </section>
      <section>
        <LOT
          img={img6}
          pattern={pattern1}
          color="#33CC99"
          sideTitle="Lives Impacted"
          count="1000"
          sideText="lives impacted in the last 3 months"
          icon={icon1}
          title="Opportunities for West Africa"
          text="Get well-researched insight on areas of the West African economy that are ripe for investment with the most ROI. We offer a detailed survey of the automotive, property, hospitality, energy and import and export sectors. Just perfect for you to make the right decisions."
        />
        <LOT
          img={img8}
          pattern={pattern2}
          color="#071B3D"
          sideTitle="Opportunities"
          count="500"
          sideText="opportunities created in the last 6 months"
          icon={icon2}
          title="Statistics for the Nigerian economy"
          text="Statistics clearly demonstrate that Nigeria is well on track to become a world-class economy. An overflow of human and natural resources makes the African nation an investor’s hotspot with diverse opportunities for investment."
        />

        <LOT
          img={img9}
          pattern={pattern3}
          color="#009EE6"
          sideTitle="Testimonials"
          count="200"
          sideText=" testimonials from investors all over Africa"
          icon={icon3}
          title="Let’s Help You Plan Your Investment In Africa For Maximum Result"
          text="We are masters of the African market and we know the economy better than anyone else. At Kunech, we are the bridge between international investors and opportunities and resources waiting to be tapped. Ready to explore Africa?"
        />
      </section>
      <section>
        <div className="homeComponent__investment ">
          <div className="homeComponent__investment-wrapper container">
            <div className="investment__header">
              <h2>Investments for you</h2>
            </div>
            <div className="investment__body">
              {data.map(({ img, title, text }) => (
                <div className="investment__swiper">
                  <Link to="*">
                    <div className="investmentItem">
                      <div className="investmentItem-top">
                        <span>{text}</span>
                        <h4>{title}</h4>
                      </div>
                      <div className="investmentItem-bottom">
                        <img src={img} alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="testimonial__wrapper container">
          <div className="testimonial__left">
            <div className="testimonial__left-top">
              <p>
                Without the tremendous support we received working with the team
                at Kunech, our Nigerian operation would still be on the drawing
                board. However, thanks to Kunech we already have a thriving
                local business bringing international standards of automotive
                care to the people of Nigeria, and together with Kunech we'll be
                expanding in the region in no time.
              </p>
            </div>
            <div className="testimonial__left-bottom">
              <h6>CEO.</h6>
              <h4>
                Automotive <br /> Careers
              </h4>
            </div>
          </div>
          <div className="testimonial__right">
            <img src={img13} alt="a smiling lady" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomeComponents;

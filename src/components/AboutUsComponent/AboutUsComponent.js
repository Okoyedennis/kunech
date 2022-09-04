import React, { useState } from "react";
import "./AboutUsComponent.css";
import { FaArrowDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./AboutUsComponent.css";
import img1 from "../../asset/img15.png";
import img2 from "../../asset/img16.png";
import img3 from "../../asset/img18.png";
import img4 from "../../asset/img19.png";
import img5 from "../../asset/img20.png";
import img6 from "../../asset/img17.png";
import img7 from "../../asset/group-shot.png";
import ReachOut from "../ReachOut/ReachOut";
import { motion } from "framer-motion";


const AboutUsComponent = () => {
  const [count, setCount] = useState(0);
  const [whatWeDo, setWhatWeDo] = useState(true);
  const [howWeDo, setHowWeDo] = useState(false);
  const [workWithUs, setWorkWithUs] = useState(false);

  const handleWhatWeDo = () => {
    setWhatWeDo(true);
    setHowWeDo(false);
    setWorkWithUs(false);
  };

  const handleHowWeDo = () => {
    setHowWeDo(true);
    setWhatWeDo(false);
    setWorkWithUs(false);
  };

  const handleWorkWithUs = () => {
    setWorkWithUs(true);
    setWhatWeDo(false);
    setHowWeDo(false);
  };

  const data = [
    {
      title: "Our Vision",
      p1: "Kunech’s vision is simple. We want to empower Nigeria to be an economic leader both in the African region, and on the international stage, and make a positive difference in the lives of Nigerians and the Nigerian nation as a whole.",
      p2: "We are committed to investing in Africa, investing in Nigeria, investing in our people, and securing not only our future, but also the future of our families, our colleagues and of course our partners.",
      p3: "We desire to be the number 1 employer in Nigeria – where people will want to come to work for the opportunities, fairness, support, reward, pride and sense of belonging – all attributes of an employer hard to come by in Nigera.",
      img: img3,
    },
    {
      title: "Our People",
      p1: "Young, talented, internationally educated, entrepreneurial, proud and highly motivated to bring about positive change to our wonderful nation.",
      p2: "Our people are passionate about business, investment and economics. We strive for excellence and we have the strongest belief in ourselves and the potential our nation has to offer.",
      p3: "We are committed to shifting negative percaeptions and showing the world what Nigeria is capable of.",
      img: img4,
    },
    {
      title: "Our Values",
      p1: "Kunech is known for reliability, fairness, quality, international standards and pride in our nation. We operate with the highest levels of integrity, honesty and honour.",
      p2: "We continually invest in the introduction of new ideas, the education of our youth, the structure of commerce in Nigeria, and new business standards and methodologies.",
      p3: "In time we will grow our strength and the citizens of our Nigeria will enjoy a new-found prosperity. Please join us on the journey of investing in Africa, and building a wonderful nation and thriving economic power of the future.",
      img: img5,
    },
  ];

  const next = () => {
    setCount(count === data.length - 1 ? 0 : count + 1);
  };

  const prev = () => {
    setCount(count === 0 ? data.length - 1 : count - 1);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="aboutYou">
        <div className="aboutYou__wrapper container">
          <div className="aboutYou__inner">
            <div className="aboutYou__top">
              <h1>Fast-tracking your growth</h1>
              <p>
                It's a market we know all too well. Let's take your hand and
                help you make wise investments.
              </p>
            </div>
          </div>
          <div className="aboutYou__bottom">
            <div style={{ backgroundColor: "#009EE6" }}>
              <h3>Quick Access</h3>
              <ul>
                <li>
                  <button>About us</button>
                </li>
                <li>
                  <button>What we do</button>
                </li>
                <li>
                  <button>How we do it</button>
                </li>
                <li>
                  <button>Work with us</button>
                </li>
              </ul>
              <Link to="#">
                <FaArrowDown />
                Scroll Down
              </Link>
            </div>
            <div>
              <img src={img1} alt="laptop on a desk" />
            </div>
          </div>
        </div>
      </div>
      <section className="aboutYou__investment">
        <div className="investment__wrapper container">
          <div className="investment__textBox">
            <h2>About Kunech</h2>
            <p>
              Kunech acts as a bridge, connecting international investors with a
              safe and reliable passage to the bountiful opportunities Nigeria
              has to offer.
            </p>
            <p>
              We are a leading organisation committed to bringing international
              businesses, brands, standards and people into Nigeria, to fulfill
              the hungry demand of the people.
            </p>
            <p>
              We aim to be the strategic partner of choice for international
              organisations wanting to bring the same success their brands have
              enjoyed abroad, into Africa. We have the knowledge, finance,
              influence and connections to help you build effective distribution
              in Nigeria and the wider African region.
            </p>
          </div>
          <div className="investment__imgBox">
            <img src={img2} alt="a guy folding his arms" />
          </div>
        </div>
      </section>
      <section className="swipper">
        <div className="swipper__wrapper container">
          <div className="swipper__left">
            <div className="swipper__left-head">
              <div className="swipper_left-botton">
                <button className="prev-btn" onClick={prev}>
                  <FaChevronLeft className="icon" />
                </button>
                <button className="next-btn" onClick={next}>
                  <FaChevronRight className="icon" />
                </button>
              </div>
              <div>
                <span>{`${count + 1}/${data.length}`}</span>
              </div>
            </div>
            {data.map(({ title, p1, p2, p3 }, index) => {
              return (
                <>
                  {index === count && (
                    <div className="swipper__left-body">
                      <h2>{title}</h2>
                      <p>{p1}</p>
                      <p>{p2}</p>
                      <p>{p3}</p>
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <div className="swipper__right">
            {data.map(({ img }, index) => (
              <>
                {index === count && (
                  <img src={img} alt="a man pressing an ipad" />
                )}
              </>
            ))}
          </div>
        </div>
      </section>
      <section className="details">
        <div className="detail__wrapper container">
          <div className="details__header">
            <h2>How we can help you</h2>
            <p>
              Find out what we do, how we do it and how you can be part of
              making the future in Africa.
            </p>
          </div>
          <div className="detail__btns">
            <button
              className={whatWeDo ? "details__btn active" : "details__btn"}
              onClick={handleWhatWeDo}
            >
              What We Do
            </button>
            <button
              className={howWeDo ? "details__btn active" : "details__btn"}
              onClick={handleHowWeDo}
            >
              How We Do It
            </button>
            <button
              className={workWithUs ? "details__btn active" : "details__btn"}
              onClick={handleWorkWithUs}
            >
              Work With Us
            </button>
          </div>
          <div className="details__body">
            {whatWeDo && (
              <div className="details__text">
                <h3>Investors, Traders and Entrepreneurs</h3>
                <p>
                  Are you an international organization or brand wishing to
                  enter the African region or a local entrepreneur looking for a
                  new business opportunity in Nigeria?
                </p>
                <p>
                  Are you a distributor looking to bring a new product into the
                  Nigerian market or looking to be a franchise of a major
                  international brand?
                </p>
                <p>
                  Whatever your investments needs and interests are, you will
                  have needs and challenges and Kunech can help you overcome
                  them.
                </p>
              </div>
            )}

            {howWeDo && (
              <div className="details__text">
                <h3>Driving Growth in Nigeria</h3>
                <p>
                  Nigeria is at an exciting stage of the economic growth cycle,
                  and the biggest opportunities for you to invest exist now.
                </p>
                <p>
                  Oil and gas wealth has become significant. Hugely profitable
                  businesses are commonplace. Wealth is being passed down to
                  younger, western educated generations, eager to achieve. They
                  have the means to become entrepreneurial, and they crave
                  success.
                </p>
                <p>
                  An explosive middle class is growing increasingly affluent,
                  increasingly elite. The desire of Nigeria’s cashed up youth to
                  grow and develop is strong, with a fierce desire for success.
                  And they are totally brand conscious and globally aware.
                </p>
              </div>
            )}

            {workWithUs && (
              <div className="details__text">
                <h3>Having a Strategic Partner</h3>
                <p>
                  Along with the opportunities of investment in Nigeria comes a
                  certain level of risk. To mitigate risk as practically as
                  possible, one must have a good understanding of the politics,
                  market dynamics, pricing and local culture. One must also have
                  the right logistics channels and the means to navigate
                  bureaucracy.
                </p>
                <p>
                  Therein lies the challenge. How do you take advantage of
                  commercial opportunities if you do not understand the culture
                  of the market? If you do not understand how things work
                  politically in this region? What about compliance with the
                  legal and regulatory frameworks attached to doing business in
                  Nigeria? Fundamentally, how do you even get started with just
                  a simple foot in the door?
                </p>
                <p>
                  For local entrepreneurs, the challenges are slightly different
                  yet equally inhibiting. How do you increase your chances of
                  success? How do you quickly grow a broad range of connections?
                  How do you develop your capability effectively to an
                  international standard? And how do you find the right
                  financing solution to realistically achieve your business
                  goals?
                </p>
              </div>
            )}
            <div className="details__img">
              <div
                className="stats__count"
                style={{ backgroundColor: "#009EE6" }}
              >
                <h5>Opportunities</h5>
                <div className="count">
                  <span>200+</span>
                </div>
                <div className="people">
                  <img src={img7} alt="customers" />
                  <p>
                    <span>200+ </span>
                    testimonials from investors all over Africa
                  </p>
                </div>
              </div>
              <img src={img6} alt="two adult sitting by a computer" />
            </div>
          </div>
        </div>
      </section>
      <section className="reach">
        <div className="reach__wrapper container">
          <div className="reach__header">
            <h2>Reach out to our team</h2>
            <p>We are real humans looking to help guide real investors.</p>
          </div>
          <div className="reach__body">
            <ReachOut
              position="Project Manager, Kunech"
              name="Ignacio Luis"
              text=", is an experienced Construction Manager
              who offers a high degree of customer focus. Graduated from Spain
              as an Architectural Technician, he's specialized in leading
              effective work execution."
            />
            <ReachOut
              position="HR Manager, Kunech"
              name="Olukayode Janet"
              text=", has a background in Estate
                    management and with a certification with chattered institute
                    of personnel management. She is passionate about real estate
                    investments."
            />
            <ReachOut
              position="Head of FMCG, Kunech"
              name="Opogah Peter"
              text=", is the Head of Fast moving
                    consumable goods for Kunech Group Ltd. With 25years work
                    experience in sales and Marketing. His training spans across
                    Nigeria and abroad."
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUsComponent;

import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../asset/img12.png";
import img2 from "../../asset/img13.png";
import img3 from "../../asset/group-shot.png";
import img4 from "../../asset/img14.png";
import img5 from "../../asset/autonation.png"
import img6 from "../../asset/spacePAD.png";
import img7 from "../../asset/apt.png"
import img8 from "../../asset/img11.png";
import { motion } from "framer-motion";


import "./AboutYouComponents.css";
import { useState } from "react";

const AboutYou = () => {
  const [profile, setProfile] = useState(true)
  const [opportunity, setOpportunity] = useState(false)
  const [challenge, setChallenge] = useState(false);
  const [status, setStatus] = useState(false);

  const handleProfile = () => {
    setProfile(true)
    setOpportunity(false)
    setChallenge(false)
    setStatus(false)
  }

   const handleOpportunity= () => {
     setOpportunity(true);
     setProfile(false);
     setChallenge(false);
     setStatus(false);
   };
  
   const handleChallenge = () => {
     setChallenge(true);
     setProfile(false);
     setOpportunity(false);
     setStatus(false);
   };
  
   const handleStatus = () => {
     setStatus(true);
     setProfile(false);
     setOpportunity(false);
     setChallenge(false);
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
              <h1>Investments in Africa for you</h1>
              <p>
                With every passing day, the African vision gets sharper with
                thousands of investors actively taking a share in shaping the
                Africa of the future. With a thriving economy on the rise, there
                has never been a better time to go all in. Be a part of the
                future. Invest in Africa today!
              </p>
            </div>
          </div>
          <div className="aboutYou__bottom">
            <div>
              <h3>Quick Access</h3>
              <ul>
                <li>
                  <button>Your profile</button>
                </li>
                <li>
                  <button>Your opportunity</button>
                </li>
                <li>
                  <button>Your challenges</button>
                </li>
                <li>
                  <button>Your stories</button>
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
            <h2>Investing in Africa</h2>
            <p>
              It’s a continent blessed beyond wonders. Nigeria, as the giant of
              Africa, is bestowed with both human and natural resources. We
              present fertile soil for international investors, traders and
              manufacturers looking to strike at the start of the continent.
            </p>
            <p>
              At Kunech, we can help you start today to invest in the future of
              Africa. We are in business to act as a guide and help you take
              advantage of the limitless resources and opportunities that exist
              here.
            </p>
            <p>Let’s help you strike gold!</p>
          </div>
          <div className="investment__imgBox">
            <img src={img2} alt="a guy folding his arms" />
          </div>
        </div>
      </section>
      <section className="details">
        <div className="detail__wrapper container">
          <div className="details__header">
            <h2>How we can help you</h2>
            <p>
              We know the African market. We can help you make wise investments
              and create a business that can thrive on African soil.
            </p>
          </div>
          <div className="detail__btns">
            <button
              className={profile ? "details__btn active" : "details__btn"}
              onClick={handleProfile}
            >
              Your Perofile
            </button>
            <button
              className={opportunity ? "details__btn active" : "details__btn"}
              onClick={handleOpportunity}
            >
              Your Opportunity
            </button>
            <button
              className={challenge ? "details__btn active" : "details__btn"}
              onClick={handleChallenge}
            >
              Your Challenges
            </button>
            <button
              className={status ? "details__btn active" : "details__btn"}
              onClick={handleStatus}
            >
              Your Status
            </button>
          </div>
          <div className="details__body">
            {profile && (
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

            {opportunity && (
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

            {challenge && (
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

            {status && (
              <div className="details__text">
                <h3>Pushing a World-Class Brand into the African Market</h3>
                <p>
                  Precision Tune Auto Care is one of the worlds premier car
                  servicing brands, established in the USA in 1975 and renowned
                  for fair pricing, high quality service and maintenance work on
                  cars and light trucks.
                </p>
                <p>
                  As part of their global expansion vision, Africa's emerging
                  markets were seen as a key component of their growth
                  strategies. However, bringing their successful operations to
                  Nigeria was frought with many challenges.
                </p>
                <p>
                  Precision sought a strategic partner that shared their vision,
                  standards of customer service, values of fairness and high
                  level of integrity, who could not only develop a specific
                  market within the region, but had the capability and insight
                  to build the infrastructure required in the region.
                </p>
              </div>
            )}

            <div className="details__img">
              <div className="stats__count">
                <h5>Opportunities</h5>
                <div className="count">
                  <span>500+</span>
                </div>
                <div className="people">
                  <img src={img3} alt="customers" />
                  <p>
                    <span>500+ </span>
                    opportunities created in the last 6 months
                  </p>
                </div>
              </div>
              <img src={img4} alt="two adult sitting by a computer" />
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="partners__wrapper container">
          <p>
            We are building businesses ready to take over the African <br />{" "}
            market and become industry giants.
          </p>
          <div className="partners__logo">
            <Link to="#">
              <img src={img5} target="_blank" alt="autonation" />
            </Link>
            <Link to="#">
              <img src={img6} target="_blank" alt="spacepad" />
            </Link>
            <Link to="#">
              <img src={img7} target="_blank" alt="apt logo" />
            </Link>
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
            <img src={img8} alt="a smiling lady" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutYou;

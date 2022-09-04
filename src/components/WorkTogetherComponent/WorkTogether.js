import React from "react";
import img1 from "../../asset/img27.png";
import Row from "./Row";
import "./WorkTogether.css";
import { motion } from "framer-motion";


const WorkTogether = () => {
  return (
      <motion.div
          key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="workTogether">
        <div className="workTogether__wrapper container">
          <div className="workTogether__left">
            <h1>Working together to realize your vision</h1>
            <p>
              The benefits of a relationship with Kunech can be summed in three
              simple words with a hugely significant meaning – Connection,
              Growth and Vision. These words are at the heart of our
              organization and every aspect of our relationship with you
              supports the delivery of these outcome to all our investors and
              partners.
            </p>
            <div className="stats">
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
          </div>
          <div className="workTogether__right">
            <img src={img1} alt="a guy holding a laptop" />
          </div>
        </div>
      </div>
      <section className="process">
        <div className="process__wrapper container">
          <div className="process__header">
            <h2>Structured Process</h2>
            <p>
              Our process is made easy so everyone can partake and get the best
              results.
            </p>
          </div>
          <div className="process__row">
            <Row
              titleUp="Network x"
              titleDown="Connection"
              textUp="Success is driven by people. If your investment in Nigeria is to deliver the returns you want, you’re going to need the right people involved early on. But Investing in Africa without a strategic partner often means building networks from scratch. That’s where we come in."
              textDown="Because of the respect and reputation Kunech have built and managed within our vast business networks, partnering with us means you will be connected to the right local people from the outset. Managing and growing this Network is part of what we do. Making the right connection with local people is how you benefit."
            />
            <Row
              titleUp="Knowledge x"
              titleDown="Growth"
              textUp="We all know every investment carries a level of risk with it. And we understand the perceptions of investing in Nigeria to be substantially high risk, simply due to many unknowns. Arm yourself with knowledge and that risk is reduced."
              textDown="BKunech’s knowledge of the Nigerian economy and markets is second to none. And it’s this in-depth knowledge that we provide you with – about African markets, industries and culture, which allows us to bridge the gap between your business plan and the reality of doing business in here, so you can ultimately minimise your risks and maximise your growth in a much shorter timeframe."
            />
            <Row
              titleUp="Insight x"
              titleDown="Vision"
              textUp="Our offering is not just about getting your operation up and running. Partnering with us means working together strategically at the highest level, sharing and exploring the insights we gain, together with you."
              textMiddle="Our insight goes well beyond our knowledge. It is the deepest level of knowing and understanding we have gained from our abundant experiences. It’s a clear perception your business, objectives and challenges as well as our commitment to, and utmost respect for the relationship with you."
              textDown="It is at this level of the relationship where you’ll experience the most value from us, as it allows you to adapt your vision to be relevant to your African venture, and realistically stay on track to achieving that vision with our continual support."
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WorkTogether;

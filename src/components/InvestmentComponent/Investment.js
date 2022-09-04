import React, { useState } from "react";
import "./Investment.css";
import img1 from "../../asset/img21.png";
import img2 from "../../asset/autonation.png";
import img3 from "../../asset/spacePAD.png";
import img4 from "../../asset/apt.png";
import img5 from "../../asset/img22.png";
import img6 from "../../asset/group-shot.png";
import img7 from "../../asset/img23.png";
import img8 from "../../asset/img24.png";
import img9 from "../../asset/img25.png";
import img10 from "../../asset/img26.png";
import { motion } from "framer-motion";


import { Link } from "react-router-dom";

const Investment = () => {
  const [automotive, setAutomotive] = useState(true);
  const [hospitality, setHospitality] = useState(false);
  const [property, setProperty] = useState(false);
  const [importExport, setImportExport] = useState(false);
  const [energy, setEnergy] = useState(false);

  const handleAutomotivee = () => {
    setAutomotive(true);
    setHospitality(false);
    setProperty(false);
    setImportExport(false);
    setEnergy(false);
  };


  const handleHospitality = () => {
    setHospitality(true);
    setAutomotive(false);
    setProperty(false);
    setImportExport(false);
    setEnergy(false);
  };

  const handleProperty = () => {
    setProperty(true);
    setHospitality(false);
    setAutomotive(false);
    setImportExport(false);
    setEnergy(false);
  };

  const handleImportExport = () => {
    setImportExport(true);
    setHospitality(false);
    setAutomotive(false);
    setProperty(false);
    setEnergy(false);
  };

  const handleEnergy = () => {
    setEnergy(true);
    setHospitality(false);
    setAutomotive(false);
    setProperty(false);
    setImportExport(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="hero_investment">
        <div className="hero_investment__wrapper container">
          <div className="hero_investment__box-text">
            <h1>Investments for you</h1>
            <p>
              Blessed with a thriving economy rich in diversity, Nigeria is a
              hotbed for bountiful investments across various sectors. Better
              yet, it's open for you to explore.
            </p>
          </div>
          <div className="hero_investment__box-image">
            <img
              src={img1}
              alt="a man sitting at a desk holding the figure of a house"
            />
          </div>
        </div>
      </div>
      <section className="partners">
        <div className="partners__wrapper container">
          <p>
            We are building businesses ready to take over the African <br />{" "}
            market and become industry giants.
          </p>
          <div className="partners__logo">
            <Link to="#">
              <img src={img2} target="_blank" alt="autonation" />
            </Link>
            <Link to="#">
              <img src={img3} target="_blank" alt="spacepad" />
            </Link>
            <Link to="#">
              <img src={img4} target="_blank" alt="apt logo" />
            </Link>
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
              className={automotive ? "details__btn active" : "details__btn"}
              onClick={handleAutomotivee}
            >
              Automotive
            </button>
            <button
              className={hospitality ? "details__btn active" : "details__btn"}
              onClick={handleHospitality}
            >
              Hospitality
            </button>
            <button
              className={property ? "details__btn active" : "details__btn"}
              onClick={handleProperty}
            >
              Property
            </button>
            <button
              className={importExport ? "details__btn active" : "details__btn"}
              onClick={handleImportExport}
            >
              Import & Export
            </button>
            <button
              className={energy ? "details__btn active" : "details__btn"}
              onClick={handleEnergy}
            >
              Energy
            </button>
          </div>
          <div className="details__body">
            {automotive && (
              <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }} className="details__text">
                <h3>Automotive Investment</h3>
                <p>
                  Kunech have invested heavily in the Automotive industry in
                  Nigeria and are expanding throughout the continent. We
                  currently own and operate AutoNation – the leading center of
                  automotive excellence and technology.
                </p>
                <p>
                  Through AutoNation, Kunech is committed to bringing
                  international standards of care and trust to the Nigerian
                  automotive industry. To do this, Kunech have procured
                  operating licenses from highly reputable international
                  automotive organizations, such as Precision Tune Auto, among
                  others.
                </p>
                <p>
                  Nigeria's first five-star automotive service, AutoNation
                  provide all the skills, materials and resources to restore
                  vehicles to manufacturers standards.
                </p>
                <p>
                  We have opportunities throughout Nigeria and Africa for
                  entrepreneurs to invest in an AutoNation or Precision
                  franchise. Please contact us to find out more about becoming a
                  franchise.
                </p>
              </motion.div>
            )}

            {hospitality && (
              <div className="details__text">
                <h3>Hospitality</h3>
                <p>
                  Kunech are currently investing heavily in Nigeria's
                  hospitality sector, which is in serious need of an upgrade in
                  offerings. There is strong and growing demand from the
                  Nigerian business community for premium quality hotels and
                  five star hospitality services which simply do not exist in
                  Nigeria yet.
                </p>
                <p>
                  Kunech will launch a 4+ star international hotel with more
                  hotel projects following shortly after. With everything you
                  would expect from a premium international hotel chain, such as
                  multiple food & beverage outlets, business conferencing
                  facilities, spa and other recreation activities, Kunech is
                  bringing leadership to the hotel industry, beginning in the
                  Lekki community and quickly expanding throughout Lagos.
                </p>
                <p>
                  Many opportunities exist for investors wishing to take
                  advantage of the growth in hospitality in Nigeria.
                </p>
              </div>
            )}

            {property && (
              <div className="details__text">
                <h3>Property</h3>
                <p>
                  Kunech own a large portfolio of commercial and residential
                  property and are actively investing further in strategic
                  locations across Lagos and Nigeria.
                </p>
                <p>
                  We also design and build purpose-built properties to cater for
                  the vast needs of international and local commercial
                  organizations alike.
                </p>
                <p>
                  If you are looking for land to set-up a commercial operation,
                  such as a factory or warehousing, talk to us as we'll be able
                  to find or supply an appropriate solution.
                </p>
                <p>
                  Or perhaps you want to supply your property to us for
                  management purposes?
                </p>
                <p>
                  Or simply tap into our vast networks and access contacts in
                  the local property market.
                </p>
              </div>
            )}

            {importExport && (
              <div className="details__text">
                <h3>Import & Export</h3>
                <p>
                  Kunech acts as a trading partner for manufacturers and
                  suppliers of a wide range of goods, to a huge customer base in
                  Nigeria and Africa.
                </p>
                <p>
                  If you have a product you want to bring to the Nigerian and
                  wider African markets, then speak to us – we have serious
                  demand.
                </p>
                <p>
                  If you are a retailer or distributor, looking for a product to
                  bring into the Nigerian or wider African markets, then speak
                  to us – we have the suppliers ready and wanting to sell.
                </p>
                <p>
                  Kunech connect sellers to buyers, and buyers to sellers,
                  bridging the gap that exists between supply and demand in
                  Nigeria. And we are better connected with our extensive
                  networks than anyone else.
                </p>
                <p>
                  We understand the issues facing both exporters of products to
                  Africa, and the importers importing them. We simplify the
                  process, by using our Dubai based entities which enable easier
                  access to the opportunities for doing business in Nigeria and
                  the wider region.
                </p>
              </div>
            )}

            {energy && (
              <div className="details__text">
                <h3>Energy</h3>
                <p>
                  Kunech own and manage an oil services company to cater for the
                  marine oil and gas sector in Nigeria. We currently operate a
                  marine maintenance facility, servicing ships, valves and
                  pipelines. We also own volumes of fuel, petrol diesel kerosene
                  that we can deliver to customers.
                </p>
                <p>
                  Our energy offering is just getting started and will be
                  growing rapidly over the next 12 months.
                </p>
              </div>
            )}

            <div className="details__img">
              <div
                className="stats__count"
                style={{ backgroundColor: "#33CC99" }}
              >
                <h5>Lives Impacted</h5>
                <div className="count">
                  <span>1000+</span>
                </div>
                <div className="people">
                  <img src={img6} alt="customers" />
                  <p>
                    <span>1000+ </span>
                    lives impacted in the last 3 months
                  </p>
                </div>
              </div>
              {automotive && (
                <img src={img5} alt="two adult sitting by a computer" />
              )}
              {hospitality && (
                <img src={img7} alt="two adult sitting by a computer" />
              )}
              {property && (
                <img src={img8} alt="two adult sitting by a computer" />
              )}
              {importExport && (
                <img src={img9} alt="two adult sitting by a computer" />
              )}
              {energy && (
                <img src={img10} alt="two adult sitting by a computer" />
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Investment;

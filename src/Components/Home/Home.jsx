import React, { useEffect } from "react";
import "./Home.scss";

// import video from "../../Assets/treeVdo.mp4";
import vdo1 from "../../Assets/vdo1.mp4";
// import vdo2 from "../../Assets/vdo2.mp4";
// import vdo3 from "../../Assets/vdo3.mp4";
// import vdo4 from "../../Assets/vdo4.mp4";

import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

// npm i aos --save       (install in terminal)
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Scroll aanimation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={vdo1} muted autoPlay loop typeof="vdo1/mp4"></video>
      {/* <video src={vdo2} muted autoPlay loop typeof="vdo2/mp4"></video> */}
      {/* <video src={vdo3} muted autoPlay loop typeof="vdo3/mp4"></video> */}
      {/* <video src={vdo4} muted autoPlay loop typeof="vdo4/mp4"></video> */}

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here...." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React, { useEffect } from "react";
import "./Footer.css";

// import video2 from "../../Assets/seaVdo.mp4";
// import video from "../../Assets/treeVdo.mp4";
// import vdo1 from "../../Assets/vdo1.mp4";
// import vdo2 from "../../Assets/vdo2.mp4";
// import vdo3 from "../../Assets/vdo3.mp4";
import vdo4 from "../../Assets/vdo4.mp4";

import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

// npm i aos --save       (install in terminal)
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  // Scroll aanimation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        {/* <video src={video2} loop autoPlay muted typeof="video/mp4"></video> */}
        {/* <video src={vdo1} muted autoPlay loop typeof="vdo1/mp4"></video> */}
        {/* <video src={vdo2} muted autoPlay loop typeof="vdo2/mp4"></video> */}
        {/* <video src={vdo3} muted autoPlay loop typeof="vdo3/mp4"></video> */}
        <video src={vdo4} muted autoPlay loop typeof="vdo4/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              cumque reiciendis odit corrupti aliquid omnis enim qui minus
              quibusdam ex velit, veritatis doloribus magnam optio. Voluptas
              animi, odio dicta inventore nam harum nesciunt eius illo numquam
              dolorum eos ea laudantium, placeat debitis quidem fugiat
              voluptatibus voluptatum alias quisquam corrupti. Dolorum.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon twitter" />
              <AiFillYoutube className="icon youtube" />
              <AiFillInstagram className="icon insta" />
              <FaTripadvisor className="icon advisor" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Insurence
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Payment
              </li>
            </div>

            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="3500"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Agra
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Barcelona
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>TRAVEL WEBSITE BY MD. ASIF HOSSAIN</small>
            <small>CREATED: MAY 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

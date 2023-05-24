import React, { useEffect } from "react";
import "./Main.scss";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10.jpg";
import img11 from "../../Assets/img11.jpg";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

// npm i aos --save       (install in terminal)
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Agra",
    location: "India",
    grade: "Historic Place",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Kathmundu",
    location: "Nepal",
    grade: "Historic Place",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Mishor",
    location: "Egypt",
    grade: "Historic Place",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Brighten",
    location: "England",
    grade: "Historic Place",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Chelsea",
    location: "England",
    grade: "Historic Place",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Barcelona",
    location: "Espain",
    grade: "Historic Place",
    fees: "$1500",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Kattagat",
    location: "Norwy",
    grade: "Historic Place",
    fees: "$1200",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Stamford",
    location: "Enland",
    grade: "Historic Place",
    fees: "$1400",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Paris",
    location: "France",
    grade: "Historic Place",
    fees: "$1000",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: "Real Madrid",
    location: "Espain",
    grade: "Historic Place",
    fees: "$900",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: "Panjab",
    location: "India",
    grade: "Historic Place",
    fees: "$500",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veniam sit harum aliquam non sunt aut? Odit odio suscipit impedit temporibus, possimus atque harum earum reiciendis, facilis totam labore laboriosam.",
  },
];

const Main = () => {
  // Scroll aanimation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;

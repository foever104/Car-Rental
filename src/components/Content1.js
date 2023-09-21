import React from "react";
import "../styles/header.css";
import "../styles/content1.css";
import Carousel from "../components/Carousel";
import imageSlider from "./slider.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Content1() {
  return (
    <div className="content1">
      <div style={{ width: "40%" }}>
        <div className="description1">Plan your trip now</div>
        <div className="description2">
          Save <font color="#304bf8">big</font> with our car rental
        </div>
        <div className="description3">Rent the car of your dreams.</div>
        <button className="content1_btn1">
          Book Now
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ marginLeft: "0.6rem", color: "white" }}
          />
        </button>
        <button className="content1_btn2">
          Learn More
          <FontAwesomeIcon
            icon={faPlusCircle}
            style={{ marginLeft: "0.6rem", color: "white" }}
          />{" "}
        </button>
      </div>

      <div className="slider_root">
        <Carousel>
          <img src={imageSlider[0]["url"]} alt="" className="slide" />
          <img src={imageSlider[1]["url"]} alt="" className="slide" />
        </Carousel>
      </div>
    </div>
  );
}
export default Content1;

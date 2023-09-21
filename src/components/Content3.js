import React from "react";
import "../styles/content4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faUserShield,
  faSquareCheck
} from "@fortawesome/free-solid-svg-icons";

function Content3() {
  return (
    <div className="content3">
      <div className="process_title">
        <p>Plan your trip now</p>
        <h1>Quick & Easy Car Rental</h1>
      </div>
      <div className="process_content">
        <div className="content">
          {" "}
          <FontAwesomeIcon icon={faCar} className="small_icons" />
          <div className="small_title">Select Car</div>
          <div className="small_description">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </div>
        </div>
        <div className="content">
          <FontAwesomeIcon icon={faUserShield} className="small_icons" />
          <div className="small_title">Contact Operator</div>
          <div className="small_description">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns.
          </div>
        </div>
        <div className="content">
          <FontAwesomeIcon icon={faSquareCheck} className="small_icons" />
          <div className="small_title">Let's Drive</div>
          <div className="small_description">
            Whether you are hitting the open road. We've got you covered with
            uor wide range of cars.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content3;

import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="section">
        <div className="line1" style={{ color: "#304bf8" }}>
          {" "}
          Car Rental{" "}
        </div>
        <div className="gray-text">
          We offer a big range of vehicles for all your friving needs. We have
          the perfect car to meet you needs.{" "}
        </div>
        <div className="line">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ marginRight: "0.6rem", color: "#304bf8" }}
          />
          (123) - 456 - 789
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ marginRight: "0.6rem", color: "#304bf8" }}
          />
          example@gmail.com
        </div>
      </div>

      <div className="section">
        <div className="line1"> COMPANY </div>
        <div className="line"> Our Team</div>
        <div className="line">News</div>
        <div className="line">Hiring</div>
        <div className="line">Blog</div>
      </div>

      <div className="section">
        <div className="line1"> WORKING HOURS </div>
        <div className="line"> Mon - Fri 9:00AM - 9:00PM </div>
        <div className="line"> Sat. 9:00AM - 7:00PM </div>
        <div className="line"> Sun. Close</div>
      </div>

      <div className="section">
        <div className="line1">SUBSCRIPTION</div>
        <div className="line">
          Subscribe your Email for latest news and updates.{" "}
        </div>
        <input type="text"></input>
        <div>
          <button className="sub-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}
export default Footer;

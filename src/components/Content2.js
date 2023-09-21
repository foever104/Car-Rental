import React from "react";
import "../styles/content2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCarSide,
  faLocationDot,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";

function Content2() {
  return (
    <div className="content2">
      <div className="book_title">Book a Car</div>
      <div className="book_content">
        <div className="book_detail">
          <FontAwesomeIcon icon={faCarSide} className="little_icons" />
          Select the car type
          <div className="input_detail">
            <select style={{ height: "28px", width: "166px" }}>
              <option> Select the car type</option>
              <option> Toyota VIOS</option>
              <option> Toyota Altas</option>
              <option> Toyota Cross</option>
              <option> Suzuki Swift </option>
              <option> LEXUS NX</option>
              <option> Toyota TOWN ACE</option>
            </select>
          </div>
        </div>
        <div className="book_detail">
          <FontAwesomeIcon icon={faLocationDot} className="little_icons" />
          Pick-up-location
          <div className="input_detail">
            <select style={{ height: "28px", width: "166px" }}>
              <option> Taipei</option>
              <option> Taoyuan</option>
              <option> Hsinchu</option>
              <option> Taichung </option>
              <option> Tainan </option>
              <option> Kaohsiung </option>
            </select>
          </div>
        </div>
        <div className="book_detail">
          <FontAwesomeIcon icon={faLocationDot} className="little_icons" />
          Drop-of-location
          <div className="input_detail">
            <select style={{ height: "28px", width: "166px" }}>
              <option> Taipei</option>
              <option> Taoyuan</option>
              <option> Hsinchu</option>
              <option> Taichung </option>
              <option> Tainan </option>
              <option> Kaohsiung </option>
            </select>
          </div>
        </div>
      </div>

      <div className="book_content">
        <div className="book_detail">
          <FontAwesomeIcon icon={faCalendar} className="little_icons" />
          Pick-up-date
          <div className="input_detail">
            <input
              type="date"
              style={{ width: "170px", height: "28px" }}
            ></input>
          </div>
        </div>
        <div className="book_detail">
          <FontAwesomeIcon icon={faCalendar} className="little_icons" />
          Drop-of-date
          <div className="input_detail">
            <input
              type="date"
              style={{ width: "170px", height: "28px" }}
            ></input>
          </div>
        </div>
        <div className="book_detail">
          <button className="book_btn">
            Search Now
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ marginLeft: "0.6rem", color: "white" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Content2;

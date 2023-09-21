import React, { useState } from "react";
import "../styles/content4.css";
import models from "./model.json";

function Models() {
  const [car, setCar] = useState("VIOS");
  const [url, setUrl] = useState(
    "https://p3.8891.com.tw/nc/canvas/70/bg/0/2019/01/25/s/1548395729431292_600_400.png"
  );
  const [price, setPrice] = useState("2600");
  const [d, setD] = useState("1500cc");
  const [people, setPeople] = useState("5");
  const [brand, setBrand] = useState("Toyota");
  const [door, setDoor] = useState("Toyota");

  function handleChange(e) {
    setCar(e.target.value);
    setPrice(models.find((p) => p.name === e.target.value).price);
    setUrl(models.find((u) => u.name === e.target.value).img);
    setD(models.find((d) => d.name === e.target.value).displacement);
    setPeople(models.find((o) => o.name === e.target.value).people);
    setBrand(models.find((b) => b.name === e.target.value).brand);
    setDoor(models.find((r) => r.name === e.target.value).door);
  }

  return (
    <div className="model-container">
      <div className="model-type">
        <button
          className="type-btn"
          value="VIOS"
          onClick={(e) => handleChange(e)}
        >
          VIOS
        </button>
        <button
          className="type-btn"
          value="ALTIS"
          onClick={(e) => handleChange(e)}
        >
          ALTIS
        </button>
        <button
          className="type-btn"
          value="COROLLA CROSS"
          onClick={(e) => handleChange(e)}
        >
          COROLLA CROSS
        </button>
        <button
          className="type-btn"
          value="SWIFT"
          onClick={(e) => handleChange(e)}
        >
          SWIFT
        </button>
        <button
          className="type-btn"
          value="LEXUS NX"
          onClick={(e) => handleChange(e)}
        >
          LEXUS NX
        </button>
        <button
          className="type-btn"
          value="TOWN ACE"
          onClick={(e) => handleChange(e)}
        >
          TOWN ACE
        </button>
      </div>

      <div className="model-img" value={car}>
        <div>
          <img className="car-img" src={url} alt="" />
        </div>
      </div>
      <div className="model-content" value={car}>
        <table className="tbl">
          <tbody>
            <tr>
              <td
                colSpan="2"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: "20px"
                }}
              >
                {car}
              </td>
            </tr>

            <tr>
              <td
                colSpan="2"
                style={{
                  backgroundColor: "#304bf8",
                  color: "#fff",
                  fontSize: "20px"
                }}
              >
                {price} NTD per day
              </td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{brand}</td>
            </tr>

            <tr>
              <td>Seat</td>
              <td>{people}</td>
            </tr>
            <tr>
              <td>Door</td>
              <td>{door}</td>
            </tr>
            <tr>
              <td>cc</td>
              <td>{d}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Models;

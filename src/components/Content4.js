import React from "react";
import "../styles/content3.css";
import Models from "../components/Models";

function Content4() {
  return (
    <div className="content4">
      <div className="view-models">
        <h3>Vehicle Models</h3>
        <h1>Our rental fleet</h1>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip.
        </p>
      </div>
      <Models />
    </div>
  );
}
export default Content4;

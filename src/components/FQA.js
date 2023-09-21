import React from "react";
import "../styles/faq.css";
import Accordion from "./Accordion";
import accordionData from "./faq.json";

function FQA() {
  return (
    <div className="faq-container">
      <h3>FAQ</h3>
      <h1>Frequently Asked Questions</h1>
      <p>
        Frequently Asked Questions About Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquires.{" "}
      </p>

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
export default FQA;

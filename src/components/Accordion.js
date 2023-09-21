import React, { useState } from "react";
import "../styles/faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {!isActive ? (
            <FontAwesomeIcon icon={faPlus} style={{ color: "#fff" }} />
          ) : (
            <FontAwesomeIcon icon={faMinus} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;

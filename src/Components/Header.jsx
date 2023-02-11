import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = ({
  handleInput,
  inputText,
  filterRegion,
  setFilterRegion,
  countryInput,
  showInfo,
}) => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const regions = document.querySelectorAll(".region");
  regions.forEach((region) => {
    region.addEventListener("click", () => {
      setFilterRegion(region.textContent);
      setShow(false);
    });
  });

  return (
    <header className={showInfo ? 'hide--header' : ''}>
      <div className="input--wrapper">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          id="country--input"
          placeholder="search for a country..."
          onChange={handleInput}
          value={inputText}
          ref={countryInput}
        />
      </div>
      <div className={`select--menu ${show ? "choose" : ""}`}>
        <div className="menu" onClick={showMenu}>
          <span>{filterRegion}</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className="dropdown--menu">
          <div className="region" data-value="africa">
            Africa
          </div>
          <div className="region" data-value="america">
            Americas
          </div>
          <div className="region" data-value="asia">
            Asia
          </div>
          <div className="region" data-value="europe">
            Europe
          </div>
          <div className="region" data-value="oceania">
            Oceania
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

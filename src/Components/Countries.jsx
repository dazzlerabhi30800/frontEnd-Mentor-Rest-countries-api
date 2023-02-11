import React, { useState } from "react";
import CountryComp from "./CountryComp";

const Countries = ({ filterData, numberWithCommas, countryHandler, showInfo }) => {
  const [slicedData, setSlicedData] = useState(16);
  const countryComp = filterData.slice(0, slicedData).map((item, i) => {
    return (
      <CountryComp data={item} key={i} numberWithCommas={numberWithCommas} countryHandler={countryHandler} />
    );
  });
  return (
    <div className={`countries--container ${showInfo ? 'hide--countries' : ''}`}>
      <div className="countries--wrapper">{countryComp}</div>
      <div className="button--wrapper">
        <button
          disabled={countryComp.length === 4}
          onClick={() => setSlicedData((prevState) => prevState - 4)}
          className="btn less"
        >
          Load Less
        </button>
        <button
          disabled={slicedData === filterData.length}
          onClick={() => setSlicedData((prevState) => prevState + 4)}
          className="btn more"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Countries;

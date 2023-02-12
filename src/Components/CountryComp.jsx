import React from "react";

const CountryComp = ({ data, numberWithCommas, countryHandler }) => {
  return (
    <div className="country" onClick={() => countryHandler(data.name)}>
      <div className="flag">
        <img src={data.flags.svg} alt={data.name} />
      </div>
      <div className="info">
        <h1 className="country--name">{data.name}</h1>
        <div className="stats--container">
          <div className="stats population">
            <span>Population:</span>
            <span>{numberWithCommas(data.population)}</span>
          </div>
          <div className="stats Region">
            <span>Region:</span>
            <span>{data.region}</span>
          </div>
          <div className="stats Capital">
            <span>Capital:</span>
            <span>{data.capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryComp;

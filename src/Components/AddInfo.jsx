import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AddInfo = ({
  additionalInfo,
  setAdditionalInfo,
  setShowInfo,
  showInfo,
  numberWithCommas,
}) => {
  const hideInfo = () => {
    setShowInfo(false);
    setAdditionalInfo([]);
  };
  return (
    <div className={`info--wrapper ${showInfo ? "show--info" : ""}`}>
      <div className="back--btn" onClick={hideInfo}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </div>
      <div className="country--info--wrapper">
        <div className="country--logo">
          <img
            src={additionalInfo.flag ? additionalInfo.flag : 'https://flagcdn.com/ax.svg'}
            alt={additionalInfo.name ? additionalInfo.name : 'Country Name'}
            aria-hidden="true"
          />
        </div>
        <div className="country--info--container">
          <h2>{additionalInfo.name ? additionalInfo.name : "Belgium"}</h2>
          <div className="country--add--info">
            <div className="country--info">
              <p>
                Native Name: <span>{additionalInfo.nativeName}</span>
              </p>
              <p>
                Population:{" "}
                <span>
                  {additionalInfo.population
                    ? numberWithCommas(additionalInfo.population)
                    : "Population Here"}
                </span>
              </p>
              <p>
                Region: <span>{additionalInfo.region}</span>
              </p>
              <p>
                Sub Region: <span>{additionalInfo.subregion}</span>
              </p>
              <p>
                Capital: <span>{additionalInfo.capital}</span>
              </p>
            </div>
            <div className="country--status">
              <p>
                Top Level Domain: <span>{additionalInfo.topLevelDomain}</span>
              </p>
              <p>
                Currencies:{" "}
                <span>
                  {additionalInfo.currencies
                    ? additionalInfo.currencies.length > 1
                      ? additionalInfo.currencies.map(
                          (curr) => " " + curr.code
                        ) + ", "
                      : additionalInfo.currencies.map((curr) => " " + curr.code)
                    : " Currency not Available"}
                </span>
              </p>
              <p>
                Languages:
                <span>
                  {additionalInfo.languages
                    ? additionalInfo.languages.length > 1
                      ? additionalInfo.languages.map(
                          (lang) => " " + lang.name
                        ) + ", "
                      : additionalInfo.languages.map((lang) => " " + lang.name)
                    : " Language not Available"}
                </span>
              </p>
            </div>
          </div>

          <div className="border--countries">
            <h3>Border Countries:</h3>
            <div className="border--country--container">
              {additionalInfo.borders ? (
                additionalInfo.borders.slice(0, 4).map((border, i) => (
                  <div className="border--country" key={i}>
                    {border}
                  </div>
                ))
              ) : (
                <span>No Countries available</span>
              )}
              {/* <div className="border--country">France</div> */}
              {/* <div className="border--country">Belgium</div> */}
              {/* <div className="border--country">Canada</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfo;

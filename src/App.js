import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import data from "./Components/Data";
import Countries from "./Components/Countries";
import AddInfo from "./Components/AddInfo";

function App() {
  const [filterRegion, setFilterRegion] = useState("Filter by Region");
  const [filterData, setFilterData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const countryInput = useRef();

  const handleInput = () => {
    let inputField = countryInput.current.value;
    setInputText(inputField);
    if (inputField.length > 0) {
      setFilterData(
        filterData.filter((item) =>
          item.name.includes(convertToUppercase(inputField))
        )
      );
    } else {
      setFilterData(data);
    }
  };

  const convertToUppercase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const filterHandler = () => {
    switch (filterRegion) {
      case "Africa":
        setFilterData(data.filter((item) => item.region === filterRegion));
        break;
      case "Americas":
        setFilterData(data.filter((item) => item.region === filterRegion));
        break;
      case "Asia":
        setFilterData(data.filter((item) => item.region === filterRegion));
        break;
      case "Europe":
        setFilterData(data.filter((item) => item.region === filterRegion));
        break;
      case "Oceania":
        setFilterData(data.filter((item) => item.region === filterRegion));
        break;
      default:
        setFilterData(data);
    }
  };

  useEffect(() => {
    filterHandler();
  }, [filterRegion]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const countryHandler = (name) => {
    let searchCountry = filterData.find((country) => country.name === name);
    setAdditionalInfo(searchCountry);
    setShowInfo(true);
  };

  return (
    <div className="App">
      <Navbar />
      <Header
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
        setInputText={setInputText}
        inputText={inputText}
        handleInput={handleInput}
        countryInput={countryInput}
        showInfo={showInfo}
      />
      <main>
        <Countries
          data={data}
          filterData={filterData}
          filterHandler={filterHandler}
          numberWithCommas={numberWithCommas}
          countryHandler={countryHandler}
          showInfo={showInfo}
        />
        <AddInfo
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          setAdditionalInfo={setAdditionalInfo}
          additionalInfo={additionalInfo}
          numberWithCommas={numberWithCommas}
        />
      </main>
    </div>
  );
}

export default App;

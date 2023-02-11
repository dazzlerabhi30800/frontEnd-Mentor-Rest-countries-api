import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Styles/Styles.css";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  const toggleMode = () => {
    if (darkTheme) {
      setDarkTheme(false);
      document.body.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify(darkTheme));
    } else {
      setDarkTheme(true);
      document.body.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify(darkTheme));
    }
  };
  useEffect(() => {
    toggleMode();
  }, []);
  return (
    <nav>
      <div className="logo">Where in the World?</div>
      <div className="theme--switcher">
        <FontAwesomeIcon
          icon={darkTheme ? faSun : faMoon}
          onClick={toggleMode}
        />
        <span className="mode">{darkTheme ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </nav>
  );
};

export default Navbar;

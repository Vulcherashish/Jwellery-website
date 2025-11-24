import React, { useState, useEffect } from "react";
import "./navbar.css"; // Import CSS file for default styles

const Activebtn = () => {
  const [navStyle, setNavStyle] = useState({
    backgroundColor: "transparent",
    color: "#222",
  });

  // Change navbar color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavStyle({
          backgroundColor: "#654321", // Example: Deep Navy
          color: "white", 
          padding: "8px",
          borderRadius: "20px 20px",          // Example: Gold
        });
      } else {
        setNavStyle({
          backgroundColor: "transparent",
          color: "#222",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

};

export default Activebtn;

import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  // Initialize the dark mode state based on local storage or user preferences
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  // Function to toggle dark mode
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);

    // Save the dark mode preference to local storage
    localStorage.setItem("isDarkMode", newIsDarkMode);
  };

  // Update the HTML attribute based on the dark mode state
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="text-3xl">
      <button onClick={toggleTheme}>
        {isDarkMode ? (
          <div className="swap-on">🌞</div>
        ) : (
          <div className="swap-off">🌚</div>
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;

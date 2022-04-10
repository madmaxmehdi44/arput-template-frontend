import React from "react";
// import { DarkModeToggle } from "react-dark-mode-toggle-2";

export const DarkLight = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  // 
  return (
    <>
    <h1>DARK MODE</h1>
    </>
    // <DarkModeToggle 
    //   onChange={setIsDarkMode}
    //   isDarkMode={isDarkMode} 
    //   size={85} 
    // />
  );
};
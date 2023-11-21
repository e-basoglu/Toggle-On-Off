// Import React library and useState hook
import React, { useState } from "react";

// Define a functional component named Toggle
function Toggle() {
  // Declare a state variable 'toggle' and its updater function 'setToggle'
  const [toggle, setToggle] = useState();

  // Return JSX representing the Toggle component
  return (
    <div>
      {/* Display the current value of the 'toggle' state in a paragraph */}
      <p>The toggle is {toggle}</p>

      {/* Button to set the 'toggle' state to "On" when clicked */}
      <button onClick={() => setToggle("on")}>On</button>

      {/* Button to set the 'toggle' state to "Off" when clicked */}
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}
export default Toggle;

import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  return (
    <div>
      {/* <button onClick={handleButtonClick}>Select a Class</button> */}

      <select onChange={handleOptionSelect}>
        <option value="economy">Economy Class</option>
        <option value="premium-economy">Premium Economy</option>
        <option value="business">Business Class</option>
        <option value="first">First Class</option>
      </select>

      {selectedOption && <p>You selected {selectedOption}</p>}
    </div>
  );
}

export default Dropdown;

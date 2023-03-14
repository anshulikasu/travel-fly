import React from "react";
import "./SearchForm.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import Dropdown from "../Dropdown/Dropdown";
import Passangerselector from "../Pasangerselector/Passangerselector";
import { HiUserCircle } from "react-icons/hi";
function SearchForm() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDtate: endDate,
    key: "selection",
  };

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };
  const handleToDrop = () => {};
  const handleToDropTwo = () => {};
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    // Handle form submission here
  };
  return (
    <div className="searchform">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="serchfeild_one"
            value={from}
            placeholder="countary"
            onChange={handleFromChange}
          />
          <input
            className="serchfeild_one"
            value={to}
            placeholder="countary"
            onChange={handleToChange}
          />
        </div>

        <div>
          <DateRangePicker ranges={[selectionRange]} />
          <div className="search_sel">
            <h2>Number of Guests</h2>
            <HiUserCircle />
            <input
              value={noOfGuest}
              type="number"
              className=""
              min={1}
              onChange={(event) => setNoOfGuest(event.target.value)}
            />
          </div>
        </div>
        <div className="selector">
          {/* <Passangerselector /> */}
          <Dropdown />
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;

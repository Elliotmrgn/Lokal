import React, { useState } from "react";
import "./navStyles.css";
import { useHistory } from "react-router-dom";

function SearchBar() {
  // const [formObject, setFormObject] = useState({});
  const [search, setSearch] = useState("");
  let history = useHistory();



  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  function submit(event) {
    event.preventDefault();
    let url = "results/" + search;
    history.push(url);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="searchMain"
            aria-describedby="emailHelp"
            name="search"
            value={search}
            placeholder="Search lokal"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
export default SearchBar;

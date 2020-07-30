import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function SearchBar(props) {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("REEEEEEEE",event.target)
    // const search = formObject.search;

    // API.findViaSearch(search).then((res) => {
    //   console.log(res);
    // });
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="searchBar">Business Name</label>
          <input
            type="text"
            className="form-control"
            id="searchBar"
            aria-describedby="searchHelp"
            name="search"
            onChange={handleInputChange}
          />
          <small id="searchHelp" className="form-text text-muted">
            Please search what you would like to find.
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          value={formObject.search}
          onClick={props.handleFormSubmit}
        >
            Submit
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

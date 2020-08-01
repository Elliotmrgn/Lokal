import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function SearchBar() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const search = formObject.search;
    API.findViaSearch(search).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="home-search"
            aria-describedby="emailHelp"
            name="search"
            placeholder="search lokal"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
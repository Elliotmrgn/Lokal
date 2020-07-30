import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function SearchBar() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  useEffect(() => {}, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    const search = formObject.search;
    console.log("handleFormSubmit -> search", search);
    console.log(typeof search);

    API.findViaSearch(search).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Business Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="search"
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Please search what you would like to find.
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

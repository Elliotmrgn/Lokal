import React, {  useState } from "react";
import "./searchStyles.css"

function SearchBar(props) {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }


  return (
    <div >
      <form className="resultSearch" >
        <div className="form-group searchBar ">
          {/* <label htmlFor="searchBar">Business Name</label> */}
          <input
            type="text"
            className="form-control"
            id="searchBar"
            aria-describedby="searchHelp"
            placeholder="Please search what you would like to find."
            name="search"
            onChange={handleInputChange}
          />
          {/* <small id="searchHelp" className="form-text text-muted">
            Please search what you would like to find.
          </small> */}
        </div>
        <button
          type="submit"
          className="btn btn-success btn-result"
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

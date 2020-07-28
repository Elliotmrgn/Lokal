import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import tags from "../../utils/Tags";
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
  const options = [];
  tags.map(function (tag, index) {
    options.push(
      <option value={tag} key={index}>
        {tag}
      </option>
    );
  });
  let divStyleRight = { float: "right" };
  let divStyleLeft = { float: "left" };
  return (
    <div>
      <div className="row">
        <div className="search col-6">
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
          </form>
        </div>
        <div className="tagSearch col-6">
          <div>
            <select className="custom-select" id="inputGroupSelect01">
              <option defaultValue>Pick a tag to search</option>
              {options}
            </select>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleFormSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default SearchBar;

import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

function SearchBar() {
  const [formObject, setFormObject] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  

  return (
    <div>
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="search"
            placeholder="Search by business name or category"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          value={formObject.search}
          className="btn btn-primary"
        >
          <Link to={`/results/${formObject.search}`}>Search</Link>
        </button>
      </form>
    </div>
  );
}
export default SearchBar;

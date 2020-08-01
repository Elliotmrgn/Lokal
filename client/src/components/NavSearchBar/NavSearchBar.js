import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./navStyles.css";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const [formObject, setFormObject] = useState({});
  const [search, setSearch] = useState("");
  let history = useHistory();

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value });
  // }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  function submit(event) {
    event.preventDefault();
    let url = "results/" + search;
    console.log(url);
    history.push(url);
    // <Redirect to={url} />
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
            // onChange={handleInputChange}
            // onKeyUp={submit}
          />
          {/* <button
          type="submit"
          value={formObject.search}
          className="searchBtn"
        >
          <Link to={`/results/${formObject.search}`}>Search</Link>
        </button> */}
        </div>
      </form>
    </div>
  );
}
export default SearchBar;

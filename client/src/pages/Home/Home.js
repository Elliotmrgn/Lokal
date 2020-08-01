import React from "react";
import "./Home.css";
import House from "../../components/bighouselogo.png";
import NavSearchBar from "../../components/NavSearchBar/NavSearchBar";
import SearchBar from "../../components/SearchBar/SearchBar";
function Home() {
  return (
    <main>
      <section className="search-container">
        <div className="discover-local"size="size md-6">
          <span className="header" id="discover">
            DISCOVER
          </span>
          <span className="header" id="lokal">
            lokal
          </span>
        </div>
          <p id="raleigh">Raleigh Edition</p>
        <NavSearchBar />
      </section>

      <section className="grid-container">

        <section className="welcome-container">
          <img id="house" align="center" src={House} alt="house image"></img>
          <p id="explanation">
            Now, more than ever, it's important to support our local communities. Here at Lokal you can find the hidden gems in yourneighborhood. Search for in a business by either name or category and you'll have quick access to all their information in one convenient location.
          </p>
        </section>

        <section className="container-sign-up">
          <div size="size md-12">
            <h2 id="registerbiz">HAVE A BUSINESS? SIGN UP! </h2>
            <button
              id="registerbtn"
              type="submit"
              className="btn btn-primary"
              onClick={(event) => (window.location.href = "businessform")}
            >
              Register
            </button>
          </div>
        </section>

      </section>
    </main>
  );
}

export default Home;

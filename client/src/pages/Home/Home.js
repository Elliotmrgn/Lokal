import React from "react";
import "./Home.css";
import House from "../../components/bighouselogo.png";
import Check from "../../components/check.png";
import MapIcon from "../../components/map.png";
import Search from "../../components/search.png";
import NavSearchBar from "../../components/NavSearchBar/NavSearchBar";
import SearchBar from "../../components/SearchBar/SearchBar";
function Home() {
  return (
    <main>
      {/* <div className="home-container"> */}

      <section className="search-container">
        <div className="discover-local" size="size md-6">
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

      {/* NEED TO FIX CSS FOR GRID-CONTAINER */}
      {/* https://www.w3schools.com/css/css_grid_item.asp */}
      <section className="grid-container">
        <section className="welcome-container">
          <row size="size md-12">
            <img id="house" align="left" src={House} alt="house image"></img>
            <br></br>
            <p id="explanation">
              Now more than ever, its important to support our local
              communities. We’ve created a place where you can find the hidden
              gems in your community.
            </p>
            <br></br>
          </row>
        </section>
        
        {/* <section class="how-it-works-container">
          <row size="size md-12">
            <h2 class="subheader">HOW IT WORKS </h2>
            <ul class="list">
              <li>
                <img id="search" src={Search} alt="search bar"></img>
                <p className="search">Search for a business by category </p>
              </li>
              <li>
                <img id="map" src={MapIcon} alt="map icon"></img>
                <p className="search"> See all local options on a map </p>
              </li>
              <li>
                <img id="check" src={Check} alt="check mark"></img>
                <p className="search">
                  Select the business page you'd like to view{" "}
                </p>
              </li>
            </ul>
            <br></br>
          </row>
        </section> */}

        <section >
          <div className="container-sign-up"></div>
          <row size="size md-12">
            <h2 id="registerbiz">REGISTER YOUR BUSINESS </h2>
            <button
              id="registerbtn"
              type="submit"
              className="btn btn-primary"
              onClick={(event) => (window.location.href = "businessform")}
            >
              Sign up
            </button>
            <br></br>
          </row>
        </section>
      </section>

      {/* </div> */}
    </main>
  );
}

export default Home;

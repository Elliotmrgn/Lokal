import React from "react";
import "./Home.css";
import House from "../../components/bighouselogo.png";
import NavSearchBar from "../../components/NavSearchBar/NavSearchBar";
import { Redirect, Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiPagesLine } from "react-icons/ri";

// import SearchBar from "../../components/SearchBar/SearchBar";
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
        {/* <Row>
        <img id="house" align="center" src={House} alt="house image"></img>
        </Row> */}

        <Row className="welcome-container" size="size md-12">
          <br></br>
          <p className="centerText" id="bold">
            Now more than ever, its important to support our local communities.
          </p>
          <p id="explanation">
            We’ve created a place where you can find the hidden gems in your
            community. Search for in a business by either name or category and
            you'll have quick access to all their information in one convenient
            location.
          </p>
        </Row>
        <Row className="makers-container">
          <p className="centerText" id="bold">
            We help makers build a page thats easy to manage so anyone can
            increase their online presence
          </p>

          <Row className="aside-container">
            <aside className="aside">
              Creating your own page is as easy as filling out a form
            </aside>

            <aside className="aside">
              Post your hours, updates about your business, and manage uploads
            </aside>

            <aside className="aside">
              Build an online presence that represents your unique brand and get
              discovered
            </aside>
          </Row>
        </Row>

        <section className="container-sign-up">
          <div size="size md-12">
            <h2 id="registerbiz">REGISTER YOUR BUSINESS NOW </h2>
            <Link to="/businessform" className="registerbtn">
              REGISTER
            </Link>
          </div>
        </section>
      </section>

      {/* </div> */}
    </main>
  );
}

export default Home;

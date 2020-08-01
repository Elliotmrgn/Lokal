import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col } from "../Grid";
// import NavSearchBar from "../../components/NavSearchBar/NavSearchBar"
import "./Nav.css";

const Nav = (props) => {
  let greeting;

  if (props.user === null) {
    greeting = <p>Hello guest</p>;
  } else if (props.user.firstName) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.firstName}</strong>
      </Fragment>
    );
  } else if (props.user.username) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.username} </strong>
      </Fragment>
    );
  }

  return (

    <header>
      <nav className="navbar navbar-expand-lg">
        <Col size="md-6 sm-6">
          <Link to="/" className="navbar-brand">
            <img src="https://i.ibb.co/DMGWXh0/logo-01.png" alt="logo"></img>
          </Link>
        </Col>
        <Col size="md-6 sm-6">
          <div className="float-right">
            {/* <NavSearchBar />   */}
            <Link to="/Contact" id="contact" className="navbar-contact px-4">
              Contact
            </Link>
            <Link
              to="/BusinessForm"
              id="register"
              className="navbar-contact px-4"
            >
              Register
            </Link>
            {greeting}
            <Link to="#" className="logout" onClick={props.logout}>
              Logout
            </Link>
          </div>
        </Col>
      </nav>
    </header>
  )
};

export default Nav;
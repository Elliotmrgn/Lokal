import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col } from "../Grid";
// import NavSearchBar from "../../components/NavSearchBar/NavSearchBar"
import "./Nav.css";
import { Nav, NavDropdown, NavItem, NavLink, Dropdown } from "react-bootstrap";
import UserPage from "../../pages/UserPage/userpage";
const Navbar = (props) => {
  let greeting;

  let userStatus;
  let businessForm;

  let userAccount;

  if (props.user === null || props.user === undefined) {
    greeting = <p>Hello guest</p>;
  } else if (props.user.firstName) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.firstName}</strong>
      </Fragment>
    );
  } else if (props.user.username || props.user === undefined) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.username} </strong>
      </Fragment>
    );
  }

  if (props.user === null || props.user === undefined) {
    userStatus = (
      <Link to="/login" className="login" onClick={props.login}>
        Login
      </Link>
    );
  } else {
    userStatus = (
      <Link to="#" className="logout" onClick={props.logout}>
        Logout
      </Link>
    );
  }

  if (props.user === null || props.user === undefined) {
    businessForm = "";
  } else {
    businessForm = (
      <Link to="/BusinessForm" id="register" className="navbar-contact px-4">
        Register
      </Link>
    );
  }

  if (props.user === null || props.user === undefined) {
    userAccount = "";
  } else {
    userAccount = (
      <Link to="/user/:id" id="userAccount" className="navbar-contact px-4">
        Account
      </Link>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <Col size="md-6 sm-6">
          <Link to="/" className="navbar-brand">
            <img src="https://i.ibb.co/DMGWXh0/logo-01.png" alt="logo"></img>
          </Link>
          <Link to="/contact" id="contact" className="navbar-contact px-4">
            Contact
          </Link>
          <Link
            to="/businessList"
            id="businessList"
            className="navbar-businesslist px4"
          >
            Browse Categories
          </Link>
        </Col>
        <Col size="md-6 sm-6">
          <div className="float-right">
            {/* <NavSearchBar />   */}
            {userAccount}
            {businessForm}
            {greeting}
            {userStatus}
          </div>
        </Col>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect, Fragment } from "react";
// import { Link } from "react-router-dom";
import AUTH from "../../utils/AUTH";
import "./Nav.css";
// import NavSearchBar from "../NavSearchBar/NavSearchBar"

// import { Nav } from "react-bootstrap";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, NavbarBrand, DropdownItem, NavLink } from 'reactstrap';

const Navbarcomponent = (props) => {
  let greeting;
  let userStatus;
  let businessForm;
  let userAccount;

  const [user, setUser] = useState();
  useEffect(() => {
     AUTH.getUser().then((response) => {
        if (!!response.data.user) {
        setUser(response.data.user._id);
        }
    }) });

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  if (props.user === null || props.user === undefined) {
    greeting = <p id="hello">Hello guest</p>;
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
      <NavLink href="/login" className="login myLinks" onClick={props.login}>
        Login
      </NavLink>
    );
  } else {
    userStatus = (
      <NavLink href="#" className="logout myLinks" onClick={props.logout}>
        Logout
      </NavLink>
    );
  }

  if (props.user === null || props.user === undefined) {
    businessForm = "";
  } else {
    businessForm = (
      <NavLink href="/BusinessForm" id="register" className="navbar-contact  myLinks px-4">
        Register Business
      </NavLink>
    );
  }

  if (props.user === null || props.user === undefined) {
    userAccount = "";
  } else {
    userAccount = (
      <NavLink href={"/user/" + user} id="userAccount" className="navbar-contact myLinks px-4">
        Account
      </NavLink>
    );
  }

  return (
    <header>
      <Navbar id="navbar-border" color="#5b9098" light expand="md">
          <NavbarBrand href="/" className="navbar-brand">
            <img src="https://i.ibb.co/DMGWXh0/logo-01.png" alt="logo"></img>
          </NavbarBrand>

          {/* <InputGroup >
            <Input> {NavSearchBar} </Input>
          </InputGroup> */}

          <NavbarToggler onClick={toggleNavbar}/>
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="ml-auto p-2" navbar>
              <NavItem>
                <NavLink href="/businessList" id="categories">
                  BROWSE CATEGORIES
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <div style={{ textTransform: 'uppercase',color:"#354959"}}>{greeting}</div>
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <div>{userAccount}</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div>{businessForm}</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div>{userStatus}</div>
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
      </Navbar>

    </header>
  );
};

export default Navbarcomponent;
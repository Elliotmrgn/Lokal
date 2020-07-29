import React, { useState, useEffect, useRef } from "react";
import { Container } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Input, TextArea, FormBtn, Address } from "../../components/Form";
import API from "../../utils/API";
import Checkbox from "../../components/Checkbox";
import "./businessList.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function BusinessList() {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    loadBusiness();
  }, []);

  function loadBusiness() {
    API.getBuisness().then((res) => {
      setBusiness(res.data);
    });
  }
  const businessList = business.map((business) => {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={business.logo}
          alt="Card image cap"
        />
        <div className="card-body">
          <h1 className="card-title">{business.businessName}</h1>
          <p className="card-text">{business.tagline}</p>
          <div className="text-center">
            <a
              href={"/profilepage/" + business._id}
              className="btn btn-primary"
            >
              Visit Page
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Container fluid>
      <Row> </Row>
      <Row>{businessList}</Row>
    </Container>
  );
}
export default BusinessList;

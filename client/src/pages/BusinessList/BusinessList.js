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
import tags from "../../utils/Tags";

function BusinessList() {
  const [business, setBusiness] = useState([]);
  const [formObject, setFormObject] = useState([]);
  useEffect(() => {
    loadBusiness();
    setFormObject({ Tag: "" });
  }, []);

  function loadBusiness() {
    API.getBuisness().then((res) => {
      setBusiness(res.data);
    });
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setFormObject({ Tag: value });
    console.log(formObject);
  }

  const tagList = tags.map(function (tag, index) {
    return (
      <option key={index} value={tag} name="Selected Tag">
        {tag}
      </option>
    );
  });

  const businessList = business.map((business) => {
    return (
      <div className="card" key={business._id}>
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
      <Row>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" onChange={handleInputChange}>
              <option value="">Pick an option</option>
              {tagList}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>{businessList}</Row>
    </Container>
  );
}
export default BusinessList;

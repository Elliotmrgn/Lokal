import React, { useState, useEffect, useRef } from "react";
import { Container } from "../../components/Grid";

import API from "../../utils/API";

import "./businessList.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import tags from "../../utils/Tags";

function BusinessList() {
  const [business, setBusiness] = useState([]);
  const [renderedBusiness, setRenderedBusiness] = useState([]);
  const [formObject, setFormObject] = useState([]);

  useEffect(() => {
    loadBusiness();
    setFormObject({ Tag: "" });
  }, []);

  useEffect(() => {}, [formObject]);

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
      <option key={index} value={tag} name="Tag">
        {tag}
      </option>
    );
  });
  // Figure out way to set conditional for business render

  const businessList = business.map((business) => {
    const businessesTags = business.tags;
    if (businessesTags.includes(formObject) === true) {
      return (
        <div className="card" key={business._id}>
          <img
            className="card-img-top"
            src={business.logo}
            alt="Card image cap"
          />
          <div className="card-body">
            <h1 className="card-title">{business.businessName}</h1>
            <h5 className="card-text">{business.tagline}</h5>
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
    } else {
      return (
        <div className="card" key={business._id}>
          <img
            className="card-img-top"
            src={business.logo}
            alt="Card image cap"
          />
          <div className="card-body">
            <h1 className="card-title">{business.businessName}</h1>
            <h5 className="card-text">{business.tagline}</h5>
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
    }
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

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Card } from "../../components/Card";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

function BusinessForm() {
  const [business, setBusiness] = useState([]);
  const [formObject, setFormObject] = useState([]);
  const formEl = useRef(null);

  useEffect(() => {
    console.log("Page Mounted");
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handlFormSubmit(event) {
    event.preventDefault();
    API.saveBusiness({
      owner: formObject.owner,
      businessName: formObject.businessName,
      phoneNumber: formObject.phoneNumber,
      email: formObject.email,
      about: formObject.about,
    })
      .then((res) => {
        formEl.current.reset();
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card title="Welcome! Please fill out the following forms to set up your business.">
            <form ref={formEl}>
              <Input
                onChange={handleInputChange}
                name="businessName"
                placeholder="Name of Business"
              />
              <Input
                onChange={handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number"
              />
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="Email Address"
              />
              <Input
                onChange={handleInputChange}
                name="owner"
                placeholder="Owner Name"
              />
              <TextArea
                onChange={handleInputChange}
                name="about"
                placeholder="About Section"
              />
              <FormBtn
                disabled={
                  !(
                    formObject.businessName &&
                    formObject.phoneNumber &&
                    formObject.email &&
                    formObject.owner &&
                    formObject.about
                  )
                }
                onClick={handleFormSubmit}
              >
                Submit Business
              </FormBtn>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BusinessForm;

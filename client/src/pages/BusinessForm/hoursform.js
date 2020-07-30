import React, { useState } from "react";
import { Input, TextArea, FormBtn, Address } from "../../components/Form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { PromiseProvider } from "mongoose";

function HoursForm(props) {
  const [formObject, setFormObject] = useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  return (
    <div>
      {/* Monday Hours */}
      <Row>
        <Col size="size md-2">
          <h4>Monday:</h4>
        </Col>
        <Col size="size md-2">
          <Input
            onChange={handleInputChange}
            name="MonOpen"
            placeholder="Open"
          />
        </Col>
        <Col size="size md-2">
          <Form.Group
            onChange={handleInputChange}
            name="AMorPM"
            controlId="exampleForm.ControlSelect1"
          >
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
        -
        <Col size="size md-2">
          <Input onChange={handleInputChange} name="Tuesday" placeholder="5" />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Tuesday Hours */}
      <Row>
        <Col size="size md-2">
          <h4>Tuesday:</h4>
        </Col>
        <Col size="size md-2">
          <Input
            onChange={handleInputChange}
            name="Wednesday"
            placeholder="9"
          />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
        -
        <Col size="size md-2">
          <Input
            onChange={handleInputChange}
            name="Wednesday"
            placeholder="5"
          />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Wedneday Hours */}
      <Row>
        <Col size="size md-2">
          <h4>Wednesday:</h4>
        </Col>
        <Col size="size md-2">
          <Input
            onChange={handleInputChange}
            name="Wednesday"
            placeholder="9"
          />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
        -
        <Col size="size md-2">
          <Input
            onChange={handleInputChange}
            name="Wednesday"
            placeholder="5"
          />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Thursday */}

      <Row>
        <Col size="size md-2">
          <h4>Thursday:</h4>
        </Col>
        <Col size="size md-2">
          <Input onChange={handleInputChange} name="Thursday" placeholder="9" />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
        -
        <Col size="size md-2">
          <Input onChange={handleInputChange} name="Thursday" placeholder="5" />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Friday hours */}

      <Row>
        <Col size="size md-2">
          <h4>Friday:</h4>
        </Col>
        <Col size="size md-2">
          <Input onChange={handleInputChange} name="Friday" placeholder="9" />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
        -
        <Col size="size md-2">
          <Input onChange={handleInputChange} name="Friday" placeholder="5" />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Saturday hours */}

      <Row>
        <Col size="size md-2">
          <h4>Saturday:</h4>
        </Col>
        <Col size="size md-2">
          <Input onChange={handleInputChange} name="Saturday" placeholder="9" />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
        -
        <Col size="size md-2">
          <Input onChange={handleInputChange} name="Saturday" placeholder="5" />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* sunday hours */}

      <Row>
        <Col size="size md-2">
          <h4>Sudnay:</h4>
        </Col>
        <Col size="size md-2">
          <Input onChange={handleInputChange} name="Sunday" placeholder="9" />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
        -
        <Col size="size md-2">
          <Input onChange={handleInputChange} name="Sunday" placeholder="5" />
        </Col>
        <Col size="size md-2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>PM</option>
              <option>AM</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}

export default HoursForm;

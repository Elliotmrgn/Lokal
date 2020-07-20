import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Card } from "../../components/Card";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

function SearchResult() {
  return (
  <Container fluid>
      <Row>
          <Col size="md-4">
                <h2>FEATURED</h2>
                <Card></Card>
          </Col>
          <Col size="md-8">
            <h2>SEARCH</h2>
          </Col>
      </Row>
  </Container>
  );
}
export default SearchResult;
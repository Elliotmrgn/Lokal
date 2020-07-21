import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Card } from "../../components/Card";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

function SearchResult() {
  const [buisnessList, setBuisnessList] = useState([]);

  useEffect(() => {
    API.getBuisness().then((res) => {
      setBuisnessList(res.data);
      console.log("response-------", res.data);
    });
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col size="md-4">
          <h2>FEATURED</h2>
          {buisnessList.map((business, index) => {
            console.log("**", business.businessName);
            return(
            <Card key={business.id} title={business.businessName}>
                <ul>
            <li>{business.email}</li>
                </ul>
            </Card>)
          })}
        </Col>
        <Col size="md-8">
          <h2>SEARCH</h2>
        </Col>
      </Row>
    </Container>
  );
}
export default SearchResult;

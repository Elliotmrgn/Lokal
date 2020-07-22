import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";

import { Col, Row, Container } from "../../components/Grid";

import { ResultCard } from "../../components/ResultCard";
import API from "../../utils/API";

function SearchResult() {
  const [buisnessList, setBuisnessList] = useState([]);

  useEffect(() => {
    API.getBuisness().then((res) => {
      setBuisnessList(res.data);
      console.log("Get Business Results", res.data);
    })
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-4">
          <h2>FEATURED</h2>
          {buisnessList.map((business, index) => {
            console.log("**", business);
            return <ResultCard key={business.id} data={business}></ResultCard>;
          })}
        </Col>
        <Col size="md-8">
          <h2>SEARCH</h2>
          <Map/>
        </Col>
      </Row>
    </Container>
  );
}
export default SearchResult;

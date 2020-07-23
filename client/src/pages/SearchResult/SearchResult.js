import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";
import { Col, Row, Container } from "../../components/Grid";

import { ResultCard } from "../../components/ResultCard";
import API from "../../utils/API";

function SearchResult() {
  const [buisnessList, setBuisnessList] = useState([]);
  const [mapCoords, setMapCoords] = useState({});

  useEffect(() => {
    API.getBuisness().then((res) => {
      setBuisnessList(res.data);
      console.log("Get Business Results", res.data);
      setMapCoords({
        lat: parseFloat(res.data[0].lat),
        lng: parseFloat(res.data[0].lng),
      });
    });
  }, []);

  const onClick = (e) => {
    setMapCoords({
      lat: parseFloat(e.target.getAttribute("data-lat")),
      lng: parseFloat(e.target.getAttribute("data-lng")),
    });
  };
  
  return (
    <Container fluid>
      <Row>
        <Col size="md-4">
          <h2>FEATURED</h2>
          {buisnessList.map((business, index) => {
            console.log("**", business);
            return (
              <ResultCard
                key={business.id}
                data={business}
                onClick={onClick}
              ></ResultCard>
            );
          })}
        </Col>
        <Col size="md-8">
          <h2>SEARCH</h2>
          <Map center={mapCoords} />
        </Col>
      </Row>
    </Container>
  );
}
export default SearchResult;

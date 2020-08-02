import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Map from "../../components/Map/Map";
import { Col, Row, Container } from "../../components/Grid";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ResultCard } from "../../components/ResultCard";
import API from "../../utils/API";


function SearchResult() {
  const [buisnessList, setBuisnessList] = useState([]);
  const [mapCoords, setMapCoords] = useState({});
  let searchQuery = useParams()
  
  useEffect(() => {
    console.log("SearchResult -> searchQuery", searchQuery.search)
    API.findViaSearch(searchQuery.search).then((res) => {
    console.log("8888888888SearchResult -> res", res)
      setBuisnessList(res.data);
      if(res.data.length != 0){
        setMapCoords({
          lat: parseFloat(res.data[0].lat),
          lng: parseFloat(res.data[0].lng),
        });
      }
      else{
        setMapCoords({
          lat:35.7796,
          lng:-78.6382,
        });
      }
    })
  }, []);

  const onClick = (e) => {
    setMapCoords({
      lat: parseFloat(e.target.getAttribute("data-lat")),
      lng: parseFloat(e.target.getAttribute("data-lng")),
    });
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const search = event.target.value;
    console.log("handleFormSubmit -> search", search)
     API.findViaSearch(search).then((res) => {
       setBuisnessList(res.data)
     });
  }
  
  return (
    <main>
    <Container fluid>
      <Row>
        <Col size="md-6">
          <h2 className="search-text">SEARCH</h2>
          <SearchBar handleFormSubmit={handleFormSubmit}/>
          <Map center={mapCoords} businesses={buisnessList}/>
        </Col>
        <Col size="md-6">
          {/* <h2 class="featured-title">FEATURED</h2> */}
          {buisnessList.map((business) => {
            return (
              <ResultCard
                key={business.id}
                data={business}
                onClick={onClick}
              ></ResultCard>
            );
          })}
        </Col>
      </Row>
    </Container>
    </main>
  );
}


export default SearchResult;

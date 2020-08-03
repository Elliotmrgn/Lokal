import React, { useState, useEffect, useRef } from "react";
import { Container } from "../../components/Grid";

import API from "../../utils/API";

import "./businessList.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { IoIosCafe } from "react-icons/io";


import tags from "../../utils/Tags";

function TagList() {
        const [business, setBusiness] = useState([]);
        const [renderedBusiness, setRenderedBusiness] = useState([]);
        const [formObject, setFormObject] = useState([]);
      
        useEffect(() => {
          loadBusiness();
          setFormObject({ Tag: "" });
        }, []);
      
        useEffect(() => {
          reRender();
        }, [formObject]);
      
        function loadBusiness() {
          API.getBuisness().then((res) => {
            setBusiness(res.data);
          });
        }
      
        function reRender() {
          const tag = formObject.Tag;
          console.log("reRender -> tag", tag);
          if (tag === "") {
            API.getBuisness().then((res) => {
              setBusiness(res.data);
            });
          } else {
            API.findViaTags(tag).then((res) => {
              setBusiness(res.data);
            });
          }
        }
      
        function handleInputChange(event) {
          const { value } = event.target;
          setFormObject({ Tag: value });
        }
      
        const tagList = tags.map(function (tag, index) {
          return (
            <option key={index} value={tag} name="Tag">
              {tag}
            </option>
          );
        });
    return (
    <div className="main">
        <Row>
        { formObject.Tag === "Entertainment" && <Col> <img className="coverImg" src="https://i.ibb.co/Vjqt999/boutique.jpg" alt="Boutique"></img> 
              <div class="carousel-caption">
              <p>BOUTIQUE</p> 
              <IoIosCafe /> 
              </div> </Col> } 

             { formObject.Tag === "Cafe" && <Col> <img className="coverImg" src="https://i.ibb.co/h1zQP3V/cafe.jpg" alt="cafe"></img> 
              <div class="carousel-caption">
              <p>CAFE</p> 
              <IoIosCafe /> 
              </div> </Col> }

            <Col>
            <ListGroup variant="flush">
            { business && business.map((business, i) => 
             {return  <ListGroup.Item key={i} >
                  <div className="textRight" >
                    <h1 className="listName">{business.businessName}</h1>
                    <h5 className="listTagline" >{business.tagline}</h5>
                  </div>
                  <div className="textRight" >
                    <Button href={"/profilepage/" + business._id} className="ButtonText" variant="info" size="sm" > Visit Page</Button>
                  </div>
                    </ListGroup.Item> } )}
            </ListGroup>
             </Col> 
             </Row>
         </div>
    )};

export default TagList;
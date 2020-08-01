import React, { useState, useEffect, useRef } from "react";
import { Container } from "../../components/Grid";

import API from "../../utils/API";

import "./businessList.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Fade from 'react-bootstrap/Fade'
//icons
import { IoIosCafe } from "react-icons/io";
import { AiFillShop } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiScissors2Line } from "react-icons/ri";
import { FaWrench, FaTheaterMasks } from "react-icons/fa";
import { GiHanger, GiHamburger, GiWeightLiftingUp, GiKnifeFork, GiLargePaintBrush } from "react-icons/gi";


import tags from "../../utils/Tags";

function BusinessList() {
  const [business, setBusiness] = useState([]);
  const [renderedBusiness, setRenderedBusiness] = useState([]);
  const [formObject, setFormObject] = useState([]);
  useEffect(() => {
    loadBusiness();
    setFormObject({ Tag: "" });
  }, []);

  useEffect(() => {
    console.log(formObject.Tag);
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
  
  // Figure out way to set conditional for business render

  return (
    <div >
      <div className="titleContainer">
        <Row>
        <span className="title">Discover lokal businesses</span>
        </Row>
      <Row >
        <Col size="size md-2">
          <Form.Group className="tagPicker" controlId="exampleForm.ControlSelect1"  appear="true">
            <Form.Control className="tagDrops" as="select" onChange={handleInputChange}>
              <option className="options" value="">Pick an option</option>
              {tagList}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row> 
      </div>
      {/* <Row>{businessList}</Row> */}

      <div className="mainContainer">
        <Row>
             { formObject.Tag === "Cafe" && <Col> <img className="coverImg" src="https://i.ibb.co/h1zQP3V/cafe.jpg" alt="cafe"></img> 
              <div className="carousel-caption">
              <p>CAFE</p> 
              <IoIosCafe /> 
              </div> </Col> } 

              { formObject.Tag === "Boutique" && <Col> <img className="coverImg" src="https://i.ibb.co/Vjqt999/boutique.jpg" alt="Boutique"></img> 
              <div className="carousel-caption" >
              <p className="largeText">BOUTIQUE </p>
              <p className="largeText"><AiFillShop /> </p> 
              </div> </Col> } 

              { formObject.Tag === "Books and Music" && <Col> <img className="coverImg" src="https://i.ibb.co/fC2zc0q/books.jpg" alt="Books"></img> 
              <div className="carousel-caption" >
              <p >Books
              <BsBook /> </p> 
              </div> </Col> } 

              { formObject.Tag === "Clothing" && <Col> <img className="coverImg" src="https://i.ibb.co/Jcd59KK/clothing.jpg" alt="Clothing"></img> 
              <div className="carousel-caption" >
              <p className="largeText">Clothing</p>
              <p className="largeText"><GiHanger /> </p> 
              </div> </Col> } 

              { formObject.Tag === "Entertainment" && <Col> <img className="coverImg" src="https://i.ibb.co/qWR9Z7Y/entertainment.jpg" alt="Entertainment"></img> 
              <div className="carousel-caption" >
              <p >Fun</p>
              <FaTheaterMasks /> 
              </div> </Col> } 

              { formObject.Tag === "Drive Thru" && <Col> <img className="coverImg" src="https://i.ibb.co/GdZyp87/fastfood.jpg" alt="Drive Thru"></img> 
              <div className="carousel-caption" >
              <p className="largeText">Drive Thru</p>
              <p><GiHamburger /> </p> 
              </div> </Col> } 

              
              { formObject.Tag === "Gym" && <Col> <img className="coverImg" src="https://i.ibb.co/VDVBBDL/gym.jpg" alt="Gym"></img> 
              <div className="carousel-caption" >
              <p >Gym</p>
              <p><GiWeightLiftingUp /> </p> 
              </div> </Col> } 

              { formObject.Tag === "Hobbies and Crafts" && <Col> <img className="coverImg" src="https://i.ibb.co/MsSsXmP/hobbies.jpg" alt="Hobbies"></img> 
              <div className="carousel-caption" >
              <p className="largeText" >Hobbies & Crafts</p>
              <p className="largeText" > <GiLargePaintBrush /> </p> 
              </div> </Col> } 

              { formObject.Tag === "Mechanic" && <Col> <img className="coverImg" src="https://i.ibb.co/zJgPHTj/mechanic.jpg" alt="Mechanic"></img> 
              <div className="carousel-caption" >
              <p className="largeText" >Mechanic
              <FaWrench /> </p> 
              </div> </Col> } 

              { formObject.Tag === "Resteraunt" && <Col> <img className="coverImg" src="https://i.ibb.co/FkQLmMV/resturant.jpg" alt="Resteraunt"></img> 
              <div className="carousel-caption" >
              <p className="xlText" >Resteraunt
              <GiKnifeFork /> </p> 
              </div> </Col> } 

              { formObject.Tag === "Salon" && <Col> <img className="coverImg" src="https://i.ibb.co/DD9q56n/salon.jpg" alt="Salon"></img> 
              <div className="carousel-caption" >
              <p >Salon
              <RiScissors2Line /> </p> 
              </div> </Col> } 


            <Col>
            <Fade in>
            <ListGroup variant="flush">
            { business && business.map((business, i) => 
             {return  <ListGroup.Item key={i} >
                  <div className="textRight" >
                    <h1 className="listName">{business.businessName}</h1>
                    <h5 className="listTagline" >{business.tagline}</h5>
                  </div>
                  <div className="textRight" >
                    <Button href={"/profilepage/" + business._id}  variant="info" size="sm" > Visit Page</Button>
                  </div>
                    </ListGroup.Item> } )}
            </ListGroup>
            </Fade>
             </Col> 
             </Row>
         </div>


    </div>
  );
}

export default BusinessList;

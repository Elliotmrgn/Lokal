import React from "react";
import "./profilePgStyles.css";

// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components 
import Jumbotron from "./profilePgComponents/jumbotron";
import About from "./profilePgComponents/about";
import ContactButtons from "./profilePgComponents/contactButtons";
import Header from "./profilePgComponents/header";
import Hours from "./profilePgComponents/hours";
import Insta from "./profilePgComponents/instaAPI";
import Map from "./profilePgComponents/map";
import Owner from "./profilePgComponents/ownerabout";
import SocialMedia from "./profilePgComponents/socialmedia";
import Tagline from "./profilePgComponents/tagline";


function businessPage() {

    // API.getbusiness()
    //     .then(res => {
    //     // console.log(res.data.books);
    //     setBooks(res.data.business);
    //     })
    //     .catch(err => console.log(err));

    return (
        <div>
            <Jumbotron />

            <Container fluid>

                <Row>

                    <Col xs={7} className="mainSection"> 
                        <div className="box header">
                            <Header />
                        </div>

                        <div className="box tagline">
                            <Tagline />
                        </div>

                        <div className="box about">
                            <About />
                        </div>

                        <div className="box insta">
                            <Insta />
                        </div>

                        <div className="box owner">
                            <Owner />
                        </div>
                    </Col>

                    <Col className="aside">
                        <div className="box socialMedia">
                            <SocialMedia />
                        </div>
                        
                        <div className="box contact">
                                <ContactButtons />
                        </div>

                        <div className="box map">
                            <Map />
                        </div>

                        <div className="box hours">
                            <Hours />
                        </div>
                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default businessPage
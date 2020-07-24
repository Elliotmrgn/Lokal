import React, { useState, useEffect } from "react";
import "./profilePgStyles.css";
import API from "../../utils/API";

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


function BusinessPage() {
    const testerbusiness = "5f164573676a1ebfde5e0982";
    //adding something so i can push?

    const [business, setBusiness] = useState([]);

    useEffect(() => {
        loadBusiness();
      }, []);

    function loadBusiness(){
    API.getBusiness(testerbusiness)
        .then((res) => {
        console.log(res.data);
        setBusiness(res.data);
        })
        .catch(err => console.log(err));

    }


    return (
        <div>
            <Jumbotron />

            <Container >
                <Row>
                    <Col xs={7} className="mainSection"> 
                        <div className="box header">
                            { business.businessName ? <Header name={business.businessName} website={business.website} /> : null } 
                        </div>

                        <div className="box tagline">
                            { business.tagline ? <Tagline shortTag={business.tagline}/> : null}
                        </div>

                        <div className="box about">
                            { business.about ? <About name={business.businessName} about={business.about} /> : null }
                        </div>
                        
                        <div className="box insta">
                            { business.instagram ? <Insta insta={business.instagram} fb={business.facebook} /> : null }
                        </div>

                        <div className="box owner">
                            { business.owner ? <Owner owner={business.owner} /> : null }

                        </div>
                    </Col>

                    <Col className="aside">
                        <div className="box socialMedia">
                            { business.instagram ? <SocialMedia insta={business.instagram} /> : null }
                            { business.facebook && <SocialMedia  fb={business.facebook} />}
                        </div>
                        
                        <div className="box contact">
                          { business.email ? <ContactButtons email={business.email} /> : null }

                        </div>

                        <div className="box map">
                            <Map />
                            { business.address && <Map addy={business.address} />}

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

export default BusinessPage
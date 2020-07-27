import React, { useState, useEffect } from "react";
import "./profilePgStyles.css";
import API from "../../utils/API";

// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



// components 
import Jumbotron from "./profilePgComponents/jumbotron";
import About from "./profilePgComponents/about";
import ContactButtons from "./profilePgComponents/contactButtons";
import Header from "./profilePgComponents/header";
import Hours from "./profilePgComponents/hours";
import Insta from "./profilePgComponents/instaAPI";
import Map from "./profilePgComponents/map";
import Owner from "./profilePgComponents/ownerabout";
import InstaIcon from "./profilePgComponents/instaicon";
import Tagline from "./profilePgComponents/tagline";
import Fb from "./profilePgComponents/facebook";


function BusinessPage() {
    const testerbusiness = "5f164573676a1ebfde5e0982";

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
            { business.photos > 0 ? <Jumbotron bkphoto={business.photos} /> : <div className="defaultJumbotron"><ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul></div> } 
             <Image  className="logo" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/43398007_313377752780140_2610444250214563840_n.png?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=AwWT7rdFa2QAX_j5IRF&_nc_ht=scontent-iad3-1.xx&oh=bd8fd28ee4516f932387414e952af333&oe=5F3F458C" roundedCircle />


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
                            { business.instagram && <Insta insta={business.instagram} fb={business.facebook} />}
                        </div>

                        <div className="box owner">
                            { business.owner ? <Owner owner={business.owner} /> : null }

                        </div>
                    </Col>

                    <Col className="aside">
                        <div className="box socialMedia">
                            { business.instagram ? <InstaIcon insta={business.instagram} /> : null }
                            { business.instagram && <Fb  fb={business.facebook} />}
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
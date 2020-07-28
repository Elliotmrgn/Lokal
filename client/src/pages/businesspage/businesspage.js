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
import Map from "./profilePgComponents/map";
import Owner from "./profilePgComponents/ownerabout";
import InstaIcon from "./profilePgComponents/instaicon";
import Tagline from "./profilePgComponents/tagline";
import Fb from "./profilePgComponents/facebook";
import Tags from "./profilePgComponents/tags";

function BusinessPage() {
    const testerbusiness = "5f2023bd6804c4437ae34db1";

    // 0]     5f164573676a1ebfde5e0982,     5f1dbe2c99f408239b1d03fc, 5f1dbe9599f408239b1d03fd

    const [business, setBusiness] = useState([]);

    useEffect(() => {
        loadBusiness();
      }, []);

    function loadBusiness(){
    API.getProfile(testerbusiness)
        .then((res) => {
        console.log(res.data);
        setBusiness(res.data);
        })
        .catch(err => console.log(err));
    

//     API.getProfileSchedule(testerbusiness)
//     .then((res) => {
//     console.log("hours" + res.data);
//     setBusiness(res.data);
//     })
//     .catch(err => console.log(err));
    }

    // console.log(business.schedule)



    return (
        <div>
            { business.photos > 0 ? <Jumbotron bkphoto={business.photos} /> : <div className="defaultJumbotron"><ul className="circles">
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

            { business.logo ?  <Image  className="logo" src={business.logo} roundedCircle />: null } 


            


            <Container >
                <Row>
                    <Col xs={7} className="mainSection"> 
                        <div className="box profileHeader">
                            { business.businessName && <Header name={business.businessName} website={business.website} /> } 
                        </div>


                        <div className="box tags">
                            {business.tags && <Tags tags={business.tags} />}
                        </div>

                        <div className="box tagline">
                            { business.tagline && <Tagline shortTag={business.tagline}/>}
                        </div>

                        <div className="box about">
                            { business.about && <About name={business.businessName} about={business.about} />}
                        </div>

                        <div className="box owner">
                            { business.owner && <Owner owner={business.owner} />}

                        </div>
                    </Col>

                    <Col className="aside">
                        <div className="box socialMedia">
                            { business.instagram ? <InstaIcon insta={business.instagram} /> : null }
                            { business.instagram && <Fb  fb={business.facebook} />}
                        </div>
                        
                        <div className="box contact">
                          { business.email ? <ContactButtons email={business.email}  phone={business.phoneNumber}/> : null }

                        </div>

                        <div className="box map">
                            <Map />
                            { business.address && <Map addy={business.address} />}

                        </div>

                        <div className="box hours">
                            {business.schedule && 
                             <Hours 
                                MonOpen={business.schedule.MonOpen}
                                MonClose={business.schedule.MonClose}
                                TuesOpen={business.schedule.TuesOpen}
                                TuesClose={business.schedule.TuesClose}
                                WedOpen={business.schedule.WedOpen}
                                WedClose={business.schedule.WedClose}
                                ThursOpen={business.schedule.ThursOpen}
                                ThursClose={business.schedule.ThursClose}
                                FriOpen={business.schedule.FriOpen}
                                FriClose={business.schedule.FriClose}
                                // SatOpen={business.schedule.SatOpen}
                                // SatClose={business.schedule.SatClose}
                                // SunOpen={business.schedule.SunOpen}
                                // SunClose={business.schedule.SunClose}
                            />}
                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BusinessPage
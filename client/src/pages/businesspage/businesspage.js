import React, { useState, useEffect } from "react";
import "./profilePgStyles.css";
import API from "../../utils/API";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';

// components
import Jumbotron from "./profilePgComponents/jumbotron";
import About from "./profilePgComponents/about";
import ContactButtons from "./profilePgComponents/contactButtons";
import Header from "./profilePgComponents/header";
import Hours from "./profilePgComponents/hours";
import Owner from "./profilePgComponents/ownerabout";
import InstaIcon from "./profilePgComponents/instaicon";
import Tagline from "./profilePgComponents/tagline";
import Fb from "./profilePgComponents/facebook";
import Tags from "./profilePgComponents/tags";
import Map from "../../components/Map/Map";

//carosel
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function BusinessPage(props) {

    const testerbusinessfull = "5f203b74c2b1714429ad4a28";
    const testerbusinessmin = "5f2023bd6804c4437ae34db1";
    const toLoad= props.match.params.id

    const [business, setBusiness] = useState([]);
    const [userphotos, setPhotos] = useState([]);
    const [mapCoords, setMapCoords] = useState({});
    const [allTags, setTags] = useState([]);
    const busiArray = [];


    useEffect(() => {
        loadBusiness();
    }, []);


    function loadBusiness(){
    API.getProfile(toLoad)
        .then((res) => {
        console.log(res.data);
        setBusiness(res.data);
        setPhotos(res.data.photos);
        setTags(res.data.tags);
        busiArray.push(res.data);
        setMapCoords({
          lat: parseFloat(res.data.lat),
          lng: parseFloat(res.data.lng),
        });
      }, [])
      .catch((err) => console.log(err));


  }


  return (
    <div>
      {/* {business.photos === 0 ? (
        <Jumbotron bkphoto={business.photos} />
      ) : ( */}
        <div className="defaultJumbotron">
          <ul className="circles">
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
          </ul>
        </div>

      {business.logo ? (
        <Image className="logo" src={business.logo}  />
      ) : null}

      <Container>
        <Row>
          <Col  sm={12} md={7} className="mainSection">
            <div className="box profileHeader">
              {business.businessName && (
                <Header
                  name={business.businessName}
                  website={business.website}
                />
              )}
            </div>

            <div className="box tags">
              {business.tags &&  
                business.tags.map(function(data, i) {return <Button className="ButtonText" key={i} variant="info" size="sm" >{data} </Button> }) }

            
            </div>

            <div className="box tagline">
            {/* <Button className="ButtonText" variant="info" size="sm" >TEST</Button> */}
              {business.tagline && <Tagline shortTag={business.tagline} />}
            </div>

            <div className="box about">
              {business.about && (
                <About name={business.businessName} about={business.about}  />
              )}
            </div>

            {userphotos.length > 0 && (
              <div className="box photosdiv">
                <AwesomeSlider>
                  {userphotos.map((userphoto, i) => (
                    <div key={i} data-src={userphoto} />
                  ))}
                </AwesomeSlider>
              </div>
            )}

            <div className="box owner">
              {business.owner && <Owner owner={business.owner} />}
            </div>
          </Col>

          <Col sm={12} md={5} className="aside">
            <div className="box socialMedia">
              {business.instagram ? (
                <InstaIcon insta={business.instagram} />
              ) : null}
              {business.instagram && <Fb fb={business.facebook} />}
            </div>

            <div className="box contact">
              {business.email ? (
                <ContactButtons
                  email={business.email}
                  phone={business.phoneNumber}
                  street={business.street}
                />
              ) : null}
            </div>

            <div className="box map">
            <Map center={mapCoords} businesses={busiArray}/>
            </div>

            <div className="box hours">
              {business.schedule && (
                <Hours
                  MonOpen={
                    business.schedule.MonOpen
                      ? business.schedule.MonOpen + "AM"
                      : "Closed"
                  }
                  MonClose={
                    business.schedule.MonClose
                      ? business.schedule.MonClose + "PM"
                      : null
                  }
                  TuesOpen={
                    business.schedule.TuesOpen
                      ? business.schedule.TuesOpen + "AM "
                      : "Closed"
                  }
                  TuesClose={
                    business.schedule.TuesClose
                      ? business.schedule.TuesClose + "PM"
                      : null
                  }
                  WedOpen={
                    business.schedule.WedOpen
                      ? business.schedule.WedOpen + "AM "
                      : "Closed"
                  }
                  WedClose={
                    business.schedule.WedClose
                      ? business.schedule.WedClose + "PM"
                      : null
                  }
                  ThursOpen={
                    business.schedule.ThursOpen
                      ? business.schedule.ThursOpen + "AM"
                      : "Closed"
                  }
                  ThursClose={
                    business.schedule.ThursClose
                      ? business.schedule.ThursClose + "PM"
                      : null
                  }
                  FriOpen={
                    business.schedule.FriOpen
                      ? business.schedule.FriOpen + "AM "
                      : "Closed"
                  }
                  FriClose={
                    business.schedule.FriClose
                      ? business.schedule.FriClose + "PM"
                      : null
                  }
                  SatOpen={
                    business.schedule.SatOpen
                      ? business.schedule.SatOpen + "AM "
                      : "Closed"
                  }
                  SatClose={
                    business.schedule.SatClose
                      ? business.schedule.SatClose + "PM"
                      : null
                  }
                  SunOpen={
                    business.schedule.SunOpen
                      ? business.schedule.SunOpen + "AM "
                      : "Closed"
                  }
                  SunClose={
                    business.schedule.SunClose
                      ? business.schedule.SunClose + "PM"
                      : null
                  }
                />
              )}
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BusinessPage;

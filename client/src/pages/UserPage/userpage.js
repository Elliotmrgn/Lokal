import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import "./userPgStyle.css";


function Userpage() {

    const meee = "5f0fa2b679ec7a7d8825ec2c"
    const [user, setuser] = useState([]);
    const [business, getBusiness] = useState([]);
    const [businesss, setBusiness] = useState([]);

    useEffect(() => {
        loaduser();
      }, []);

    function loaduser(){
        API.getUser(meee)
            .then((res) => {
            console.log(res.data);
            setuser(res.data);
            getBusiness(res.data.business[0])
            })
            .catch(err => console.log(err));
            API.getProfile(business)
                .then((res) => {
                console.log(res.data);
                setBusiness(res.data);
                })
                .catch(err => console.log(err));
        }

        const businessName = businesss.map(function(data, _id) {
            console.log(data._id)
            return <ListGroup.Item key={_id}> <a href={"/profilepage/" + data._id}> {data.businessName}</a> </ListGroup.Item>;
        });

        const busi2 = businesss.map(function(data, _id) {
            console.log(data._id)
            return (
                <Card className="cardStyles" key={data._id}>
                <Card.Header >
                <Accordion.Toggle className="cardHead" as={Button} variant="link" eventKey={data._id}>
                    {data.businessName}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={data._id}>
                <Card.Body>
                    <a href={"/profilepage/" + data._id}> View Page</a>
                    <br></br>
                    <a href={"/form/" + data._id}> Edit</a>
                </Card.Body>
                </Accordion.Collapse>
                </Card> )
        });



    return (
            <div className="userPageContainer">
                <div className="hello">hello, {user.firstName}!</div> 
                <h4 className="centerText">Manage My Businesses:</h4>
                {/* <ListGroup>
                <h4>{businessName}</h4>
                </ListGroup> */}

                {/* take two */}
                <Accordion>
                        {busi2}
                </Accordion>
            </div>

    );
}

export default Userpage


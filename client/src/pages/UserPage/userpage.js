import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import "./userPgStyle.css";

function Userpage(props) {
  const [user, setuser] = useState([]);
  const [businesss, setBusiness] = useState([]);

  useEffect(() => {
    loaduser();
  }, []);

  function loaduser() {
    API.getUser().then((res) => {
      setuser(res.data);
      console.log("here " + res.data.email);

      API.getUserBuisnesses(res.data.email)
        .then((res) => {
          console.log(res.data);
          setBusiness(res.data);
        })
        .catch((err) => console.log(err));
    });
  }

  return (
    <div className="userPageContainer">
      <div className="hello">hello, {user.firstName}!</div>
      <h4 className="centerText">Manage My Businesses:</h4>

      <Accordion>
        {businesss &&
          businesss.map(function (data, i) {
            return (
              <Card className="cardStyles" key={i}>
                <Card.Header>
                  <Accordion.Toggle
                    className="cardHead"
                    as={Button}
                    variant="link"
                    eventKey={data._id}
                  >
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
              </Card>
            );
          })}
      </Accordion>
    </div>
  );
}

export default Userpage;

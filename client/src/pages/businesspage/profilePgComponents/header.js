// code for business name, website and tags 
import React from "react";

// Bootstrap
import Button from 'react-bootstrap/Button';


function headerPF(props) {

    return (
        <div>
            <h1>{props.name}</h1>
            <Button className="ButtonText" variant="info" size="sm" rounded>tags</Button>
            <br></br>
            <a href="/" className="largeLink">{props.website}</a>
        </div>
    )
}

export default headerPF;
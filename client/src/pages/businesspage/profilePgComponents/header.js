// code for business name, website and tags 
import React from "react";

// Bootstrap
import Button from 'react-bootstrap/Button';


function headerPF() {

    return (
        <div>
            <h1>Business Name</h1>
            <Button className="ButtonText" variant="info" size="sm" rounded>Tags</Button>
            <br></br>
            <a href="/" className="largeLink">website.com</a>
        </div>
    )
}

export default headerPF;
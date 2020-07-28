// code for contact buttons
import React from "react";
import Button from 'react-bootstrap/Button';


function contactPF(props) {

    return (
        <div>
            <Button className="ButtonText" variant="info" size="sm" rounded> {props.email}</Button>
            <Button className="ButtonText" variant="info" size="sm" rounded> {props.phone}</Button>

        </div>
    )
}

export default contactPF
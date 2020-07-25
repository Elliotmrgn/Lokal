//get insta API and fill with info from db, create container 
import React from "react";
import { PromiseProvider } from "mongoose";

function instaPF(props) {

    return (
        <div>
            Instagram: {props.insta}
            <br></br>
            Facebook: {props.fb}
        </div>
    )
}

export default instaPF
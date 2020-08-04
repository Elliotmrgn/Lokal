import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../profilePgStyles.css"
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';


function fbIcon(props) {

    return (
        <div className="socialIconBox">
            <IconContext.Provider value={{ className: "socialIcon" }}>
                <Link target="_blank" to={props.fb}><FaFacebook/></Link>
            </IconContext.Provider>
        </div>
    )
}

export default fbIcon
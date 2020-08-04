// code for social media Links
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



function instaIcon(props) {

    return (

        <div className="socialIconBox">
            <IconContext.Provider value={{ className: "socialIcon" }}>
                <Link target="_blank" to={props.insta}><FaInstagram/></Link>
            </IconContext.Provider>
        </div>
    )
}

export default instaIcon
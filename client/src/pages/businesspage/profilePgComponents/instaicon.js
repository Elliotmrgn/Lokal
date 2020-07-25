// code for social media Links
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";


function instaIcon(props) {

    return (
        <div className="socialIconBox">
            <IconContext.Provider value={{ className: "socialIcon" }}>
                <a target="_blank" href={props.insta}><FaInstagram/></a>
            </IconContext.Provider>
        </div>
    )
}

export default instaIcon
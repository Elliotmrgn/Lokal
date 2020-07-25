import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../profilePgStyles.css"


function fbIcon(props) {

    return (
        <div className="socialIconBox">
            <IconContext.Provider value={{ className: "socialIcon" }}>
                <a target="_blank" href={props.fb}><FaFacebook/></a>
            </IconContext.Provider>
        </div>
    )
}

export default fbIcon
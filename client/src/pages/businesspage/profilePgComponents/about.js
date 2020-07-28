import React from "react";

function aboutPF(props) {

    return (
        <div>
            <h3> About {props.name} </h3>
            <p> {props.about}</p>
        </div>
    )
}

export default aboutPF
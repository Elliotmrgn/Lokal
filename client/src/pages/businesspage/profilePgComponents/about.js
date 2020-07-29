import React from "react";

function aboutPF(props) {

    return (
        <div>
            <h3> About {props.name} </h3>
             {props.about}
        </div>
    )
}

export default aboutPF
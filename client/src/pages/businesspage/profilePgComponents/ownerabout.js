//code for an about the owner section

import React from "react";

function ownerPF(props) {

    return (
        <div>
            <h3>About the Owner</h3>
            <p>{props.owner}</p>
        </div>
    )
}

export default ownerPF
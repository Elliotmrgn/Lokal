import React from "react";

export const InputSocial = (props) => (
  <div className="form-group input-group mb3">
    <div className="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">
        @
      </span>
    </div>
    <input
      type="text"
      className="form-control"
      aria-label="Username"
      aria-describedby="basic-addon1"
      {...props}
    />
  </div>
);

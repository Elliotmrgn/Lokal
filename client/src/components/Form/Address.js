import React from "react";

export const Address = (props) => (
  <div className="form-group">
    <input
      type="street"
      className="form-control"
      id="autocomplete"
      placeholder="Street"
      name="street"
      {...props}
    />

    <input
      type="city"
      className="form-control"
      id="inputCity"
      placeholder="City"
      name="city"
      {...props}
    />

    <input
      type="state"
      className="form-control"
      id="inputState"
      placeholder="State"
      name="state"
      {...props}
    />

    <input
      type="zip"
      className="form-control"
      id="inputZip"
      placeholder="Zip"
      name="zip"
      {...props}
    />
  </div>
);

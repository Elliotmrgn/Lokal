import React from "react";

export const Address = (props) => (
  <div class="form-group">
    <input
      type="street"
      class="form-control"
      id="autocomplete"
      placeholder="Street"
      name="street"
      {...props}
    />

    <input
      type="city"
      class="form-control"
      id="inputCity"
      placeholder="City"
      name="city"
      {...props}
    />

    <input
      type="state"
      class="form-control"
      id="inputState"
      placeholder="State"
      name="state"
      {...props}
    />

    <input
      type="zip"
      class="form-control"
      id="inputZip"
      placeholder="Zip"
      name="zip"
      {...props}
    />

    <input
      type="county"
      class="form-control"
      id="inputCounty"
      placeholder="County"
      name="county"
      {...props}
    />

    <input
      type="country"
      class="form-control"
      id="inputCountry"
      placeholder="Country"
      name="country"
      {...props}
    />
  </div>
);

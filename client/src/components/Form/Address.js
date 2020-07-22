import React from "react";

export const Address = (props) => (
  <div class="form-group">
    <input
      type="street"
      class="form-control"
      id="autocomplete"
      placeholder="Street"
    />

    <input type="city" class="form-control" id="inputCity" placeholder="City" />

    <input
      type="state"
      class="form-control"
      id="inputState"
      placeholder="State"
    />

    <input type="zip" class="form-control" id="inputZip" placeholder="Zip" />

    <input
      type="county"
      class="form-control"
      id="inputCounty"
      placeholder="County"
    />

    <input
      type="country"
      class="form-control"
      id="inputCountry"
      placeholder="Country"
    />
  </div>
);

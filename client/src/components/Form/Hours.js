import React, { useEffect, useState } from "react";

export const Hours = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const logHours = () => {};
  const daysList = days.map(function (days) {
    return (
      <div className="row">
        <div className="col-sm-2">
          <label>{days}: </label>
        </div>
        <div className="col-sm-3">
          <input
            type="time"
            id="open"
            name="appt"
            min="6:00"
            max="22:00"
            required
          />
        </div>
        <label className="col-sm-2">to</label>
        <div className="col-sm-3">
          <input
            type="time"
            id="close"
            name="appt"
            min="6:00"
            max="22:00"
            required
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>{daysList}</div>
      <button onClick={logHours}> Submit Hours</button>
    </div>
  );
};

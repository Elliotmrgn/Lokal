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

  const daysList = days.map(function (days) {
    return (
      <div className="row">
        <div className="col-sm-2">
          <label>{days}</label>
        </div>
        <div className="col-sm-5">
          <select
            className="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
          >
            <option value="6AM" selected>
              6 AM
            </option>
            <option value="7AM">7 AM</option>
            <option value="8AM">8 AM</option>
            <option value="9AM">9 AM</option>
            <option value="10AM">10 AM</option>
            <option value="11AM">11 AM</option>
            <option value="12PM">12 PM</option>
            <option value="1PM">1 PM</option>
            <option value="2PM">2 PM</option>
            <option value="3PM">3 PM</option>
            <option value="4PM">4 PM</option>
            <option value="5PM">5 PM</option>
            <option value="6PM">6 PM</option>
            <option value="7PM">7 PM</option>
            <option value="8PM">8 PM</option>
            <option value="9PM">9 PM</option>
            <option value="10PM">10 PM</option>
            <option value="11PM">11 PM</option>
          </select>
        </div>

        <div className="col-sm-5">
          <select
            className="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
          >
            <option value="6AM" selected>
              6 AM
            </option>
            <option value="7AM">7 AM</option>
            <option value="8AM">8 AM</option>
            <option value="9AM">9 AM</option>
            <option value="10AM">10 AM</option>
            <option value="11AM">11 AM</option>
            <option value="12PM">12 PM</option>
            <option value="1PM">1 PM</option>
            <option value="2PM">2 PM</option>
            <option value="3PM">3 PM</option>
            <option value="4PM">4 PM</option>
            <option value="5PM">5 PM</option>
            <option value="6PM">6 PM</option>
            <option value="7PM">7 PM</option>
            <option value="8PM">8 PM</option>
            <option value="9PM">9 PM</option>
            <option value="10PM">10 PM</option>
            <option value="11PM">11 PM</option>
          </select>
        </div>
      </div>
    );
  });

  return daysList;
};

import axios from "axios";

export default {
  getBuisness: function () {
    return axios.get("/api/business");
  },
  saveBusiness: function (businessData) {
    console.log("hours testing" + businessData);
    return axios.post("/api/business", businessData);
  },
  postSchedule: function (schedule) {
    console.log("API schedule" + schedule);
    return axios.post("/api/schedule", schedule);
  },
  addressConvert: function (address) {
    address = encodeURIComponent(address);
    console.log(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    return axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
  },
  getProfile: function (id) {
    return axios.get("/api/business/" + id);
  },
  getProfileSchedule: function (businessId) {
    return axios.get("/api/business/" + businessId + "schedule");
  },
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  findViaSearch: function (search) {
    return axios.get("/api/business/viaSearch/" + search);
  },
};

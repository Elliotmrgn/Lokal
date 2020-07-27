import axios from "axios";

export default {


  getBuisness: function () {
    return axios.get("/api/business");
  },
  saveBusiness: function (businessData) {
    return axios.post("/api/business", businessData);
  },
  addressConvert: function (address) {
    return axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
  },
  findViaSearch: function (search) {
    return axios.get("/api/business/" + search);
  },
  findViaTags: function (tags) {
    return axios.get("/api/tags/" + tags);
  },
  getBusiness: function (id) {
    return axios.get("/api/business/" + id);
  },
};

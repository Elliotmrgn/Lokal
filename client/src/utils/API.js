import axios from "axios";


export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },

  getBuisness: function(){
    return  axios.get("/api/business");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  saveBusiness: function (businessData) {
    console.log("hours testing" + businessData)
    return axios.post("/api/business", businessData);
  },
  postSchedule: function(schedule) {
    console.log("API schedule" + schedule)
    return axios.post("/api/schedule", schedule);
  },
  addressConvert: function(address){
    address = encodeURIComponent(address);
    console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`) 
  },
  getProfile: function(id) {
    return axios.get("/api/business/" + id)
  },
  // tester ID: 5f164573676a1ebfde5e0982

};

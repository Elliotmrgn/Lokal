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

  getBuisness: function () {
    return axios.get("/api/business");
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
};

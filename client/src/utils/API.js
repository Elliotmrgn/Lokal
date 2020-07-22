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
  getBusiness: function(id) {
    return axios.get("/api/business/" + id)
  },
  // tester ID: 5f164573676a1ebfde5e0982
};

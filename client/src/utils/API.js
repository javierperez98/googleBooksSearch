import axios from "axios";

const API = {
	searchBooks: function (title) {
		return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
	},

	saveBook: function (bookData) {
		return axios.post("/api/books", bookData);
	},

	getBooks: function () {
		axios.get("/api/books");
	},

	deleteBook: function (id) {
		return axios.delete("/api/books/" + id);
	},
};

export default API;

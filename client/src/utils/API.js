import axios from "axios";

const API = {
	getBooks: function (title) {
		return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
	},

	saveBook: function (bookData) {
		return axios.post("/api/books", bookData);
	},

	deleteBook: function (id) {
		return axios.delete("/api/books/" + id);
	},
};

export default API;

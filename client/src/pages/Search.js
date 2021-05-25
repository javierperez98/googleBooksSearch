import React, { useState } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Rows from "../components/Rows";

function Search() {
	const [state, setState] = useState({
		books: [],
		search: "",
	});

	function handleInput(e) {
		e.preventDefault();
		const input = e.target.value;
		setState({ ...state, search: input });
	}

	function handleSave(e) {
		e.preventDefault();
		console.log(e.target.value);
		const arr = state.books[e.target.value];
		const saveBook = {
			title: arr.volumeInfo.title,
			author: arr.volumeInfo.title,
			link: arr.volumeInfo.title,
			image: arr.volumeInfo.title,
			description: arr.volumeInfo.title,
			subtitle: arr.volumeInfo.title,
		};
		API.saveBook(saveBook);
	}

	async function findbooks(e) {
		e.preventDefault();
		const list = await API.searchBooks(state.search.trim());
		setState({ books: list.data.items, search: "" });
	}

	return (
		<div className="container mt-5">
			<Header />
			<SearchBar
				search={state.search}
				handleInput={handleInput}
				findbooks={findbooks}
			/>
			<Rows array={state.books} handleSave={handleSave} />
		</div>
	);
}

export default Search;

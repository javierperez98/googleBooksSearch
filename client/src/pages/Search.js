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

	async function findbooks(e) {
		e.preventDefault();
		const list = await API.getBooks(state.search.trim());
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
			<Rows array={state.books} />
		</div>
	);
}

export default Search;

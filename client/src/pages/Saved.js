import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Rows from "../components/Rows";

function Search() {
	const [state, setState] = useState({
		books: [],
	});

	useEffect(() => {
		const savedBooks = API.getBooks();
		setState({ books: savedBooks });
	}, []);

	return (
		<div className="container mt-5">
			<Header />
			{/* <Rows array={state.books} /> */}
		</div>
	);
}

export default Search;

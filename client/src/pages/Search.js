import React, { useState } from "react";
import API from "../utils/API";
import Header from "../components/Header";

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
		console.log(list.data.items);
		setState({ books: list.data.items, search: "" });
	}
	return (
		<div className="container mt-5">
			<Header />
			<div className="container mt-5 border border-5 border-dark">
				<h1>Search for books:</h1>
				<form className="row">
					<div className="col-8">
						<input
							value={state.search}
							onChange={handleInput}
							className="form-control form-control"
							type="text"
							placeholder="Title"
						/>
					</div>
					<div className="col-4">
						<button
							type="sumbit"
							onClick={findbooks}
							className="btn btn-primary mb-3 col-12"
						>
							Search
						</button>
					</div>
				</form>
			</div>
			<div className="container my-5 pt-3 border border-5 border-dark">
				<h1>Results</h1>
				{state.books.map((book) => {
					return (
						<div key={book.id} className="card mb-3">
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={book.volumeInfo.imageLinks.thumbnail}
										alt={book.volumeInfo.title}
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">{book.volumeInfo.title}</h5>
										<p>{`Written By: ${book.volumeInfo.authors}`}</p>
										<p className="card-text">{book.volumeInfo.subtitle}</p>
										<p>{book.volumeInfo.description}</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Search;

import Button from "../Button";

function SearchBar({ search, handleInput, findbooks }) {
	return (
		<div className="mt-5 border border-5 border-dark p-3">
			<h3>Search for books:</h3>
			<div className="input-group col-12">
				<div className="form-outline col-8 col-md-9 col-lg-10">
					<input
						type="search"
						className="form-control"
						value={search}
						onChange={handleInput}
						placeholder="Title of Book"
					/>
				</div>
				<Button
					handleBtn={findbooks}
					classStyle="btn btn-primary col-4 col-md-3 col-lg-2"
					text="Search"
				/>
			</div>
		</div>
	);
}

export default SearchBar;

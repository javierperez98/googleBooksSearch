import Button from "../Button";
let i = 0;

function BookRows({ array, handleSave }) {
	return array.map((book) => {
		return (
			<div key={book.id} className="card mb-3">
				<div className="row g-0">
					<div className="col-md-auto">
						<img
							className="m-3 img-fluid"
							src={book.volumeInfo.imageLinks.thumbnail}
							alt={book.volumeInfo.title}
						/>
						<div className="m-3">
							<a
								href={book.volumeInfo.infoLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button text="View" classStyle="btn btn-primary ml-1" />
							</a>
							<Button
								text="Save"
								classStyle="btn btn-primary mx-1"
								handleBtn={handleSave}
								id={i++}
							/>
						</div>
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
	});
}

export default BookRows;

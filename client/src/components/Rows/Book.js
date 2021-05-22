function BookRows({ array }) {
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

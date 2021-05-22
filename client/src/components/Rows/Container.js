function Container({ children }) {
	return (
		<div className="container my-5 pt-3 border border-5 border-dark">
			<h1>Results</h1>
			{children}
		</div>
	);
}

export default Container;

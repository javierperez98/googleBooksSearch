import Container from "./Container";
import Book from "./Book";

function Rows({ array }) {
	return (
		<Container>
			<Book array={array} />
		</Container>
	);
}

export default Rows;

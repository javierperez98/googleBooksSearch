import Container from "./Container";
import Book from "./Book";

function Rows({ array, handleSave }) {
	return (
		<Container>
			<Book array={array} handleSave={handleSave} />
		</Container>
	);
}

export default Rows;

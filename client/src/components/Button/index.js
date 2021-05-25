function Button({ handleBtn, classStyle, text, id }) {
	return (
		<button type="button" className={classStyle} onClick={handleBtn} value={id}>
			{text}
		</button>
	);
}

export default Button;

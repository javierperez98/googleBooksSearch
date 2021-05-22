function Button({ handleBtn, classStyle, text }) {
	return (
		<button type="button" className={classStyle} onClick={handleBtn}>
			{text}
		</button>
	);
}

export default Button;

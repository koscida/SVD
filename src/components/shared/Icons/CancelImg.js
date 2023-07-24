const CancelImg = ({ handleClick }) => {
	const styles = {
		textAlign: "center",
		cursor: "pointer",
		padding: "5px",
	};
	return (
		<img
			src={"images/Emojis131.png"}
			alt={"cancel"}
			className="smIcon"
			onClick={handleClick}
			style={styles}
		/>
	);
};
export default CancelImg;

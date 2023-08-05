const RenderImg = ({ label, disabled = false, styles = {} }) => {
	let newStyles = styles;
	newStyles.opacity = disabled ? "0.5" : "1";
	return (
		<img
			src={"images/" + label.trim().replaceAll(" ", "_") + ".png"}
			alt={label}
			style={newStyles}
		/>
	);
};
export default RenderImg;

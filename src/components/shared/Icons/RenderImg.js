const RenderImg = ({ label, disabled = false, styles = {} }) => {
	let newStyles = { ...styles };
	newStyles.maxWidth = newStyles.maxWidth ?? "4em";
	newStyles.width =
		newStyles.width ??
		(newStyles["height"] || newStyles["maxHeight"] ? "auto" : "100%");
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

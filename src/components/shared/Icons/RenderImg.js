const RenderImg = ({ label, disabled = false, styles = {} }) => {
	styles.opacity = disabled ? "0.5" : "1";
	return (
		<img
			src={"images/" + label.trim().replaceAll(" ", "_") + ".png"}
			alt={label}
			style={styles}
		/>
	);
};
export default RenderImg;

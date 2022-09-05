const RenderImg = ({ label }) => {
	return (
		<img
			src={"images/" + label.trim().replaceAll(" ", "_") + ".png"}
			alt={label}
		/>
	);
};
export default RenderImg;

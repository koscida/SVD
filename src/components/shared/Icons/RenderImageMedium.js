import RenderImg from "./RenderImg";

const RenderImageMedium = ({ label, disabled, styles = {} }) => {
	let newStyles = styles;
	newStyles.maxWidth = "2rem";
	newStyles.padding = "0 0.5em 0 0";
	return <RenderImg label={label} disabled={disabled} styles={newStyles} />;
};
export default RenderImageMedium;

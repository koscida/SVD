import RenderImg from "./RenderImg";

const RenderImageSmall = ({ label, disabled, styles = {} }) => {
	let newStyles = styles;
	newStyles.width = "20px";
	newStyles.padding = "0 0.5em 0 0";
	return <RenderImg label={label} disabled={disabled} styles={newStyles} />;
};
export default RenderImageSmall;

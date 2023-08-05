import RenderImg from "./RenderImg";

const RenderImageSmall = ({ label, disabled, styles = {} }) => {
	styles.width = "20px";
	styles.margin = "0 0.5em 0 0";
	return <RenderImg label={label} disabled={disabled} styles={styles} />;
};
export default RenderImageSmall;

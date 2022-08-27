import { NavLink, Outlet } from "react-router-dom";
import CropsGrowYield from "./grow-yield/CropsGrowYield";

function Crops() {
	let activeStyle = {
		border: "1px solid #ddd",
	};
	return (
		<div className="cropsApp">
			<NavLink
				to={"/crops-grow-yield"}
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
			>
				Grow Yield
			</NavLink>
			<Outlet />
		</div>
	);
}

export default Crops;

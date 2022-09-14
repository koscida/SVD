import { NavLink, Outlet } from "react-router-dom";

function Crops() {
	return (
		<div className="cropsApp">
			<Outlet />
		</div>
	);
}

export default Crops;

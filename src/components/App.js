import { Outlet } from "react-router-dom";
import "./App.scss";
import MenuAppBar from "./shared/navigation/MenuAppBar";

function App() {
	return (
		<>
			<MenuAppBar />
			<Outlet />
		</>
	);
}

export default App;

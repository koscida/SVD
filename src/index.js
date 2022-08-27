import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import Home from "./components/home/Home";
import Fish from "./components/fish/Fish";
import Crops from "./components/crops/Crops";
import CropsGrowYield from "./components/crops/grow-yield/CropsGrowYield";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className="container-fluid p-2">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="fish" element={<Fish />} />
						<Route path="/crops" element={<Crops />} />
						<Route path="/crops-grow-yield" element={<CropsGrowYield />} />
						<Route path="/crops-plots" element={<CropsGrowYield />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	</React.StrictMode>
);

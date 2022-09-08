import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import navigationLinks from "./components/shared/navigationLinks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className="container-fluid p-2">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						{navigationLinks.map((navigationLink) => (
							<Route
								key={navigationLink.label}
								path={navigationLink.to}
								element={navigationLink.element}
							/>
						))}
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	</React.StrictMode>
);

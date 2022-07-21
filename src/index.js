import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './components/App';
import Home from './components/home/Home'
import Fish from './components/fish/Fish'
import Crops from './components/crops/Crops'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<div className="container p-3">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="fish" element={<Fish />} />
						<Route path="crops" element={<Crops />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	</React.StrictMode>
);


import {NavLink, Outlet} from 'react-router-dom'
import './App.scss';


function App() {
	let activeStyle = {
		border: "1px solid #ddd",
	};
	return <>
		<div>
			<nav>
				<ul>
					<li>
						<NavLink 
							to="/"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
								}
							>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink 
							to="fish"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
								}
							>
							Fish
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
		<Outlet />
	</>;
}

export default App;

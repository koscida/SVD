import {NavLink, Outlet} from 'react-router-dom'
import './App.scss';


function App() {
	let activeStyle = {
		border: "1px solid #ddd",
	};
	const navigationLinks = [
		{
			"to": "/",
			"label": "Home",
		},
		{
			"to": "fish",
			"label": "Fish",
		},
		{
			"to": "crops",
			"label": "Crops",
		},
	]
	return <>
		<div>
			<nav>
				<ul className='m-0 d-flex list-unstyled'>
					{navigationLinks.map( navigationLink => 
						<li key={navigationLink.label} className='mx-1 p-1'>
							<NavLink 
								to={navigationLink.to}
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
									}
								>
								{navigationLink.label}
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</div>
		<Outlet />
	</>;
}

export default App;

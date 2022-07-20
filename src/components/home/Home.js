import {Link} from 'react-router-dom'


function Home() {
	let activeStyle = {
		border: "1px solid #ddd",
	};
	return <>
		<h1>SVD</h1>
		<div>
			<ul>
				<li>
					<article>
						<Link to="fish" >
							Fish
						</Link>
					</article>
				</li>
			</ul>
		</div>
	</>;
}

export default Home;

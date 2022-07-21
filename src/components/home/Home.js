import {Link} from 'react-router-dom'


function Home() {
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
				<li>
					<article>
						<Link to="crops" >
							Crops
						</Link>
					</article>
				</li>
			</ul>
		</div>
	</>;
}

export default Home;

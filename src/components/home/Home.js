import { Link } from "react-router-dom";
import navigationLinks from "../shared/navigationLinks";

function Home() {
	return (
		<>
			<h1>SVD</h1>
			<div>
				<ul>
					{}
					{navigationLinks.map((navigationLink) => (
						<li key={navigationLink.label}>
							<article>
								<Link to={navigationLink.to}>{navigationLink.label}</Link>
							</article>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Home;

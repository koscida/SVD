import * as React from "react";
import { Link } from "react-router-dom";
import navigationLinks from "../shared/navigation/navigationLinks";

function Home() {
	return (
		<>
			<h1>SVD</h1>
			just links for now
			<div>
				<ul>
					{Object.entries(navigationLinks).map(
						([sectionLabel, navigationLinks]) => (
							<li key={sectionLabel}>
								{sectionLabel}
								<ul>
									{navigationLinks.map(({ label, to }) => (
										<li key={label}>
											<article>
												<Link to={to}>{label}</Link>
											</article>
										</li>
									))}
								</ul>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	);
}

export default Home;

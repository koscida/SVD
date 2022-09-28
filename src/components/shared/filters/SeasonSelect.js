import { seasonsNames } from "../data";

function SeasonSelect({ selectedSeason, handleChangeSeason }) {
	return (
		<div className="dropdown me-2">
			<button
				className="btn btn-secondary dropdown-toggle"
				type="button"
				id="cropSeason"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{selectedSeason}
			</button>
			<ul className="dropdown-menu" aria-labelledby="cropSeason">
				{seasonsNames.map((seasonName) => (
					<li key={seasonName}>
						<input
							type="button"
							className="dropdown-item"
							value={seasonName}
							onClick={handleChangeSeason}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SeasonSelect;

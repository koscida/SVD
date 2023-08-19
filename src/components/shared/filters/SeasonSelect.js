import { seasonsNames } from "../data/dataSeasons";

import MultipleSelectChip from "../inputs/MultipleSelectChip";
import { Stack, Chip } from "@mui/material";

function SeasonSelect({
	selectedSeason,
	handleChangeSeason,
	multiSelect = true,
}) {
	return multiSelect ? (
		<MultipleSelectChip
			label={"Season"}
			options={seasonsNames}
			handleChange={handleChangeSeason}
			selectedOption={selectedSeason}
		/>
	) : (
		<Stack direction="row" spacing={1}>
			{seasonsNames.map((seasonName) => (
				<Chip
					label={seasonName}
					key={seasonName}
					onClick={() => handleChangeSeason(seasonName)}
					variant={seasonName === selectedSeason ? "outlined" : "filled"}
				/>
			))}
		</Stack>
	);
	// 	return (
	// 		<div className="dropdown me-2">
	// 			<button
	// 				className="btn btn-secondary dropdown-toggle"
	// 				type="button"
	// 				id="cropSeason"
	// 				data-bs-toggle="dropdown"
	// 				aria-expanded="false"
	// 			>
	// 				{selectedSeason}
	// 			</button>
	// 			<ul className="dropdown-menu" aria-labelledby="cropSeason">
	// 				{seasonsNames.map((seasonName) => (
	// 					<li key={seasonName}>
	// 						<input
	// 							type="button"
	// 							className="dropdown-item"
	// 							value={seasonName}
	// 							onClick={() => handleChangeSeason(seasonName)}
	// 						/>
	// 					</li>
	// 				))}
	// 			</ul>
	// 		</div>
	// 	);
}

export default SeasonSelect;

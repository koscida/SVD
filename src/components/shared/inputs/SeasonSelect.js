import { seasonsNames } from "../data/dataSeasons";

import MultipleSelectChip from "./MultipleSelectChip";
import { Stack, Chip } from "@mui/material";
import SingleSelectChip from "./SingleSelectChip";

// //////////////////////////////////////////
//
// SeasonSelect
//
// Chip-based seasonal select

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
		<SingleSelectChip
			selectedOption={selectedSeason}
			handleChange={handleChangeSeason}
			options={seasonsNames}
		/>
	);
}

export default SeasonSelect;

import { seasonsNames } from "../data/dataSeasons";

import MultipleSelectChips from "./MultipleSelectChips";
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
		<MultipleSelectChips
			label={"Season"}
			options={seasonsNames}
			handleChange={handleChangeSeason}
			selectedOptions={selectedSeason}
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

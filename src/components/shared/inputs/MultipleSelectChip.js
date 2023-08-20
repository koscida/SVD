import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";
import styled from "styled-components";

// /////////////////////////////////////////////////
//
// 		MultipleSelectChip
//
//	Material multi-select option dropdown,
//		holds each selected option in a chip
//
// Inputs:
// 	label			string				Label associated with the input
// 	options			[string,string]		array of options
// 	handleChange	func				callback function to set new options
//											this component will clean options if there is an All option or if there is 0 selected
// 	selectedOption	[string]			array of selected options

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(option, selectedOption, theme) {
	return selectedOption
		? {
				fontWeight:
					selectedOption.indexOf(option) === -1
						? theme.typography.fontWeightRegular
						: theme.typography.fontWeightMedium,
		  }
		: {};
}

const StyledFormControl = styled.div`
	.MuiSelect-select {
		padding: 0.75em 0.5em 0.5em;
	}
`;

export default function MultipleSelectChip({
	label,
	options,
	handleChange,
	selectedOption,
}) {
	const theme = useTheme();

	const includesAll = options.join("").includes("All");

	const handleClick = (e) => {
		const value = e.target.value;
		const valueStr = value.join("");

		// handle click of an option (select options accordingly)
		//	if includesAll AND 0 elements selected OR selecting All (including not, did not include before), select All
		// 	else, if 0 elements selected, select first option
		// 		else, if includesAll return selected minus All, else return what was selected

		const newOptions =
			includesAll &&
			(value.length === 0 ||
				(valueStr.includes("All") && !selectedOption.includes("All")))
				? ["All"]
				: value.length === 0
				? options[0]
				: includesAll
				? value.filter((v) => v !== "All")
				: value;
		console.log("--MultipleSelectChip:handleClick-- newOptions: ", newOptions);

		handleChange(newOptions);
	};

	return (
		<StyledFormControl>
			<FormControl sx={{ m: 1, width: 300 }}>
				<InputLabel id={`MultipleSelectChipLabel-${options[0]}`}>
					{label}
				</InputLabel>
				<Select
					labelId={`MultipleSelectChipLabel-${options[0]}`}
					id={`MultipleSelectChip-${options[0]}`}
					multiple
					value={selectedOption}
					onChange={handleClick}
					input={
						<OutlinedInput
							id={`MultipleSelectChip-${options[0]}`}
							label={label}
						/>
					}
					MenuProps={MenuProps}
					renderValue={(selected) => (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							{selected.map((value) => (
								<Chip key={value} label={value} />
							))}
						</Box>
					)}
				>
					{options.map((option) => (
						<MenuItem key={option} value={option}>
							<Checkbox checked={selectedOption.indexOf(option) > -1} />
							<ListItemText primary={option} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</StyledFormControl>
	);
}

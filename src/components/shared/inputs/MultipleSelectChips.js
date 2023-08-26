import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
	Box,
	OutlinedInput,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	Stack,
	Chip,
	ListItemText,
	Checkbox,
	Divider,
	FormLabel,
} from "@mui/material";
import styled from "styled-components";

// /////////////////////////////////////////////////
//
// 		MultipleSelectChips
//
//	Material multi-select chip options
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

export default function MultipleSelectChips({
	label,
	options,
	handleChange,
	selectedOptions,
}) {
	const theme = useTheme();

	const includesAll = options.includes("All");

	const handleClick = (optionClicked) => {
		//	if includesAll

		const newOptions = includesAll
			? optionClicked === "All" ||
			  (selectedOptions.includes(optionClicked) &&
					selectedOptions.length === 2)
				? ["All"]
				: selectedOptions.includes(optionClicked)
				? selectedOptions.filter((x) => x !== optionClicked && x !== "All")
				: [...selectedOptions, optionClicked].filter((x) => x !== "All")
			: selectedOptions.includes(optionClicked)
			? selectedOptions.length === 1
				? [options[0]]
				: selectedOptions.filter((x) => x !== optionClicked)
			: [...selectedOptions, optionClicked];

		console.log("--MultipleSelectChip:handleClick-- newOptions: ", newOptions);

		handleChange(newOptions);
	};

	return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
			<Stack direction="row" spacing={0} sx={{ flexWrap: "wrap" }}>
				{options.map((optionName) => (
					<Chip
						label={optionName}
						key={optionName}
						onClick={() => handleClick(optionName)}
						variant={
							selectedOptions.includes(optionName) ? "outlined" : "filled"
						}
						sx={{ margin: "0 5px 3px 0" }}
					/>
				))}
			</Stack>
		</FormControl>
	);
}

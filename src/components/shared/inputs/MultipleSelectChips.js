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
	Button,
} from "@mui/material";
import styled from "styled-components";

// /////////////////////////////////////////////////
//
// 		MultipleSelectChips
// Creates a list of chips that can be multi-selected
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
	if (!options) return <></>;
	const includesAll = options.includes("All");

	const smallBtnStyles = {
		fontSize: "0.6rem",
		padding: "1px 5px",
		lineHeight: "1rem",
		minWidth: 0,
	};

	//
	// handlers

	const handleClick = (optionClicked) => {
		//	if includesAll

		const newOptionsSelected = includesAll
			? optionClicked === "All" ||
			  (selectedOptions.includes(optionClicked) &&
					selectedOptions.length === 2)
				? ["All"]
				: selectedOptions.includes(optionClicked)
				? selectedOptions.filter(
						(x) => x !== optionClicked && x !== "All"
				  )
				: [...selectedOptions, optionClicked].filter((x) => x !== "All")
			: selectedOptions.includes(optionClicked)
			? selectedOptions.length === 1
				? [options[0]]
				: selectedOptions.filter((x) => x !== optionClicked)
			: [...selectedOptions, optionClicked];

		// console.log(
		// 	"--MultipleSelectChip:handleClick-- newOptionsSelected: ",
		// 	newOptionsSelected
		// );

		handleChange(newOptionsSelected);
	};

	const handleClickAll = () => {
		handleChange(includesAll ? ["All"] : options);
	};

	const handleClickNone = () => {
		handleChange([]);
	};

	//
	// render

	return (
		<Box>
			<FormControl style={{ width: "100%" }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: "3px",
					}}
				>
					<FormLabel>{label}</FormLabel>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "end",
							gap: "5px",
						}}
					>
						<Button
							variant="outlined"
							size="small"
							sx={smallBtnStyles}
							onClick={() => handleClickAll()}
						>
							Select All
						</Button>
						<Button
							variant="outlined"
							size="small"
							sx={smallBtnStyles}
							onClick={() => handleClickNone()}
						>
							Clear
						</Button>
					</Box>
				</Box>

				<Stack direction="row" spacing={0} sx={{ flexWrap: "wrap" }}>
					{options.map((optionName) => (
						<Chip
							label={optionName}
							key={optionName}
							onClick={() => handleClick(optionName)}
							variant={
								selectedOptions.includes(optionName)
									? "filled"
									: "outlined"
							}
							sx={{ margin: "0 5px 3px 0" }}
						/>
					))}
				</Stack>
			</FormControl>
		</Box>
	);
}

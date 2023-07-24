import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

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

export default function MultipleSelectChip({
	label,
	options,
	handleChange,
	selectedOption,
}) {
	const theme = useTheme();

	return (
		<div>
			<FormControl sx={{ m: 1, width: 300 }}>
				<InputLabel id={`MultipleSelectChipLabel-${options[0]}`}>
					{label}
				</InputLabel>
				<Select
					labelId={`MultipleSelectChipLabel-${options[0]}`}
					id={`MultipleSelectChip-${options[0]}`}
					multiple
					value={selectedOption}
					onChange={handleChange}
					input={
						<OutlinedInput id="select-multiple-chip" label="Chip" />
					}
					renderValue={(selected) => (
						<Box
							sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
						>
							{selected.map((value) => (
								<Chip key={value} label={value} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{options.map((option) => (
						<MenuItem
							key={option}
							value={option}
							style={getStyles(option, selectedOption, theme)}
						>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

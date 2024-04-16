import { Stack, Chip, FormLabel, FormControl, Box } from "@mui/material";

// //////////////////////////////////////////
//
// SingleSelectChip
//
// Chip-based single-select

function SingleSelectChip({
	label = "",
	selectedOption,
	handleChange,
	options,
}) {
	return (
		<Box>
			<FormControl>
				<FormLabel>{label}</FormLabel>
				<Stack direction="row" spacing={0} sx={{ flexWrap: "wrap" }}>
					{options.map((optionName) => (
						<Chip
							label={optionName}
							key={optionName}
							onClick={() => handleChange(optionName)}
							variant={
								optionName === selectedOption
									? "outlined"
									: "filled"
							}
							sx={{ margin: "0 5px 3px 0" }}
						/>
					))}
				</Stack>
			</FormControl>
		</Box>
	);
}

export default SingleSelectChip;

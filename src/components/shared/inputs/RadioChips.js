import * as React from "react";
import {
	FormGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
	Switch,
	RadioGroup,
	Radio,
	Box,
	Stack,
	Chip,
} from "@mui/material";

import styled from "styled-components";

// //////////////////////////////////////////////////////////////////
// RadioOption
//
// Inputs:
// 	label,
// 	selected,
// 	handleChange,
// 	options = { value: <primit>, label: <string>}
// 	required = false,
// 	disabled = false,

const StyledRadioGroup = styled.div`
	.MuiFormControlLabel-label {
		font-size: 0.8125rem;
	}
`;

function RadioChips({ label, selectedOption, handleChange, options }) {
	if (!options) return <></>;

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
				</Box>

				<Stack direction="row" spacing={0} sx={{ flexWrap: "wrap" }}>
					{options.map((optionName) => (
						<Chip
							label={optionName}
							key={optionName}
							onClick={() => handleChange(optionName)}
							variant={
								selectedOption === optionName
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

export default RadioChips;

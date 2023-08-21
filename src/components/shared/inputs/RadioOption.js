import * as React from "react";
import {
	FormGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
	Switch,
	RadioGroup,
	Radio,
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

function RadioOption({ label, selected, handleChange, options }) {
	// handlers
	const handleOnChange = (e) => {
		handleChange(e.target.value);
	};

	// render
	return (
		<StyledRadioGroup>
			<FormControl>
				<FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					defaultValue={options[0].value}
					value={selected}
					onChange={handleOnChange}
				>
					{options.map((option, i) => (
						<FormControlLabel
							key={i}
							value={option.value}
							control={<Radio />}
							label={option.label}
						/>
					))}
				</RadioGroup>
			</FormControl>
		</StyledRadioGroup>
	);
}

export default RadioOption;

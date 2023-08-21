import * as React from "react";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import styled from "styled-components";

const StyledSwitchGroup = styled.div`
	.MuiFormControlLabel-label {
		font-size: 0.8125rem;
	}
`;
function SingleSwitch({
	label,
	checked,
	handleChange,
	required = false,
	disabled = false,
}) {
	// render
	return (
		<StyledSwitchGroup>
			<FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={checked}
							onChange={handleChange}
							inputProps={{ "aria-label": "controlled" }}
						/>
					}
					label={label}
					required={required}
					disabled={disabled}
				/>
			</FormGroup>
		</StyledSwitchGroup>
	);
}

export default SingleSwitch;

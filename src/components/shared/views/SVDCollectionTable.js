import { Box, Button, Container, Grid, Slider, TextField } from "@mui/material";
import React from "react";
import RenderImageSmall from "../Icons/RenderImageSmall";

const marks = [
	{
		value: 4,
		label: "4",
	},
	{
		value: 6,
		label: "6",
	},
	{
		value: 10,
		label: "10",
	},
];

const SVDCollectionTable = ({
	data,
	userData,
	handleItemClick,
	collectionTerm,
}) => {
	const userDataObj = userData.reduce(
		(obj, d) => ({
			...obj,
			[d.name]: d,
		}),
		{}
	);
	const [tableWidth, setTableWidth] = React.useState(4);

	// handlers

	const handleClick = (item) => {
		const newItem = { ...item, [collectionTerm]: item[collectionTerm] + 1 };
		console.log("--SVDCollectionTable--", " newItem: ", newItem);
		handleItemClick(newItem);
	};

	const handleChange = (e) => {
		const newItem = {
			...userDataObj[e.target.name],
			[collectionTerm]: e.target.value,
		};
		handleItemClick(newItem);
	};

	const handleSliderChange = (event, newValue) => {
		setTableWidth(newValue);
	};

	// render

	return (
		<Box>
			{/* collection display */}
			<Container
				sx={{
					maxWidth: "600px",
					display: "grid",
					gridTemplateColumns: `repeat(${tableWidth}, calc(100% / ${tableWidth}))`,
				}}
			>
				{data.map((item, i) => {
					const isDisabled =
						userDataObj[item.name][collectionTerm] == 0;
					return (
						<Box
							key={i}
							onClick={() => {
								handleClick(userDataObj[item.name]);
							}}
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								color: isDisabled ? "#aaa" : "inherit",
							}}
						>
							<RenderImageSmall
								label={item.name}
								disabled={isDisabled}
							/>
							{item.name}
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Button
									size="small"
									onClick={() =>
										handleItemClick({
											...userDataObj[item.name],
											[collectionTerm]:
												userDataObj[item.name][
													collectionTerm
												] - 1,
										})
									}
									sx={{ minWidth: "20px" }}
								>
									-
								</Button>
								<Box sx={{ display: "block" }}>
									{userDataObj[item.name][collectionTerm]}
								</Box>
								<Button
									size="small"
									onClick={() =>
										handleItemClick({
											...userDataObj[item.name],
											[collectionTerm]:
												userDataObj[item.name][
													collectionTerm
												] + 1,
										})
									}
									sx={{ minWidth: "20px" }}
								>
									+
								</Button>
							</Box>
						</Box>
					);
				})}
			</Container>

			{/* slider - changes the number of items in a row */}
			<Box>
				<Box sx={{ width: 300 }}>
					<Slider
						value={tableWidth}
						onChange={handleSliderChange}
						aria-label="Custom marks"
						defaultValue={4}
						valueLabelDisplay="auto"
						marks={marks}
						step={1}
						min={4}
						max={12}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default SVDCollectionTable;

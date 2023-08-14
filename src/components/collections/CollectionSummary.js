import React from "react";
import styled from "styled-components";

import RenderImg from "../shared/Icons/RenderImg";
import SVDBasicTable from "../shared/SVDBasicTable";

import { locations } from "../shared/data/dataLocations";
import { Box, TextField } from "@mui/material";

const StyledCollectionSummary = styled.div`
	> div {
		> div {
			padding: 3px;
			box-sizing: border-box;
			border: 1px solid transparent;
		}
		.selected {
			border: 1px solid #ddd;
		}

		img {
			width: 100%;
		}
	}
`;

function CollectionSummary({
	collection,
	collectionName,
	collectionItemChange,
}) {
	// console.log("--CollectionSummary-- collection: ", collection);

	const CollectionTable = () => {
		let columns;
		let rows;

		// get columns and rows
		if (collectionName === "Shipped") {
			columns = [
				{ field: "name", label: "Item", filterType: "sort" },
				{
					field: "type",
					label: "Type",
					filterType: "filter",
					filterOptions: [
						"Animal Product",
						"Artisan Product",
						"Crafting",
						"Crop",
						"Fish",
						"Forage",
						"Monster",
						"Resource",
					],
				},
				{
					field: "sources",
					label: "Source",
					filterType: "filter",
					filterOptions: ["Shop", "Animal"],
				},
				{
					field: "seasons",
					label: "Seasons",
					filterType: "filter",
					filterOptions: ["Spring", "Summer", "Fall", "Winter"],
				},
				{ field: "collected", label: "Collected" },
			];
			rows = collection
				.filter((item) => item.collected === 0)
				.map((item) => {
					// console.log("-CollectionTable:rows- item: ", item);
					return {
						name: {
							data: item.name,
							cell: (
								<div className="flexRow">
									<RenderImg
										label={item.name}
										styles={{ width: "2em", marginRight: "0.5em" }}
									/>
									{item.name}
								</div>
							),
						},
						type: item.type,
						sources: item.sources
							? item.sources
									.reduce((sources, source) => {
										sources.push(source.name);
										return sources;
									}, [])
									.join(", ")
							: "",
						seasons: item.seasons
							? {
									cell:
										item.seasons.length === 4
											? "All Seasons"
											: item.seasons.join(", "),
									data: item.seasons,
							  }
							: "",
						collected: {
							cell: (
								<TextField
									id="shippedItem"
									label={`Collected`}
									variant="outlined"
									value={item.collected}
									onChange={collectionItemChange(item.name)}
								/>
							),
						},
					};
				});
		} else if (collectionName === "Fish") {
			columns = [
				{ field: "name", label: "Fish", filterType: "sort" },
				{
					field: "sources",
					label: "Source",
					filterType: "filter",
					filterOptions: ["Fishing Pole", "Crab Pot", "Foraging"],
				},
				{
					field: "weather",
					label: "Weather",
					filterType: "filter",
					filterOptions: ["Sun", "Rain", "Wind", "Snow"],
				},
				{
					field: "seasons",
					label: "Seasons",
					filterType: "filter",
					filterOptions: ["Spring", "Summer", "Fall", "Winter"],
				},
				{ field: "time", label: "Time" },
				{
					field: "location",
					label: "Locations",
					filterType: "filter",
					filterOptions: ["Ocean", "River", "Pond", "Special", "Ginger Island"],
				},
				{ field: "collected", label: "Collected" },
			];
			rows = collection
				.filter((item) => item.collected === 0)
				.map((item) => ({
					name: {
						data: item.name,
						cell: (
							<div className="flexRow">
								<RenderImg
									label={item.name}
									styles={{ width: "2em", marginRight: "0.5em" }}
								/>
								{item.name}
							</div>
						),
					},
					sources: item.sources
						.reduce((sources, source) => {
							sources.push(source.name);
							return sources;
						}, [])
						.join(", "),
					weather: {
						cell:
							item.weather.length === 4
								? "All weather"
								: item.weather.join(", "),
						data: item.weather,
					},
					seasons: {
						cell:
							item.seasons.length === 4
								? "All Seasons"
								: item.seasons.join(", "),
						data: item.seasons,
					},
					time: item.times.reduce((times, time, i) => {
						// list
						if (i !== 0) times += ", ";
						// if all day
						if (time.start === 6 && time.end === 26) times += "All day";
						else {
							// start time
							if (time.start < 12) times += time.start + "am";
							else if (time.start === 12) times += time.start + "pm";
							else if (time.start < 24) times += time.start - 12 + "pm";
							else if (time.start === 24) times += time.start - 12 + "am";
							else times += time.start - 24 + "am";
							// spacer
							times += " - ";
							// end time
							if (time.end < 12) times += time.end + "am";
							else if (time.end === 12) times += time.end + "pm";
							else if (time.end < 24) times += time.end - 12 + "pm";
							else if (time.end === 24) times += time.end - 12 + "am";
							else times += time.end - 24 + "am";
						}
						// return
						return times;
					}, ""),
					location: {
						cell: item.locations.join(", "),
						data: item.locations.map((location) => locations[location].group),
					},
					collected: {
						cell: (
							<TextField
								id="shippedItem"
								label={`Collected`}
								variant="outlined"
								value={item.collected}
								onChange={collectionItemChange(item.name)}
							/>
						),
					},
				}));
		}

		// display table
		return columns && rows ? (
			<SVDBasicTable columns={columns} rows={rows} />
		) : (
			collection
				.filter((item) => item.collected === 0)
				.map((item) => (
					<Box key={item.name}>
						<RenderImg label={item.name} />
						{item.name}
					</Box>
				))
		);
	};

	return (
		<StyledCollectionSummary>
			<div>
				<h4>Need to Collect:</h4>
				<CollectionTable />
			</div>
		</StyledCollectionSummary>
	);
}

export default CollectionSummary;

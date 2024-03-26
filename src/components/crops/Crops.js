import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useLocalStorage from "../shared/useLocalStorage";

import Table from "../shared/react-table/Table";
import SeasonSelect from "../shared/inputs/SeasonSelect";

import {
	crops,
	cropsObj,
	cropTypes,
	cropSubTypes,
	cropSeasons,
} from "../../data/crops";
import MultipleSelectChip from "../shared/inputs/MultipleSelectChip";
import MultipleSelectChips from "../shared/inputs/MultipleSelectChips";
import RenderImageMedium from "../shared/Icons/RenderImageMedium";
import RenderImageSmall from "../shared/Icons/RenderImageSmall";
import SingleSwitch from "../shared/inputs/SingleSwitch";
import RadioOption from "../shared/inputs/RadioOption";
import RenderImg from "../shared/Icons/RenderImg";

// ////
// Process data

// calc column data
const calcInitColumnData = (crops) => {
	const initColumns = [
		{
			Header: "Crop Info",
			columns: [
				{
					Header: "Crop",
					accessor: "nameDisplay",
				},
				{
					Header: "Type",
					accessor: "sub-type",
				},
				{
					Header: "Trellis",
					accessor: "trellis",
					category: "detailedCropInfo",
				},
				{
					Header: "Planter",
					accessor: "planter",
					category: "detailedCropInfo",
				},
				{
					Header: "Giant",
					accessor: "giant",
					category: "detailedCropInfo",
				},
				{
					Header: "Regrow",
					accessor: "regrow",
					category: "detailedCropInfo",
				},
				{
					Header: "Season(s)",
					accessor: "seasons",
				},
				{
					Header: "Seeds",
					accessor: "seeds",
				},
				{
					Header: "Grow Time (Regrow)",
					accessor: "growTimeDisplay",
				},
			],
		},
		{
			Header: "Grow",
			columns: [
				{
					Header: "Harvests",
					accessor: "harvestDisplaySeason",
					harvestType: 1,
				},
				{
					Header: "Harvests",
					accessor: "harvestDisplayYear",
					harvestType: 2,
				},

				{
					Header: "Seed Cost",
					accessor: "seedCost",
					seedType: 1,
				},

				{
					Header: "Yield",
					accessor: "yieldDisplaySingle",
					harvestType: 0,
				},
				{
					Header: "Total Yield",
					accessor: "yieldDisplaySeason",
					harvestType: 1,
				},
				{
					Header: "Total Yield",
					accessor: "yieldDisplayYear",
					harvestType: 2,
				},
			],
		},
		{
			Header: "Profit",
			columns: [
				{
					Header: "Crop",
					accessor: "sellSingle",
					harvestType: 0,
					seedType: 0,
				},
				{
					Header: "Crop",
					accessor: "sellSeason",
					harvestType: 1,
					seedType: 0,
				},
				{
					Header: "Crop",
					accessor: "sellYear",
					harvestType: 2,
					seedType: 0,
				},
				{
					Header: "Profit",
					accessor: "profitSeedSingle",
					harvestType: 0,
					seedType: 1,
				},
				{
					Header: "Profit",
					accessor: "profitSeedSeason",
					harvestType: 1,
					seedType: 1,
				},
				{
					Header: "Profit",
					accessor: "profitSeedYear",
					harvestType: 2,
					seedType: 1,
				},
			],
		},
	];

	return initColumns;
};

const StyledHarvestCalendar = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);

	div {
		border: 1px solid black;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		text-align: center;
		padding: 2px;
	}
`;
const createHarvestDisplay = (newCrop, days, seasonDays) => {
	return (
		<StyledHarvestCalendar
			style={{
				gridTemplateRows: (
					"calc(0.55rem + 4px) repeat(" +
					(seasonDays / 7).toString() +
					", 1fr)"
				).toString(),
			}}
		>
			{["M", "T", "W", "Th", "F", "Sa", "Su"].map((day) => (
				<div
					style={{
						background: "#ddd",
						fontSize: "0.5rem",
						lineHeight: "0.55rem",
					}}
					key={day}
				>
					{day}
				</div>
			))}
			{[...Array(seasonDays + 1).keys()].slice(1).map((day) => (
				<div key={day}>
					<p style={{ fontSize: "0.5rem", lineHeight: "0.55rem" }}>
						{((day - 1) % 28) + 1}
					</p>
					{day === 1 ||
					(!newCrop.regrow &&
						days.includes(day) &&
						day !== days[days.length - 1]) ? (
						<RenderImageSmall
							label={newCrop.seeds}
							styles={{ height: "0.5rem", padding: 0 }}
						/>
					) : (
						<></>
					)}

					{days.includes(day) ? (
						<RenderImageSmall
							label={newCrop.name}
							styles={{ height: "0.5rem", padding: 0 }}
						/>
					) : (
						<></>
					)}
				</div>
			))}
		</StyledHarvestCalendar>
	);
};

// calc table data
const calcInitTableData = (crops) => {
	const initTableData = crops.map((crop) => {
		// create simple copy
		const newCrop = { ...crop };

		// if no grow info, just return
		if (!crop["Farming"]) return newCrop;

		// format data

		// ////
		// Info

		// name
		newCrop.nameDisplay = (
			<>
				<RenderImageSmall label={crop.name} />
				{crop.name}
			</>
		);
		// trellis and planter and giant
		["trellis", "planter", "giant"].forEach(
			(label) =>
				(newCrop[label] =
					(typeof crop[label] === "string" &&
						crop[label] === "true") ||
					(typeof crop[label] === "boolean" && crop[label]) ? (
						<RenderImageSmall
							label={
								label === "giant"
									? `Giant_${crop.name}`
									: label === "trellis"
									? `${crop.name} Stage 1`
									: label
							}
						/>
					) : (
						<></>
					))
		);
		// regrow
		newCrop.regrow = crop.Farming.time.regrow ? "Yes" : "No";

		// ////
		// Grow

		//
		// seeds
		newCrop.seeds = crop.Farming.seeds[0].name;
		// seasons
		newCrop.seasons = crop.seasons ? crop.seasons.join(", ") : [];

		//
		// time (store for later)
		newCrop.growTime = crop.Farming.time.time;
		newCrop.regrow = crop.Farming.time.regrow;
		newCrop.regrowTime = crop.Farming.time.regrowTime;

		//
		// harvests (store for later)
		const calcHarvestDays = (growTime, regrow, regrowTime, seasonDays) => {
			let days = [];
			let d = growTime + 1;
			while (d <= seasonDays) {
				//days.push(((d - 1) % 28) + 1);
				days.push(d);
				d = regrow ? d + regrowTime : d + growTime;
			}
			return days;
		};
		newCrop.harvestDaysSeason = calcHarvestDays(
			newCrop.growTime,
			newCrop.regrow,
			newCrop.regrowTime,
			28
		);
		newCrop.harvestsSeason = newCrop.harvestDaysSeason.length;
		newCrop.harvestDaysYear = calcHarvestDays(
			newCrop.growTime,
			newCrop.regrow,
			newCrop.regrowTime,
			crop.seasons.length * 28
		);
		newCrop.harvestsYear = newCrop.harvestDaysYear.length;

		//
		// harvests display
		newCrop.harvestDisplaySeason = createHarvestDisplay(
			newCrop,
			newCrop.harvestDaysSeason,
			28
		);
		newCrop.harvestDisplayYear = createHarvestDisplay(
			newCrop,
			newCrop.harvestDaysYear,
			28 * crop.seasons.length
		);

		//
		// yields (store for later)
		newCrop.yieldSingle =
			crop.Farming.amount.amount *
			(crop.Farming.amount.multiplierChance
				? 1 +
				  crop.Farming.amount.multiplierChance *
						crop.Farming.amount.multiplier
				: 1);
		newCrop.yieldSeason = newCrop.yieldSingle * newCrop.harvestsSeason;
		newCrop.yieldYear = newCrop.yieldSingle * newCrop.harvestsYear;

		//
		// yield display
		newCrop.yieldDisplaySingle = newCrop.yieldSingle;
		newCrop.yieldDisplaySeason = (
			<>
				{newCrop.yieldSeason}
				<br />
				Yield: {newCrop.yieldSingle}
				<br />
				Harvests: {newCrop.harvestsSeason}
			</>
		);
		newCrop.yieldDisplayYear = (
			<>
				{newCrop.yieldYear}
				<br />
				Yield: {newCrop.yieldSingle}
				<br />
				Harvests: {newCrop.harvestsYear}
			</>
		);

		//
		// grow time (save)
		newCrop.growTimeSingle = newCrop.growTime;
		newCrop.growTimeSeason = newCrop.regrow
			? newCrop.growTime +
			  1 +
			  newCrop.regrow * (newCrop.harvestsSeason - 1)
			: newCrop.growTime * newCrop.harvestsSeason;
		newCrop.growTimeYear = newCrop.regrow
			? newCrop.growTime + 1 + newCrop.regrow * (newCrop.harvestsYear - 1)
			: newCrop.growTime * newCrop.harvestsYear;

		//
		// grow time display
		newCrop.growTimeDisplay =
			newCrop.growTime +
			(newCrop.regrow ? ` (${newCrop.regrowTime})` : "");
		newCrop.growTimeDisplaySingle =
			newCrop.growTimeSingle +
			(newCrop.regrow ? ` (${newCrop.regrowTime})` : "");
		newCrop.growTimeDisplaySeason =
			newCrop.growTimeSeason +
			" (" +
			(newCrop.regrow
				? `${newCrop.growTime} + ( ${newCrop.regrowTime} x ${
						newCrop.harvestsSeason - 1
				  })`
				: `${newCrop.growTime} x ${newCrop.harvestsSeason}`) +
			")";
		newCrop.growTimeDisplayYear =
			newCrop.growTimeYear +
			" (" +
			(newCrop.regrow
				? `${newCrop.growTime} + [${newCrop.regrowTime} x ${
						newCrop.harvestsYear - 1
				  }]`
				: `${newCrop.growTime} x ${newCrop.harvestsYear}`) +
			")";

		//
		// ////
		// Profit

		//
		// sell
		newCrop.sellSingle =
			crop.sell.type === "Quality"
				? crop.sell.Regular
				: crop.sell.type === "Flat"
				? crop.sell.price
				: 0;
		newCrop.sellSeason =
			(newCrop.sellSingle * newCrop.yieldSeason).toFixed(0) +
			" (" +
			newCrop.sellSingle +
			" x " +
			newCrop.yieldSeason +
			")";
		newCrop.sellYear =
			(newCrop.sellSingle * newCrop.yieldYear).toFixed(0) +
			" (" +
			newCrop.sellSingle +
			" x " +
			newCrop.yieldYear +
			")";

		//
		// seed cost
		if (crop.recipeSources && crop.recipeSources.Shops) {
			if (typeof crop.recipeSources.Shops[0].price === "object") {
				// seed cost item
				newCrop.seedCost = crop.recipeSources.Shops[0].price.amount;
				newCrop.seedCostObject =
					crop.recipeSources.Shops[0].price.artifact;
			} else {
				// seed cost gold
				newCrop.seedCost = crop.recipeSources.Shops[0].price;
				newCrop.seedCostObject = "Gold";
			}
		} else {
			// no known seed cost
			newCrop.seedCostSingle = 0;
			newCrop.seedCostObject = null;
		}
		//
		newCrop.seedCostSingle = (
			<>
				{newCrop.seedCost} {newCrop.seedCostObject}
			</>
		);
		newCrop.seedCostSeason = (
			<>
				{newCrop.seedCost *
					(newCrop.regrow ? 1 : newCrop.harvestsSeason)}{" "}
				{newCrop.seedCostObject}
			</>
		);
		newCrop.seedCostYear = (
			<>
				{newCrop.seedCost * (newCrop.regrow ? 1 : newCrop.yieldYear)}{" "}
				{newCrop.seedCostObject}
			</>
		);

		//
		// profit
		newCrop.profitSeedSingle = (
			newCrop.sellSingle -
			(newCrop.seedCostObject === "Gold" ? newCrop.seedCost : 0)
		).toFixed(0);
		newCrop.profitSeedSeason = (
			newCrop.sellSeason -
			(newCrop.seedCostObject === "Gold"
				? newCrop.seedCost * newCrop.yieldSeason
				: 0)
		).toFixed(0);
		newCrop.profitSeedYear = (
			newCrop.sellYear -
			(newCrop.seedCostObject === "Gold"
				? newCrop.seedCost * newCrop.yieldYear
				: 0)
		).toFixed(0);

		//
		// ////
		// return
		return newCrop;
	});
	return initTableData;
};

// /////
// filter options

const typeOptions = [...cropSubTypes];
const categoryOptions = [...cropTypes];

// init filters
const seedTypes = [
	{ value: 0, label: "Ignore" },
	{ value: 1, label: "Shop" },
	{ value: 2, label: "Seed maker" },
];
const harvestTypes = [
	{ value: 0, label: "Single" },
	{ value: 1, label: "Season" },
	{ value: 2, label: "Year" },
];

// ////
// Styled components
const StyledCropsHome = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 2fr 10fr;
	padding: 1rem 0;
	> div {
		height: calc(100vh - 65px - 2rem);
		overflow-y: scroll;
		border: 1px solid #eee;
		padding: 0.5rem;
		box-sizing: border-box;
	}
`;

// ////
// Crops()

function Crops() {
	// table data
	const [tableData, setTableData] = useState(calcInitTableData(crops));
	const [columnData, setColumnData] = useState(calcInitColumnData(crops));

	// filters
	//	save all the filters to local storage
	const [selectedSeasons, setSelectedSeasons] = useLocalStorage(
		"svd-crops-filter-selectedSeasons",
		cropSeasons
	);
	const [selectedCategories, setSelectedCategories] = useLocalStorage(
		"svd-crops-filter-selectedCategories",
		categoryOptions
	);
	const [selectedTypes, setSelectedTypes] = useLocalStorage(
		"svd-crops-filter-selectedTypes",
		typeOptions
	);

	// profit filters
	const [selectedHarvestType, setSelectedHarvestType] = useLocalStorage(
		"svd-crops-filter-selectedHarvestType",
		0
	);
	const [selectedSeedType, setSelectedSeedType] = useLocalStorage(
		"svd-crops-filter-selectedSeedType",
		0
	);
	// display filters
	const [selectedShowDetailedCropInfo, setSelectedShowDetailedCropInfo] =
		useLocalStorage("svd-crops-filter-selectedShowDetailedCropInfo", false);

	// ////
	// handlers

	// ////
	// helpers -- filters data before being displayed

	// filter the table data
	const filterTableData = (tableData) => {
		const filteredTableData = tableData.filter((crop) => {
			// filter seasons
			const inSeasons = crop.seasons
				? selectedSeasons.reduce(
						(inSeason, season) =>
							inSeason || crop.seasons.includes(season),
						false
				  )
				: true;

			// filter category
			const inCategory = selectedCategories.includes(crop["type"]);

			// filter type
			const inType = selectedTypes.includes(crop["sub-type"]);

			// determine filter
			return inSeasons && inCategory && inType;
		});

		// console.log(
		// 	"--Crops:filterTableData-- filteredTableData: ",
		// 	filteredTableData
		// );
		return filteredTableData;
	};

	// filter the columns
	const filterColumnData = (columnData) => {
		const filteredColumnData = columnData.map((columnSection) => {
			const filteredColumnSection = { ...columnSection };

			filteredColumnSection.columns = [
				...columnSection.columns.filter((column) => {
					// ////
					// filter columns

					// show crop detail info
					const showDetailedCropInfo =
						column.category === "detailedCropInfo"
							? selectedShowDetailedCropInfo
							: true;

					// harvest type
					const showHarvestType =
						typeof column.harvestType === "number"
							? column.harvestType === selectedHarvestType
							: true;

					// seed type
					const showSeedType = column.seedType
						? column.seedType === selectedSeedType
						: true;

					// return result of all filters
					// console.log(
					// 	"-filtercolumns column: ",
					// 	column,
					// 	" showSeedType: ",
					// 	showSeedType,
					// 	" selectedSeedType: ",
					// 	selectedSeedType,
					// 	" column.seedType: ",
					// 	column.seedType
					// );
					return (
						showDetailedCropInfo && showHarvestType && showSeedType
					);
				}),
			];

			return filteredColumnSection;
		});

		// console.log(
		// 	"--Crops:filterTableData-- filteredColumnData: ",
		// 	filteredColumnData,
		// 	" columnData: ",
		// 	columnData
		// );
		return filteredColumnData;
	};

	// ////
	// Render

	return (
		<StyledCropsHome>
			<div>
				<SeasonSelect
					selectedSeason={selectedSeasons}
					handleChangeSeason={(newSeason) => {
						// set season selected
						setSelectedSeasons(newSeason);
					}}
					multiSelect={true}
				/>

				<MultipleSelectChips
					label={"Category"}
					options={categoryOptions}
					handleChange={(value) => {
						setSelectedCategories(value);
					}}
					selectedOptions={selectedCategories}
				/>

				<MultipleSelectChips
					label={"Type"}
					options={typeOptions}
					handleChange={(value) => {
						setSelectedTypes(value);
					}}
					selectedOptions={selectedTypes}
				/>

				<hr />

				<SingleSwitch
					label={"Show detailed Crop Info"}
					checked={selectedShowDetailedCropInfo}
					handleChange={(value) =>
						setSelectedShowDetailedCropInfo(
							!selectedShowDetailedCropInfo
						)
					}
				/>

				<hr />

				<RadioOption
					label={"Harvests"}
					selected={selectedHarvestType}
					handleChange={(value) =>
						setSelectedHarvestType(parseInt(value))
					}
					options={harvestTypes}
				/>

				<RadioOption
					label={"Seed Cost"}
					selected={selectedSeedType}
					handleChange={(value) =>
						setSelectedSeedType(parseInt(value))
					}
					options={seedTypes}
				/>
			</div>

			<div style={{ padding: 0 }}>
				<Table
					columns={filterColumnData(columnData)}
					data={filterTableData(tableData)}
					filterLocation={{ top: 40 }}
					styles={{ height: "350px" }}
				/>
			</div>
		</StyledCropsHome>
	);
}

export default Crops;

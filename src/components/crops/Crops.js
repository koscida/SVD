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

import HarvestDisplay from "./helpers/HarvestDisplay";
import SingleSelectChip from "../shared/inputs/SingleSelectChip";
import CropsOptions from "./CropsOptions";
import SeasonDisplay from "./helpers/SeasonDisplay";

// ////
// Process data

// Column Categories:

// 	detailedCropInfo
const DETAILED_CROP_INFO_NO = 0;
const DETAILED_CROP_INFO_YES = 1;

// 	regrow crop
const GROW_TYPE_NO = "No";
const GROW_TYPE_YES = "Yes";

// 	harvestType
const HARVEST_TYPE_SINGLE = "Single";
const HARVEST_TYPE_SEASON = "Season";
const HARVEST_TYPE_YEAR = "Year";

// 	harvestDisplayType
const HARVEST_DISPLAY_TYPE_CALENDAR = "Calendar";
const HARVEST_DISPLAY_TYPE_DAYS = "Days";
const HARVEST_DISPLAY_TYPE_NONE = "None";

// 	seedType
const SEED_TYPE_IGNORE = "Ignore";
const SEED_TYPE_SHOP = "Shop";
const SEED_TYPE_SEED_MAKER = "Seed maker";

// sellType
const SELL_TYPE_CROP = "Crop";
const SELL_TYPE_PRESERVE = "Preserves";
const SELL_TYPE_KEG = "Keg";

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
					Header: "Category",
					accessor: "type",
				},
				{
					Header: "Type",
					accessor: "sub-type",
				},
				{
					Header: "Season(s)",
					accessor: "seasonDisplay",
				},
				{
					Header: "Seeds",
					accessor: "seeds",
				},
				{
					Header: "Seed Cost",
					accessor: "seedCostShopSingle",
					seedType: SEED_TYPE_SHOP,
				},
				{
					Header: "Seed Cost",
					accessor: "seedCostSeedMakerSingle",
					seedType: SEED_TYPE_SEED_MAKER,
				},
				{
					Header: "Grow Time (Regrow)",
					accessor: "growTimeDisplay",
				},
				{
					Header: "Trellis",
					accessor: "trellis",
					detailedCropInfo: DETAILED_CROP_INFO_YES,
				},
				{
					Header: "Planter",
					accessor: "planter",
					detailedCropInfo: DETAILED_CROP_INFO_YES,
				},
				{
					Header: "Giant",
					accessor: "giant",
					detailedCropInfo: DETAILED_CROP_INFO_YES,
				},
				{
					Header: "Regrow",
					accessor: "regrow",
					detailedCropInfo: DETAILED_CROP_INFO_YES,
				},
			],
		},
		{
			Header: "Harvesting",
			columns: [
				{
					Header: "Harvests",
					accessor: "harvestDisplayCalendarSeason",
					harvestType: HARVEST_TYPE_SEASON,
					harvestDisplayType: HARVEST_DISPLAY_TYPE_CALENDAR,
				},
				{
					Header: "Harvests",
					accessor: "harvestDisplayCalendarYear",
					harvestType: HARVEST_TYPE_YEAR,
					harvestDisplayType: HARVEST_DISPLAY_TYPE_CALENDAR,
				},
				{
					Header: "Harvests",
					accessor: "harvestDisplayDaysSeason",
					harvestType: HARVEST_TYPE_SEASON,
					harvestDisplayType: HARVEST_DISPLAY_TYPE_DAYS,
				},
				{
					Header: "Harvests",
					accessor: "harvestDisplayDaysYear",
					harvestType: HARVEST_TYPE_YEAR,
					harvestDisplayType: HARVEST_DISPLAY_TYPE_DAYS,
				},

				{
					Header: "Harvest Info",
					accessor: "harvestInfoDisplaySingle",
					harvestType: HARVEST_TYPE_SINGLE,
				},
				{
					Header: "Harvest Info",
					accessor: "harvestInfoDisplaySeason",
					harvestType: HARVEST_TYPE_SEASON,
				},
				{
					Header: "Harvest Info",
					accessor: "harvestInfoDisplayYear",
					harvestType: HARVEST_TYPE_YEAR,
				},

				{
					Header: "Yield",
					accessor: "yieldDisplaySingle",
					harvestType: HARVEST_TYPE_SINGLE,
				},
				{
					Header: "Total Yield",
					accessor: "yieldDisplaySeason",
					harvestType: HARVEST_TYPE_SEASON,
				},
				{
					Header: "Total Yield",
					accessor: "yieldDisplayYear",
					harvestType: HARVEST_TYPE_YEAR,
				},
			],
		},
		{
			Header: "Profit",
			columns: [
				// sell crop
				{
					Header: "Crop Sell",
					accessor: "sellCropSingle",
				},
				// sell crop totals
				{
					Header: "Sell Total",
					accessor: "sellCropSeason",
					harvestType: HARVEST_TYPE_SEASON,
				},
				{
					Header: "Sell Total",
					accessor: "sellCropYear",
					harvestType: HARVEST_TYPE_YEAR,
				},

				// seed cost total: shop
				{
					Header: "Seed Cost Total",
					accessor: "seedCostShopSeason",
					seedType: SEED_TYPE_SHOP,
					harvestType: HARVEST_TYPE_SEASON,
				},
				{
					Header: "Seed Cost Total",
					accessor: "seedCostShopYear",
					seedType: SEED_TYPE_SHOP,
					harvestType: HARVEST_TYPE_YEAR,
				},
				// seed costs total: seed maker
				{
					Header: "Seed Cost Total",
					accessor: "seedCostSeedMakerSeason",
					seedType: SEED_TYPE_SEED_MAKER,
					harvestType: HARVEST_TYPE_SEASON,
				},
				{
					Header: "Seed Cost Total",
					accessor: "seedCostSeedMakerYear",
					seedType: SEED_TYPE_SEED_MAKER,
					harvestType: HARVEST_TYPE_YEAR,
				},

				// profit: shop
				{
					Header: "Profit",
					accessor: "profitCropShopSingle",
					harvestType: HARVEST_TYPE_SINGLE,
					seedType: SEED_TYPE_SHOP,
				},
				{
					Header: "Profit",
					accessor: "profitCropShopSeason",
					harvestType: HARVEST_TYPE_SEASON,
					seedType: SEED_TYPE_SHOP,
				},
				{
					Header: "Profit",
					accessor: "profitCropShopYear",
					harvestType: HARVEST_TYPE_YEAR,
					seedType: SEED_TYPE_SHOP,
				},
				// profit: seed maker
				{
					Header: "Profit",
					accessor: "profitCropSeedSingle",
					harvestType: HARVEST_TYPE_SINGLE,
					seedType: SEED_TYPE_SEED_MAKER,
				},
				{
					Header: "Profit",
					accessor: "profitCropSeedSeason",
					harvestType: HARVEST_TYPE_SEASON,
					seedType: SEED_TYPE_SEED_MAKER,
				},
				{
					Header: "Profit",
					accessor: "profitCropSeedYear",
					harvestType: HARVEST_TYPE_YEAR,
					seedType: SEED_TYPE_SEED_MAKER,
				},

				// profit/day: none
				{
					Header: "Profit/Day",
					accessor: "dailyProfitCropSingle",
					harvestType: HARVEST_TYPE_SINGLE,
					seedType: SEED_TYPE_IGNORE,
				},
				{
					Header: "Profit/Day",
					accessor: "dailyProfitCropSeason",
					harvestType: HARVEST_TYPE_SEASON,
					seedType: SEED_TYPE_IGNORE,
				},
				{
					Header: "Profit/Day",
					accessor: "dailyProfitCropYear",
					harvestType: HARVEST_TYPE_YEAR,
					seedType: SEED_TYPE_IGNORE,
				},
				// profit/day: shop
				{
					Header: "Profit/Day",
					accessor: "dailyProfitCropShopSingle",
					harvestType: HARVEST_TYPE_SINGLE,
					seedType: SEED_TYPE_SHOP,
				},
				{
					Header: "Profit/Day",
					accessor: "dailyProfitCropShopSeason",
					harvestType: HARVEST_TYPE_SEASON,
					seedType: SEED_TYPE_SHOP,
				},
				{
					Header: "Profit/Day",
					accessor: "dailyProfitCropShopYear",
					harvestType: HARVEST_TYPE_YEAR,
					seedType: SEED_TYPE_SHOP,
				},
				// profit/day: seed maker
				{
					Header: "Profit/Day",
					accessor: "dailyProfitCropSeedSingle",
					harvestType: HARVEST_TYPE_SINGLE,
					seedType: SEED_TYPE_SEED_MAKER,
				},
				{
					Header: "Profit/Day",
					accessor: "dailyProfitCropSeedSeason",
					harvestType: HARVEST_TYPE_SEASON,
					seedType: SEED_TYPE_SEED_MAKER,
				},
				{
					Header: "Profit/Day",
					accessor: "dailyProfitCropSeedYear",
					harvestType: HARVEST_TYPE_YEAR,
					seedType: SEED_TYPE_SEED_MAKER,
				},
			],
		},
	];

	return initColumns;
};

// table helper
const calcHarvestDays = (growTime, regrow, regrowTime, seasonDays) => {
	let days = [];
	let d = growTime + 1;
	while (d <= seasonDays) {
		//days.push(((d - 1) % 28) + 1);
		days.push(d);
		d = regrow === "Yes" ? d + regrowTime : d + growTime;
	}
	return days;
};

// calc table data
const calcInitTableData = (crops) =>
	crops.map((crop) => {
		// create simple copy
		const newCrop = { ...crop };

		// if no grow info, just return
		if (!crop["Farming"]) return newCrop;

		// format data

		// ////////////////////
		// ////////////////////
		// Info
		if (true) {
			// name
			newCrop.nameDisplay = (
				<>
					<RenderImageSmall label={crop.name} />
					{crop.name}
				</>
			);

			//
			// seeds
			newCrop.seeds = crop.Farming.seeds[0].name;

			// seasons
			newCrop.seasonDisplay = (
				<SeasonDisplay selectedSeasons={crop.seasons} />
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
						) : null)
			);
			// regrow
			newCrop.regrow = crop.Farming.time.regrow ? "Yes" : "No";
		}

		// ////////////////////
		// ////////////////////
		// Harvesting
		if (true) {
			//
			// time (store for later)
			newCrop.growTime = crop.Farming.time.time;
			newCrop.regrowTime = crop.Farming.time.regrowTime;

			//
			// harvests (store for later)
			newCrop.harvestDaysSeason = calcHarvestDays(
				newCrop.growTime,
				newCrop.regrow,
				newCrop.regrowTime,
				28
			);
			newCrop.harvestDaysYear = calcHarvestDays(
				newCrop.growTime,
				newCrop.regrow,
				newCrop.regrowTime,
				crop.seasons.length * 28
			);
			// total harvests (store for later)
			newCrop.harvestsSeason = newCrop.harvestDaysSeason.length;
			newCrop.harvestsYear = newCrop.harvestDaysYear.length;
			// max harvest day (store for later)
			newCrop.harvestLastSeason =
				newCrop.harvestDaysSeason[newCrop.harvestDaysSeason.length - 1];
			newCrop.harvestLastYear =
				newCrop.harvestDaysYear[newCrop.harvestDaysYear.length - 1];

			//
			// harvests display: calendar
			newCrop.harvestDisplayCalendarSeason = HarvestDisplay(
				newCrop,
				newCrop.harvestDaysSeason,
				28
			);
			newCrop.harvestDisplayCalendarYear = HarvestDisplay(
				newCrop,
				newCrop.harvestDaysYear,
				28 * crop.seasons.length
			);
			// harvests display: days
			newCrop.harvestDisplayDaysSeason = (
				<>{newCrop.harvestDaysSeason.join(", ")}</>
			);
			newCrop.harvestDisplayDaysYear = (
				<>{newCrop.harvestDaysYear.map((x) => x % 28).join(", ")}</>
			);

			//
			// yields (store for later)
			newCrop.yieldSingle = (
				crop.Farming.amount.amount *
				(crop.Farming.amount.multiplierChance
					? 1 +
					  crop.Farming.amount.multiplierChance *
							crop.Farming.amount.multiplier
					: 1)
			).toFixed(2);
			newCrop.yieldSeason = (
				newCrop.yieldSingle * newCrop.harvestsSeason
			).toFixed(2);
			newCrop.yieldYear = (
				newCrop.yieldSingle * newCrop.harvestsYear
			).toFixed(2);

			//
			// harvest info display
			newCrop.harvestInfoDisplaySingle = (
				<>Yield: {newCrop.yieldSingle}</>
			);
			newCrop.harvestInfoDisplaySeason = (
				<>
					Yield: {newCrop.yieldSingle}
					<br />
					Harvests: {newCrop.harvestsSeason}
				</>
			);
			newCrop.harvestInfoDisplayYear = (
				<>
					Yield: {newCrop.yieldSingle}
					<br />
					Harvests: {newCrop.harvestsYear}
				</>
			);

			//
			// yield display
			newCrop.yieldDisplaySingle = newCrop.yieldSingle;
			newCrop.yieldDisplaySeason = <>{newCrop.yieldSeason}</>;
			newCrop.yieldDisplayYear = <>{newCrop.yieldYear}</>;

			//
			// grow time (save)
			newCrop.growTimeSingle = newCrop.growTime;
			newCrop.growTimeSeason = newCrop.regrow
				? newCrop.growTime +
				  1 +
				  newCrop.regrow * (newCrop.harvestsSeason - 1)
				: newCrop.growTime * newCrop.harvestsSeason;
			newCrop.growTimeYear = newCrop.regrow
				? newCrop.growTime +
				  1 +
				  newCrop.regrow * (newCrop.harvestsYear - 1)
				: newCrop.growTime * newCrop.harvestsYear;

			//
			// grow time display
			newCrop.growTimeDisplay =
				newCrop.growTime +
				(newCrop.regrow === "Yes" ? ` (${newCrop.regrowTime})` : "");
			newCrop.growTimeDisplaySingle =
				newCrop.growTimeSingle +
				(newCrop.regrow === "Yes" ? ` (${newCrop.regrowTime})` : "");
			newCrop.growTimeDisplaySeason =
				newCrop.growTimeSeason +
				" (" +
				(newCrop.regrow === "Yes"
					? `${newCrop.growTime} + ( ${newCrop.regrowTime} x ${
							newCrop.harvestsSeason - 1
					  })`
					: `${newCrop.growTime} x ${newCrop.harvestsSeason}`) +
				")";
			newCrop.growTimeDisplayYear =
				newCrop.growTimeYear +
				" (" +
				(newCrop.regrow === "Yes"
					? `${newCrop.growTime} + [${newCrop.regrowTime} x ${
							newCrop.harvestsYear - 1
					  }]`
					: `${newCrop.growTime} x ${newCrop.harvestsYear}`) +
				")";
		}

		//
		// ////////////////////
		// ////////////////////
		// Profit
		if (true) {
			//
			// sell calculations
			newCrop.sellCropSingle =
				crop.sell.type === "Quality"
					? crop.sell.Regular
					: crop.sell.type === "Flat"
					? crop.sell.price
					: 0;
			newCrop.sellCropSeasonTotal = (
				newCrop.sellCropSingle * newCrop.yieldSeason
			).toFixed(0);

			newCrop.sellCropYearTotal = (
				newCrop.sellCropSingle * newCrop.yieldYear
			).toFixed(0);

			newCrop.sellCropSeason = (
				<>
					{newCrop.sellCropSeasonTotal}
					<br />({newCrop.sellCropSingle}
					{" x "}
					{newCrop.yieldSeason})
				</>
			);
			newCrop.sellCropYear = (
				<>
					{newCrop.sellCropYearTotal} <br />({newCrop.sellCropSingle}
					{" x "}
					{newCrop.yieldYear})
				</>
			);

			//
			// seed cost (save for later)
			if (crop.recipeSources && crop.recipeSources.Shops) {
				if (typeof crop.recipeSources.Shops[0].price === "object") {
					// seed cost item
					newCrop.seedCostSingle =
						crop.recipeSources.Shops[0].price.amount;
					newCrop.seedCostObject = newCrop.seedCostObject =
						crop.recipeSources.Shops[0].price.artifact;
				} else {
					// seed cost gold
					newCrop.seedCost = crop.recipeSources.Shops[0].price;
					newCrop.seedCostObject = "Gold";
				}
			} else {
				// no known seed cost
				newCrop.seedCost = 0;
				newCrop.seedCostObject = null;
			}
			//
			// set total seed costs
			newCrop.seedCostShopSingle = newCrop.seedCost;
			newCrop.seedCostShopSeasonTotal =
				newCrop.seedCost *
				(newCrop.regrow === "Yes" ? 1 : newCrop.harvestsSeason);
			newCrop.seedCostShopYearTotal =
				newCrop.seedCost *
				(newCrop.regrow === "Yes" ? 1 : newCrop.yieldYear);
			newCrop.seedCostShopSeason = (
				<>
					{newCrop.seedCostShopSeasonTotal}
					<br />({newCrop.seedCost} x{" "}
					{newCrop.regrow === "Yes" ? 1 : newCrop.harvestsSeason})
				</>
			);
			newCrop.seedCostShopYear = (
				<>
					{newCrop.seedCostShopYearTotal}
					<br />({newCrop.seedCost} x{" "}
					{newCrop.regrow === "Yes" ? 1 : newCrop.yieldYear})
				</>
			);

			newCrop.seedCostSeedMakerSingle = null;
			newCrop.seedCostSeedMakerSeason = null;
			newCrop.seedCostSeedMakerYear = null;

			//
			// profit: shop
			newCrop.profitCropShopSingle = (
				newCrop.sellCropSingle - newCrop.seedCost
			).toFixed(0);
			newCrop.profitCropShopSeason = (
				newCrop.sellCropSeasonTotal - newCrop.seedCostShopSeasonTotal
			).toFixed(0);
			newCrop.profitCropShopYear = (
				newCrop.sellCropYearTotal - newCrop.seedCostShopYearTotal
			).toFixed(0);
			// profit: seed
			newCrop.profitCropSeedSingle = 0;
			newCrop.profitCropSeedSeason = 0;
			newCrop.profitCropSeedYear = 0;

			//
			// daily profit: none
			newCrop.dailyProfitCropSingle = (
				newCrop.sellCropSingle / newCrop.growTimeSingle
			).toFixed(1);
			newCrop.dailyProfitCropSeason = (
				newCrop.sellCropSeasonTotal / newCrop.harvestLastSeason
			).toFixed(1);
			newCrop.dailyProfitCropYear = (
				newCrop.sellCropYearTotal / newCrop.harvestLastYear
			).toFixed(1);
			// daily profit: shop
			newCrop.dailyProfitCropShopSingle = (
				newCrop.profitCropShopSingle / newCrop.growTimeSingle
			).toFixed(1);
			newCrop.dailyProfitCropShopSeason = (
				newCrop.profitCropShopSeason / newCrop.harvestLastSeason
			).toFixed(1);
			newCrop.dailyProfitCropShopYear = (
				newCrop.profitCropShopYear / newCrop.harvestLastYear
			).toFixed(1);
			// daily profit: seed maker
			newCrop.dailyProfitCropSeedSingle = (
				newCrop.profitCropSeedSingle / newCrop.growTimeSingle
			).toFixed(1);
			newCrop.dailyProfitCropSeedSeason = (
				newCrop.profitCropSeedSeason / newCrop.harvestLastSeason
			).toFixed(1);
			newCrop.dailyProfitCropSeedYear = (
				newCrop.profitCropSeedYear / newCrop.harvestLastYear
			).toFixed(1);
		}

		//
		// ////
		// return
		return newCrop;
	});

//
//
// /////
// filter options

// crop info
const categoryOptions = [...cropTypes];
const typeOptions = [...cropSubTypes];

const growTypes = [GROW_TYPE_YES, GROW_TYPE_NO];

// harvesting
const harvestTypes = [
	HARVEST_TYPE_SINGLE,
	HARVEST_TYPE_SEASON,
	HARVEST_TYPE_YEAR,
];
const harvestDisplayTypes = [
	HARVEST_DISPLAY_TYPE_CALENDAR,
	HARVEST_DISPLAY_TYPE_DAYS,
	HARVEST_DISPLAY_TYPE_NONE,
];

// profit
const seedTypes = [SEED_TYPE_IGNORE, SEED_TYPE_SHOP];
const sellTypes = [SELL_TYPE_CROP, SELL_TYPE_PRESERVE, SELL_TYPE_KEG];

//

const initSelectedFilters = {
	selectedSeasons: cropSeasons,
	selectedCategories: [categoryOptions[0]],
	selectedTypes: ["Vegetable", "Fruit", "Flower"],

	selectedShowDetailedCropInfo: false,
	selectedTrellis: true,
	selectedPlanter: false,
	selectedRegrowCrops: growTypes,

	selectedHarvestType: HARVEST_TYPE_SINGLE,
	selectedHarvestDisplayType: HARVEST_DISPLAY_TYPE_CALENDAR,
	selectedSeedType: SEED_TYPE_IGNORE,
	selectedSellType: SELL_TYPE_CROP,
};

const filtersOptions = {
	categoryOptions,
	typeOptions,

	growTypes,

	harvestTypes,
	harvestDisplayTypes,
	seedTypes,
	sellTypes,
};

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
	.options > * {
		margin-bottom: 10px;
	}
	.MuiChip-filled {
		background: rgb(214, 227, 247);
	}
`;

// ////
// Crops()

function Crops() {
	// table data
	const [tableData, setTableData] = useState(calcInitTableData(crops));
	const [columnData, setColumnData] = useState(calcInitColumnData(crops));

	const [selectedFilters, setSelectedFilters] = useLocalStorage(
		"svd-crops-filters",
		initSelectedFilters
	);

	// ////
	// helpers -- filters data before being displayed

	// filter the columns
	const filterColumnData = (columnData) => {
		const filteredColumnData = columnData.map((columnSection) => {
			const filteredColumnSection = { ...columnSection };

			filteredColumnSection.columns = [
				...columnSection.columns.filter((column) => {
					// ////
					// filter columns
					let isShown = true;

					//
					// crop info

					// show crop detail info
					isShown =
						isShown &&
						(typeof column.detailedCropInfo === "number"
							? column.detailedCropInfo ===
							  (selectedFilters.selectedShowDetailedCropInfo
									? 1
									: 0)
							: true);

					//
					// harvesting

					// harvest type
					isShown =
						isShown &&
						(typeof column.harvestType === "string"
							? column.harvestType ===
							  selectedFilters.selectedHarvestType
							: true);

					// harvest display type
					isShown =
						isShown &&
						(typeof column.harvestDisplayType === "string"
							? column.harvestDisplayType ===
							  selectedFilters.selectedHarvestDisplayType
							: true);

					//
					// profit

					// seed type
					isShown =
						isShown &&
						(column.seedType
							? column.seedType ===
							  selectedFilters.selectedSeedType
							: true);

					return isShown;
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

	// filter the table data
	const filterTableData = (tableData) => {
		const filteredTableData = tableData.filter((crop) => {
			// change to see if will be shown
			let isShown = true;

			// filter seasons
			isShown =
				isShown &&
				(crop.seasons
					? selectedFilters.selectedSeasons.reduce(
							(inSeason, season) =>
								inSeason || crop.seasons.includes(season),
							false
					  )
					: true);

			// filter category
			isShown =
				isShown &&
				selectedFilters.selectedCategories.includes(crop["type"]);

			// filter type
			isShown =
				isShown &&
				selectedFilters.selectedTypes.includes(crop["sub-type"]);

			// trellis
			isShown =
				isShown &&
				(!crop.trellis ||
					(selectedFilters.selectedTrellis && crop.trellis));

			// planter
			isShown =
				isShown &&
				(!crop.planter ||
					(selectedFilters.selectedPlanter && crop.planter));

			// single/regrow crop
			isShown =
				isShown &&
				selectedFilters.selectedRegrowCrops.includes(crop["regrow"]);

			// determine filter
			return isShown;
		});

		// console.log(
		// 	"--Crops:filterTableData-- filteredTableData: ",
		// 	filteredTableData
		// );
		return filteredTableData;
	};

	// ////
	// Render

	return (
		<StyledCropsHome>
			<div className="options">
				<CropsOptions
					selectedFilters={selectedFilters}
					setSelectedFilters={setSelectedFilters}
					filtersOptions={filtersOptions}
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

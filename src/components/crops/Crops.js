import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useLocalStorage from "../shared/useLocalStorage";

import Table from "../shared/react-table/Table";
import SeasonSelect from "../shared/inputs/SeasonSelect";

import {
	crops,
	cropsObj,
	cropSubTypes,
	cropSeasons,
} from "../shared/data/crops";
import MultipleSelectChip from "../shared/inputs/MultipleSelectChip";
import MultipleSelectChips from "../shared/inputs/MultipleSelectChips";
import RenderImageMedium from "../shared/Icons/RenderImageMedium";
import RenderImageSmall from "../shared/Icons/RenderImageSmall";
import SingleSwitch from "../shared/inputs/SingleSwitch";
import RadioOption from "../shared/inputs/RadioOption";

// ////
// Process data

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
		newCrop.name = (
			<>
				<RenderImageSmall label={crop.name} />
				{crop.name}
			</>
		);
		// trellis and planter and giant
		["trellis", "planter", "giant"].forEach(
			(label) =>
				(newCrop[label] =
					(typeof crop[label] === "string" && crop[label] === "true") ||
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

		// seeds
		newCrop.seeds = crop.Farming.seeds[0].name;
		// seasons
		newCrop.seasons = crop.seasons ? crop.seasons.join(", ") : [];
		// time
		newCrop.growTime =
			crop.Farming.time.time +
			(crop.Farming.time.regrow ? ` (${crop.Farming.time.regrowTime})` : "");
		// yields
		newCrop.avgYield =
			crop.Farming.amount.amount *
			(crop.Farming.amount.multiplierChance
				? 1 +
				  crop.Farming.amount.multiplierChance * crop.Farming.amount.multiplier
				: 1);
		// harvests
		newCrop.harvests = crop.Farming.time.regrow
			? 1 +
			  Math.floor(
					(crop.seasons.length * 28 - crop.Farming.time.time) /
						crop.Farming.time.regrowTime
			  )
			: Math.floor((crop.seasons.length * 28) / crop.Farming.time.time);

		// // seed cost
		// // newCrop.seedCostSingle =
		// // 	Object.values(crop.buy).length > 0
		// // 		? Object.values(crop.buy).reduce(
		// // 				(min, price) => (price < min ? price : min),
		// // 				Number.MAX_SAFE_INTEGER
		// // 		  )
		// // 		: 0;
		// newCrop.seedCostSinglePerYieldSingle = (
		// 	newCrop.seedCostSingle / newCrop.yieldSingle
		// ).toFixed(2);
		// newCrop.seedCostTotal =
		// 	newCrop.seedCostSingle * (newCrop.regrow ? 1 : newCrop.harvests);
		// newCrop.seedCostTotalPerYieldTotal = (
		// 	newCrop.seedCostTotal / newCrop.yieldTotal
		// ).toFixed(2);
		// //
		// // grow time
		// newCrop.growTimeSinglePerYieldSingle = (
		// 	newCrop.growTime / newCrop.yieldSingle
		// ).toFixed(2);
		// newCrop.growTimeTotalPerYieldTotal = (
		// 	newCrop.growTimeTotal / newCrop.yieldTotal
		// ).toFixed(2);
		//

		// ////
		// crop sell price

		// single
		newCrop.sell =
			crop.sell.type === "Quality"
				? crop.sell.Regular
				: crop.sell.type === "Flat"
				? crop.sell.price
				: 0;
		// // crop sell price - total
		// newCrop.cropSellTotal = crop.sell * newCrop.yieldTotal;
		// newCrop.cropSellTotalPerSeedCostTotal = (
		// 	newCrop.cropSellTotal / newCrop.seedCostTotal
		// ).toFixed(2);
		// newCrop.cropSellTotalPerGrowTimeTotal = (
		// 	newCrop.cropSellTotal / newCrop.growTimeTotal
		// ).toFixed(2);
		// // crop profit
		// newCrop.cropProfitTotal = newCrop.cropSellTotal - newCrop.seedCostTotal;
		// newCrop.cropProfitTotalPerSeedCostTotal = (
		// 	newCrop.cropProfitTotal / newCrop.seedCostTotal
		// ).toFixed(2);
		// // crop productivity
		// newCrop.cropProductivityTotal = (
		// 	newCrop.cropProfitTotal / newCrop.growTimeTotal
		// ).toFixed(2);
		// newCrop.cropProductivityTotalPerMonth = (
		// 	newCrop.cropProductivityTotal * 1600
		// ).toFixed(0);
		//
		// preserves price - single
		// newCrop.preservesSellSingle = crop.preserves ? crop.preserves : 0;
		// // preserves price - total
		// newCrop.preservesSellTotal = newCrop.preservesSellSingle * newCrop.yieldTotal;
		// newCrop.preservesSellTotalPerSeedCostTotal = (
		// 	newCrop.preservesSellTotal / newCrop.seedCostTotal
		// ).toFixed(2);
		// newCrop.preservesSellTotalPerGrowTimeTotal = (
		// 	newCrop.preservesSellTotal / newCrop.growTimeTotal
		// ).toFixed(2);
		// // crop profit
		// newCrop.preservesProfitTotal =
		// 	newCrop.preservesSellTotal - newCrop.seedCostTotal;
		// newCrop.preservesProfitTotalPerSeedCostTotal = (
		// 	newCrop.preservesProfitTotal / newCrop.seedCostTotal
		// ).toFixed(2);
		// // crop productivity
		// newCrop.preservesProductivityTotal = (
		// 	newCrop.preservesProfitTotal / newCrop.growTimeTotal
		// ).toFixed(2);
		// newCrop.preservesProductivityTotalPerMonth = (
		// 	newCrop.preservesProductivityTotal * 1600
		// ).toFixed(0);
		//
		// keg price - single
		// newCrop.kegSellSingle = crop.keg ? crop.keg : 0;
		// // keg price - total
		// newCrop.kegSellTotal = newCrop.kegSellSingle * newCrop.yieldTotal;
		// newCrop.kegSellTotalPerSeedCostTotal = (
		// 	newCrop.kegSellTotal / newCrop.seedCostTotal
		// ).toFixed(2);
		// newCrop.kegSellTotalPerGrowTimeTotal = (
		// 	newCrop.kegSellTotal / newCrop.growTimeTotal
		// ).toFixed(2);
		// // crop profit
		// newCrop.kegProfitTotal = newCrop.kegSellTotal - newCrop.seedCostTotal;
		// newCrop.kegProfitTotalPerSeedCostTotal = (
		// 	newCrop.kegProfitTotal / newCrop.seedCostTotal
		// ).toFixed(2);
		// // crop productivity
		// newCrop.kegProductivityTotal = (
		// 	newCrop.kegProfitTotal / newCrop.growTimeTotal
		// ).toFixed(2);
		// newCrop.kegProductivityTotalPerMonth = (
		// 	newCrop.kegProductivityTotal * 1600
		// ).toFixed(0);
		//
		return newCrop;
	});
	return initTableData;
};

// calc column data
const calcInitColumnData = (crops) => {
	const initColumns = [
		{
			Header: "Crop Info",
			columns: [
				{
					Header: "Crop",
					accessor: "name",
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
			],
		},
		{
			Header: "Grow",
			columns: [
				{
					Header: "Seeds",
					accessor: "seeds",
				},
				{
					Header: "Season(s)",
					accessor: "seasons",
				},
				{
					Header: "Grow Time (Regrow Time)",
					accessor: "growTime",
					quantity: "single",
				},
				{
					Header: "Yield",
					accessor: "avgYield",
					quantity: "single",
				},
				{
					Header: "Harvests",
					accessor: "harvests",
					quantity: "single",
				},
			],
		},
		{
			Header: "Profit",
			columns: [
				{
					Header: "Crop",
					accessor: "sell",
					quantity: "Single",
				},
			],
		},
	];

	return initColumns;
};

// init filters
const selectedTrellisOptions = ["Yes", "No"];
const selectedRegrowOptions = ["Yes", "No"];
const selectedProductOptions = ["Crop", "Preserves", "Keg"];
const initQuantityOptions = ["Total"];
const selectedQuantityOptions = ["Total", "Single"];
const seedTypes = [
	{ value: 0, label: "Ignore seed cost" },
	{ value: 1, label: "Include seed cost" },
	{ value: 2, label: "Include seed maker cost" },
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
	//
	const [typeOptions, setTypeOptions] = useState(["All", ...cropSubTypes]);

	// filters
	const [selectedSeasons, setSelectedSeasons] = useState(cropSeasons);
	const [selectedTypes, setSelectedTypes] = useState(["All"]);
	// seed
	const [selectedSeedType, setSelectedSeedType] = useState(0);
	// display filters
	const [selectedShowDetailedCropInfo, setSelectedShowDetailedCropInfo] =
		useState(false);

	// const [selectedTrellis, setSelectedTrellis] = useLocalStorage(
	// 	"svd-crops-selectedtrellis",
	// 	selectedTrellisOptions
	// );
	// const [selectedRegrow, setSelectedRegrow] = useLocalStorage(
	// 	"svd-crops-selectedregrow",
	// 	selectedRegrowOptions
	// );
	// const [selectedProducts, setSelectedProducts] = useLocalStorage(
	// 	"svd-crops-selectedproducts",
	// 	selectedProductOptions
	// );
	// const [selectedQuantity, setSelectedQuantity] = useLocalStorage(
	// 	"svd-crops-selectedquantity",
	// 	initQuantityOptions
	// );

	// ////
	// handlers

	// on change handlers
	const handleChangeSeason = (newSeason) => {
		// set season selected
		setSelectedSeasons(newSeason);
	};
	const handleTypeChange = (typeSelected) => {
		setSelectedTypes(typeSelected);
	};
	// const handleSelectInfo = (name, option, selectedOptions, setSelected) => {
	// 	// set option selected
	// 	const newSelected = selectedOptions.includes(option)
	// 		? selectedOptions.filter((x) => x !== option)
	// 		: [...selectedOptions, option];
	// 	setSelected(newSelected);
	// 	// get temp vars
	// 	const tmp = {
	// 		selectedSeason,
	// 		selectedTrellis,
	// 		selectedRegrow,
	// 		selectedProducts,
	// 		selectedQuantity,
	// 	};
	// 	tmp[name] = newSelected;
	// 	// update table data
	// 	setTableData(
	// 		calcTableData(tmp.selectedSeason, tmp.selectedTrellis, tmp.selectedRegrow)
	// 	);
	// 	// update table columns
	// 	setColumnData([
	// 		...calcColumnData(tmp.selectedProducts, tmp.selectedQuantity),
	// 	]);
	// };

	// ////
	// helpers -- filters data before being displayed

	// filter the table data
	const filterTableData = (tableData) => {
		const filteredTableData = tableData.filter((crop) => {
			// filter seasons
			const inSeasons = crop.seasons
				? selectedSeasons.reduce(
						(inSeason, season) => inSeason || crop.seasons.includes(season),
						false
				  )
				: true;

			// filter type
			const inType =
				selectedTypes.includes("All") ||
				(crop["sub-type"] && selectedTypes.includes(crop["sub-type"])) ||
				(crop["type"] && selectedTypes.includes(crop["type"]));

			// determine filter
			return inSeasons && inType;
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
					// filter columns
					const showDetailedCropInfo =
						column.category === "detailedCropInfo"
							? selectedShowDetailedCropInfo
							: true;

					// return result of all filters
					return showDetailedCropInfo;
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
				<p>Season</p>
				<SeasonSelect
					selectedSeason={selectedSeasons}
					handleChangeSeason={handleChangeSeason}
					multiSelect={true}
				/>

				<p>Type</p>
				<MultipleSelectChips
					label={"Type"}
					options={typeOptions}
					handleChange={handleTypeChange}
					selectedOptions={selectedTypes}
				/>

				<SingleSwitch
					label={"Show detailed Crop Info"}
					checked={selectedShowDetailedCropInfo}
					handleChange={(value) =>
						setSelectedShowDetailedCropInfo(!selectedShowDetailedCropInfo)
					}
				/>

				<hr />

				<p>Profit</p>
				<RadioOption
					label={"Seed Cost"}
					selected={selectedSeedType}
					handleChange={(value) => setSelectedSeedType(value)}
					options={seedTypes}
				/>

				<hr />
			</div>

			<div style={{ padding: 0 }}>
				<Table
					columns={filterColumnData(columnData)}
					data={filterTableData(tableData)}
					filterLocation={{ top: 40 }}
					offset={{ xOffset: 0, yOffset: 40 }}
				/>
			</div>
		</StyledCropsHome>
	);
}

export default Crops;

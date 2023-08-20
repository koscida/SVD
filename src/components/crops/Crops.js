import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useLocalStorage from "../shared/useLocalStorage";

import Table from "../shared/react-table/Table";
import SeasonSelect from "../shared/inputs/SeasonSelect";

import { crops, cropsObj, cropSubTypes } from "../shared/data/crops";
import MultipleSelectChip from "../shared/inputs/MultipleSelectChip";
import MultipleSelectChips from "../shared/inputs/MultipleSelectChips";

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

		//
		// crop info
		newCrop.name = crop.name;
		// process info
		newCrop.seasons = crop.seasons ? crop.seasons.join(", ") : [];

		//
		// // total time
		// let harvests = 0;
		// newCrop.growTimeSingle = crop.Grow.time.time;
		// newCrop.reGrowTime = newCrop.regrow ? crop.Grow.time.regrowTime : "-";
		// newCrop.growTimeTotal = newCrop.growTimeSingle;
		// let day = newCrop.growTimeTotal;
		// while (day < 28) {
		// 	newCrop.growTimeTotal = day;
		// 	harvests++;
		// 	day += newCrop.regrow ? newCrop.reGrowTime : newCrop.growTimeSingle;
		// }
		// // harvests
		// newCrop.harvests = harvests;
		// // yields
		// newCrop.yieldSingle = 1;
		// newCrop.yieldTotal = newCrop.yieldSingle * newCrop.harvests;
		// //
		// // seed
		// newCrop.seed = crop.Grow.ingredients[0].ingredient;
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
		// //
		// // crop sell price - single
		// newCrop.cropSellSingle = crop.Regular;
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
	const initColumnsOLD = [
		{
			Header: "Crop Info",
			columns: [
				{
					Header: "Crop",
					accessor: "crop",
				},
				{
					Header: "Seed",
					accessor: "seed",
				},
				{
					Header: "Season",
					accessor: "season",
				},
				{
					Header: "Trellis",
					accessor: "trellis",
				},
				{
					Header: "Re-Grow",
					accessor: "regrow",
				},
				{
					Header: "Giant",
					accessor: "giant",
				},
			],
		},
		{
			Header: "Seed Cost",
			columns: [
				{
					Header: "Single Seed",
					accessor: "seedCostSingle",
					quantity: "Single",
				},
				{
					Header: "Cost/Yield",
					accessor: "seedCostSinglePerYieldSingle",
					quantity: "Single",
				},
				{
					Header: "Total Seeds",
					accessor: "seedCostTotal",
					quantity: "Total",
				},
				{
					Header: "Cost/Yield",
					accessor: "seedCostTotalPerYieldTotal",
					quantity: "Total",
				},
			],
		},
		{
			Header: "Grow Time",
			columns: [
				{
					Header: "Grow Time",
					accessor: "growTimeSingle",
					quantity: "Single",
				},
				{
					Header: "Re-Grow Time",
					accessor: "reGrowTime",
					quantity: "Single",
				},
				{
					Header: "Time/Yield",
					accessor: "growTimeSinglePerYieldSingle",
					quantity: "Single",
				},
				{
					Header: "Grow Time",
					accessor: "growTimeTotal",
					quantity: "Total",
				},
				{
					Header: "Time/Yield",
					accessor: "growTimeTotalPerYieldTotal",
					quantity: "Total",
				},
			],
		},
		{
			Header: "Yield",
			columns: [
				{
					Header: "Single Yield",
					accessor: "yieldSingle",
					quantity: "Single",
				},
				{
					Header: "Harvests",
					accessor: "harvests",
					quantity: "Total",
				},
				{
					Header: "Total Yield",
					accessor: "yieldTotal",
					quantity: "Total",
				},
			],
		},
		{
			Header: "Crop",
			columns: [
				{
					Header: "Crop",
					accessor: "cropSellSingle",
					quantity: "Single",
				},
				{
					Header: "Total Crop",
					accessor: "cropSellTotal",
					quantity: "Total",
				},
				{
					Header: "Sell/Cost",
					accessor: "cropSellTotalPerSeedCostTotal",
					quantity: "Total",
				},
				{
					Header: "Sell/Time",
					accessor: "cropSellTotalPerGrowTimeTotal",
					quantity: "Total",
				},
				{
					Header: "Profit (Sell - Cost)",
					accessor: "cropProfitTotal",
					quantity: "Total",
				},
				{
					Header: "Profit/Cost",
					accessor: "cropProfitTotalPerSeedCostTotal",
					quantity: "Total",
				},
				{
					Header: "Productivity (Profit/Time)",
					accessor: "cropProductivityTotal",
					quantity: "Total",
				},
				{
					Header: "Productivity/Month",
					accessor: "cropProductivityTotalPerMonth",
					quantity: "Total",
				},
			],
		},
		{
			Header: "Preserves",
			columns: [
				{
					Header: "Preserves",
					accessor: "preservesSellSingle",
					quantity: "Single",
				},
				{
					Header: "Total Preserves",
					accessor: "preservesSellTotal",
					quantity: "Total",
				},
				{
					Header: "Sell/Cost",
					accessor: "preservesSellTotalPerSeedCostTotal",
					quantity: "Total",
				},
				{
					Header: "Sell/Time",
					accessor: "preservesSellTotalPerGrowTimeTotal",
					quantity: "Total",
				},
				{
					Header: "Profit (Sell - Cost)",
					accessor: "preservesProfitTotal",
					quantity: "Total",
				},
				{
					Header: "Profit/Cost",
					accessor: "preservesProfitTotalPerSeedCostTotal",
					quantity: "Total",
				},
				{
					Header: "Productivity (Profit/Time)",
					accessor: "preservesProductivityTotal",
					quantity: "Total",
				},
				{
					Header: "Productivity/Month",
					accessor: "preservesProductivityTotalPerMonth",
					quantity: "Total",
				},
			],
		},
		{
			Header: "Keg",
			columns: [
				{
					Header: "Keg",
					accessor: "kegSellSingle",
					quantity: "Single",
				},
				{
					Header: "Total Keg",
					accessor: "kegSellTotal",
					quantity: "Total",
				},
				{
					Header: "Sell/Cost",
					accessor: "kegSellTotalPerSeedCostTotal",
					quantity: "Total",
				},
				{
					Header: "Sell/Time",
					accessor: "kegSellTotalPerGrowTimeTotal",
					quantity: "Total",
				},
				{
					Header: "Profit (Sell - Cost)",
					accessor: "kegProfitTotal",
					quantity: "Total",
				},
				{
					Header: "Profit/Cost",
					accessor: "kegProfitTotalPerSeedCostTotal",
					quantity: "Total",
				},
				{
					Header: "Productivity (Profit/Time)",
					accessor: "kegProductivityTotal",
					quantity: "Total",
				},
				{
					Header: "Productivity/Month",
					accessor: "kegProductivityTotalPerMonth",
					quantity: "Total",
				},
			],
		},
	];
	const initColumns = [
		{
			Header: "Crop Info",
			columns: [
				{
					Header: "Crop",
					accessor: "name",
				},
				{
					Header: "Season(s)",
					accessor: "seasons",
				},
				{
					Header: "Type",
					accessor: "sub-type",
				},
			],
		},
	];

	return initColumns;
};

// init filters
const initSeason = "Spring";
const selectedTrellisOptions = ["Yes", "No"];
const selectedRegrowOptions = ["Yes", "No"];
const selectedProductOptions = ["Crop", "Preserves", "Keg"];
const initQuantityOptions = ["Total"];
const selectedQuantityOptions = ["Total", "Single"];

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
	const [selectedSeason, setSelectedSeason] = useState(initSeason);
	const [selectedTypes, setSelectedTypes] = useState(["All"]);

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
		setSelectedSeason(newSeason);
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

	// calc what table data will be displayed
	const filterTableData = (tableData) => {
		const selectedTypesStr = selectedTypes.join();
		const filteredTableData = tableData.filter((crop) => {
			const inSeasons = crop.seasons && crop.seasons.includes(selectedSeason);

			const inType =
				selectedTypesStr.includes("All") ||
				(crop["sub-type"] && selectedTypesStr.includes(crop["sub-type"])) ||
				(crop["type"] && selectedTypesStr.includes(crop["type"]));

			return inSeasons && inType;
		});
		return filteredTableData;
	};

	const filterColumnData = (columnData) => {
		return columnData;
	};

	// ////
	// Render

	return (
		<StyledCropsHome>
			<div>
				<p>Season</p>
				<SeasonSelect
					selectedSeason={selectedSeason}
					handleChangeSeason={handleChangeSeason}
					multiSelect={false}
				/>
				<p>Type</p>
				<MultipleSelectChips
					label={"Type"}
					options={typeOptions}
					handleChange={handleTypeChange}
					selectedOptions={selectedTypes}
				/>
				{/* <div className="d-flex flex-column flex-wrap">
					{[
						{
							name: "Trellis",
							key: "selectedTrellis",
							options: selectedTrellisOptions,
							selectedOptions: selectedTrellis,
							setSelected: setSelectedTrellis,
						},
						{
							name: "Re-Grow",
							key: "selectedRegrow",
							options: selectedRegrowOptions,
							selectedOptions: selectedRegrow,
							setSelected: setSelectedRegrow,
						},
						{
							name: "Products",
							key: "selectedProducts",
							options: selectedProductOptions,
							selectedOptions: selectedProducts,
							setSelected: setSelectedProducts,
						},
						{
							name: "Quantity",
							key: "selectedQuantity",
							options: selectedQuantityOptions,
							selectedOptions: selectedQuantity,
							setSelected: setSelectedQuantity,
						},
					].map(({ name, key, options, selectedOptions, setSelected }) => (
						<div key={name} className="d-flex flex-column flex-wrap me-3">
							<p className="me-1">{name}</p>
							<div className="d-flex flex-row">
								{options.map((option) => {
									const optionLabel = name + option;
									return (
										<div className="form-check me-2" key={optionLabel}>
											<input
												className="form-check-input"
												type="checkbox"
												value={option}
												id={optionLabel}
												checked={selectedOptions.includes(option)}
												onChange={() =>
													handleSelectInfo(
														key,
														option,
														selectedOptions,
														setSelected
													)
												}
											/>
											<label className="form-check-label" htmlFor={optionLabel}>
												{option}
											</label>
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div> */}
			</div>
			<div>
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

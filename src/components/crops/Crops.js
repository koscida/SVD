import React, { useEffect } from "react";
import styled from "styled-components";
import Table from "../shared/react-table/Table";
import useLocalStorage from "../shared/useLocalStorage";
import data from "../shared/data/dataCrops";
import SeasonSelect from "../shared/filters/SeasonSelect";

const cropTableData = data.crops.map((crop) => {
	const newCrop = {};
	// crop info
	newCrop.crop = crop.name;
	newCrop.seasons = crop.season;
	newCrop.trellis = crop.trellis;
	newCrop.regeow = crop.regrow;
	// process info
	newCrop.season = crop.season.join("/");
	newCrop.trellis = crop.trellis ? "Yes" : "No";
	newCrop.regrow = crop.regrow ? "Yes" : "No";
	newCrop.giant = crop.giant ? "Yes" : "No";
	//
	// total time
	let harvests = 0;
	newCrop.growTimeSingle = crop.growTime;
	newCrop.reGrowTime = crop.regrow ? crop.regrowTime : "-";
	newCrop.growTimeTotal = crop.growTime;
	let day = newCrop.growTimeTotal;
	while (day < 28) {
		newCrop.growTimeTotal = day;
		harvests++;
		day += crop.regrow ? crop.regrowTime : crop.growTime;
	}
	// harvests
	newCrop.harvests = harvests;
	// yields
	newCrop.yieldSingle = 1;
	newCrop.yieldTotal = newCrop.yieldSingle * newCrop.harvests;
	//
	// seed
	newCrop.seed = crop.seeds;
	// seed cost
	newCrop.seedCostSingle =
		Object.values(crop.buy).length > 0
			? Object.values(crop.buy).reduce(
					(min, price) => (price < min ? price : min),
					Number.MAX_SAFE_INTEGER
			  )
			: 0;
	newCrop.seedCostSinglePerYieldSingle = (
		newCrop.seedCostSingle / newCrop.yieldSingle
	).toFixed(2);
	newCrop.seedCostTotal =
		newCrop.seedCostSingle * (crop.regrow ? 1 : newCrop.harvests);
	newCrop.seedCostTotalPerYieldTotal = (
		newCrop.seedCostTotal / newCrop.yieldTotal
	).toFixed(2);
	//
	// grow time
	newCrop.growTimeSinglePerYieldSingle = (
		newCrop.growTime / newCrop.yieldSingle
	).toFixed(2);
	newCrop.growTimeTotalPerYieldTotal = (
		newCrop.growTimeTotal / newCrop.yieldTotal
	).toFixed(2);
	//
	// crop sell price - single
	newCrop.cropSellSingle = crop.sell;
	// crop sell price - total
	newCrop.cropSellTotal = crop.sell * newCrop.yieldTotal;
	newCrop.cropSellTotalPerSeedCostTotal = (
		newCrop.cropSellTotal / newCrop.seedCostTotal
	).toFixed(2);
	newCrop.cropSellTotalPerGrowTimeTotal = (
		newCrop.cropSellTotal / newCrop.growTimeTotal
	).toFixed(2);
	// crop profit
	newCrop.cropProfitTotal = newCrop.cropSellTotal - newCrop.seedCostTotal;
	newCrop.cropProfitTotalPerSeedCostTotal = (
		newCrop.cropProfitTotal / newCrop.seedCostTotal
	).toFixed(2);
	// crop productivity
	newCrop.cropProductivityTotal = (
		newCrop.cropProfitTotal / newCrop.growTimeTotal
	).toFixed(2);
	newCrop.cropProductivityTotalPerMonth = (
		newCrop.cropProductivityTotal * 1600
	).toFixed(0);
	//
	// preserves price - single
	newCrop.preservesSellSingle = crop.preserves ? crop.preserves : 0;
	// preserves price - total
	newCrop.preservesSellTotal =
		newCrop.preservesSellSingle * newCrop.yieldTotal;
	newCrop.preservesSellTotalPerSeedCostTotal = (
		newCrop.preservesSellTotal / newCrop.seedCostTotal
	).toFixed(2);
	newCrop.preservesSellTotalPerGrowTimeTotal = (
		newCrop.preservesSellTotal / newCrop.growTimeTotal
	).toFixed(2);
	// crop profit
	newCrop.preservesProfitTotal =
		newCrop.preservesSellTotal - newCrop.seedCostTotal;
	newCrop.preservesProfitTotalPerSeedCostTotal = (
		newCrop.preservesProfitTotal / newCrop.seedCostTotal
	).toFixed(2);
	// crop productivity
	newCrop.preservesProductivityTotal = (
		newCrop.preservesProfitTotal / newCrop.growTimeTotal
	).toFixed(2);
	newCrop.preservesProductivityTotalPerMonth = (
		newCrop.preservesProductivityTotal * 1600
	).toFixed(0);
	//
	// keg price - single
	newCrop.kegSellSingle = crop.keg ? crop.keg : 0;
	// keg price - total
	newCrop.kegSellTotal = newCrop.kegSellSingle * newCrop.yieldTotal;
	newCrop.kegSellTotalPerSeedCostTotal = (
		newCrop.kegSellTotal / newCrop.seedCostTotal
	).toFixed(2);
	newCrop.kegSellTotalPerGrowTimeTotal = (
		newCrop.kegSellTotal / newCrop.growTimeTotal
	).toFixed(2);
	// crop profit
	newCrop.kegProfitTotal = newCrop.kegSellTotal - newCrop.seedCostTotal;
	newCrop.kegProfitTotalPerSeedCostTotal = (
		newCrop.kegProfitTotal / newCrop.seedCostTotal
	).toFixed(2);
	// crop productivity
	newCrop.kegProductivityTotal = (
		newCrop.kegProfitTotal / newCrop.growTimeTotal
	).toFixed(2);
	newCrop.kegProductivityTotalPerMonth = (
		newCrop.kegProductivityTotal * 1600
	).toFixed(0);
	//
	return newCrop;
});
const cropTableColumn = [
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

// table data filters and calculations
const calcTableData = (selectedSeason, selectedTrellis, selectedRegrow) => {
	// set table data
	const newTableData = cropTableData.filter(
		(crop) =>
			crop.seasons.includes(selectedSeason) &&
			selectedTrellis.includes(crop.trellis) &&
			selectedRegrow.includes(crop.regrow)
	);
	return newTableData;
};
const calcColumnData = (selectedProducts, selectedQuantity) => {
	// set column data
	const newColumnData = cropTableColumn.reduce(
		(newCropTable, parentSection, i) => {
			if (
				!selectedProductOptions.includes(parentSection.Header) ||
				(selectedProductOptions.includes(parentSection.Header) &&
					selectedProducts.includes(parentSection.Header))
			) {
				const columns = parentSection.columns.filter((section) =>
					section.quantity
						? selectedQuantity.includes(section.quantity)
						: true
				);
				newCropTable.push({ ...parentSection, columns });
			}
			return newCropTable;
		},
		[]
	);
	return newColumnData;
};

// init filters
const initSeason = "Spring";
const selectedTrellisOptions = ["Yes", "No"];
const selectedRegrowOptions = ["Yes", "No"];
const selectedProductOptions = ["Crop", "Preserves", "Keg"];
const initQuantityOptions = ["Total"];
const selectedQuantityOptions = ["Total", "Single"];

function Crops() {
	const [tableData, setTableData] = useLocalStorage(
		"svd-crops-tabledata",
		calcTableData(initSeason, selectedTrellisOptions, selectedRegrowOptions)
	);
	const [columnData, setColumnData] = useLocalStorage(
		"svd-crops-columndata",
		calcColumnData(selectedProductOptions, initQuantityOptions)
	);
	const [selectedSeason, setSelectedSeason] = useLocalStorage(
		"svd-crops-selectedseason",
		initSeason
	);
	const [selectedTrellis, setSelectedTrellis] = useLocalStorage(
		"svd-crops-selectedtrellis",
		selectedTrellisOptions
	);
	const [selectedRegrow, setSelectedRegrow] = useLocalStorage(
		"svd-crops-selectedregrow",
		selectedRegrowOptions
	);
	const [selectedProducts, setSelectedProducts] = useLocalStorage(
		"svd-crops-selectedproducts",
		selectedProductOptions
	);
	const [selectedQuantity, setSelectedQuantity] = useLocalStorage(
		"svd-crops-selectedquantity",
		initQuantityOptions
	);

	// on change handlers
	const handleChangeSeason = (newSeason) => {
		// set season selected
		setSelectedSeason(newSeason);
	};
	const handleSelectInfo = (name, option, selectedOptions, setSelected) => {
		// set option selected
		const newSelected = selectedOptions.includes(option)
			? selectedOptions.filter((x) => x !== option)
			: [...selectedOptions, option];
		setSelected(newSelected);
		// get temp vars
		const tmp = {
			selectedSeason,
			selectedTrellis,
			selectedRegrow,
			selectedProducts,
			selectedQuantity,
		};
		tmp[name] = newSelected;
		// update table data
		setTableData(
			calcTableData(
				tmp.selectedSeason,
				tmp.selectedTrellis,
				tmp.selectedRegrow
			)
		);
		// update table columns
		setColumnData([
			...calcColumnData(tmp.selectedProducts, tmp.selectedQuantity),
		]);
	};

	return (
		<div>
			<div className="d-flex flex-row" style={{ height: "60px" }}>
				<SeasonSelect
					selectedSeason={selectedSeason}
					handleChangeSeason={handleChangeSeason}
				/>
				<div className="d-flex flex-column flex-wrap">
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
					].map(
						({
							name,
							key,
							options,
							selectedOptions,
							setSelected,
						}) => (
							<div
								key={name}
								className="d-flex flex-column flex-wrap me-3"
							>
								<p className="me-1">{name}</p>
								<div className="d-flex flex-row">
									{options.map((option) => {
										const optionLabel = name + option;
										return (
											<div
												className="form-check me-2"
												key={optionLabel}
											>
												<input
													className="form-check-input"
													type="checkbox"
													value={option}
													id={optionLabel}
													checked={selectedOptions.includes(
														option
													)}
													onChange={() =>
														handleSelectInfo(
															key,
															option,
															selectedOptions,
															setSelected
														)
													}
												/>
												<label
													className="form-check-label"
													htmlFor={optionLabel}
												>
													{option}
												</label>
											</div>
										);
									})}
								</div>
							</div>
						)
					)}
				</div>
			</div>
			<Table
				columns={columnData}
				data={Object.values(tableData)}
				filterLocation={{ top: 40 }}
			/>
		</div>
	);
}

export default Crops;

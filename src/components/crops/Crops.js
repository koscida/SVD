import React, { useEffect } from "react";
import styled from "styled-components";
import Table from "../shared/react-table/Table";
import SelectColumnFilter from "../shared/react-table/SelectColumnFilter";
import useLocalStorage from "../shared/useLocalStorage";
import data from "../shared/data";
import SeasonSelect from "../shared/filters/SeasonSelect";

const Styles = styled.div`
	padding: 1rem;

	table {
		border-spacing: 0;
		border: 1px solid black;

		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}

		th,
		td {
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;

			:last-child {
				border-right: 0;
			}
		}
	}
`;

const cropTableData = data.cropsList.map((crop) => {
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
	newCrop.profitTotal = newCrop.cropSellTotal - newCrop.seedCostTotal;
	newCrop.profitTotalPerSeedCostTotal = (
		newCrop.profitTotal / newCrop.seedCostTotal
	).toFixed(2);
	newCrop.productivityTotal = (
		newCrop.profitTotal / newCrop.growTimeTotal
	).toFixed(2);
	newCrop.productivityTotalPerMonth = (
		newCrop.productivityTotal * 1600
	).toFixed(0);
	//
	// preserves price
	newCrop.preservesSellSingle = crop.preserves ? crop.preserves : 0;
	newCrop.preservesSellTotal = newCrop.preservesSellSingle * newCrop.yieldTotal;
	//
	// keg price
	newCrop.kegSellSingle = crop.keg ? crop.keg : 0;
	newCrop.kegSellTotal = newCrop.kegSellSingle * newCrop.yieldTotal;
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
				accessor: "profitTotal",
				quantity: "Total",
			},
			{
				Header: "Profit/Cost",
				accessor: "profitTotalPerSeedCostTotal",
				quantity: "Total",
			},
			{
				Header: "Productivity (Profit/Time)",
				accessor: "productivityTotal",
				quantity: "Total",
			},
			{
				Header: "Productivity/Month",
				accessor: "productivityTotalPerMonth",
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
const calcColumnData = (selectedQuantity) => {
	// set column data
	const newColumnData = cropTableColumn.map((parentSection, i) => {
		const columns = parentSection.columns.filter((section) =>
			section.quantity ? selectedQuantity.includes(section.quantity) : true
		);
		return { ...parentSection, columns };
	});
	return newColumnData;
};

// init filters
const initSeason = "Spring";
const selectedTrellisOptions = ["Yes", "No"];
const selectedRegrowOptions = ["Yes", "No"];
const initQuantityOptions = ["Total"];
const selectedQuantityOptions = ["Total", "Single"];

function Crops() {
	const [tableData, setTableData] = useLocalStorage(
		"svd-crops-tabledata",
		calcTableData(initSeason, selectedTrellisOptions, selectedRegrowOptions)
	);
	const [columnData, setColumnData] = useLocalStorage(
		"svd-crops-columndata",
		calcColumnData(initQuantityOptions)
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
	const [selectedQuantity, setSelectedQuantity] = useLocalStorage(
		"svd-crops-selectedquantity",
		initQuantityOptions
	);

	// on change handlers
	const handleChangeSeason = (newSeason) => {
		// set season selected
		setSelectedSeason(newSeason);
	};
	const handleSelectInfo = (option, selectedOptions, setSelected) => {
		// set option selected
		selectedOptions.includes(option)
			? setSelected(selectedOptions.filter((x) => x !== option))
			: setSelected([...selectedOptions, option]);
	};
	// filter use effects
	// table data
	useEffect(() => {
		// update table data
		setTableData(
			calcTableData(selectedSeason, selectedTrellis, selectedRegrow)
		);
	}, [selectedSeason, selectedTrellis, selectedRegrow, setTableData]);
	// table column data
	useEffect(() => {
		// update table data
		setColumnData([...calcColumnData(selectedQuantity)]);
	}, [selectedQuantity, setColumnData]);

	return (
		<div>
			<div className="d-flex flex-row">
				<SeasonSelect
					selectedSeason={selectedSeason}
					handleChangeSeason={handleChangeSeason}
				/>
				{[
					{
						name: "Trellis",
						options: selectedTrellisOptions,
						selectedOptions: selectedTrellis,
						setSelected: setSelectedTrellis,
					},
					{
						name: "Re-Grow",
						options: selectedRegrowOptions,
						selectedOptions: selectedRegrow,
						setSelected: setSelectedRegrow,
					},
					{
						name: "Quantity",
						options: selectedQuantityOptions,
						selectedOptions: selectedQuantity,
						setSelected: setSelectedQuantity,
					},
				].map(({ name, options, selectedOptions, setSelected }) => (
					<div className="d-flex flex-row mx-2" key={name}>
						<p className="me-1">{name}:</p>
						<div>
							{options.map((option) => {
								const optionLabel = name + option;
								return (
									<div className="form-check" key={optionLabel}>
										<input
											className="form-check-input"
											type="checkbox"
											value={option}
											id={optionLabel}
											checked={selectedOptions.includes(option)}
											onChange={() =>
												handleSelectInfo(option, selectedOptions, setSelected)
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
			</div>
			<Styles>
				<Table columns={columnData} data={Object.values(tableData)} />
			</Styles>
		</div>
	);
}

export default Crops;

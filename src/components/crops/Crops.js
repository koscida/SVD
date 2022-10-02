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
	// crop
	newCrop.crop = crop.name;
	newCrop.seasons = crop.season;
	newCrop.trellis = crop.trellis;
	newCrop.regeow = crop.regrow;
	//
	newCrop.season = crop.season.join("/");
	newCrop.trellis = crop.trellis ? "Yes" : "No";
	newCrop.regrow = crop.regrow ? "Yes" : "No";
	newCrop.giant = crop.giant ? "Yes" : "No";
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
	// time
	let harvests = 0;
	newCrop.growTime = crop.growTime;
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
	// seed cost totals
	newCrop.seedCostTotal =
		newCrop.seedCostSingle * (crop.regrow ? 1 : newCrop.harvests);

	// yield
	newCrop.yieldSingle = 1;
	newCrop.yieldTotal = newCrop.yieldSingle * newCrop.harvests;
	// per yields
	newCrop.seedCostPerYield = (
		newCrop.seedCostTotal / newCrop.yieldTotal
	).toFixed(2);
	newCrop.growTimeTotalPerYield = (
		newCrop.growTimeTotal / newCrop.yieldTotal
	).toFixed(2);
	// sell price
	newCrop.cropSell = crop.sell;
	newCrop.cropSellTotal = crop.sell * newCrop.yieldTotal;
	newCrop.cropSellTotalPerSeedCost = (
		newCrop.cropSellTotal / newCrop.seedCostTotal
	).toFixed(2);
	newCrop.cropSellTotalSubSeedCost =
		newCrop.cropSellTotal - newCrop.seedCostTotal;
	newCrop.cropSellTotalPerGrowTime = (
		newCrop.cropSellTotal / newCrop.growTimeTotal
	).toFixed(2);
	newCrop.preservesSell = 0;
	newCrop.kegSell = 0;
	//
	return newCrop;
});
const initColumnData = [
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
				Header: "Total Seeds",
				accessor: "seedCostTotal",
				quantity: "total",
			},
			{
				Header: "Total Seed Cost/Yield",
				accessor: "seedCostPerYield",
				quantity: "total",
			},
		],
	},
	{
		Header: "Grow Time",
		columns: [
			{
				Header: "Grow Time",
				accessor: "growTime",
				quantity: "Single",
			},
			{
				Header: "Re-Grow Time",
				accessor: "reGrowTime",
				quantity: "Single",
			},
			{
				Header: "Total Grow Time",
				accessor: "growTimeTotal",
				quantity: "total",
			},
			{
				Header: "Total Grow Time/Yield",
				accessor: "growTimeTotalPerYield",
				quantity: "total",
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
				quantity: "total",
			},
			{
				Header: "Total Yield",
				accessor: "yieldTotal",
				quantity: "total",
			},
		],
	},
	{
		Header: "Sell Crop Price",
		columns: [
			{
				Header: "Crop",
				accessor: "cropSell",
				quantity: "Single",
			},
			{
				Header: "Total Crop",
				accessor: "cropSellTotal",
				quantity: "Total",
			},
			{
				Header: "Total Crop Sell/Total Seed Cost",
				accessor: "cropSellTotalPerSeedCost",
				quantity: "Total",
			},
			{
				Header: "Profit (Total Crop Sell - Total Seed Cost)",
				accessor: "cropSellTotalSubSeedCost",
				quantity: "Total",
			},
			{
				Header: "Total Crop Sell/Total Grow Time",
				accessor: "cropSellTotalPerGrowTime",
				quantity: "Total",
			},
		],
	},
	{
		Header: "Sell Preserves Price",
		columns: [
			{
				Header: "Preserves",
				accessor: "preservesSell",
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
		Header: "Sell Keg Price",
		columns: [
			{
				Header: "Keg",
				accessor: "kegSell",
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

const initSeason = "Spring";
const selectedTrellisOptions = ["Yes", "No"];
const selectedRegrowOptions = ["Yes", "No"];
const selectedQuantityOptions = ["Single", "Total"];

function Crops() {
	const [tableData, setTableData] = useLocalStorage("svd-crops-tabledata", []);
	const [columnData, setColumnData] = useLocalStorage(
		"svd-crops-columndata",
		initColumnData
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
		selectedQuantityOptions
	);

	// set the table data
	useEffect(() => {
		const newTableData = cropTableData.filter(
			(crop) =>
				crop.seasons.includes(selectedSeason) &&
				selectedTrellis.includes(crop.trellis) &&
				selectedRegrow.includes(crop.regrow)
		);
		setTableData(newTableData);
	}, [
		tableData,
		setTableData,
		selectedSeason,
		selectedTrellis,
		selectedRegrow,
	]);
	// set the column data
	useEffect(() => {
		const newColumnData = initColumnData.map((parentSection) => {
			const newColumns = parentSection.columns.filter((section) =>
				section.quantity ? selectedQuantity.includes(section.quantity) : true
			);
			parentSection.columns = newColumns;
			return parentSection;
		});
		setColumnData(newColumnData);
	}, [columnData, setColumnData, selectedQuantity]);

	const handleChangeSeason = (newSeason) => {
		// set season
		setSelectedSeason(newSeason);
		// update table data
		const copy = cropTableData.filter((crop) =>
			crop.seasons.includes(newSeason)
		);
		setTableData(copy);
	};
	const handleSelectInfo = (option, selectedOptions, setSelected) => {
		// set option selected
		selectedOptions.includes(option)
			? setSelected(selectedOptions.filter((x) => x !== option))
			: setSelected([...selectedOptions, option]);
	};

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

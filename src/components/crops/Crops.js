import React from "react";
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

function Crops() {
	const [selectedSeason, setSelectedSeason] = useLocalStorage(
		"svd-crops-selectedseason",
		"Spring"
	);
	const [selectedTrellis, setSelectedTrellis] = useLocalStorage(
		"svd-crops-selectedtrellis",
		["Yes", "No"]
	);
	const columns = React.useMemo(
		() => [
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
					},
					{
						Header: "Total Seeds",
						accessor: "seedCostTotal",
					},
					{
						Header: "Total Seed Cost/Yield",
						accessor: "seedCostPerYield",
					},
				],
			},
			{
				Header: "Grow Time",
				columns: [
					{
						Header: "Grow Time",
						accessor: "growTime",
					},
					{
						Header: "Re-Grow Time",
						accessor: "reGrowTime",
					},
					{
						Header: "Total Grow Time",
						accessor: "growTimeTotal",
					},
					{
						Header: "Total Grow Time/Yield",
						accessor: "growTimeTotalPerYield",
					},
				],
			},

			{
				Header: "Yield",
				columns: [
					{
						Header: "Single Yield",
						accessor: "yieldSingle",
					},
					{
						Header: "Harvests",
						accessor: "harvests",
					},
					{
						Header: "Total Yield",
						accessor: "yieldTotal",
					},
				],
			},
			{
				Header: "Sell Price",
				columns: [
					{
						Header: "Crop",
						accessor: "cropSell",
					},
					{
						Header: "Total Crop",
						accessor: "cropSellTotal",
					},
					{
						Header: "Total Crop Sell/Total Seed Cost",
						accessor: "cropSellTotalPerSeedCost",
					},
					{
						Header: "Profit (Total Crop Sell - Total Seed Cost)",
						accessor: "cropSellTotalSubSeedCost",
					},
					{
						Header: "Total Crop Sell/Total Grow Time",
						accessor: "cropSellTotalPerGrowTime",
					},
					{
						Header: "Preserves",
						accessor: "preservesSell",
					},
					{
						Header: "Keg",
						accessor: "kegSell",
					},
				],
			},
		],
		[]
	);

	const tableData = data.cropsList.map((crop) => {
		const newCrop = {};
		// crop
		newCrop.crop = crop.name;
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
		return newCrop;
	});

	return (
		<div>
			<div className="d-flex flex-row">
				<SeasonSelect
					selectedSeason={selectedSeason}
					handleChangeSeason={(newSeason) => setSelectedSeason(newSeason)}
				/>
				<div className="d-flex flex-row">
					<p>Trellis:</p>
					<div>
						{["Yes", "No"].map((trellisOption) => {
							const trellisLabel = "trellis" + trellisOption;
							return (
								<div className="form-check" key={trellisLabel}>
									<input
										className="form-check-input"
										type="checkbox"
										value={trellisOption}
										id={trellisLabel}
										checked={selectedTrellis.includes(trellisOption)}
									/>
									<label className="form-check-label" for={trellisLabel}>
										{trellisOption}
									</label>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Styles>
				<Table columns={columns} data={tableData} />
			</Styles>
		</div>
	);
}

export default Crops;

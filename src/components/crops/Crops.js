import React from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import Table from "../shared/react-table/Table";
import SelectColumnFilter from "../shared/react-table/SelectColumnFilter";
import data from "../shared/data";

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
	const columns = React.useMemo(
		() => [
			{
				Header: "Crop",
				accessor: "crop",
			},
			{
				Header: "Crop Info",
				columns: [
					{
						Header: "Season",
						accessor: "season",
						Filter: SelectColumnFilter,
						filter: "includes",
					},
					{
						Header: "Trellis",
						accessor: "trellis",
						Filter: SelectColumnFilter,
						filter: "includes",
					},
					{
						Header: "Re-Grow",
						accessor: "regrow",
						Filter: SelectColumnFilter,
						filter: "includes",
					},
					{
						Header: "Giant",
						accessor: "giant",
						Filter: SelectColumnFilter,
						filter: "includes",
					},
				],
			},
			{
				Header: "Seed",
				columns: [
					{
						Header: "Seed",
						accessor: "seed",
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
			Object.values(crop.buy).reduce((sum, buyPrice) => sum + buyPrice, 0) /
			Object.values(crop.buy).length;
		newCrop.seedCostTotal = 0;
		// time
		newCrop.growTime = crop.growTime;
		newCrop.reGrowTime = crop.regrow ? crop.regrowTime : "-";
		newCrop.growTimeTotal = crop.growTime + (crop.regrow ? crop.regrowTime : 0);
		// yield
		newCrop.yieldSingle = 1;
		newCrop.yieldTotal = 0;
		// sell price
		newCrop.cropSell = crop.sell;
		newCrop.preservesSell = 0;
		newCrop.kegSell = 0;
		return newCrop;
	});

	return (
		<Styles>
			<Table columns={columns} data={tableData} />
		</Styles>
	);
}

export default Crops;

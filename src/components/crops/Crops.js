import React from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
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

function Table({ columns, data }) {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable(
			{
				columns,
				data,
			},
			useSortBy
		);

	// We don't want to render all 2000 rows for this example, so cap
	// it at 20 for this use case
	// const slicer = 20;
	// const firstPageRows = rows.slice(0, slicer);
	const firstPageRows = rows;
	const slicer = firstPageRows.length;

	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								// Add the sorting props to control sorting. For this example
								// we can add them into the header props
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("Header")}
									{/* Add a sort direction indicator */}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? " 🔽"
												: " 🔼"
											: ""}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{firstPageRows.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<br />
			<div>
				Showing the first {slicer} results of {rows.length} rows
			</div>
		</>
	);
}

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

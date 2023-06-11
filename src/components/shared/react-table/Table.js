import React from "react";
import styled from "styled-components";
import {
	useTable,
	useSortBy,
	useFilters,
	useGlobalFilter,
	useAsyncDebounce,
} from "react-table";
import { matchSorter } from "match-sorter";

const Styles = styled.div`
	--border-color: black;
	@media (prefers-color-scheme: dark) {
		--border-color: #eee;
	}
	.reactTable {
		overflow: hidden;
		position: relative;
		display: flex;
		flexdirection: row;
		border: 1px solid var(--border-color);
	}
	.tableWrapper {
		width: 100%;
		height: 100%;
		overflow: scroll;
	}
	table {
		border-spacing: 0;
		border: 1px solid var(--border-color);

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
			border-bottom: 1px solid var(--border-color);
			border-right: 1px solid var(--border-color);

			:last-child {
				border-right: 0;
			}
		}
	}
`;

// Define a default UI for filtering
function GlobalFilter({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter,
}) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = React.useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<span>
			Search:{" "}
			<input
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} records...`}
				style={{
					fontSize: "1.1rem",
					border: "0",
				}}
			/>
		</span>
	);
}

// Define a default UI for filtering
function DefaultColumnFilter({
	column: { filterValue, preFilteredRows, setFilter },
}) {
	const count = preFilteredRows.length;

	return (
		<input
			value={filterValue || ""}
			onChange={(e) => {
				setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
			}}
			placeholder={`Search ${count} records...`}
		/>
	);
}

function fuzzyTextFilterFn(rows, id, filterValue) {
	return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

// Our table component
function Table({ columns, data, filterLocation }) {
	const filterTypes = React.useMemo(
		() => ({
			// Add a new fuzzyTextFilterFn filter type.
			fuzzyText: fuzzyTextFilterFn,
			// Or, override the default text filter to use
			// "startWith"
			text: (rows, id, filterValue) => {
				return rows.filter((row) => {
					const rowValue = row.values[id];
					return rowValue !== undefined
						? String(rowValue)
								.toLowerCase()
								.startsWith(String(filterValue).toLowerCase())
						: true;
				});
			},
		}),
		[]
	);

	const defaultColumn = React.useMemo(
		() => ({
			// Let's set up our default Filter UI
			Filter: DefaultColumnFilter,
		}),
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		visibleColumns,
		preGlobalFilteredRows,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			defaultColumn, // Be sure to pass the defaultColumn option
			filterTypes,
		},
		useFilters, // useFilters!
		useGlobalFilter, // useGlobalFilter!
		useSortBy // sort!
	);

	// We don't want to render all of the rows for this example, so cap
	// it for this use case
	let sliceSize = 10;
	let firstPageRows = rows.slice(0, sliceSize);
	if (true) {
		firstPageRows = rows;
		sliceSize = firstPageRows.length;
	}

	const xFilterPadding =
		0 +
		(filterLocation.top ? filterLocation.top : 0) +
		(filterLocation.bottom ? filterLocation.bottom : 0);
	const yFilterPadding =
		0 +
		(filterLocation.left ? filterLocation.left : 0) +
		(filterLocation.right ? filterLocation.right : 0);

	return (
		<Styles>
			{/* <div
			// style={{
			// 	height: "calc(100vh - 100px )",
			// }}
			// style={{
			// 	width: "calc(100vw - (2 * 0.5rem) - " + yFilterPadding + "px )",
			// 	height:
			// 		"calc(100vh - (2 * 0.5rem) - 26px - " + xFilterPadding + "px )",
			// }}
			// className="reactTable"
			> */}
			<div
				className="tableWrapper"
				style={{
					height: "calc(100vh - 100px - 48px - 32px)",
					overflow: "scroll",
				}}
			>
				<table
					{...getTableProps()}
					style={{
						border: "0",
						width: "100%",
					}}
				>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									// Add the sorting props to control sorting. For this example
									// we can add them into the header props
									<th
										{...column.getHeaderProps(column.getSortByToggleProps())}
										style={{
											position: "sticky",
											top: 0,
											background: "#eaf0f9",
										}}
									>
										{column.render("Header")}
										{/* Add a sort direction indicator */}
										<span>
											{column.isSorted
												? column.isSortedDesc
													? " 🔽"
													: " 🔼"
												: ""}
										</span>
										{/* Render the columns filter UI */}
										{/* <div>
												{column.canFilter ? column.render("Filter") : null}
											</div> */}
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
			</div>
			{/* </div> */}
		</Styles>
	);
}

export default Table;

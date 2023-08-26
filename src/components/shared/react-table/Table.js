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

import { TableContainer, Paper, Box } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

// ////
// Styles

const StyledTable = styled.div`
	--border-color: #999;
	table {
		border-spacing: 0;
		border: 0;
		width: 100%;

		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}

		th {
			background: #eaf0f9;

			div {
				display: flex;
				flex-direction: row;
				align-items: center;
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

// ////
// Filters

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

// ////
// Table()

// Our table component
function Table({ columns, data, styles = {} }) {
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

	// ////
	// Render

	return (
		<StyledTable>
			<TableContainer component={Paper}>
				<div className="tableWrapper" style={styles}>
					<table {...getTableProps()}>
						<thead>
							{headerGroups.map((headerGroup, i) => (
								<tr
									{...headerGroup.getHeaderGroupProps()}
									style={
										i === headerGroups.length - 1
											? { position: "sticky", top: 0 }
											: {}
									}
								>
									{headerGroup.headers.map((column) => (
										// Add the sorting props to control sorting. For this example
										// we can add them into the header props
										<th
											{...column.getHeaderProps(column.getSortByToggleProps())}
										>
											<div>
												{column.render("Header")}
												{/* Add a sort direction indicator */}
												{column.isSorted ? (
													column.isSortedDesc ? (
														<ArrowDownward
															sx={{ maxWidth: "1rem", maxHeight: "1rem" }}
														/>
													) : (
														<ArrowUpward
															sx={{ maxWidth: "1rem", maxHeight: "1rem" }}
														/>
													)
												) : (
													<></>
												)}
											</div>
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
			</TableContainer>
		</StyledTable>
	);
}

export default Table;

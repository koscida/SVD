import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import RenderImageSmall from "../Icons/RenderImageSmall";
import RenderImg from "../Icons/RenderImg";

//
//
// SVDBasicTable
//
// input params:
// columns = [
//		{label, field, sx},
//		{label, field}
//	]
// rows = [
//		{[field]: value, [field]: value},
//		{[field]: value, [field]: value}
//	]

const _isObj = (varToTest) =>
	typeof varToTest === "object" && varToTest !== null;

// filter row data
const filterRows = (rows, columnSelected, filterSelected) => {
	const { field, filterType } = columnSelected;
	// console.log(
	// 	"--filterRows-- rows: ",
	// 	rows,
	// 	" field: ",
	// 	field,
	// 	" columnSelected: ",
	// 	columnSelected,
	// 	" filterSelected: ",
	// 	filterSelected,
	// 	" field: ",
	// 	field,
	// 	" filterType: ",
	// 	filterType
	// );

	// if there is a filter selected, filter or sort the rows
	if (filterType)
		if (filterType === "sort") {
			if (filterSelected !== null)
				return rows.sort((a, b) => {
					const aVal = _isObj(a[field]) ? a[field].data : a[field];
					const bVal = _isObj(b[field]) ? b[field].data : b[field];
					return filterSelected ? aVal < bVal : aVal > bVal;
				});
		} else if (filterType === "filter")
			if (filterSelected)
				return rows.filter((row) => {
					const res = row[field]
						? (_isObj(row[field])
								? row[field].data
								: row[field].split(",")
						  ).reduce(
								(shown, rowOption) =>
									shown || filterSelected[rowOption],
								false
						  )
						: true;
					// console.log(
					// 	"-row: row.name: ",
					// 	row.name,
					// 	" row[field]: ",
					// 	row[field],
					// 	" res: ",
					// 	res
					// );

					return res;
				});

	return rows;
};

const getFilterSelected = (columnSelected) => {
	// console.log("--getFilterSelected-- columnSelected: ", columnSelected);
	if (columnSelected && columnSelected["filterType"])
		if (columnSelected.filterType === "sort") return false;
		else if (columnSelected.filterType === "filter")
			if (columnSelected["filterOptions"])
				return columnSelected.filterOptions.reduce(
					(options, filterOption) => {
						options[filterOption] = true;
						return options;
					},
					{}
				);

	return null;
};

export default function SVDBasicTable({ columns, rows }) {
	const [columnSelected, setColumnSelected] = React.useState(
		columns ? columns[0] : null
	);
	const [filterSelected, setFilterSelected] = React.useState(
		getFilterSelected(columnSelected)
	);
	const [filteredRows, setFilteredRows] = React.useState(
		filterRows(rows, columnSelected, filterSelected)
	);

	// get filters

	// handlers
	const setNewColumn = (newColumn) => {
		// console.log("--setNewField-- newColumn: ", newColumn);
		setColumnSelected(newColumn);
		if (newColumn["filterType"])
			if (newColumn.filterType === "sort") setFilterSelected(false);
			else if (newColumn.filterType === "filter")
				if (
					newColumn["filterOptions"] &&
					newColumn["filterOptions"].length > 0
				)
					setFilterSelected(getFilterSelected(newColumn));
		setFilteredRows(filterRows(rows, newColumn, filterSelected));
	};
	const setNewSort = (newFilter) => {
		// console.log("--setNewFilter-- newFilter: ", newFilter);
		setFilterSelected(newFilter);
		setFilteredRows(filterRows(rows, columnSelected, newFilter));
	};
	const setNewFilterOption = (filterOption) => {
		const newFilters = {
			...filterSelected,
			[filterOption]: !filterSelected[filterOption],
		};
		setFilterSelected(newFilters);
		setFilteredRows(filterRows(rows, columnSelected, newFilters));
	};

	// display

	// render
	return !columns || !rows ? (
		<></>
	) : (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{columns.map((column) => {
							const {
								label,
								field,
								sx,
								filterType = null,
								filterOptions = null,
							} = column;

							return (
								<TableCell
									key={field}
									style={{
										...sx,
										position: "sticky",
										top: 0,
										padding: "1em",
									}}
								>
									{field === columnSelected.field ? (
										filterType === "sort" ? (
											<Box
												sx={{
													display: "flex",
													flexDirection: "row",
												}}
												onClick={() => {
													// console.log("onclick-sortBox");
													setNewSort(!filterSelected);
												}}
											>
												{filterSelected ? (
													<ArrowUpward
														sx={{
															width: "1rem",
															marginRight:
																"0.25rem",
															lineHeight:
																"1.5rem",
														}}
													/>
												) : (
													<ArrowDownward
														sx={{
															width: "1rem",
															marginRight:
																"0.25rem",
															lineHeight:
																"1.5rem",
														}}
													/>
												)}
												<span>{label}</span>
											</Box>
										) : filterType === "filter" ? (
											<Box>
												<span>{label}</span>
												<Box
													sx={{
														display: "flex",
														flexDirection: "row",
													}}
												>
													{filterOptions ? (
														filterOptions.map(
															(filterOption) => (
																<Box
																	key={
																		filterOption
																	}
																	onClick={() => {
																		// console.log("onclick-filterRenderImageSmall");
																		setNewFilterOption(
																			filterOption
																		);
																	}}
																>
																	<RenderImg
																		label={
																			filterOption
																		}
																		disabled={
																			!filterSelected[
																				filterOption
																			]
																		}
																		styles={{
																			maxHeight:
																				"1rem",
																			marginRight:
																				"0.25rem",
																		}}
																	/>
																</Box>
															)
														)
													) : (
														<></>
													)}
												</Box>
											</Box>
										) : (
											<>{label}</>
										)
									) : (
										<span
											onClick={() => {
												// console.log("onclick-span");
												if (
													field !==
													columnSelected.field
												)
													setNewColumn(column);
											}}
										>
											{label}
										</span>
									)}
								</TableCell>
							);
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{filteredRows.map((row, i) => (
						<TableRow
							key={i}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}
						>
							{columns.map(({ field, sx }) => (
								<TableCell key={field} style={sx}>
									{typeof row[field] === "object" &&
									row[field] !== null
										? row[field].cell
										: row[field]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

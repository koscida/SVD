import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

// function createData(name, calories, fat, carbs, protein, price) {
// 	return {
// 		name,
// 		calories,
// 		fat,
// 		carbs,
// 		protein,
// 		price,
// 		history: [
// 			{
// 				date: "2020-01-05",
// 				customerId: "11091700",
// 				amount: 3,
// 			},
// 			{
// 				date: "2020-01-02",
// 				customerId: "Anonymous",
// 				amount: 1,
// 			},
// 		],
// 	};
// }

// function Row(props) {
// 	const { row } = props;
// 	const [open, setOpen] = React.useState(false);

// 	return (
// 		<React.Fragment>
// 			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
// 				<TableCell>
// 					<IconButton
// 						aria-label="expand row"
// 						size="small"
// 						onClick={() => setOpen(!open)}
// 					>
// 						{open ? (
// 							<KeyboardArrowUpIcon />
// 						) : (
// 							<KeyboardArrowDownIcon />
// 						)}
// 					</IconButton>
// 				</TableCell>
// 				<TableCell component="th" scope="row">
// 					{row.name}
// 				</TableCell>
// 				<TableCell align="right">{row.calories}</TableCell>
// 				<TableCell align="right">{row.fat}</TableCell>
// 				<TableCell align="right">{row.carbs}</TableCell>
// 				<TableCell align="right">{row.protein}</TableCell>
// 			</TableRow>
// 			<TableRow>
// 				<TableCell
// 					style={{ paddingBottom: 0, paddingTop: 0 }}
// 					colSpan={6}
// 				>
// 					<Collapse in={open} timeout="auto" unmountOnExit>
// 						<Box sx={{ margin: 1 }}>
// 							<Typography
// 								variant="h6"
// 								gutterBottom
// 								component="div"
// 							>
// 								History
// 							</Typography>
// 							<Table size="small" aria-label="purchases">
// 								<TableHead>
// 									<TableRow>
// 										<TableCell>Date</TableCell>
// 										<TableCell>Customer</TableCell>
// 										<TableCell align="right">
// 											Amount
// 										</TableCell>
// 										<TableCell align="right">
// 											Total price ($)
// 										</TableCell>
// 									</TableRow>
// 								</TableHead>
// 								<TableBody>
// 									{row.history.map((historyRow) => (
// 										<TableRow key={historyRow.date}>
// 											<TableCell
// 												component="th"
// 												scope="row"
// 											>
// 												{historyRow.date}
// 											</TableCell>
// 											<TableCell>
// 												{historyRow.customerId}
// 											</TableCell>
// 											<TableCell align="right">
// 												{historyRow.amount}
// 											</TableCell>
// 											<TableCell align="right">
// 												{Math.round(
// 													historyRow.amount *
// 														row.price *
// 														100
// 												) / 100}
// 											</TableCell>
// 										</TableRow>
// 									))}
// 								</TableBody>
// 							</Table>
// 						</Box>
// 					</Collapse>
// 				</TableCell>
// 			</TableRow>
// 		</React.Fragment>
// 	);
// }

// Row.propTypes = {
// 	row: PropTypes.shape({
// 		calories: PropTypes.number.isRequired,
// 		carbs: PropTypes.number.isRequired,
// 		fat: PropTypes.number.isRequired,
// 		history: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				amount: PropTypes.number.isRequired,
// 				customerId: PropTypes.string.isRequired,
// 				date: PropTypes.string.isRequired,
// 			})
// 		).isRequired,
// 		name: PropTypes.string.isRequired,
// 		price: PropTypes.number.isRequired,
// 		protein: PropTypes.number.isRequired,
// 	}).isRequired,
// };

// const rows = [
// 	createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
// 	createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
// 	createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
// 	createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
// 	createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

// function EnhancedTableHead(props) {
// 	const {
// 		onSelectAllClick,
// 		order,
// 		orderBy,
// 		numSelected,
// 		rowCount,
// 		onRequestSort,
// 	} = props;
// 	const createSortHandler = (property) => (event) => {
// 		onRequestSort(event, property);
// 	};

// 	return (
// 		<TableHead>
// 			<TableRow>
// 				<TableCell padding="checkbox">
// 					<Checkbox
// 						color="primary"
// 						indeterminate={
// 							numSelected > 0 && numSelected < rowCount
// 						}
// 						checked={rowCount > 0 && numSelected === rowCount}
// 						onChange={onSelectAllClick}
// 						inputProps={{
// 							"aria-label": "select all desserts",
// 						}}
// 					/>
// 				</TableCell>
// 				{headCells.map((headCell) => (
// 					<TableCell
// 						key={headCell.id}
// 						align={headCell.numeric ? "right" : "left"}
// 						padding={headCell.disablePadding ? "none" : "normal"}
// 						sortDirection={orderBy === headCell.id ? order : false}
// 					>
// 						<TableSortLabel
// 							active={orderBy === headCell.id}
// 							direction={orderBy === headCell.id ? order : "asc"}
// 							onClick={createSortHandler(headCell.id)}
// 						>
// 							{headCell.label}
// 							{orderBy === headCell.id ? (
// 								<Box component="span" sx={visuallyHidden}>
// 									{order === "desc"
// 										? "sorted descending"
// 										: "sorted ascending"}
// 								</Box>
// 							) : null}
// 						</TableSortLabel>
// 					</TableCell>
// 				))}
// 			</TableRow>
// 		</TableHead>
// 	);
// }

// EnhancedTableHead.propTypes = {
// 	numSelected: PropTypes.number.isRequired,
// 	onRequestSort: PropTypes.func.isRequired,
// 	onSelectAllClick: PropTypes.func.isRequired,
// 	order: PropTypes.oneOf(["asc", "desc"]).isRequired,
// 	orderBy: PropTypes.string.isRequired,
// 	rowCount: PropTypes.number.isRequired,
// };

function EnhancedTableToolbar(props) {
	const { numSelected } = props;

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) =>
						alpha(
							theme.palette.primary.main,
							theme.palette.action.activatedOpacity
						),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography
					sx={{ flex: "1 1 100%" }}
					color="inherit"
					variant="subtitle1"
					component="div"
				>
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					sx={{ flex: "1 1 100%" }}
					variant="h6"
					id="tableTitle"
					component="div"
				>
					Nutrition
				</Typography>
			)}

			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Filter list">
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
}

// EnhancedTableToolbar.propTypes = {
// 	numSelected: PropTypes.number.isRequired,
// };

export default function EverythingTable() {
	// const [order, setOrder] = React.useState("asc");
	// const [orderBy, setOrderBy] = React.useState("calories");
	const [selected, setSelected] = React.useState([]);
	// const [page, setPage] = React.useState(0);
	// const [dense, setDense] = React.useState(false);
	// const [rowsPerPage, setRowsPerPage] = React.useState(5);

	// const handleRequestSort = (event, property) => {
	// 	const isAsc = orderBy === property && order === "asc";
	// 	setOrder(isAsc ? "desc" : "asc");
	// 	setOrderBy(property);
	// };

	// const handleSelectAllClick = (event) => {
	// 	if (event.target.checked) {
	// 		const newSelected = rows.map((n) => n.id);
	// 		setSelected(newSelected);
	// 		return;
	// 	}
	// 	setSelected([]);
	// };

	// const handleClick = (event, id) => {
	// 	const selectedIndex = selected.indexOf(id);
	// 	let newSelected = [];

	// 	if (selectedIndex === -1) {
	// 		newSelected = newSelected.concat(selected, id);
	// 	} else if (selectedIndex === 0) {
	// 		newSelected = newSelected.concat(selected.slice(1));
	// 	} else if (selectedIndex === selected.length - 1) {
	// 		newSelected = newSelected.concat(selected.slice(0, -1));
	// 	} else if (selectedIndex > 0) {
	// 		newSelected = newSelected.concat(
	// 			selected.slice(0, selectedIndex),
	// 			selected.slice(selectedIndex + 1)
	// 		);
	// 	}
	// 	setSelected(newSelected);
	// };

	// const handleChangePage = (event, newPage) => {
	// 	setPage(newPage);
	// };

	// const handleChangeRowsPerPage = (event) => {
	// 	setRowsPerPage(parseInt(event.target.value, 10));
	// 	setPage(0);
	// };

	// const handleChangeDense = (event) => {
	// 	setDense(event.target.checked);
	// };

	// const isSelected = (id) => selected.indexOf(id) !== -1;

	// // Avoid a layout jump when reaching the last page with empty rows.
	// const emptyRows =
	// 	page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	// const visibleRows = React.useMemo(
	// 	() =>
	// 		stableSort(rows, getComparator(order, orderBy)).slice(
	// 			page * rowsPerPage,
	// 			page * rowsPerPage + rowsPerPage
	// 		),
	// 	[order, orderBy, page, rowsPerPage]
	// );

	return (
		<Box sx={{ width: "100%" }}>
			<Paper sx={{ width: "100%", mb: 2 }}>
				<EnhancedTableToolbar numSelected={selected.length} />
				{/* <TableContainer component={Paper}>
					<Table
						sx={{ minWidth: 650 }}
						size="small"
						aria-label="a dense table"
					>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{visibleRows.map((row, index) => {
								const isItemSelected = isSelected(row.id);
								const labelId = `enhanced-table-checkbox-${index}`;
								return (
									<Row
										key={row.name}
										row={row}
										hover
										onClick={(event) =>
											handleClick(event, row.id)
										}
										selected={isItemSelected}
										sx={{ cursor: "pointer" }}
									/>
								);
							})}
						</TableBody>
						</Table> 
				</TableContainer>*/}
			</Paper>
		</Box>
	);
}

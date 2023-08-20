import Table from "../shared/react-table/Table";
import useLocalStorage from "../shared/useLocalStorage";
import getColumnData from "./AnimalsHomeGetColumnData";
import getTableData from "./AnimalsHomeGetTableData";
import RadioOption from "../shared/inputs/RadioOption";
import CheckOption from "../shared/inputs/CheckOption";

// ////
// Helpers

// ////
// Options
const filterDataProcess = {
	product: "Product",
	processing: "Processing",
	cask: "Cask",
	total: "Total",
};
const filterDataHearts = {
	"1heart": "1 Heart",
	"2hearts": "2 Hearts",
	"3hearts": "3 Hearts",
	"4hearts": "4 Hearts",
	"5hearts": "5 Hearts",
};
const filterDataQuality = {
	regular: "Regular",
	silver: "Silver",
	gold: "Gold",
	iridium: "Iridium",
};
const filterDataProduction = {
	single: "Single",
	daily: "Daily",
	monthly: "Monthly",
	all: "All Product",
};

const initFilterProcess = ["product", "processing", "cask", "total"];
const initFilterHearts = "5hearts";
const initFilterQuality = "iridium";
const initFilterQuantity = "monthly";
const initFilterProduction = "single";

// ////
// AnimalsHome()

function AnimalsHome() {
	const [filters, setFilters] = useLocalStorage("svd-animals-filters", {
		process: initFilterProcess,
		hearts: initFilterHearts,
		quality: initFilterQuality,
		quantity: initFilterQuantity,
		production: initFilterProduction,
	});
	const [columnData, setColumnData] = useLocalStorage(
		"svd-animals-setColumnData",
		getColumnData(initFilterProduction, initFilterProcess)
	);
	const [tableData, setTableData] = useLocalStorage(
		"svd-animals-tableData",
		getTableData(initFilterHearts, initFilterQuality)
	);

	// handlers
	const handleRadioClick = (name, value) => {
		// update filters
		const newFilters = { ...filters };
		newFilters[name] = value;
		setFilters(newFilters);

		// update table
		setColumnData(
			getColumnData(newFilters["production"], newFilters["process"])
		);
		setTableData(getTableData(newFilters["hearts"], newFilters["quality"]));
	};
	const handleCheckboxClick = (name, value) => {
		// update filters
		const newFilters = { ...filters };
		newFilters[name] = newFilters[name].includes(value)
			? newFilters[name].filter((n) => n !== value)
			: [...newFilters[name], value];
		setFilters(newFilters);

		// update table
		setColumnData(
			getColumnData(newFilters["production"], newFilters["process"])
		);
		setTableData(getTableData(newFilters["hearts"], newFilters["quality"]));
	};

	// return
	return (
		<div className="d-flex flex-row">
			<div className="d-flex flex-column" style={{ width: "150px" }}>
				{[
					{
						label: "Process",
						name: "process",
						type: "checkbox",
						filterData: filterDataProcess,
						handleClick: handleCheckboxClick,
					},
					{
						label: "Hearts",
						name: "hearts",
						type: "radio",
						filterData: filterDataHearts,
						handleClick: handleRadioClick,
					},
					{
						label: "Quality",
						name: "quality",
						type: "radio",
						filterData: filterDataQuality,
						handleClick: handleRadioClick,
					},
					{
						label: "Production",
						name: "production",
						type: "radio",
						filterData: filterDataProduction,
						handleClick: handleRadioClick,
					},
				].map(({ label, name, type, filterData, handleClick }) => {
					return (
						<div key={label} className="m-2">
							{label}
							{Object.entries(filterData).map(([filterKey, filterValue], i) => {
								return type === "radio" ? (
									<RadioOption
										key={i}
										name={name}
										label={filterValue}
										value={filterKey}
										checked={filterKey === filters[name] && "checked"}
										handleOnChange={(e) => handleClick(name, e.target.value)}
									/>
								) : (
									<CheckOption
										key={i}
										name={name}
										label={filterValue}
										value={filterKey}
										checked={filters[name].includes(filterKey) && "checked"}
										handleOnChange={(e) => handleClick(name, e.target.value)}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
			<Table
				columns={columnData}
				data={tableData}
				filterLocation={{ left: 150 }}
			/>
		</div>
	);
}

export default AnimalsHome;

import Table from "../shared/react-table/Table";
import useLocalStorage from "../shared/useLocalStorage";
import getColumnData from "./AnimalsHomeGetColumnData";
import getTableData from "./AnimalsHomeGetTableData";

// ////
// Helpers

// ////
// Options

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
const filterDataQuantity = {
	single: "Single",
	monthly: "Monthly",
};
const filterDataProduction = {
	single: "Single",
	monthly: "Monthly",
	all: "All Product",
};

const initFilterHearts = "5hearts";
const initFilterQuality = "iridium";
const initFilterQuantity = "monthly";
const initFilterProduction = "single";

// ////
// AnimalsHome()

function AnimalsHome() {
	const [filters, setFilters] = useLocalStorage("svd-animals-filters", {
		hearts: initFilterHearts,
		quality: initFilterQuality,
		quantity: initFilterQuantity,
		production: initFilterProduction,
	});
	const [tableData, setTableData] = useLocalStorage(
		"svd-animals-tableData",
		getTableData(initFilterHearts, initFilterQuality)
	);
	const [columnData, setColumnData] = useLocalStorage(
		"svd-animals-setColumnData",
		getColumnData(initFilterQuantity, initFilterProduction)
	);

	// handlers
	const handleClick = (name, value) => {
		// update filters
		const newFilters = { ...filters };
		newFilters[name] = value;
		setFilters(newFilters);
		// update table
		setTableData(getTableData(newFilters["hearts"], newFilters["quality"]));
		setColumnData(
			getColumnData(newFilters["quantity"], newFilters["production"])
		);
	};

	return (
		<div className="d-flex flex-row">
			<div className="d-flex flex-column" style={{ width: "150px" }}>
				{[
					{
						label: "Hearts",
						name: "hearts",
						filterData: filterDataHearts,
					},
					{
						label: "Quality",
						name: "quality",
						filterData: filterDataQuality,
					},
					{
						label: "Production",
						name: "production",
						filterData: filterDataProduction,
					},
				].map(({ label, name, filterData, selected, setFilter }) => {
					return (
						<div key={label} className="m-2">
							{label}
							{Object.entries(filterData).map(([filterKey, filterValue], i) => {
								return (
									<div className="form-check" key={i}>
										<input
											className="form-check-input"
											type="radio"
											name={label}
											id={label + i}
											value={filterKey}
											checked={filterKey === filters[name] && "checked"}
											onChange={(e) => handleClick(name, e.target.value)}
										/>
										<label className="form-check-label" htmlFor={label + i}>
											{filterValue}
										</label>
									</div>
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

import Table from "../shared/react-table/Table";
import { animals, animalProducts } from "../shared/data/dataAnimals";
import useLocalStorage from "../shared/useLocalStorage";

// ////
// Helpers

// process table data
const getTableData = (filterHearts, filterQuality) => {
	return Object.values(animalProducts).reduce((tableData, product) => {
		product.animals.forEach((animalName) => {
			// get animal
			const animal = animals[animalName];
			// create new object
			const newProduct = {};

			// animal
			newProduct.animalName = animalName;
			newProduct.building = animal.building;

			// product
			newProduct.productName = product.name;
			newProduct.productTime = animal.time[filterHearts];
			newProduct.productQuantity = animal.produces[filterHearts];
			newProduct.productProfit = product.sellPrice[filterQuality];
			newProduct.monthlyProductQuantity = Math.round(
				(newProduct.productQuantity / newProduct.productTime) * 28
			);
			newProduct.monthlyProductProfit =
				newProduct.productProfit * newProduct.monthlyProductQuantity;

			// if machine processing
			if (product.machineProcessing) {
				const processing = Object.values(product.machineProcessing)[0];
				// machine processing
				newProduct.processingMachine = processing.name;
				newProduct.processingProductName = processing.productName;
				// single
				newProduct.processingTime = processing.processingTime;
				newProduct.processingQuantity = 1;
				newProduct.processingSell =
					processing.productSellPrice[processing.productQuality[filterQuality]];
				newProduct.processingProfit =
					newProduct.processingSell - newProduct.productProfit;
				// monthly
				newProduct.monthlyProcessingTime = 28;
				newProduct.monthlyProcessingQuantity = Math.round(
					(newProduct.processingQuantity / newProduct.processingTime) * 28
				);
				newProduct.monthlyProcessingSell =
					newProduct.processingSell * newProduct.monthlyProcessingQuantity;
				newProduct.monthlyProcessingProfit =
					newProduct.processingProfit * newProduct.monthlyProcessingQuantity;
				// all
				newProduct.allProcessingTime =
					newProduct.processingTime * newProduct.productQuantity;
				newProduct.allProcessingQuantity = newProduct.productQuantity;
				newProduct.allProcessingSell =
					newProduct.processingSell * newProduct.allProcessingQuantity;
				newProduct.allProcessingProfit =
					newProduct.allProcessingSell - newProduct.productProfit;
			}

			// push
			tableData.push(newProduct);
		});

		// return
		return tableData;
	}, []);
};
// console.log("tableData", tableData);

// process column data
const getColumnData = (filterQuantity, filterProduction) => {
	return [
		{
			Header: "Animal Info",
			columns: [
				{
					Header: "Animal",
					accessor: "animalName",
				},
				{
					Header: "Building",
					accessor: "building",
				},
			],
		},
		{
			Header: "Product",
			columns: [
				{
					Header: "Product",
					accessor: "productName",
				},
				{
					Header: "Days",
					accessor: "productTime",
					production: ["single"],
				},
				{
					Header: "Quantity",
					accessor: "productQuantity",
					production: ["single"],
				},
				{
					Header: "Profit",
					accessor: "productProfit",
					production: ["single"],
				},
				{
					Header: "Quantity/Month",
					accessor: "monthlyProductQuantity",
					production: ["monthly", "all"],
				},
				{
					Header: "Profit/Month",
					accessor: "monthlyProductProfit",
					production: ["monthly", "all"],
				},
			],
		},
		{
			Header: "Processing",
			columns: [
				{
					Header: "Machine",
					accessor: "processingMachine",
				},
				{
					Header: "Product",
					accessor: "processingProductName",
				},
				// single
				{
					Header: "Days",
					accessor: "processingTime",
					production: ["single"],
				},
				{
					Header: "Quantity",
					accessor: "processingQuantity",
					production: ["single"],
				},
				{
					Header: "Sell",
					accessor: "processingSell",
					production: ["single"],
				},
				{
					Header: "Profit",
					accessor: "processingProfit",
					production: ["single"],
				},
				// monthly
				{
					Header: "Days",
					accessor: "monthlyProcessingTime",
					production: ["monthly"],
				},
				{
					Header: "Quantity/Month",
					accessor: "monthlyProcessingQuantity",
					production: ["monthly"],
				},
				{
					Header: "Sell/Month",
					accessor: "monthlyProcessingSell",
					production: ["monthly"],
				},
				{
					Header: "Profit/Month",
					accessor: "monthlyProcessingProfit",
					production: ["monthly"],
				},
				// all
				{
					Header: "Days",
					accessor: "allProcessingTime",
					production: ["all"],
				},
				{
					Header: "Quantity",
					accessor: "allProcessingQuantity",
					production: ["all"],
				},
				{
					Header: "Sell",
					accessor: "allProcessingSell",
					production: ["all"],
				},
				{
					Header: "Profit",
					accessor: "allProcessingProfit",
					production: ["all"],
				},
			],
		},
	].reduce((dataColumns, headerParent) => {
		const columns = [...headerParent.columns].filter((column) => {
			let include = true;
			if (column.quantity && !column.quantity.includes(filterQuantity))
				include = false;
			if (column.production && !column.production.includes(filterProduction))
				include = false;
			return include;
		});
		const header = { ...headerParent, columns };

		dataColumns.push(header);
		return dataColumns;
	}, []);
};

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
const initFilterProduction = "all";

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
		getTableData(initFilterHearts, initFilterQuantity)
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
		<div>
			<div>
				<div className="d-flex flex-row">
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
								{Object.entries(filterData).map(
									([filterKey, filterValue], i) => {
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
									}
								)}
							</div>
						);
					})}
				</div>
			</div>
			<Table columns={columnData} data={tableData} />
		</div>
	);
}

export default AnimalsHome;

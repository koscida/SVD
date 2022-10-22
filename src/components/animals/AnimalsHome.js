import Table from "../shared/react-table/Table";
import { animals, animalProducts } from "../shared/data/dataAnimals";
import useLocalStorage from "../shared/useLocalStorage";

// ////
// Helpers

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
				// single
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
					Header: "Cost",
					accessor: "productCost",
					production: ["single"],
				},
				{
					Header: "Sell",
					accessor: "productSell",
					production: ["single"],
				},
				{
					Header: "Sell/Day",
					accessor: "productSellDay",
					production: ["single"],
				},
				{
					Header: "Profit (Sell - Cost)",
					accessor: "productProfit",
					production: ["single"],
				},
				{
					Header: "Profit/Day",
					accessor: "productProfitDay",
					production: ["single"],
				},
				// monthly
				{
					Header: "Product/Month",
					accessor: "monthlyProductProduces",
					production: ["monthly", "all"],
				},
				{
					Header: "Quantity/Month",
					accessor: "monthlyProductQuantity",
					production: ["monthly", "all"],
				},
				{
					Header: "Sell/Month",
					accessor: "monthlyProductSell",
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
					Header: "Sell",
					accessor: "processingSell",
					production: ["single"],
				},
				{
					Header: "Sell/Day",
					accessor: "processingSellDay",
					production: ["single"],
				},
				{
					Header: "Diff (Sell - Sell)",
					accessor: "processingDiff",
					production: ["single"],
				},
				{
					Header: "Diff/Day",
					accessor: "processingDiffDay",
					production: ["single"],
				},
				{
					Header: "Profit (Sell - Cost)",
					accessor: "processingProfit",
					production: ["single"],
				},
				{
					Header: "Profit/Day",
					accessor: "processingProfitDay",
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
		{
			Header: "Keg",
			columns: [
				// single
				{
					Header: "Days",
					accessor: "kegTime",
					production: ["single"],
				},
				{
					Header: "Sell",
					accessor: "kegSell",
					production: ["single"],
				},
			],
		},
		{
			Header: "Final",
			columns: [
				// single
				{
					Header: "Days",
					accessor: "totalTime",
					production: ["single"],
				},
				{
					Header: "Sell",
					accessor: "totalSell",
					production: ["single"],
				},
				{
					Header: "Sell/Days",
					accessor: "totalSellDays",
					production: ["single"],
				},
				{
					Header: "Diff",
					accessor: "totalDiff",
					production: ["single"],
				},
				{
					Header: "Diff/Days",
					accessor: "totalDiffDays",
					production: ["single"],
				},
				{
					Header: "Profit",
					accessor: "totalProfit",
					production: ["single"],
				},
				{
					Header: "Profit/Days",
					accessor: "totalProfitDays",
					production: ["single"],
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

// process table data
const getTableData = (filterHearts, filterQuality) => {
	return Object.values(animalProducts)
		.reduce((tableData, product) => {
			product.animals.forEach((animalName) => {
				// get animal
				const animal = animals[animalName];
				// create new object
				const newProduct = {};

				// ////
				// animal
				newProduct.animalName = animalName;
				newProduct.building = animal.building;

				// ////
				// product
				newProduct.productName = product.name;

				// single
				newProduct.productTime = animal.time[filterHearts];
				newProduct.productQuantity = animal.produces[filterHearts];
				newProduct.productCost = 50 * newProduct.productTime;
				newProduct.productSell = product.sellPrice[filterQuality];
				newProduct.productSellDay = Math.round(
					newProduct.productSell / newProduct.productTime
				);
				newProduct.productProfit =
					newProduct.productSell - newProduct.productCost;
				newProduct.productProfitDay = Math.round(
					newProduct.productProfit / newProduct.productTime
				);

				// monthly
				newProduct.monthlyProductProduces = Math.round(
					28 / newProduct.productTime
				);
				newProduct.monthlyProductQuantity =
					newProduct.monthlyProductProduces * newProduct.productQuantity;
				newProduct.monthlyProductSell =
					newProduct.productSell * newProduct.monthlyProductQuantity;
				newProduct.monthlyProductProfit =
					newProduct.productProfit * newProduct.monthlyProductQuantity;

				// all
				newProduct.allProductProduces = newProduct.monthlyProductProduces;
				newProduct.allProductQuantity = newProduct.monthlyProductQuantity;
				newProduct.allProductSell = newProduct.monthlyProductSell;
				newProduct.allProductProfit = newProduct.monthlyProductProfit;

				// ////
				// machine processing
				//
				// if machine processing
				if (product.machineProcessing) {
					// get machine processing
					const processing = Object.values(product.machineProcessing)[0];
					newProduct.processingMachine = processing.machineName;
					newProduct.processingProductName = processing.productName;

					// single
					const productQuality = processing.productQuality[filterQuality];
					newProduct.processingTime = processing.processingTime;
					newProduct.processingSell =
						processing.productSellPrice[productQuality];
					newProduct.processingSellDay = Math.round(
						newProduct.processingSell / newProduct.processingTime
					);
					newProduct.processingDiff =
						newProduct.processingSell - newProduct.productSell;
					newProduct.processingDiffDay = Math.round(
						newProduct.processingDiff / newProduct.processingTime
					);
					newProduct.processingProfit =
						newProduct.processingSell - newProduct.productCost;
					newProduct.processingProfitDay = Math.round(
						newProduct.processingProfit / newProduct.processingTime
					);

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
						newProduct.processingTime * newProduct.monthlyProcessingQuantity;
					newProduct.allProcessingQuantity =
						newProduct.monthlyProcessingQuantity;
					newProduct.allProcessingSell = newProduct.monthlyProcessingSell;
					newProduct.allProcessingProfit = newProduct.monthlyProcessingProfit;

					// ////
					// aging
					// if aging
					if (product.aging) {
						// get processing
						const aging = Object.values(product.aging)[0];
						newProduct.kegTime = aging.time["iridium"];
						if (productQuality === "regular")
							newProduct.kegTime += aging.time["silver"] + aging.time["gold"];
						newProduct.kegSell = aging.sell;
					}
				}

				// ////
				// totals
				newProduct.totalTime =
					newProduct.productTime +
					(newProduct.processingTime ?? 0) +
					(newProduct.kegTime ?? 0);
				newProduct.totalSell =
					newProduct.kegSell ??
					newProduct.processingSell ??
					newProduct.productSell;
				newProduct.totalSellDays = Math.round(
					newProduct.totalSell / newProduct.totalTime
				);
				newProduct.totalDiff = newProduct.totalSell - newProduct.productSell;
				newProduct.totalDiffDays = Math.round(
					newProduct.totalDiff / newProduct.totalTime
				);
				newProduct.totalProfit = newProduct.totalSell - newProduct.productCost;
				newProduct.totalProfitDays = Math.round(
					newProduct.totalProfit / newProduct.totalTime
				);

				// push
				tableData.push(newProduct);
			});

			// return
			return tableData;
		}, [])
		.sort((a, b) => b.animalName < a.animalName);
};
// console.log("tableData", tableData);

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

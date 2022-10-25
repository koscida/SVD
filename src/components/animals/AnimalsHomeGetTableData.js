import { animals, animalProducts } from "../shared/data/dataAnimals";

const filterValues = ["single", "daily", "monthly", "all"];

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
				newProduct.productQuality = filterQuality;

				filterValues.forEach((filter) => {
					const dayMultiplier =
						filter === "single" || filter === "daily" ? 1 : 28;

					// get produces and time
					const produces = animal.produces[filterHearts];
					const time = animal.time[filterHearts];
					const productPerDay = (produces / time).toFixed(2);
					const dayPerProduct = (time / produces).toFixed(2);

					// single
					if (filter === "single") {
						newProduct[filter + "productTime"] = 1 * dayPerProduct;
						newProduct[filter + "productQuantity"] = 1;
					} else if (filter === "daily") {
						newProduct[filter + "productTime"] = 1;
						newProduct[filter + "productQuantity"] = 1 * productPerDay;
					} else if (filter === "monthly") {
						newProduct[filter + "productTime"] = 28;
						newProduct[filter + "productQuantity"] = 28 * productPerDay;
					} else if (filter === "all") {
						newProduct[filter + "productTime"] = 28;
						newProduct[filter + "productQuantity"] = 28 * productPerDay;
					}

					// products
					newProduct[filter + "productQuantityDay"] = (
						newProduct[filter + "productQuantity"] /
						newProduct[filter + "productTime"]
					).toFixed(1);
					newProduct[filter + "productCost"] =
						50 * newProduct[filter + "productTime"] * dayMultiplier;
					newProduct[filter + "productSell"] =
						product.sellPrice[filterQuality] * dayMultiplier;
					newProduct[filter + "productSellDay"] = (
						newProduct[filter + "productSell"] /
						newProduct[filter + "productTime"]
					).toFixed(0);
					newProduct[filter + "productProfit"] =
						newProduct[filter + "productSell"] -
						newProduct[filter + "productCost"];
					newProduct[filter + "productProfitDay"] = (
						newProduct[filter + "productProfit"] /
						newProduct[filter + "productTime"]
					).toFixed(0);
				});

				// ////
				// machine processing
				//
				// if machine processing
				if (product.machineProcessing) {
					// get machine processing
					const processing = Object.values(product.machineProcessing)[0];
					newProduct.processingMachine = processing.machineName;
					newProduct.processingProductName = processing.productName;
					newProduct.processingProductQuality =
						processing.productQuality[filterQuality];

					// production type
					filterValues.forEach((filter) => {
						// single
						newProduct[filter + "processingTime"] =
							processing.processingTime *
							newProduct[filter + "productQuantity"];
						newProduct[filter + "processingSell"] =
							processing.productSellPrice[newProduct.processingProductQuality] *
							newProduct[filter + "productQuantity"];
						newProduct[filter + "processingSellDay"] = (
							newProduct[filter + "processingSell"] /
							newProduct[filter + "processingTime"]
						).toFixed(2);
						newProduct[filter + "processingDiff"] =
							newProduct[filter + "processingSell"] -
							newProduct[filter + "productSell"];
						newProduct[filter + "processingDiffDay"] = (
							newProduct[filter + "processingDiff"] /
							newProduct[filter + "processingTime"]
						).toFixed(2);
						newProduct[filter + "processingProfit"] =
							newProduct[filter + "processingSell"] -
							newProduct[filter + "productCost"];
						newProduct[filter + "processingProfitDay"] = (
							newProduct[filter + "processingProfit"] /
							newProduct[filter + "processingTime"]
						).toFixed(2);
					});

					// ////
					// aging
					// if aging
					if (product.aging) {
						// get aging
						const aging = Object.values(product.aging)[0];
						newProduct.agingMachine = aging.machineName;
						newProduct.agingProduct = newProduct.processingProductName;
						newProduct.agingProductQuality = "iridium";

						// for each production type
						filterValues.forEach((filter) => {
							newProduct[filter + "agingTime"] = aging.time["iridium"];
							if (newProduct.processingProductQuality === "regular")
								newProduct.singleagingTime +=
									aging.time["silver"] + aging.time["gold"];
							newProduct[filter + "agingSell"] = aging.sell;
						});
					}
				}

				// ////
				// totals
				filterValues.forEach((filter) => {
					newProduct[filter + "totalTime"] =
						newProduct[filter + "productTime"] +
						(newProduct[filter + "processingTime"] ?? 0) +
						(newProduct[filter + "agingTime"] ?? 0);
					newProduct[filter + "totalSell"] =
						newProduct[filter + "agingSell"] ??
						newProduct[filter + "processingSell"] ??
						newProduct[filter + "productSell"];
					newProduct[filter + "totalSellDays"] = (
						newProduct[filter + "totalSell"] / newProduct[filter + "totalTime"]
					).toFixed(2);
					newProduct[filter + "totalDiff"] =
						newProduct[filter + "totalSell"] -
						newProduct[filter + "productSell"];
					newProduct[filter + "totalDiffDays"] = (
						newProduct[filter + "totalDiff"] / newProduct[filter + "totalTime"]
					).toFixed(2);
					newProduct[filter + "totalProfit"] =
						newProduct[filter + "totalSell"] -
						newProduct[filter + "productCost"];
					newProduct[filter + "totalProfitDays"] = (
						newProduct[filter + "totalProfit"] /
						newProduct[filter + "totalTime"]
					).toFixed(2);
				});

				// push
				tableData.push(newProduct);
			});

			// return
			return tableData;
		}, [])
		.sort((a, b) => b.animalName < a.animalName);
};
// console.log("tableData", tableData);

export default getTableData;

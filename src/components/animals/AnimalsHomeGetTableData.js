import { animals, animalProducts } from "../shared/data/dataAnimals";

const filterValues = ["single", "monthly", "all"];

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
					// day multiplier
					const dayMultiplier = filter === "single" ? 1 : 28;
					//

					// single
					newProduct[filter + "productTime"] =
						animal.time[filterHearts] * dayMultiplier;
					newProduct[filter + "productQuantity"] =
						animal.produces[filterHearts] * dayMultiplier;
					newProduct[filter + "productQuantityDay"] = Math.round(
						newProduct[filter + "productQuantity"] /
							newProduct[filter + "productTime"]
					);
					newProduct[filter + "productCost"] =
						50 * newProduct[filter + "productTime"] * dayMultiplier;
					newProduct[filter + "productSell"] =
						product.sellPrice[filterQuality] * dayMultiplier;
					newProduct[filter + "productSellDay"] = Math.round(
						newProduct[filter + "productSell"] /
							newProduct[filter + "productTime"]
					);
					newProduct[filter + "productProfit"] =
						newProduct[filter + "productSell"] -
						newProduct[filter + "productCost"];
					newProduct[filter + "productProfitDay"] = Math.round(
						newProduct[filter + "productProfit"] /
							newProduct[filter + "productTime"]
					);
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
						newProduct[filter + "processingSellDay"] = Math.round(
							newProduct[filter + "processingSell"] /
								newProduct[filter + "processingTime"]
						);
						newProduct[filter + "processingDiff"] =
							newProduct[filter + "processingSell"] -
							newProduct[filter + "productSell"];
						newProduct[filter + "processingDiffDay"] = Math.round(
							newProduct[filter + "processingDiff"] /
								newProduct[filter + "processingTime"]
						);
						newProduct[filter + "processingProfit"] =
							newProduct[filter + "processingSell"] -
							newProduct[filter + "productCost"];
						newProduct[filter + "processingProfitDay"] = Math.round(
							newProduct[filter + "processingProfit"] /
								newProduct[filter + "processingTime"]
						);
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
						// single
						newProduct.singleagingTime = aging.time["iridium"];
						if (newProduct.processingProductQuality === "regular")
							newProduct.singleagingTime +=
								aging.time["silver"] + aging.time["gold"];
						newProduct.singleagingSell = aging.sell;
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
					newProduct[filter + "totalSellDays"] = Math.round(
						newProduct[filter + "totalSell"] / newProduct[filter + "totalTime"]
					);
					newProduct[filter + "totalDiff"] =
						newProduct[filter + "totalSell"] -
						newProduct[filter + "productSell"];
					newProduct[filter + "totalDiffDays"] = Math.round(
						newProduct[filter + "totalDiff"] / newProduct[filter + "totalTime"]
					);
					newProduct[filter + "totalProfit"] =
						newProduct[filter + "totalSell"] -
						newProduct[filter + "productCost"];
					newProduct[filter + "totalProfitDays"] = Math.round(
						newProduct[filter + "totalProfit"] /
							newProduct[filter + "totalTime"]
					);
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

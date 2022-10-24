const formatGold = (value) => {
	let formatted;
	if (value) {
		formatted = `${value}g`;
	} else {
		formatted = "-";
	}
	return formatted;
};

const formatPerDay = (value) => {
	let formatted;
	if (value) {
		formatted = `${value}g/day`;
	} else {
		formatted = "-";
	}
	return formatted;
};
const formatDay = (value) => {
	let formatted;
	if (value) {
		formatted = `${value} day` + (value > 1 ? "s" : "");
	} else {
		formatted = "-";
	}
	return formatted;
};

const formatPercentage = (value) => {
	let formatted;
	if (value) {
		let converted = Math.round(value * 100);
		formatted = converted === 0 ? "-" : `${converted}%`;
	} else {
		formatted = "-";
	}
	return formatted;
};

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
					Header: "Quality",
					accessor: "productQuality",
				},
				// single
				{
					Header: "Quantity",
					accessor: filterProduction + "productQuantity",
					production: ["single"],
				},
				{
					Header: "Days",
					accessor: filterProduction + "productTime",
					production: ["single"],
					Cell: ({ value }) => formatDay(value),
				},
				{
					Header: "Quantity/Day",
					accessor: filterProduction + "productQuantityDay",
					production: ["single"],
					Cell: ({ value }) => formatPerDay(value),
				},
				{
					Header: "Cost",
					accessor: filterProduction + "productCost",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
				{
					Header: "Sell",
					accessor: filterProduction + "productSell",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
				{
					Header: "Sell/Day",
					accessor: filterProduction + "productSellDay",
					production: ["single"],
					Cell: ({ value }) => formatPerDay(value),
				},
				{
					Header: "Profit (Sell - Cost)",
					accessor: filterProduction + "productProfit",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
				{
					Header: "Profit/Day",
					accessor: filterProduction + "productProfitDay",
					production: ["single"],
					Cell: ({ value }) => formatPerDay(value),
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
				{
					Header: "Quality",
					accessor: "processingProductQuality",
				},
				// single
				{
					Header: "Days",
					accessor: filterProduction + "processingTime",
					production: ["single"],
					Cell: ({ value }) => formatDay(value),
				},
				{
					Header: "Sell",
					accessor: filterProduction + "processingSell",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
				{
					Header: "Sell/Day",
					accessor: filterProduction + "processingSellDay",
					production: ["single"],
					Cell: ({ value }) => formatPerDay(value),
				},
				{
					Header: "Diff (Sell - Sell)",
					accessor: filterProduction + "processingDiff",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
				{
					Header: "Diff/Day",
					accessor: filterProduction + "processingDiffDay",
					production: ["single"],
					Cell: ({ value }) => formatPerDay(value),
				},
				{
					Header: "Profit (Sell - Cost)",
					accessor: filterProduction + "processingProfit",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
				{
					Header: "Profit/Day",
					accessor: filterProduction + "processingProfitDay",
					production: ["single"],
					Cell: ({ value }) => formatPerDay(value),
				},
			],
		},
		{
			Header: "Cask",
			columns: [
				{
					Header: "Machine",
					accessor: "agingMachine",
				},
				{
					Header: "Product",
					accessor: "agingProduct",
				},
				{
					Header: "Quality",
					accessor: "agingProductQuality",
				},
				// single
				{
					Header: "Days",
					accessor: filterProduction + "agingTime",
					production: ["single"],
					Cell: ({ value }) => formatDay(value),
				},
				{
					Header: "Sell",
					accessor: filterProduction + "agingSell",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
			],
		},
		{
			Header: "Total",
			columns: [
				// single
				{
					Header: "Days",
					accessor: filterProduction + "totalTime",
					production: ["single"],
					Cell: ({ value }) => formatDay(value),
				},
				{
					Header: "Sell",
					accessor: filterProduction + "totalSell",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
				{
					Header: "Sell/Days",
					accessor: filterProduction + "totalSellDays",
					production: ["single"],
					Cell: ({ value }) => formatPerDay(value),
				},
				{
					Header: "Diff",
					accessor: filterProduction + "totalDiff",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
				{
					Header: "Diff/Days",
					accessor: filterProduction + "totalDiffDays",
					production: ["single"],
					Cell: ({ value }) => formatPerDay(value),
				},
				{
					Header: "Profit",
					accessor: filterProduction + "totalProfit",
					production: ["single"],
					Cell: ({ value }) => formatGold(value),
				},
				{
					Header: "Profit/Days",
					accessor: filterProduction + "totalProfitDays",
					production: ["single"],
					Cell: ({ value }) => formatPerDay(value),
				},
			],
		},
	].reduce((dataColumns, headerParent) => {
		const columns = [...headerParent.columns].filter((column) => {
			let include = true;
			// if (column.quantity && !column.quantity.includes(filterQuantity))
			// 	include = false;
			// if (column.production && !column.production.includes(filterProduction))
			// 	include = false;
			return include;
		});
		const header = { ...headerParent, columns };

		dataColumns.push(header);
		return dataColumns;
	}, []);
};

export default getColumnData;

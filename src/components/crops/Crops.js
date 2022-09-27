import React from "react";
import Table from "rc-table";
import data from "../shared/data";
// import "../../assets/index.less";

const tableColumns = [
	{
		title: "Seed",
		dataIndex: "seed",
		key: "seed",
	},

	{
		title: "Seed Cost",
		children: [
			{
				title: "Single Seed",
				dataIndex: "seedCostSingle",
				key: "seedCostSingle",
			},
			{
				title: "Total Seeds",
				dataIndex: "seedCostTotal",
				key: "seedCostTotal",
			},
		],
	},
	{
		title: "Time",
		children: [
			{
				title: "Grow Time",
				dataIndex: "growTime",
				key: "growTime",
			},
			{
				title: "Re-Grow Time",
				dataIndex: "reGrowTime",
				key: "reGrowTime",
			},
			{
				title: "Total Grow Time",
				dataIndex: "growTimeTotal",
				key: "growTimeTotal",
			},
		],
	},
	{
		title: "Crop",
		dataIndex: "crop",
		key: "crop",
	},
	{
		title: "Yield",
		children: [
			{
				title: "Single Yield",
				dataIndex: "yieldSingle",
				key: "yieldSingle",
			},
			{
				title: "Total Yield",
				dataIndex: "yieldTotal",
				key: "yieldTotal",
			},
		],
	},
	{
		title: "Sell Price",
		children: [
			{
				title: "Crop",
				dataIndex: "cropSell",
				key: "cropSell",
			},
			{
				title: "Preserves",
				dataIndex: "preservesSell",
				key: "preservesSell",
			},
			{
				title: "Keg",
				dataIndex: "kegSell",
				key: "kegSell",
			},
		],
	},
];

const tableData = data.cropsList.map((crop) => {
	const newCrop = {};
	// seed
	newCrop.seed = crop.seeds;
	// seed cost
	newCrop.seedCostSingle =
		Object.values(crop.buy).reduce((sum, buyPrice) => sum + buyPrice, 0) /
		Object.values(crop.buy).length;
	newCrop.seedCostTotal = 0;
	// time
	newCrop.growTime = crop.growTime;
	newCrop.reGrowTime = crop.regrow ? crop.regrowTime : "-";
	newCrop.growTimeTotal = crop.growTime + (crop.regrow ? crop.regrowTime : 0);
	// crop
	newCrop.crop = crop.name;
	// yield
	newCrop.yieldSingle = 1;
	newCrop.yieldTotal = 0;
	// sell price
	newCrop.cropSell = crop.sell;
	newCrop.preservesSell = 0;
	newCrop.kegSell = 0;
	return newCrop;
});

function Crops() {
	const [visible, setVisible] = React.useState(true);
	return (
		<div className="cropsApp">
			<div>
				<Table columns={tableColumns} data={tableData} className="bordered" />
			</div>
		</div>
	);
}

export default Crops;

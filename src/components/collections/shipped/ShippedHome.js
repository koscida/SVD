import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { shipped, shippedTypes } from "../../../data/collectionShipped";
import { crops, cropsObj } from "../../../data/crops";
import { foraging } from "../../../data/foraging";
import { animalProducts } from "../../../data/animals";
import { artisanProducts } from "../../../data/artisanProducts";

// ////
// ShippedHome()

function ShippedHome() {
	const dataSource = shipped.map((item) => {
		const itemData =
			item.type === "Crop"
				? cropsObj[item.name]
				: item.type === "Forage"
				? foraging.find((x) => x.name === item.name)
				: item.type === "Artisan Product"
				? artisanProducts.find((x) => x.name === item.name)
				: item.type === "Animal Product"
				? animalProducts.find((x) => x.name === item.name)
				: {};
		if (itemData)
			Object.entries(itemData).forEach(
				([key, value]) => (item[key] = value)
			);
		return item;
	});
	// console.log("--ShippedHome-- dataSource: ", dataSource);
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Shipped"}
				collectionItemName={"Item"}
				collectionGoal={"Shipped"}
				dataSource={dataSource}
				filterItemTypes={shippedTypes}
			/>
		</>
	);
}

export default ShippedHome;

import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { shipped, shippedTypes } from "../../shared/data/collectionShipped";
import { crops } from "../../shared/data/crops";
import { foraging } from "../../shared/data/foraging";
import { animalProducts } from "../../shared/data/animals";
import { artisanProducts } from "../../shared/data/artisanProducts";

// ////
// ShippedHome()

function ShippedHome() {
	const dataSource = shipped.map((item) => {
		item.item =
			item.type === "Crop"
				? crops.find((x) => x.name === item.name)
				: item.type === "Forage"
				? foraging.find((x) => x.name === item.name)
				: item.type === "Artisan Product"
				? artisanProducts.find((x) => x.name === item.name)
				: item.type === "Animal Product"
				? animalProducts.find((x) => x.name === item.name)
				: null;
		return item;
	});
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

import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { recipes } from "../../../data/recipes";

// ////
// RecipesCookedHome()

function RecipesCookedHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Cooking"}
				collectionItemName={"Dish"}
				collectionGoal={"Cooked"}
				dataSource={recipes}
				filterItemTypes={[]}
			/>
		</>
	);
}

export default RecipesCookedHome;

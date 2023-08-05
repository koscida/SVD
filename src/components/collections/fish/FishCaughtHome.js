import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { fish, fishTypes } from "../../shared/data/fish";

// ////
// FishCaughtHome()

function FishCaughtHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Fish"}
				collectionItemName={"Fish"}
				collectionGoal={"Caught"}
				dataSource={fish}
				filterItemTypes={fishTypes}
			/>
		</>
	);
}

export default FishCaughtHome;
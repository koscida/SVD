import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { fish, fishTypes } from "../../../data/fish";

// ////
// FishCaughtHome()

function FishCollectedHome() {
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

export default FishCollectedHome;

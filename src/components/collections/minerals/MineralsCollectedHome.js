import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { fish, fishTypes } from "../../shared/data/fish";

// ////
// FishCaughtHome()

function MineralsCollectedHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Minerals"}
				collectionItemName={"Minerals"}
				collectionGoal={"Collected"}
				dataSource={fish}
				filterItemTypes={fishTypes}
			/>
		</>
	);
}

export default MineralsCollectedHome;

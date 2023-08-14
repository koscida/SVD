import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { minerals, mineralTypes } from "../../shared/data/minerals";

// ////
// FishCaughtHome()

function MineralsCollectedHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Minerals"}
				collectionItemName={"Minerals"}
				collectionGoal={"Collected"}
				dataSource={minerals}
				filterItemTypes={mineralTypes}
			/>
		</>
	);
}

export default MineralsCollectedHome;

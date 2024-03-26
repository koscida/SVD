import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { fish, fishTypes } from "../../../data/fish";

// ////
// AchievementsHome()

function AchievementsHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Achievements"}
				collectionItemName={"Achievement"}
				collectionGoal={"Achieved"}
				dataSource={fish}
				filterItemTypes={fishTypes}
			/>
		</>
	);
}

export default AchievementsHome;

import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { fish, fishTypes } from "../../shared/data/fish";

// ////
// PerfectionHome()

function PerfectionHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Perfection"}
				collectionItemName={"Achievement"}
				collectionGoal={"Achieved"}
				dataSource={fish}
				filterItemTypes={fishTypes}
			/>
		</>
	);
}

export default PerfectionHome;

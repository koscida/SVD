import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { fish, fishTypes } from "../../shared/data/fish";

// ////
// LettersReceivedHome()

function LettersReceivedHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Letters"}
				collectionItemName={"Letter"}
				collectionGoal={"Read"}
				dataSource={fish}
				filterItemTypes={fishTypes}
			/>
		</>
	);
}

export default LettersReceivedHome;

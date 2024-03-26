import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { fish, fishTypes } from "../../../data/fish";

// ////
// SecretNotesHome()

function SecretNotesHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Secret Notes"}
				collectionItemName={"Secret Note"}
				collectionGoal={"Found"}
				dataSource={fish}
				filterItemTypes={fishTypes}
			/>
		</>
	);
}

export default SecretNotesHome;

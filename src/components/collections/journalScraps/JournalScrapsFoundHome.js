import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { fish, fishTypes } from "../../shared/data/fish";

// ////
// JournalScrapsFoundHome()

function JournalScrapsFoundHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Journal Scraps"}
				collectionItemName={"Journal Scrap"}
				collectionGoal={"Found"}
				dataSource={fish}
				filterItemTypes={fishTypes}
			/>
		</>
	);
}

export default JournalScrapsFoundHome;

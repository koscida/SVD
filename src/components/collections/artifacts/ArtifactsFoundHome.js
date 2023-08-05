import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { fish, fishTypes } from "../../shared/data/fish";

// ////
// ArtifactsFoundHome()

function ArtifactsFoundHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Artifacts"}
				collectionItemName={"Artifact"}
				collectionGoal={"Collected"}
				dataSource={fish}
				filterItemTypes={fishTypes}
			/>
		</>
	);
}

export default ArtifactsFoundHome;

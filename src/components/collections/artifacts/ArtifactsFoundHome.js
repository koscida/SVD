import React from "react";
import CollectionPageGeneric from "../CollectionPageGeneric";

import { artifacts } from "../../../data/artifacts";

// ////
// ArtifactsFoundHome()

function ArtifactsFoundHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Artifacts"}
				collectionItemName={"Artifact"}
				collectionGoal={"Collected"}
				dataSource={artifacts}
				filterItemTypes={[]}
			/>
		</>
	);
}

export default ArtifactsFoundHome;

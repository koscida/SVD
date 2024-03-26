import React from "react";
import FishGridDisplay from "./FishGridDisplay";
import { Box } from "@mui/material";
import { useGameContext } from "../../app/GameContext";
import SVDCollectionTable from "../shared/views/SVDCollectionTable";
import FindRemainingFish from "./FindRemainingFish";

function Fish() {
	const {
		gameData: {
			svdData: { fish, fishTypes },
			userData,
		},
		setUserData,
	} = useGameContext();

	// handlers

	const handleItemClick = (fish) => {
		const newFishCaught = userData.fishCaught.map((f) =>
			f.name === fish.name ? fish : f
		);
		setUserData({ ...userData, fishCaught: newFishCaught });
	};

	// render
	return (
		<Box>
			<SVDCollectionTable
				data={fish}
				userData={userData.fishCaught}
				handleItemClick={handleItemClick}
				collectionTerm={"caught"}
			/>
			<FindRemainingFish />
		</Box>
	);
}

export default Fish;

import { Box } from "@mui/material";
import React from "react";
import { useGameContext } from "../../app/GameContext";

const FindRemainingFish = () => {
	const {
		gameData: {
			svdData: { fish, seasons },
			userData: { fishCaught },
		},
	} = useGameContext();

	const fishCaughtObj = fishCaught.reduce(
		(obj, d) => ({
			...obj,
			[d.name]: d,
		}),
		{}
	);
	const fishRemaining = fish.filter((f) => fishCaughtObj[f.name].caught == 0);

	const sources = ["Fishing Pole", "Crab Pot", "Forage"];

	return (
		<>
			<h3>Need to Catch</h3>
			<Box
				sx={{ display: "grid", gridTemplateColumns: "repeat(5, 20%)" }}
			>
				{[...seasons, "All"].map((season) => (
					<Box>
						<h4>{season}</h4>
						{sources.map((source) => (
							<Box>
								<h5>{source}</h5>

								{/* Get Fish */}
								{fishRemaining
									.filter(
										(f) =>
											((season === "All" &&
												f.seasons.length === 4) ||
												(season !== "All" &&
													f.seasons.includes(
														season
													) &&
													f.seasons.length !== 4)) &&
											f.sources.reduce(
												(inSource, s) =>
													inSource ||
													s.type === source ||
													s.name === source,
												false
											)
									)
									.map((f) => (
										<Box key={f.name}>{f.name}</Box>
									))}
							</Box>
						))}
					</Box>
				))}
			</Box>
		</>
	);
};

export default FindRemainingFish;

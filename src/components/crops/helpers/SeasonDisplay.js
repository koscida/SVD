import { Box } from "@mui/material";
import React from "react";
import RenderImageSmall from "../../shared/Icons/RenderImageSmall";

const seasons = ["Spring", "Summer", "Fall", "Winter"];
export default function SeasonDisplay({ selectedSeasons }) {
	if (!selectedSeasons) return <></>;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-around",
				textAlign: "center",
			}}
		>
			{seasons.map((season) => (
				<Box key={season}>
					<RenderImageSmall
						label={season}
						disabled={!selectedSeasons.includes(season)}
					/>
					<p
						style={{
							color: selectedSeasons.includes(season)
								? ""
								: "#ddd",
						}}
					>
						{season}
					</p>
				</Box>
			))}
		</Box>
	);
}

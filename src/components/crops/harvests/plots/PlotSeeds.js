import { Chip } from "@mui/material";
import React from "react";
import RenderImageSmall from "../../../shared/Icons/RenderImageSmall";

export default function PlotSeeds({
	cropSeasonalList,
	selectedCrops,
	handleCropSelect,
	cropsObj,
}) {
	// console.log("selectedCrops", selectedCrops);
	return (
		<div style={{ display: "flex" }}>
			<div>
				{Object.entries(
					cropSeasonalList.reduce(
						(newList, seasonalCropName) => {
							cropsObj[seasonalCropName].Farming.time.regrow
								? newList.Reproduces.push(seasonalCropName)
								: newList["Single Harvest"].push(
										seasonalCropName
								  );
							return newList;
						},
						{ "Single Harvest": [], Reproduces: [] }
					)
				).map(([growType, seasonalCropTypeList]) => (
					<div key={growType}>
						<div>{growType}: </div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexWrap: "wrap",
							}}
						>
							{seasonalCropTypeList.map((seasonalCropName) => {
								return (
									<Chip
										key={seasonalCropName}
										label={seasonalCropName}
										avatar={
											<RenderImageSmall
												label={seasonalCropName}
												styles={{
													padding: "0",
													margin: "0 -6px 0 12px",
												}}
											/>
										}
										onClick={() =>
											handleCropSelect(seasonalCropName)
										}
										variant={
											seasonalCropName &&
											selectedCrops &&
											selectedCrops.includes(
												seasonalCropName
											)
												? "outlined"
												: "filled"
										}
										sx={{ margin: "0 3px 3px 0" }}
									/>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

import RenderImg from "../../shared/Icons/RenderImg";

import { cropsObj } from "../../../data/crops";

function Calendar({ plots, selectedSeason }) {
	// console.log("plots", plots);

	// reformat the harvests within the plots for easier display
	/* days = [
		{ // day 1
			plotName: { // plot 1
				cropName: {
					isHarvesting: false,
					isPlanting: true,
					isGrowing: true,
				},
				cropName: ...
			},
			plotName: ...
		}
	]
	 */
	// init month of 28 days
	let daysInit = [...Array(29).keys()].slice(1);
	// console.log("daysInit", daysInit);
	// each day empty array
	daysInit = daysInit.map((day) => {
		// plots per day
		return plots.reduce((newPlots, plot) => {
			// crops per plot
			const plotCrops = plot.selectedCrops.reduce(
				(newCrops, cropName) => {
					newCrops[cropName] = {
						isHarvesting: false,
						isPlanting: false,
						isGrowing: false,
					};
					return newCrops;
				},
				{}
			);
			newPlots[plot.name] = plotCrops;
			return newPlots;
		}, {});
	});
	// console.log("daysInit", daysInit);
	// let days = [];
	const days = plots.reduce((days, plot, i) => {
		// console.log("plot", plot);

		// loop through the harvests for each crop
		Object.entries(plot.harvests).forEach(([cropName, harvests]) => {
			// console.log("harvests", harvests);
			// get each harvest
			harvests.forEach((harvest) => {
				// harvesting
				const harvestDay = harvest.harvestDay - 1;
				if (harvestDay >= 0 && harvestDay <= 27)
					days[harvestDay][plot.name][cropName].isHarvesting = true;
				// planting
				const plantDay = harvest.plantDay - 1;
				if (plantDay >= 0 && plantDay <= 27)
					days[plantDay][plot.name][cropName].isPlanting = true;
				// growing
				harvest.growDays.forEach((growDay) => {
					const dayGrowDay = growDay - 1;
					if (dayGrowDay >= 0 && dayGrowDay <= 27)
						days[dayGrowDay][plot.name][cropName].isGrowing = true;
				});
			});
		});
		return days;
	}, daysInit);
	// console.log("days", days);

	const RenderBand = ({ opacity, color }) => {
		// styles
		const harvestStyles = {
			background: color,
			opacity: opacity,
			height: "8px",
			flex: "1 0",
		};
		return <div style={harvestStyles}></div>;
	};

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(7, calc(100% / 7))",
				gridtemplateRows: "repeat(4, calc(100% / 4))",
			}}
		>
			{days.map((dayPlots, i) => {
				// console.log("-----i-----", i);
				return (
					<div
						style={{ display: "grid" }}
						className="cell cropCell"
						key={i}
					>
						<div className="date">{i + 1}</div>
						{Object.entries(dayPlots).map(
							([plotName, crops], j) => {
								return Object.entries(crops).map(
									([cropName, cropData], k) => {
										const crop = cropsObj[cropName];
										const cropGrow = crop.Grow;

										// const harvestOpacity = 1;
										// const seedOpacity = 1;
										// const growOpacity = 1;
										// const cropColor = "#444";

										// set opacity
										// if planting
										let seedOpacity = !cropGrow.time.regrow
											? 1 / (cropGrow.time.time + 1)
											: 1 /
											  (cropGrow.time.regrowTime + 1);
										let growOpacity =
											1 / (cropGrow.time.time + 1);
										// if harvesting
										let harvestOpacity = 1;
										//
										// // if growing crop and no next harvest set, means this is a grow only day, so change opacity
										// if (isGrowing && !isHarvesting && !isPlanting) {
										// 	// if regrowing
										// 	if (crop.regrow && harvestInd !== 0) {
										// 		growOpacity =
										// 			(i - thisHarvest.growDays[0] + 0) / (crop.regrowTime + 1);
										// 	} // else, replanting
										// 	else {
										// 		growOpacity =
										// 			(i - thisHarvest.plantDay + 1) / (crop.growTime + 1);
										// 	}
										// 	// }
										// }

										// get crop color
										let cropColor = crop.color;

										return (
											<div
												key={cropName}
												style={{
													minHeight: "20px",
													display: "flex",
													flexDirection: "row",
													alignItems: "center",
												}}
											>
												{cropData.isHarvesting && (
													<>
														<RenderBand
															opacity={
																harvestOpacity
															}
															color={cropColor}
														/>
														<RenderImg
															label={crop.name}
														/>
													</>
												)}
												{cropData.isPlanting && (
													<>
														<RenderImg
															label={
																cropGrow
																	.ingredients[0]
																	.ingredient
															}
														/>
														<RenderBand
															opacity={
																seedOpacity
															}
															color={cropColor}
														/>
													</>
												)}
												{cropData.isGrowing && (
													<>
														<RenderBand
															opacity={
																growOpacity
															}
															color={cropColor}
														/>
													</>
												)}
											</div>
										);
									}
								);
							}
						)}
						{/*plots.map((plot) =>
							Object.entries(plot.harvests).map(([cropName, harvests]) => {
								const crop = data.crops[cropName];
								console.log("crop", crop);

								// get the harvest on
								const thisHarvest =
									harvestInd < harvests.length
										? harvests[harvestInd]
										: { growDays: [], plantDay: null, harvestDay: null };
								console.log("thisHarvest", thisHarvest);
								let nextHarvest;

								// day type
								let isPlanting = thisHarvest.plantDay === i;
								let isGrowing = thisHarvest.growDays.includes(i);
								const isHarvesting = thisHarvest.harvestDay === i;

								// get the next harvest, update types
								if (isHarvesting) {
									nextHarvest =
										harvestInd + 1 < harvests.length
											? harvests[harvestInd + 1]
											: { growDays: [], plantDay: null, harvestDay: null };
									isPlanting = nextHarvest.plantDay === i;
									isGrowing = nextHarvest.growDays.includes(i);
								}

								// set opacity
								// if planting
								let seedOpacity =
									harvestInd === 0 || !crop.regrow
										? 1 / (crop.growTime + 1)
										: 1 / (crop.regrowTime + 1);
								let growOpacity = 1 / (crop.growTime + 1);
								// if harvesting
								let harvestOpacity = 1;
								// if growing crop and no next harvest set, means this is a grow only day, so change opacity
								if (isGrowing && !isHarvesting && !isPlanting) {
									// if regrowing
									if (crop.regrow && harvestInd !== 0) {
										growOpacity =
											(i - thisHarvest.growDays[0] + 0) / (crop.regrowTime + 1);
									} // else, replanting
									else {
										growOpacity =
											(i - thisHarvest.plantDay + 1) / (crop.growTime + 1);
									}
									// }
								}

								// get crop color
								let cropColor = crop.color;
								// if after the final harvest day (all values within thisHarvest are null)
								if (thisHarvest.growDays.length === 0) {
									// if regrowing, change opacity to first phase of regrowing transparent
									//		else, it is a single harvest, change color to transparent
									if (crop.regrow) growOpacity = 1 / (crop.regrowTime + 1);
									else cropColor = "transparent";
								} else {
									// incrament
									if (i === thisHarvest.harvestDay) {
										harvestInd++;
									}
								}

								return (
									<div key={cropName}>
										<div
											key={crop.name}
											className="d-flex direction-row align-items-center"
											style={{ minHeight: "20px" }}
										>
											{isHarvesting && (
												<>
													<RenderBand
														opacity={harvestOpacity}
														color={cropColor}
													/>
													<RenderImg label={crop.name} />
												</>
											)}
											{isPlanting && (
												<>
													<RenderImg label={crop.seeds} />
													<RenderBand opacity={seedOpacity} color={cropColor} />
												</>
											)}
											{isGrowing && (
												<>
													<RenderBand opacity={growOpacity} color={cropColor} />
												</>
											)}
										</div>
									</div>
								);
							})
						)*/}
					</div>
				);
			})}
		</div>
	);
}

export default Calendar;

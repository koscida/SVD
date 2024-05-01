import { useEffect, useState } from "react";
import HarvestCalendar from "./Calendar";
import useLocalStorage from "../../shared/useLocalStorage";
import RenderImg from "../../shared/Icons/RenderImg";
import CalendarImg from "../../shared/Icons/CalendarImg";
import GoldImg from "../../shared/Icons/GoldImg";
import ConfirmImg from "../../shared/Icons/ConfirmImg";
import CancelImg from "../../shared/Icons/CancelImg";
import RenderImageSmall from "../../shared/Icons/RenderImageSmall";

const reCalcHarvestDays = (crop, harvests, harvestIdx) => {
	const newHarvests = [];
	harvests.forEach((harvest, i) => {
		// copy to new harvest
		const newHarvest = { ...harvest };

		// if this harvest is on or after changed harvest, recalculate remaining harvests
		if (i >= harvestIdx) {
			// if changing, update offset
			if (i === harvestIdx)
				newHarvest.plantOffset =
					i === 0
						? newHarvest.plantDay - 1
						: newHarvest.plantDay - newHarvests[i - 1].harvestDay;

			// update plant day if after one changing
			if (i > harvestIdx && !crop.Farming.time.regrow)
				newHarvest.plantDay =
					newHarvests[i - 1].harvestDay + harvest.plantOffset;

			// get harvest start
			const harvestStartDay =
				!crop.Farming.time.regrow || i === 0
					? newHarvest.plantDay
					: newHarvests[i - 1].harvestDay;
			// get growing time
			const growingTime =
				crop.Farming.time.regrow && i !== 0
					? crop.Farming.time.regrowTime + 1
					: crop.Farming.time.time;

			// update harvest day, then update grow times
			newHarvest.harvestDay = harvestStartDay + growingTime;
			newHarvest.growDays = [
				...Array(newHarvest.harvestDay).keys(),
			].slice(harvestStartDay);
		}

		// add updated harvest
		newHarvests.push(newHarvest);
	});
	return newHarvests;
};

const reCalcHarvestYields = (harvests) => {
	harvests.forEach((harvest) => {
		harvest.yield = harvest.seeds ? harvest.seeds : harvests[0].seeds;
	});
	return harvests;
};

function Planting({
	selectedCrop,
	harvests,
	plot,
	setHarvests,
	resetHarvests,
	totals,
}) {
	// ////
	// Handlers
	const handleChangeValue = (harvestIdx, name, value) => {
		// validation
		// if not a number
		if (isNaN(+value)) return;

		// input limits
		if (name === "plantDay") {
			// min and max
			if (value < 1 || value > 28) return;
			// cannot be before previous harvest day
			if (harvestIdx > 0 && value < harvests[harvestIdx - 1].harvestDay)
				return;
		}
		if (name === "seeds") {
			// min and max
			if (value < 0 || value > 9999) return;
		}

		// copy value and update
		let thisHarvest = harvests;
		thisHarvest[harvestIdx][name] = +value;
		thisHarvest[harvestIdx]["init"] = thisHarvest[harvestIdx].initHarvestDay
			? thisHarvest[harvestIdx].initHarvestDay === value
			: !thisHarvest[harvestIdx]["init"];

		// re-calc rest of the harvest
		if (name === "plantDay") {
			thisHarvest = reCalcHarvestDays(
				selectedCrop,
				thisHarvest,
				harvestIdx
			);
		}
		thisHarvest = reCalcHarvestYields(thisHarvest);

		// set harvest
		setHarvests(thisHarvest);
	};

	// //
	// Views
	const boxStyles = {
		border: "1px solid #ccc",
		borderRadius: "1px",
		padding: "2px 3px",
		margin: "0",
		width: "calc(100% - 1rem - 8px)",
		height: "1.5rem",
		display: "inline-block",
		textAlign: "left",
	};
	const editingBoxStyles = {
		...boxStyles,
		border: "1px solid #aaa",
	};

	// ////
	// Render

	return (
		<div>
			<div className="row">
				<div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "3fr 3fr 2fr 2fr",
							textAlign: "center",
						}}
					>
						<div>Plant on</div>
						<div>Seeds ({plot.size})</div>
						<div>Harvest on</div>
						<div>Yield</div>
					</div>

					{harvests.map((thisHarvest, i) => {
						const cssDisabled =
							thisHarvest.harvestDay > 28
								? {
										background: "#eee",
								  }
								: {};
						const offSetDays = thisHarvest.plantOffset
							? thisHarvest.plantOffset
							: null;
						return (
							<div key={i}>
								{offSetDays ? (
									<div>
										<p>
											Wait {offSetDays} day
											{offSetDays > 1 ? "s" : null}
										</p>
									</div>
								) : null}
								<div
									style={{
										padding: "3px 5px",
										display: "grid",
										gridTemplateColumns: "30% 30% 20% 20%",
										textAlign: "center",
										alignItems: "center",
										...cssDisabled,
									}}
								>
									{/* Plant On */}
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										{thisHarvest.plantDay && (
											<>
												<RenderImageSmall
													label={"Calendar"}
												/>
												{
													<>
														<input
															type="number"
															value={
																thisHarvest.plantDay
															}
															onChange={(e) => {
																handleChangeValue(
																	i,
																	"plantDay",
																	e.target
																		.value
																);
															}}
															style={
																editingBoxStyles
															}
														/>
													</>
												}
											</>
										)}
									</div>

									{/* Seeds */}
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										{thisHarvest.plantDay && (
											<>
												<RenderImageSmall
													label={
														selectedCrop.Farming
															.seeds[0].name
													}
												/>

												<input
													type="number"
													value={thisHarvest.seeds}
													onChange={(e) => {
														handleChangeValue(
															i,
															"seeds",
															e.target.value
														);
													}}
													style={editingBoxStyles}
												/>
											</>
										)}
									</div>

									{/* Harvest On */}
									<div
										style={{
											borderLeft: "1px solid #ddd",
											paddingLeft: "5px",
											marginLeft: "5px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<RenderImageSmall label={"Calendar"} />
										{thisHarvest.harvestDay}
									</div>

									{/* Yield */}
									<div>
										<RenderImageSmall
											label={selectedCrop.name}
										/>
										{thisHarvest.yield}
									</div>
								</div>
							</div>
						);
					})}

					<div
						style={{
							display: "grid",
							gridTemplateColumns: "6fr 4fr",
							textAlign: "center",
						}}
					>
						<div>
							<RenderImageSmall
								label={selectedCrop.Farming.seeds[0].name}
							/>
							Total: {totals.totalSeeds}
							<RenderImageSmall label={"gold"} />
							Cost: (@{
								selectedCrop.recipeSources.Shops[0].price
							}) {totals.totalSeedCost}
						</div>
						<div>
							<RenderImageSmall label={selectedCrop.name} />
							Total: {totals.totalYield}
						</div>
					</div>
				</div>
				<div>
					<button onClick={resetHarvests} className="btn">
						Reset
					</button>
				</div>
				<hr />
			</div>
		</div>
	);
}

export default Planting;

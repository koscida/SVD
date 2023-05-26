import { useEffect, useState } from "react";
import HarvestCalendar from "./Calendar";
import useLocalStorage from "../../shared/useLocalStorage";
import RenderImg from "../../shared/Icons/RenderImg";
import CalendarImg from "../../shared/Icons/CalendarImg";
import GoldImg from "../../shared/Icons/GoldImg";
import ConfirmImg from "../../shared/Icons/ConfirmImg";
import CancelImg from "../../shared/Icons/CancelImg";

const reCalcHarvestDays = (crop, harvests, pos) => {
	const newHarvests = [];
	harvests.forEach((harvest, i) => {
		// copy to new harvest
		const newHarvest = { ...harvest };

		// if is on or after changed harvest, recalculate remaining harvests
		if (i >= pos) {
			// if changing, update offset
			if (i === pos)
				newHarvest.plantOffset =
					i === 0
						? newHarvest.plantDay
						: newHarvest.plantDay - newHarvests[i - 1].harvestDay;

			// update plant day if after one changing
			if (i > pos && !crop.regrow)
				newHarvest.plantDay =
					newHarvests[i - 1].harvestDay + harvest.plantOffset;

			// get harvest start
			const harvestStartDay =
				!crop.regrow || i === 0
					? newHarvest.plantDay
					: newHarvests[i - 1].harvestDay;
			// get growing time
			const growingTime =
				crop.regrow && i !== 0 ? crop.regrowTime + 1 : crop.growTime;

			// update harvest day, then update grow times
			newHarvest.harvestDay = harvestStartDay + growingTime;
			newHarvest.growDays = [...Array(newHarvest.harvestDay).keys()].slice(
				harvestStartDay
			);
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
	const handleChangeValue = (pos, name, value) => {
		// validation
		// if not a number
		if (isNaN(+value)) return;
		// input limits
		if (name === "plantDay") {
			// min and max
			if (value < 1 || value > 28) return;
			// cannot be before previous harvest day
			if (pos > 0 && value < harvests[pos - 1].harvestDay) return;
		}
		if (name === "seeds") {
			// min and max
			if (value < 0 || value > 9999) return;
		}

		// copy value and update
		let thisHarvest = harvests;
		thisHarvest[pos][name] = +value;
		thisHarvest[pos]["init"] = thisHarvest[pos].initHarvestDay
			? thisHarvest[pos].initHarvestDay === value
			: !thisHarvest[pos]["init"];

		// re-calc rest of the harvest
		if (name === "plantDay") {
			thisHarvest = reCalcHarvestDays(selectedCrop, thisHarvest, pos);
		}
		thisHarvest = reCalcHarvestYields(thisHarvest);

		// set harvest
		setHarvests(thisHarvest);
	};

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
	return (
		<div>
			<div className="row">
				<div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "30% 30% 20% 20%",
							textAlign: "center",
						}}
					>
						<div>Plant on</div>
						<div>Seeds</div>
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
										...cssDisabled,
									}}
								>
									<div>
										{thisHarvest.plantDay && (
											<>
												<CalendarImg />
												{
													<>
														<input
															type="number"
															value={thisHarvest.plantDay}
															onChange={(e) => {
																handleChangeValue(
																	i,
																	"plantDay",
																	e.target.value
																);
															}}
															style={editingBoxStyles}
														/>
													</>
												}
											</>
										)}
									</div>
									<div>
										{thisHarvest.plantDay && (
											<div className="d-flex">
												<RenderImg label={selectedCrop.seeds} />({plot.size})
												<input
													type="number"
													value={thisHarvest.seeds}
													onChange={(e) => {
														handleChangeValue(i, "seeds", e.target.value);
													}}
													style={editingBoxStyles}
												/>
											</div>
										)}
									</div>
									<div
										style={{
											borderLeft: "1px solid #ddd",
											paddingLeft: "5px",
											marginLeft: "5px",
										}}
									>
										<CalendarImg />
										{thisHarvest.harvestDay}
									</div>
									<div>
										<RenderImg label={selectedCrop.name} />
										{thisHarvest.yield}
									</div>
								</div>
							</div>
						);
					})}

					<div
						style={{
							display: "grid",
							gridTemplateColumns: "60% 40%",
							textAlign: "center",
						}}
					>
						<div>
							<RenderImg label={selectedCrop.seeds} />
							Total: {totals.totalSeeds}
							<GoldImg />
							Cost: (@{Object.values(selectedCrop.buy)[0]}){" "}
							{totals.totalSeedCost}
						</div>
						<div>
							<RenderImg label={selectedCrop.name} />
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

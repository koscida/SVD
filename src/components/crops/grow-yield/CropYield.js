import { useEffect, useState } from "react";
import CropCalendar from "./CropCalendar";
import RenderImg from "../../shared/Icons/RenderImg";
import CalendarImg from "../../shared/Icons/CalendarImg";
import GoldImg from "../../shared/Icons/GoldImg";
import ConfirmImg from "../../shared/Icons/ConfirmImg";
import CancelImg from "../../shared/Icons/CancelImg";

const calcInitHarvests = (crop) => {
	// init
	let day = 1;
	const harvests = [];

	// while we are in the month and not a day after
	while (day <= 28) {
		// create a new harvest
		let newHarvest = {};

		// get next grow period
		let growingTime;

		// init harvest, or regrowing, plant
		if (harvests.length === 0 || !crop.regrow) {
			// plant or replant
			newHarvest.plantDay = day;
			newHarvest.seeds = 1;
			// set growing time
			growingTime = crop.growTime;
			// set diff between growing periods
			newHarvest.plantOffset = 0;
		} else {
			// set growing time
			growingTime = crop.regrowTime + 1;
		}

		// get harvest day
		const harvestDay = day + growingTime;

		// check if we can grow this harvest
		if (harvestDay <= 28) {
			// yield the harvest
			newHarvest.harvestDay = harvestDay;
			newHarvest.yield = 1;

			// add grow days that the harvest grew
			newHarvest.growDays = [...Array(newHarvest.harvestDay).keys()].slice(day);

			// add the harvest
			harvests.push(newHarvest);
		}
		// incrament day
		day += growingTime;
	}

	return harvests;
};

const reCalcHarvestDays = (crop, harvests, pos) => {
	const newHarvests = [];
	harvests.forEach((harvest, i) => {
		// if up to to the harvest changing
		if (i < pos) {
			// no re-calculation required, just push
			newHarvests.push(harvest);
		}
		// else if it is the changed one, recalculate
		else if (i === pos) {
			// copy to new harvest
			const newHarvest = { ...harvest };
			// update harvest and growing days
			const growingTime =
				!crop.regrow || i === 0 ? crop.growTime : crop.regrowTime;
			newHarvest.harvestDay = newHarvest.plantDay + growingTime;
			newHarvest.growDays = [...Array(newHarvest.harvestDay).keys()].slice(
				newHarvest.plantDay
			);
			// recalculate plant offset
			if (i > 0)
				newHarvest.plantOffset =
					newHarvest.plantDay - newHarvests[i - 1].harvestDay;
			// add updated harvest
			newHarvests.push(newHarvest);
		}
		// else if immeditately after changed harvest, recalculate remaining harvests
		else {
			const newHarvest = { ...harvest };
			// if regrowing, auto grow
			if (crop.regrow) {
				newHarvest.harvestDay =
					newHarvests[i - 1].harvestDay + harvest.plantOffset;
				newHarvest.growDays = [...Array(newHarvest.harvestDay).keys()].slice(
					newHarvests[i - 1].harvestDay
				);
			}
			// else, replanting, change from offset
			else {
				newHarvest.plantDay =
					newHarvests[i - 1].harvestDay + harvest.plantOffset;
				newHarvest.harvestDay = newHarvest.plantDay + crop.growTime;
				newHarvest.growDays = [...Array(newHarvest.harvestDay).keys()].slice(
					newHarvest.plantDay
				);
			}
			// add updated harvest
			newHarvests.push(newHarvest);
		}
		// else any of the remaining harvests, ignore
	});
	return newHarvests;
};

const reCalcHarvestYields = (harvests) => {
	harvests.forEach((harvest) => {
		harvest.yield = harvest.seeds ? harvest.seeds : harvests[0].seeds;
	});
	return harvests;
};

const calcTotals = (selectedCrop, harvests) => {
	const seedCost = Object.values(selectedCrop.buy)[0];

	// seed and yield totals
	let totals = harvests.reduce(
		(num, thisYield) => {
			if (thisYield.harvestDay <= 28) {
				if (thisYield.seeds) num.totalSeeds = num.totalSeeds + thisYield.seeds;
				num.totalYield = num.totalYield + thisYield.yield;
			}
			return num;
		},
		{ totalSeeds: 0, totalYield: 0 }
	);

	// buy and sell price
	totals.totalSeedCost = totals.totalSeeds * seedCost;
	totals.totalYieldSell = totals.totalYield * selectedCrop.sell;

	return totals;
};

function CropYield({ selectedCrop }) {
	const initHarvests = calcInitHarvests(selectedCrop);
	const [harvests, setHarvests] = useState(initHarvests);
	const [totals, setTotals] = useState(calcTotals(selectedCrop, initHarvests));

	useEffect(() => {
		console.log("useeffect - recalc yield and totals");
		// recalculate and set yield times and totals
		// setTotals(calcTotals(selectedCrop, harvests));
	}, [selectedCrop, harvests]);

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
		// recalculate totals
		setTotals(calcTotals(selectedCrop, thisHarvest));
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
				<div className="col-6">
					<p>{selectedCrop.name}</p>
					<CropCalendar crop={selectedCrop} harvests={harvests} />
				</div>
				<div className="col-6">
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
						return (
							<div
								key={i}
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
															handleChangeValue(i, "plantDay", e.target.value);
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
										<>
											<RenderImg label={selectedCrop.seeds} />
											{
												<input
													type="number"
													value={thisHarvest.seeds}
													onChange={(e) => {
														handleChangeValue(i, "seeds", e.target.value);
													}}
													style={editingBoxStyles}
												/>
											}
										</>
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
							Cost: {totals.totalSeedCost}
						</div>
						<div>
							<RenderImg label={selectedCrop.name} />
							Total: {totals.totalYield}
						</div>
					</div>
				</div>
				<hr />
			</div>
		</div>
	);
}

export default CropYield;

import { useEffect, useState } from "react";
import CropCalendar from "./CropCalendar";

const calcInitYields = (crop) => {
	// init
	let day = 1;
	let harvests = [];

	// add to times and harvests
	harvests = [{ growDay: day, seeds: 1 }];

	// grow first set of seeds
	day += crop.growTime;

	// while we are in the month and not a day after
	while (day <= 28) {
		// update the yield
		const thisYieldInd = harvests.length - 1;
		harvests[thisYieldInd].harvestDay = day;
		harvests[thisYieldInd].yield = crop.regrow
			? harvests[0].seeds
			: harvests[thisYieldInd].seeds;
		// if regrowing, only add to yield, incrament day
		if (crop.regrow) {
			// else replanting, add grow day and incrament day
			if (day + crop.regrowTime + 1 <= 28) {
				harvests.push({});
			}
			day += crop.regrowTime + 1;
		} else {
			// else replanting, if replanting, add grow day and incrament day
			if (day + crop.growTime <= 28) {
				// regrow
				harvests.push({ growDay: day, seeds: 1 });
			}
			day += crop.growTime;
		}
	}

	return harvests;
};

const reCalcHarvestDays = (harvests, pos) => {
	harvests.forEach((harvest, i) => {
		if (i === pos) {
		} else if (i >= pos) {
		}
	});
	return harvests;
};
const getYieldTimes = (harvests) =>
	harvests.reduce(
		(yieldTimes, harvest, i) => {
			yieldTimes.harvestDays.push(harvest.harvestDay);
			if (harvest.growDay) yieldTimes.growDays.push(harvest.growDay);
			else yieldTimes.growDays.push(harvests[i - 1].harvestDay);
			return yieldTimes;
		},
		{ growDays: [], harvestDays: [] }
	);

const reCalcHarvestYield = (harvests) => {
	harvests.forEach((harvest) => {
		harvest.yield = harvest.seeds ? harvest.seeds : harvests[0].seeds;
	});
	return harvests;
};

const calcTotals = (selectedCrop, harvests) => {
	const seedCost = Object.values(selectedCrop.buy)[0];

	// calc seed and yield totals
	let totals = harvests.reduce(
		(num, thisYield) => {
			if (thisYield.seeds) num.totalSeeds = num.totalSeeds + thisYield.seeds;
			num.totalYield = num.totalYield + thisYield.yield;
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
	const initHarvests = calcInitYields(selectedCrop);
	const [harvests, setHarvests] = useState(initHarvests);
	const [yieldTimes, setYieldTimes] = useState(getYieldTimes(initHarvests));
	const [totals, setTotals] = useState(calcTotals(selectedCrop, initHarvests));

	const handleChange = (name, pos, value) => {
		// TODO: validation

		// copy value and update
		let thisHarvest = harvests;
		thisHarvest[pos][name] = +value;

		// re-calc rest of the harvest
		if (name === "growDay") {
			thisHarvest = reCalcHarvestDays(thisHarvest, pos);
		} else if (name === "seeds") {
			thisHarvest = reCalcHarvestYield(thisHarvest);
		}

		// set harvest
		setHarvests(thisHarvest);
		// recalculate and set yield times and totals
		setYieldTimes(getYieldTimes(thisHarvest));
		setTotals(calcTotals(selectedCrop, thisHarvest));
	};

	return (
		<div>
			<div className="row">
				<div className="col-6">
					<p>{selectedCrop.name}</p>
					<CropCalendar
						selectedCrops={[selectedCrop]}
						yieldTimes={yieldTimes}
					/>
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
						return (
							<div
								key={i}
								style={{
									border: "1px solid #ddd",
									padding: "3px 5px",
									display: "grid",
									gridTemplateColumns: "30% 30% 20% 20%",
									textAlign: "center",
								}}
							>
								<div>
									{thisHarvest.growDay && (
										<>
											<img
												src={"images/Calendar.png"}
												alt={"calendar"}
												className="icon"
											/>
											<input
												type="number"
												value={thisHarvest.growDay}
												onChange={(e) => {
													handleChange("growDay", i, e.target.value);
												}}
												style={{ width: "calc(100% - 1rem - 6px)" }}
											/>
										</>
									)}
								</div>
								<div>
									{thisHarvest.growDay && (
										<>
											<img
												src={
													"images/" +
													selectedCrop.seeds.replaceAll(" ", "_") +
													".png"
												}
												alt={selectedCrop.name}
												className="icon"
											/>
											<input
												type="number"
												value={thisHarvest.seeds}
												onChange={(e) => {
													handleChange("seeds", i, e.target.value);
												}}
												style={{ width: "calc(100% - 1rem - 6px)" }}
											/>
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
									<img
										src={"images/Calendar.png"}
										alt={"calendar"}
										className="icon"
									/>
									{thisHarvest.harvestDay}
								</div>
								<div>
									<img
										src={
											"images/" +
											selectedCrop.name.replaceAll(" ", "_") +
											".png"
										}
										alt={selectedCrop.name}
										className="icon"
									/>
									{thisHarvest.yield}
								</div>
							</div>
						);
					})}
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(4, 25%)",
						}}
					>
						<div></div>
						<div>
							<img
								src={
									"images/" + selectedCrop.seeds.replaceAll(" ", "_") + ".png"
								}
								alt={selectedCrop.name}
								className="seed"
							/>
							Total: {totals.totalSeeds}
							<br />
							Cost: {totals.totalSeedCost}
						</div>
						<div></div>
						<div>
							<img
								src={
									"images/" + selectedCrop.name.replaceAll(" ", "_") + ".png"
								}
								alt={selectedCrop.name}
								className="crop"
							/>
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

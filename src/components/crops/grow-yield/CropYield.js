import { useEffect, useState } from "react";
import CropCalendar from "./CropCalendar";

const calcInitYields = (crop) => {
	// init
	let day = 1;
	let times = {};
	let harvests = [];

	// add to times and harvests
	times.growDays = [day];
	times.harvestDays = [];
	harvests = [{ growDay: day, seeds: 1 }];

	// grow first set of seeds
	day += crop.growTime;

	// while we are in the month and not a day after
	while (day <= 28) {
		// add day to list of harvest days
		times.harvestDays.push(day);
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
				harvests.push({ regrowDay: day });
			}
			day += crop.regrowTime + 1;
		} else {
			// else replanting, if replanting, add grow day and incrament day
			if (day + crop.growTime <= 28) {
				// regrow
				times.growDays.push(day);
				harvests.push({ growDay: day, seeds: 1 });
			}
			day += crop.growTime;
		}
	}

	return { times, harvests };
};

const reCalcHarvest = (harvests, pos) => {
	harvests.forEach((harvest, i) => {
		if (i === pos) {
		} else if (i >= pos) {
		}
	});
	return harvests;
};

const calcTotals = (harvests, seedCost) => {
	let totals = harvests.reduce(
		(num, thisYield) => {
			if (thisYield.seeds) num.totalSeeds = num.totalSeeds + thisYield.seeds;
			num.totalYield = num.totalYield + thisYield.yield;
			return num;
		},
		{ totalSeeds: 0, totalYield: 0 }
	);
	totals.totalSeedCost = totals.totalSeeds * seedCost;
	return totals;
};

function CropYield({ selectedCrop }) {
	const seedPrice = Object.values(selectedCrop.buy)[0];
	const [yields, setYields] = useState(calcInitYields(selectedCrop));
	const [totals, setTotals] = useState(calcTotals(yields.harvests, seedPrice));

	const handleChange = (name, pos, value) => {
		// set new value
		let thisHarvest = yields.harvests;
		thisHarvest[pos][name] = value;
		// re-calc rest of the harvest
		if (name === "growDay") {
			thisHarvest = reCalcHarvest(thisHarvest, pos);
		}

		// set
		setYields({ ...yields, harvests: thisHarvest });
		setTotals(calcTotals(thisHarvest, seedPrice));
	};

	return (
		<div>
			<p>{selectedCrop.name}</p>
			<div className="row">
				<div className="col-6">
					<CropCalendar
						selectedCrops={[selectedCrop]}
						yieldTimes={yields.times}
					/>
				</div>
				<div className="col-6">
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(4, 25%)",
						}}
					>
						<div>Plant on</div>
						<div>Seeds</div>
						<div>Harvest on</div>
						<div>Yield</div>
					</div>
					{yields.harvests.map((thisHarvest, i) => {
						return (
							<div
								key={i}
								style={{
									border: "1px solid #ddd",
									padding: "3px 5px",
									display: "grid",
									gridTemplateColumns: "repeat(4, 25%)",
								}}
							>
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
												className="seed"
											/>
											<input
												type="number"
												value={thisHarvest.growDay}
												onChange={(e) => {
													handleChange("growDay", i, e.target.value);
												}}
												style={{ width: "45px" }}
											/>
										</>
									)}
									{thisHarvest.regrowDay && thisHarvest.regrowDay}
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
												className="seed"
											/>
											<input
												type="number"
												value={thisHarvest.seeds}
												onChange={(e) => {
													handleChange("seeds", i, e.target.value);
												}}
												style={{ width: "80px" }}
											/>
										</>
									)}
								</div>
								<div>
									<img
										src={
											"images/" +
											selectedCrop.name.replaceAll(" ", "_") +
											".png"
										}
										alt={selectedCrop.name}
										className="crop"
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
										className="crop"
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
							Total Seeds: {totals.totalSeeds}
							<br />
							Total Cost: {totals.totalSeedCost}
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
							Total Yield: {totals.totalYield}
						</div>
					</div>
				</div>
				<hr />
			</div>
		</div>
	);
}

export default CropYield;

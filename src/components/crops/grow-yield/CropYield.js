import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import CropCalendar from "./CropCalendar";

const calcInitHarvests = (crop) => {
	// init
	let day = 1;
	let harvests = [];
	const initHarvest = {
		init: true,
		isEditingPlanting: false,
		isEditingSeeds: false,
	};

	console.log(crop.name);
	// while we are in the month and not a day after
	while (day <= 28) {
		console.log(day);
		// create a new harvest
		const newHarvest = initHarvest;

		// get next grow period
		let growingTime = crop.growTime;

		// init harvest, plant
		if (harvests.length === 0 || !crop.regrow) {
			// plant or replant
			newHarvest.plantDay = day;
			newHarvest.seeds = 1;
		} else {
			// change growing time
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
			console.log("newHarvest", newHarvest);
			harvests.push(newHarvest);
			console.log("all harvests", harvests);
		}
		// incrament day
		day += growingTime;
	}

	console.log("returning harvests", harvests);
	return harvests;
};

const reCalcHarvestDays = (harvests, pos) => {
	const newHarvests = [];
	harvests.forEach((harvest, i) => {
		// if up to to the harvest changing
		if (i <= pos) {
			// no re-calculation required, just push
			newHarvests.push(harvest);
		} else if (i + 1 === pos) {
			// else if immeditately after changed harvest, recalculate the rest
			if (harvest.init) {
			}
			// loop
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
	const initHarvests = calcInitHarvests(selectedCrop);
	const [harvests, setHarvests] = useState(initHarvests);
	const [totals, setTotals] = useState(calcTotals(selectedCrop, initHarvests));

	useEffect(() => {
		console.log("useeffect - recalc yield and totals");
		// recalculate and set yield times and totals
		// setTotals(calcTotals(selectedCrop, harvests));
	}, [selectedCrop, harvests]);

	const handleChangeEditing = (name, pos) => {
		console.log("editChange, name: ", name, " pos: ", pos);
		// copy value and update
		let thisHarvest = harvests;
		thisHarvest[pos][name] = true;
		// set harvest
		setHarvests(thisHarvest);
	};

	const handleChange = (name, pos, value) => {
		// TODO: validation

		// copy value and update
		let thisHarvest = harvests;
		thisHarvest[pos][name] = +value;
		thisHarvest[pos]["init"] = thisHarvest[pos].initHarvestDay
			? thisHarvest[pos].initHarvestDay === value
			: !thisHarvest[pos]["init"];

		// re-calc rest of the harvest
		if (name === "plantDay") {
			thisHarvest = reCalcHarvestDays(thisHarvest, pos);
		}
		thisHarvest = reCalcHarvestYields(thisHarvest);

		// set harvest
		setHarvests(thisHarvest);
		// // recalculate and set yield times and totals
		// setTotals(calcTotals(selectedCrop, thisHarvest));
	};

	const boxStyles = {
		border: "1px solid #ccc",
		borderRadius: "1px",
		padding: "2px 3px",
		margin: "0",
		width: "calc(100% - 1rem - 8px)",
		display: "inline-block",
		textAlign: "left",
	};
	return (
		<div>
			<div className="row">
				<div className="col-6">
					<p>{selectedCrop.name}</p>
					<CropCalendar selectedCrops={[selectedCrop]} harvests={harvests} />
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
						console.log("thisHarvest", thisHarvest);
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
									{thisHarvest.plantDay && (
										<>
											<img
												src={"images/Calendar.png"}
												alt={"calendar"}
												className="icon"
											/>
											{thisHarvest.isEditingPlanting ? (
												<input
													type="number"
													value={thisHarvest.plantDay}
													onChange={(e) => {
														handleChange("plantDay", i, e.target.value);
													}}
													disabled={!thisHarvest.isEditingPlanting}
													style={{ ...boxStyles, background: "eee" }}
												/>
											) : (
												<span
													style={{ ...boxStyles }}
													onClick={() =>
														handleChangeEditing("isEditingPlanting", i)
													}
												>
													{thisHarvest.plantDay}
												</span>
											)}
										</>
									)}
								</div>
								<div>
									{thisHarvest.plantDay && (
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
											{thisHarvest.isEditingSeeds ? (
												<input
													type="number"
													value={thisHarvest.seeds}
													onChange={(e) => {
														handleChange("seeds", i, e.target.value);
													}}
													disabled={!thisHarvest.isEditingSeeds}
													style={boxStyles}
												/>
											) : (
												<span
													style={boxStyles}
													onClick={() =>
														handleChangeEditing("isEditingSeeds", i)
													}
												>
													{thisHarvest.seeds}
												</span>
											)}
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

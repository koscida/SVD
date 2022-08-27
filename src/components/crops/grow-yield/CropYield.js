import { useEffect, useState } from "react";
import CropCalendar from "./CropCalendar";

const getInitYields = (crop) => {
	// init
	let day = 1;
	let times = {};
	let yields = [];

	// add to times and yields
	times.growDays = [day];
	times.harvestDays = [];
	yields = [{ growDay: day, seeds: 1 }];

	// grow first set of seeds
	day += crop.growTime;

	// while we are in the month and not a day after
	while (day <= 28) {
		// add day to list of harvest days
		times.harvestDays.push(day);
		// update the yield
		const thisYieldInd = yields.length - 1;
		yields[thisYieldInd].harvestDay = day;
		yields[thisYieldInd].yield = crop.regrow
			? yields[0].seeds
			: yields[thisYieldInd].seeds;
		// if regrowing, only add to yield, incrament day
		if (crop.regrow) {
			// else replanting, add grow day and incrament day
			if (day + crop.regrowTime + 1 <= 28) {
				yields.push({ regrowDay: day });
			}
			day += crop.regrowTime + 1;
		} else {
			// else replanting, if replanting, add grow day and incrament day
			if (day + crop.growTime <= 28) {
				// regrow
				times.growDays.push(day);
				yields.push({ growDay: day, seeds: 1 });
			}
			day += crop.growTime;
		}
	}

	return { times, yields };
};

const calcTotals = (yields, seedCost) => {
	let totals = yields.reduce(
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

function CropYield({ selectedCrop, setCrop }) {
	const [yields, setYields] = useState(getInitYields(selectedCrop));
	const [totals, setTotals] = useState(
		calcTotals(yields.yields, Object.values(selectedCrop.buy)[0])
	);

	const handleChange = (name, pos, value) => {
		let newCrop = selectedCrop;
		newCrop.yield[pos][name] = value;
		setCrop(newCrop);
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
					{yields.yields.map((thisYield, i) => {
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
									{thisYield.growDay && (
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
												value={thisYield.growDay}
												onChange={(e) => {
													handleChange("growDay", i, e.target.value);
												}}
												style={{ width: "45px" }}
											/>
										</>
									)}
									{thisYield.regrowDay && thisYield.regrowDay}
								</div>
								<div>
									{thisYield.growDay && (
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
												value={thisYield.seeds}
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
									{thisYield.harvestDay}
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
									{thisYield.yield}
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

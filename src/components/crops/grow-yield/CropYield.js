import CropCalendar from "./CropCalendar";

function CropYield({ selectedCrop, setCrop }) {
	const handleChange = (name, pos, value) => {
		let newCrop = selectedCrop;
		newCrop.yield[pos][name] = value;
		setCrop(newCrop);
	};

	let totals = selectedCrop.yields.reduce(
		(num, thisYield) => {
			if (thisYield.seeds) num.totalSeeds = num.totalSeeds + thisYield.seeds;
			num.totalYield = num.totalYield + thisYield.yield;
			return num;
		},
		{ totalSeeds: 0, totalYield: 0 }
	);
	totals.totalSeedCost = totals.totalSeeds * Object.values(selectedCrop.buy)[0];

	return (
		<div>
			<p>{selectedCrop.name}</p>
			<div className="row">
				<div className="col-6">
					<CropCalendar selectedCrops={[selectedCrop]} />
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
					{selectedCrop.yields.map((thisYield, i) => {
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

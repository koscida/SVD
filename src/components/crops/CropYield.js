function CropYield({ selectedCrops, setCrops }) {
	return selectedCrops.map((selectedCrop, i) => {
		return (
			<div key={i}>
				<p>{selectedCrop.name}</p>
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{selectedCrop.yields.map((thisYield, k) => {
						return (
							<div
								key={k}
								style={{
									border: "1px solid #ddd",
									padding: "3px 5px",
									margin: "3px",
								}}
							>
								<div>
									<p>
										Grow on:&nbsp;
										<input
											type="number"
											value={thisYield.growDay}
											style={{ width: "45px" }}
										/>
									</p>
									<p>
										Seeds:&nbsp;
										<input
											type="number"
											value={thisYield.seeds}
											style={{ width: "80px" }}
										/>
									</p>
								</div>
								<div>
									<p>
										Harvest on:&nbsp;
										<input
											type="number"
											value={thisYield.harvestDay}
											disabled="disabled"
											style={{ width: "45px" }}
										/>{" "}
									</p>
									<p>
										Yield:&nbsp;
										<input
											type="number"
											value={thisYield.yield}
											disabled="disabled"
											style={{ width: "80px" }}
										/>
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<hr />
			</div>
		);
	});
}

export default CropYield;

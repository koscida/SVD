function CropCalendar({ selectedCrops }) {
	const cols = selectedCrops.length + 1;
	return (
		<div
			className="d-grid"
			style={{
				gridTemplateColumns: "repeat(7, calc(100% / 7))",
				gridtemplateRows: "repeat(4, calc(100% / 4))",
			}}
		>
			{[...Array(29).keys()].slice(1).map((i) => (
				<div
					className="cell cropCell d-grid"
					key={i}
					style={{
						gridTemplateRows: "repeat(" + cols + ", calc(100% / " + cols + "))",
					}}
				>
					<div className="date">{i}</div>
					{selectedCrops.map((crop) => {
						let seedOpacity = 1 / (crop.growTime + 1);
						let growOpacity = 2 / (crop.growTime + 1);
						let harvestOpacity = 1;
						// if within first growing period
						if (i <= crop.growTime + 1) {
							growOpacity = (1 * i) / (crop.growTime + 1);
						} else {
							if (crop.regrow) {
								seedOpacity = 1 / (crop.regrowTime + 1);
								growOpacity =
									(((i - crop.growTime - 1) % (crop.regrowTime + 1)) + 0) /
									(crop.regrowTime + 1);
							} else {
								growOpacity =
									(((i - crop.growTime - 1) % (crop.growTime + 1)) + 1) /
									(crop.growTime + 1);
							}
						}
						let cropColor = crop.color;
						if (i > crop.harvestDays[crop.harvestDays.length - 1]) {
							if (crop.regrow) growOpacity = 1 / (crop.regrowTime + 1);
							else cropColor = "transparent";
						}
						return (
							<div
								key={crop.name}
								className="d-flex direction-row align-items-center"
								style={{ minHeight: "20px" }}
							>
								{crop.harvestDays.includes(i) && (
									<>
										<div
											style={{
												background: cropColor,
												opacity: harvestOpacity,
												height: "8px",
												flex: "1 0",
											}}
										></div>
										<img
											src={"images/" + crop.name.replaceAll(" ", "_") + ".png"}
											alt={crop.name}
											className="crop"
										/>
									</>
								)}
								{crop.growDays.includes(i) && (
									<>
										<img
											src={"images/" + crop.seeds.replaceAll(" ", "_") + ".png"}
											alt={crop.name}
											className="seed"
										/>
										<div
											style={{
												background: cropColor,
												opacity: seedOpacity,
												height: "8px",
												flex: "1 0",
											}}
										></div>
									</>
								)}
								{!crop.harvestDays.includes(i) && !crop.growDays.includes(i) && (
									<div
										style={{
											background: cropColor,
											opacity: growOpacity,
											height: "8px",
											flex: "1 0",
										}}
									></div>
								)}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
}

export default CropCalendar;

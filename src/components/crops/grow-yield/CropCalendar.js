import RenderImg from "../../shared/Icons/RenderImg";

function CropCalendar({ crop, harvests }) {
	// console.log("crop.name", crop.name);

	let harvestInd = 0;

	const RenderBand = ({ opacity, color }) => {
		// styles
		const harvestStyles = {
			background: color,
			opacity: opacity,
			height: "8px",
			flex: "1 0",
		};
		return <div style={harvestStyles}></div>;
	};

	return (
		<div
			className="d-grid"
			style={{
				gridTemplateColumns: "repeat(7, calc(100% / 7))",
				gridtemplateRows: "repeat(4, calc(100% / 4))",
			}}
		>
			{[...Array(29).keys()].slice(1).map((i) => {
				// console.log("i", i);
				// get the harvest on
				const thisHarvest =
					harvestInd < harvests.length
						? harvests[harvestInd]
						: { growDays: [], plantDay: null, harvestDay: null };
				// console.log("thisHarvest", thisHarvest);
				let nextHarvest;

				// day type
				let isPlanting = thisHarvest.plantDay === i;
				let isGrowing = thisHarvest.growDays.includes(i);
				const isHarvesting = thisHarvest.harvestDay === i;

				// get the next harvest, update types
				if (isHarvesting) {
					nextHarvest =
						harvestInd + 1 < harvests.length
							? harvests[harvestInd + 1]
							: { growDays: [], plantDay: null, harvestDay: null };
					isPlanting = nextHarvest.plantDay === i;
					isGrowing = nextHarvest.growDays.includes(i);
				}

				// set opacity
				// if planting
				let seedOpacity =
					harvestInd === 0 || !crop.regrow
						? 1 / (crop.growTime + 1)
						: 1 / (crop.regrowTime + 1);
				let growOpacity = 1 / (crop.growTime + 1);
				// if harvesting
				let harvestOpacity = 1;
				// if growing crop and no next harvest set, means this is a grow only day, so change opacity
				if (isGrowing && !isHarvesting && !isPlanting) {
					// if regrowing
					if (crop.regrow && harvestInd !== 0) {
						growOpacity =
							(i - thisHarvest.growDays[0] + 0) / (crop.regrowTime + 1);
					} // else, replanting
					else {
						growOpacity = (i - thisHarvest.plantDay + 1) / (crop.growTime + 1);
					}
					// }
				}

				// get crop color
				let cropColor = crop.color;
				// if after the final harvest day (all values within thisHarvest are null)
				if (thisHarvest.growDays.length === 0) {
					// if regrowing, change opacity to first phase of regrowing transparent
					//		else, it is a single harvest, change color to transparent
					if (crop.regrow) growOpacity = 1 / (crop.regrowTime + 1);
					else cropColor = "transparent";
				} else {
					// incrament
					if (i === thisHarvest.harvestDay) {
						harvestInd++;
					}
				}

				return (
					<div className="cell cropCell d-grid" key={i} style={{}}>
						<div className="date">{i}</div>

						<div
							key={crop.name}
							className="d-flex direction-row align-items-center"
							style={{ minHeight: "20px" }}
						>
							{isHarvesting && (
								<>
									<RenderBand opacity={harvestOpacity} color={cropColor} />
									<RenderImg label={crop.name} />
								</>
							)}
							{isPlanting && (
								<>
									<RenderImg label={crop.seeds} />
									<RenderBand opacity={seedOpacity} color={cropColor} />
								</>
							)}
							{isGrowing && (
								<>
									<RenderBand opacity={growOpacity} color={cropColor} />
								</>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CropCalendar;

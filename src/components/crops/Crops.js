import useLocalStorage from "../shared/useLocalStorage";
import data from "../shared/data";

// get data from data file
//	dataCrops list of ojects
const dataCrops = data.crops;
// crops, object of objects
const crops = dataCrops.reduce((crops, newCrop) => {
	// init
	let day = 1;

	// add to newCrop
	newCrop.growDays = [day];
	newCrop.harvestDays = [];
	newCrop.yields = [{ growDay: day, seeds: 1 }];

	// grow first set of seeds
	day += newCrop.growTime;

	// while we are in the month and not a day after
	while (day <= 28) {
		// add day to list of harvest days
		newCrop.harvestDays.push(day);
		// update the yield
		const thisYieldInd = newCrop.yields.length - 1;
		newCrop.yields[thisYieldInd].harvestDay = day;
		newCrop.yields[thisYieldInd].yield = newCrop.yields[thisYieldInd].seeds;
		// if regrowing, incrament day
		if (newCrop.regrow) {
			day += newCrop.regrowTime + 1;
		} else {
			// else replanting, add grow day and incrament day
			if (day + newCrop.growTime <= 28) {
				// regrow
				newCrop.growDays.push(day);
				newCrop.yields.push({ growDay: day, seeds: 1 });
			}
			day += newCrop.growTime;
		}
	}

	// add to crops
	crops[newCrop.name] = newCrop;

	return crops;
}, {});
const cropTypes = ["Regrows", "Single harvest"];

const getSelectedCrops = (selectedSeason) => {
	return sortCrops(
		Object.values(crops).filter(
			(crop) => crop.season && crop.season.includes(selectedSeason)
		)
	);
};
const sortCrops = (crops) => {
	return crops
		.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
		.sort((a, b) => a.growTime > b.growTime)
		.sort((a, b) =>
			a.season.length < b.season.length
				? -1
				: a.season.length > b.season.length
				? 1
				: 0
		)
		.sort((a, b) =>
			!a.regrow && b.regrow ? -1 : a.regrow && !b.regrow ? 1 : 0
		);
};

const startingSeason = "Spring";
function Crops() {
	const [selectedSeason, setSelectedSeason] = useLocalStorage(
		"svd-crops-selectedseason",
		startingSeason
	);
	const [selectedCropType, setSelectedCropType] = useLocalStorage(
		"svd-crops-selectedcroptype",
		cropTypes
	);
	const [cropOptions, setCropOptions] = useLocalStorage(
		"svd-crops-cropoptions",
		getSelectedCrops(startingSeason)
	);
	const [selectedCrops, setSelectedCrops] = useLocalStorage(
		"svd-crops-selectedcrops",
		getSelectedCrops(startingSeason)
	);

	const handleSeasonSwitch = (e) => {
		const newSeason = e.target.value;
		setSelectedSeason(newSeason);
		setSelectedCrops(getSelectedCrops(newSeason));
		setCropOptions(getSelectedCrops(newSeason));
	};
	const handleCropSelect = (name) => {
		if (selectedCrops.map((x) => x.name).includes(name)) {
			const newSelectedCrops = selectedCrops.filter((x) => x.name !== name);
			setSelectedCrops(newSelectedCrops);
		} else {
			const newSelectedCrop = cropOptions.filter((x) => x.name === name);
			setSelectedCrops(sortCrops([...selectedCrops, ...newSelectedCrop]));
		}
	};
	const handleCropTypeSelect = (type) => {
		let newCropTypes;
		if (selectedCropType.includes(type)) {
			newCropTypes = selectedCropType.filter((x) => x !== type);
		} else {
			newCropTypes = [...selectedCropType, type];
		}
		setSelectedCropType(newCropTypes);
		const newSelectedCrops = selectedCrops.filter((x) => {
			let include = false;
			if (newCropTypes.includes("Regrows") && x.regrow) include = true;
			if (newCropTypes.includes("Single harvest") && !x.regrow) include = true;
			return include;
		});
		setSelectedCrops(newSelectedCrops);
	};

	const CropCalendar = () => {
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
							gridTemplateRows:
								"repeat(" + cols + ", calc(100% / " + cols + "))",
						}}
					>
						<div className="date">{i}</div>
						{selectedCrops.map((selectedCrop) => {
							const crop = crops[selectedCrop.name];
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
									key={selectedCrop.name}
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
												src={
													"images/" + crop.name.replaceAll(" ", "_") + ".png"
												}
												alt=""
												className="crop"
											/>
										</>
									)}
									{crop.growDays.includes(i) && (
										<>
											<img
												src={
													"images/" + crop.seeds.replaceAll(" ", "_") + ".png"
												}
												alt=""
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
	};

	const CropList = () => {
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
	};

	return (
		<div className="cropsApp">
			<div className="row">
				<div className="col-2">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="cropSeason"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{selectedSeason}
						</button>
						<ul className="dropdown-menu" aria-labelledby="cropSeason">
							{data.seasonsNames.map((seasonName) => (
								<li key={seasonName}>
									<input
										type="button"
										className="dropdown-item"
										value={seasonName}
										onClick={handleSeasonSwitch}
									/>
								</li>
							))}
						</ul>
					</div>
					<div>
						<hr />
						{cropTypes.map((type) => (
							<div
								key={type}
								className="form-check m-0 p-0 d-flex align-items-center"
							>
								<input
									className="form-check-input m-0 me-1"
									type="checkbox"
									name={type}
									id={type}
									onChange={(e) => {
										handleCropTypeSelect(type);
									}}
									checked={selectedCropType.includes(type) && type}
									value={type}
								/>
								<label
									className={"form-check-label m-0 d-flex flex-row " + type}
									htmlFor={type}
								>
									{type}
								</label>
							</div>
						))}
						<hr />
						{cropOptions.map((c) => {
							const checked = selectedCrops.map((x) => x.name).includes(c.name);
							return (
								<div className="form-check m-0 p-0 d-flex align-items-center">
									<input
										className="form-check-input m-0 me-1"
										type="checkbox"
										name={c.name}
										id={c.name}
										onChange={(e) => {
											handleCropSelect(c.name);
										}}
										checked={checked && c.name}
										value={c.name}
									/>
									<label
										className={"form-check-label m-0 d-flex flex-row " + c.name}
										htmlFor={c.name}
									>
										{c.name}
									</label>
								</div>
							);
						})}
					</div>
				</div>
				<div className="col-5">
					<CropCalendar />
				</div>
				<div className="col-5">
					<p>Harvest</p>
					<hr />
					<CropList />
				</div>
			</div>
		</div>
	);
}

export default Crops;

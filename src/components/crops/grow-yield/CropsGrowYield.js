import useLocalStorage from "../../shared/useLocalStorage";
import data from "../../shared/data";
import CropFilter from "./CropFilter";
import CropYield from "./CropYield";

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
function CropsGrowYield() {
	const [selectedSeason, setSelectedSeason] = useLocalStorage(
		"svd-crops-selectedseason",
		startingSeason
	);
	const [selectedCropType, setSelectedCropType] = useLocalStorage(
		"svd-crops-selectedcroptype",
		data.cropTypes
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

	return (
		<div className="cropsApp">
			<div className="row">
				<div className="col-1">
					<CropFilter
						selectedCrops={selectedCrops}
						selectedSeason={selectedSeason}
						handleSeasonSwitch={handleSeasonSwitch}
						selectedCropType={selectedCropType}
						handleCropTypeSelect={handleCropTypeSelect}
						cropOptions={cropOptions}
						handleCropSelect={handleCropSelect}
					/>
				</div>
				<div className="col-11">
					{selectedCrops.map((selectedCrop, i) => (
						<CropYield key={i} selectedCrop={selectedCrop} setCrop={null} />
					))}
				</div>
			</div>
		</div>
	);
}

export default CropsGrowYield;

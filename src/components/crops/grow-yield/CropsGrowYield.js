import useLocalStorage from "../../shared/useLocalStorage";
import data from "../../shared/data";
import CropFilter from "./CropFilter";
import CropsPlots from "./CropPlots";
import CropYield from "./CropYield";

// get data from data file
//	dataCrops list of ojects
const dataCrops = data.crops;
// crops, object of objects
const crops = dataCrops.reduce((crops, newCrop) => {
	// add to crops
	crops[newCrop.name] = newCrop;
	return crops;
}, {});

const getSeasonalCrops = (selectedSeason) => {
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

function CropsGrowYield() {
	// init values
	const startingSeason = "Spring";
	const seasonalCrops = getSeasonalCrops(startingSeason);
	const seasonalCropNames = seasonalCrops.map((c) => c.name);
	// init filters
	const [selectedSeason, setSelectedSeason] = useLocalStorage(
		"svd-crops-yield-filter-selectedseason",
		startingSeason
	);
	const [cropOptionList, setCropOptionList] = useLocalStorage(
		"svd-crops-yield-filter-cropoptions",
		seasonalCropNames
	);
	// init selections
	const [selectedPlot, setSelectedPlot] = useLocalStorage(
		"svd-crops-yield-selectedplot",
		null
	);
	const [selectedCrops, setSelectedCrops] = useLocalStorage(
		"svd-crops-yield-selectedcrops",
		seasonalCrops
	);

	const handleChangeSeason = (e) => {
		const newSeason = e.target.value;
		setSelectedSeason(newSeason);
		const seasonalCrops = getSeasonalCrops(newSeason);
		const seasonalCropNames = seasonalCrops.map((c) => c.name);
		setSelectedCrops(seasonalCrops);
		setCropOptionList(seasonalCropNames);
	};
	const handleCropSelect = (name) => {
		// if name is in list of selected crops, then filter it out
		if (selectedCrops.map((x) => x.name).includes(name)) {
			const newSelectedCrops = selectedCrops.filter((x) => x.name !== name);
			setSelectedCrops(newSelectedCrops);
		} // else, name was not in selected crops, then add it
		else {
			const newSelectedCrop = crops[name];
			setSelectedCrops(sortCrops([...selectedCrops, newSelectedCrop]));
		}
	};

	return (
		<div className="cropsApp">
			<div className="row">
				<div className="col-1">
					<CropFilter
						selectedSeason={selectedSeason}
						handleChangeSeason={handleChangeSeason}
						cropOptionList={cropOptionList}
						selectedCrops={selectedCrops}
						handleCropSelect={handleCropSelect}
					/>
				</div>
				<div className="col-5">
					<CropsPlots
						selectedCrops={selectedCrops}
						selectedPlot={selectedPlot}
						setSelectedPlot={setSelectedPlot}
					/>
				</div>
				<div className="col-6">
					{selectedCrops.map((selectedCrop, i) => (
						<CropYield key={i} selectedCrop={selectedCrop} />
					))}
				</div>
			</div>
		</div>
	);
}

export default CropsGrowYield;

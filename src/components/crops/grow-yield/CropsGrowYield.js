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

const calcInitHarvests = (crop, seeds) => {
	// init
	let day = 1;
	const harvests = [];

	// while we are in the month and not a day after
	while (day <= 28) {
		// create a new harvest
		let newHarvest = {};

		// get next grow period
		let growingTime;

		// init harvest, or regrowing, plant
		if (harvests.length === 0 || !crop.regrow) {
			// plant or replant
			newHarvest.plantDay = day;
			newHarvest.seeds = seeds;
			// set growing time
			growingTime = crop.growTime;
			// set diff between growing periods
			newHarvest.plantOffset = 0;
		} else {
			// set growing time
			growingTime = crop.regrowTime + 1;
		}

		// get harvest day
		const harvestDay = day + growingTime;

		// check if we can grow this harvest
		if (harvestDay <= 28) {
			// yield the harvest
			newHarvest.harvestDay = harvestDay;
			newHarvest.yield = seeds;

			// add grow days that the harvest grew
			newHarvest.growDays = [...Array(newHarvest.harvestDay).keys()].slice(day);

			// add the harvest
			harvests.push(newHarvest);
		}
		// incrament day
		day += growingTime;
	}

	return harvests;
};

const calcTotals = (selectedCrop, harvests) => {
	const seedCost = Object.values(selectedCrop.buy)[0];

	// seed and yield totals
	let totals = harvests.reduce(
		(totals, thisHarvest) => {
			if (thisHarvest.harvestDay <= 28) {
				if (thisHarvest.seeds)
					totals.totalSeeds = totals.totalSeeds + +thisHarvest.seeds;
				totals.totalYield = totals.totalYield + +thisHarvest.yield;
			}
			return totals;
		},
		{ totalSeeds: 0, totalYield: 0 }
	);

	// buy and sell price
	totals.totalSeedCost = totals.totalSeeds * seedCost;
	totals.totalYieldSell = totals.totalYield * selectedCrop.sell;

	return totals;
};

function CropsGrowYield() {
	// init values
	const startingSeason = "Spring";
	// init filter data
	const [cropSeasonalList, setCropSeasonalList] = useLocalStorage(
		"svd-crops-yield-filter-cropseasonallist",
		getSeasonalCrops(startingSeason).map((c) => c.name)
	);
	// init selections
	const [selectedSeason, setSelectedSeason] = useLocalStorage(
		"svd-crops-yield-filter-selectedseason",
		startingSeason
	);
	const [selectedPlot, setSelectedPlot] = useLocalStorage(
		"svd-crops-yield-selectedplot",
		null
	);
	// data
	const initHarvest = calcInitHarvests(crops["Parsnip"], 15);
	const [plots, setPlots] = useLocalStorage("svd-crops-yield-plots", [
		{
			name: "Parsnips",
			size: 15,
			selectedCrops: ["Parsnip"],
			harvests: { Parsnip: initHarvest },
			totals: { Parsnip: calcTotals(crops["Parsnip"], initHarvest) },
		},
	]);

	// Handlers
	// CropFilter handlers
	const handleChangeSeason = (e) => {
		// set season
		const newSeason = e.target.value;
		setSelectedSeason(newSeason);
		// set crop filter options
		const seasonalCrops = getSeasonalCrops(newSeason);
		const seasonalCropNames = seasonalCrops.map((c) => c.name);
		setCropSeasonalList(seasonalCropNames);
		// set selected crops ?
	};
	const handleCropSelect = (name) => {
		// init
		const newPlots = [...plots];
		const oldSelectedCrops = plots[selectedPlot].selectedCrops;
		// if name is in list of selected crops, then filter it out
		if (oldSelectedCrops.includes(name)) {
			// filter out selected crop
			newPlots[selectedPlot].selectedCrops = oldSelectedCrops.filter(
				(x) => x !== name
			);
		} // else, name was not in selected crops, then add it
		else {
			// add to selected crops
			newPlots[selectedPlot].selectedCrops = [...oldSelectedCrops, name].sort(
				(a, b) => a < b
			);
			// add to harvests
			newPlots[selectedPlot].harvests[name] = calcInitHarvests(
				crops[name],
				newPlots[selectedPlot].size
			);
			// update totals
			newPlots[selectedPlot].totals[name] = calcTotals(
				crops[name],
				newPlots[selectedPlot].harvests[name]
			);
		}

		setPlots(newPlots);
	};
	// CropPlot handlers
	const handleSetPlots = (newPlots) => {
		// loop and check
		const filteredPlots = newPlots.map((plot) => {
			// add selected crops
			if (!plot.seasonalCrops) {
				plot.selectedCrops = [];
			}
			// add harvest
			if (!plot.harvests) {
				plot.harvests = {};
			}
			// add totals
			if (!plot.totals) {
				plot.totals = {};
			}

			// return
			return plot;
		});

		setPlots(filteredPlots);
	};
	// CropYield handlers
	const handleSetHarvest = (selectedCropName, newHarvest) => {
		// copy new crops
		const newPlots = [...plots];

		// update harvest
		newPlots[selectedPlot].harvests[selectedCropName] = newHarvest;

		// update totals
		newPlots[selectedPlot].totals[selectedCropName] = calcTotals(
			crops[selectedCropName],
			newHarvest
		);

		// update plots
		setPlots(newPlots);
	};

	return (
		<div className="cropsApp">
			<div className="row">
				<div className="col-1">
					<CropFilter
						selectedSeason={selectedSeason}
						handleChangeSeason={handleChangeSeason}
						cropSeasonalList={cropSeasonalList}
						selectedCrops={
							selectedPlot !== null &&
							!(isNaN(selectedPlot) || selectedPlot < 0) &&
							plots[selectedPlot].selectedCrops
						}
						handleCropSelect={handleCropSelect}
					/>
				</div>
				<div className="col-5">
					<CropsPlots
						selectedPlot={selectedPlot}
						setSelectedPlot={setSelectedPlot}
						plots={plots}
						setPlots={handleSetPlots}
					/>
				</div>
				<div className="col-6">
					{selectedPlot !== null &&
						!(isNaN(selectedPlot) || selectedPlot < 0) &&
						plots[selectedPlot].selectedCrops.map((selectedCropName, i) => {
							const crop = crops[selectedCropName];
							const plot = plots[selectedPlot];
							console.log("plots", plots);
							console.log("plot", plot);
							console.log("plot.totals", plot.totals);
							return (
								<CropYield
									key={i}
									selectedCrop={crop}
									harvests={plot.harvests[selectedCropName]}
									setHarvests={(newHarvest) =>
										handleSetHarvest(selectedCropName, newHarvest)
									}
									resetHarvests={() =>
										handleSetHarvest(
											selectedCropName,
											calcInitHarvests(crop, plot.size)
										)
									}
									totals={plot.totals[selectedCropName]}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default CropsGrowYield;

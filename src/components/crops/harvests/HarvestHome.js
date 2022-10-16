import useLocalStorage from "../../shared/useLocalStorage";
import data from "../../shared/data/dataCrops";
import Plots from "./Plots";
import Harvests from "./Harvests";
import HarvestCalendar from "./HarvestCalendar";

// get data from data file
const { crops } = data;

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

function HarvestHome() {
	// init values
	const startingSeason = "Spring";
	// init filter data
	const [cropSeasonalList, setCropSeasonalList] = useLocalStorage(
		"svd-harvest-cropseasonallist",
		getSeasonalCrops(startingSeason).map((c) => c.name)
	);
	// init selections
	const [selectedSeason, setSelectedSeason] = useLocalStorage(
		"svd-harvest-selectedseason",
		startingSeason
	);
	const [selectedPlot, setSelectedPlot] = useLocalStorage(
		"svd-harvest-selectedplot",
		null
	);
	// data
	const initHarvest = calcInitHarvests(crops["Parsnip"], 15);
	const [plots, setPlots] = useLocalStorage("svd-harvest-plots", [
		{
			name: "Parsnips",
			size: 15,
			selectedCrops: ["Parsnip"],
			harvests: { Parsnip: initHarvest },
			totals: { Parsnip: calcTotals(crops["Parsnip"], initHarvest) },
		},
	]);
	// console.log("plots", plots);

	// Handlers
	// CropFilter handlers
	const handleChangeSeason = (newSeason) => {
		// set season
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
			// console.log("plot", plot);
			// add selected crops
			if (!plot.selectedCrops) {
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
	const handleSetHarvest = (selectedPlotName, selectedCropName, newHarvest) => {
		// copy new crops
		const newPlots = [...plots];

		// get ind
		const plotInd = newPlots.findIndex((p) => p.name === selectedPlotName);

		// update harvest
		newPlots[plotInd].harvests[selectedCropName] = newHarvest;

		// update totals
		newPlots[plotInd].totals[selectedCropName] = calcTotals(
			crops[selectedCropName],
			newHarvest
		);

		// update plots
		setPlots(newPlots);
	};

	return (
		<div className="cropsApp">
			<div className="row">
				<div className="col-4">
					<Plots
						selectedSeason={selectedSeason}
						handleChangeSeason={handleChangeSeason}
						selectedPlot={selectedPlot}
						setSelectedPlot={setSelectedPlot}
						plots={plots}
						setPlots={handleSetPlots}
						cropSeasonalList={cropSeasonalList}
						handleCropSelect={handleCropSelect}
					/>
				</div>

				<div className="col-5">
					{(selectedPlot >= 0 && selectedPlot !== null
						? [plots[selectedPlot]]
						: plots
					).map((plot) =>
						plot.selectedCrops
							.filter((c) => crops[c].season.includes(selectedSeason))
							.map((cropName, i) => {
								const crop = crops[cropName];
								return (
									<Harvests
										key={i}
										selectedCrop={crop}
										plot={plot}
										harvests={plot.harvests[cropName]}
										setHarvests={(newHarvest) =>
											handleSetHarvest(plot.name, cropName, newHarvest)
										}
										resetHarvests={() =>
											handleSetHarvest(
												plot.name,
												cropName,
												calcInitHarvests(crop, plot.size)
											)
										}
										totals={plot.totals[cropName]}
									/>
								);
							})
					)}
				</div>
				<div className="col-3">
					{selectedPlot >= 0 && selectedPlot !== null ? (
						<HarvestCalendar
							plots={[plots[selectedPlot]]}
							selectedSeason={selectedSeason}
						/>
					) : (
						<HarvestCalendar plots={plots} selectedSeason={selectedSeason} />
					)}
				</div>
			</div>
		</div>
	);
}

export default HarvestHome;

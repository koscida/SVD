import styled from "styled-components";

import useLocalStorage from "../../shared/useLocalStorage";
import Plots from "./plots/Plots";
import Planting from "./Planting";
import Calendar from "./Calendar";
import Summary from "./Summary";

import { cropsObj } from "../../../data/crops";

// //
// Data processing

const getSeasonalCrops = (selectedSeason) => {
	return sortCrops(
		Object.values(cropsObj).filter(
			(crop) => crop.seasons && crop.seasons.includes(selectedSeason)
		)
	);
};
const sortCrops = (crops) => {
	return crops
		.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
		.sort((a, b) => a.growTime > b.growTime)
		.sort((a, b) =>
			a.seasons.length < b.seasons.length
				? -1
				: a.seasons.length > b.seasons.length
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
		if (harvests.length === 0 || !crop.Farming.time.regrow) {
			// plant or replant
			newHarvest.plantDay = day;
			newHarvest.seeds = seeds;
			// set growing time
			growingTime = crop.Farming.time.time;
			// set diff between growing periods
			newHarvest.plantOffset = 0;
		} else {
			// set growing time
			growingTime = crop.Farming.time.regrowTime + 1;
		}

		// get harvest day
		const harvestDay = day + growingTime;

		// check if we can grow this harvest
		if (harvestDay <= 28) {
			// yield the harvest
			newHarvest.harvestDay = harvestDay;
			newHarvest.yield = seeds;

			// add grow days that the harvest grew
			newHarvest.growDays = [
				...Array(newHarvest.harvestDay).keys(),
			].slice(day);

			// add the harvest
			harvests.push(newHarvest);
		}
		// incrament day
		day += growingTime;
	}

	return harvests;
};

const calcTotals = (selectedCrop, harvests) => {
	const seedCost = selectedCrop.Farming.seeds[0].amount;

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

// //
// Styled

const StyledHarvestHome = styled.div`
	width: 100%;
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 4fr 5fr 3fr;
	grid-gap: 1rem;
	box-sizing: border-box;
	> div {
		height: calc(100vh - 65px - 2rem);
		overflow-y: scroll;
		border: 1px solid #eee;
		padding: 0.5rem;
		box-sizing: border-box;
	}
`;

// ////
// HarvestHome()

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
	const initHarvest = calcInitHarvests(cropsObj["Parsnip"], 15);
	const [plots, setPlots] = useLocalStorage("svd-harvest-plots", [
		{
			name: "Plot 1",
			size: 15,
			selectedCrops: ["Parsnip"],
			harvests: { Parsnip: initHarvest },
			totals: { Parsnip: calcTotals(cropsObj["Parsnip"], initHarvest) },
		},
	]);
	// console.log("plots", plots);

	// ////
	// Handlers

	//
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
			newPlots[selectedPlot].selectedCrops = [
				...oldSelectedCrops,
				name,
			].sort((a, b) => a < b);
			// add to harvests
			newPlots[selectedPlot].harvests[name] = calcInitHarvests(
				cropsObj[name],
				newPlots[selectedPlot].size
			);
			// update totals
			newPlots[selectedPlot].totals[name] = calcTotals(
				cropsObj[name],
				newPlots[selectedPlot].harvests[name]
			);
		}

		setPlots(newPlots);
	};

	//
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

	//
	// CropYield handlers
	const handleSetHarvest = (
		selectedPlotName,
		selectedCropName,
		newHarvest
	) => {
		// copy new crops
		const newPlots = [...plots];

		// get ind
		const plotInd = newPlots.findIndex((p) => p.name === selectedPlotName);

		// update harvest
		newPlots[plotInd].harvests[selectedCropName] = newHarvest;

		// update totals
		newPlots[plotInd].totals[selectedCropName] = calcTotals(
			cropsObj[selectedCropName],
			newHarvest
		);

		// update plots
		setPlots(newPlots);
	};

	// ////
	// Render

	return (
		<StyledHarvestHome>
			{/* Plots */}
			<div>
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

			{/* Planting */}
			<div>
				<div>
					<div>
						<h2>Planting and Harvesting</h2>
					</div>

					<hr />

					{(selectedPlot >= 0 && selectedPlot !== null
						? [plots[selectedPlot]]
						: plots
					).map((plot) =>
						plot.selectedCrops
							.filter((c) =>
								cropsObj[c].seasons.includes(selectedSeason)
							)
							.map((cropName, i) => {
								const crop = cropsObj[cropName];
								return (
									<Planting
										key={i}
										selectedCrop={crop}
										plot={plot}
										harvests={plot.harvests[cropName]}
										setHarvests={(newHarvest) =>
											handleSetHarvest(
												plot.name,
												cropName,
												newHarvest
											)
										}
										resetHarvests={() =>
											handleSetHarvest(
												plot.name,
												cropName,
												calcInitHarvests(
													crop,
													plot.size
												)
											)
										}
										totals={plot.totals[cropName]}
									/>
								);
							})
					)}
				</div>
			</div>

			{/* Calendar + Summary */}
			<div>
				<div>
					<div>
						<h2>Harvest Calendar</h2>
					</div>
					<Calendar
						plots={
							selectedPlot >= 0 && selectedPlot !== null
								? [plots[selectedPlot]]
								: plots
						}
						selectedSeason={selectedSeason}
					/>
				</div>
				<div>
					<Summary
						plots={
							selectedPlot >= 0 && selectedPlot !== null
								? [plots[selectedPlot]]
								: plots
						}
						selectedSeason={selectedSeason}
					/>
				</div>
			</div>
		</StyledHarvestHome>
	);
}

export default HarvestHome;

function Summary({ plots, selectedSeason }) {
	// console.log("plots", plots);

	// reformat the plots by crops
	/* summary = [
		cropName: { // plot 1
			plotName: {// plot 1
				totalHarvest: false,
				sellCost: true,
				totalSell: true,
			},
			plotName: ...
		},
		cropName: ...,
		total: {}
	]
	 */
	const summary = plots.reduce((summary, plot, i) => {
		Object.entries(plot.harvests).forEach(([cropName, harvests]) => {
			harvests.forEach((harvest) => {
				// summary[cropName][plot.name].totalHarvest ? summary[cropName][plot.name].totalHarvest : 0;
				// summary[cropName][plot.name].totalHarvest += harvest.yield;
			});
			// summary[cropName][plot.name].sellCost = Object.values(selectedCrop.buy)[0];
		});
		// summary[plot.]
		return summary;
		//if(i === plots.length())
	}, {});
}

export default Summary;

import React, { useState } from "react";
import RenderImageSmall from "../../../shared/Icons/RenderImageSmall";
import PlotSeeds from "./PlotSeeds";

export default function PlotDetail({
	isNew,
	i,
	name,
	size,
	harvests,
	initPlot,
	plots,
	setPlots,
	selectedPlot,
	setSelectedPlot,
	newPlot,
	setNewPlot,
	cropsObj,
	cropSeasonalList,
	handleCropSelect,
}) {
	// ////
	// Handlers

	// order change
	const handlePrevChange = (i, name, value) => {
		const newPlots = plots.map((plot, j) => {
			if (i === j) plot[name] = value;
			return plot;
		});
		// update
		setPlots(newPlots);
	};

	// move handlers
	const moveTop = (i) => {
		// reset plots
		setPlots([plots[i], ...plots.filter((x, j) => j !== i)]);
		// reset which editing
		setSelectedPlot(0);
	};
	const moveUp = (i) => {
		// validate
		if (i > 0) {
			// reset plots
			setPlots([
				...plots.filter((x, j) => j < i - 1),
				plots[i],
				...plots.filter((x, j) => j !== i && j >= i - 1),
			]);
			// reset which editing
			setSelectedPlot(i - 1);
		}
	};
	const moveDown = (i) => {
		// validate
		if (i < plots.length - 1) {
			// reset plots
			setPlots([
				...plots.filter((x, j) => j !== i && j <= i + 1),
				plots[i],
				...plots.filter((x, j) => j > i + 1),
			]);
			// reset which editing
			setSelectedPlot(i + 1);
		}
	};
	const moveBottom = (i) => {
		// reset plots
		setPlots([...plots.filter((x, j) => j !== i), plots[i]]);
		// reset which editing
		setSelectedPlot(plots.length - 1);
	};

	return (
		<div className="plotDetail">
			{/* Plot detail */}
			<div>
				<div>
					Name:
					<input
						type="text"
						name="name"
						value={name}
						onChange={({ target: { name, value } }) =>
							isNew
								? setNewPlot({ ...newPlot, [name]: value })
								: handlePrevChange(i, name, value)
						}
					/>
				</div>
				<div>
					<RenderImageSmall label={"Marker3x2"} />
					Size:
					<input
						type="number"
						name="size"
						value={size}
						onChange={({ target: { name, value } }) =>
							isNew
								? setNewPlot({ ...newPlot, [name]: value })
								: handlePrevChange(i, name, value)
						}
					/>
				</div>
				{!isNew ?? (
					<div>
						<i
							className="fa-solid fa-angles-up"
							onClick={() => moveTop(i)}
						></i>
						<i
							className="fa-solid fa-angle-up"
							onClick={() => moveUp(i)}
						></i>
						<i
							className="fa-solid fa-angle-down"
							onClick={() => moveDown(i)}
						></i>
						<i
							className="fa-solid fa-angles-down"
							onClick={() => moveBottom(i)}
						></i>
					</div>
				)}
			</div>

			{/* Seeds */}

			<PlotSeeds
				cropSeasonalList={cropSeasonalList}
				selectedCrops={
					selectedPlot !== null &&
					!(isNaN(selectedPlot) || selectedPlot < 0) &&
					plots[selectedPlot].selectedCrops
				}
				handleCropSelect={isNew ? () => {} : handleCropSelect}
				cropsObj={cropsObj}
			/>
		</div>
	);
}

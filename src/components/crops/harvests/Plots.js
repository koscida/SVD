import { useState } from "react";
import { Chip } from "@mui/material";
import styled from "styled-components";

import useLocalStorage from "../../shared/useLocalStorage";

import SeasonSelect from "../../shared/filters/SeasonSelect";
// import RenderImg from "../../shared/Icons/RenderImg";
import RenderImageSmall from "../../shared/Icons/RenderImageSmall";
import RenderImageMedium from "../../shared/Icons/RenderImageMedium";

import { cropsObj } from "../../shared/data/crops";

// ////
// Styling
const StyledPlots = styled.div`
	.plot {
		background: #f3f3f3;
		padding: 0.5rem;
	}
	.plotDetail {
		display: grid;
		grid-template-columns: 4fr 8fr;
		grid-gap: 0.5rem;
	}
`;

// //
// Plots()

function Plots({
	selectedSeason,
	handleChangeSeason,
	selectedPlot,
	setSelectedPlot,
	plots,
	setPlots,
	cropSeasonalList,
	handleCropSelect,
}) {
	const initPlot = { name: "", size: 0 };

	const [newPlot, setNewPlot] = useState(initPlot);
	const [showClearConfirm, setShowClearConfirm] = useState(false);

	// ////
	// Handlers

	// selecting plot
	const handleCancel = () => {
		setSelectedPlot(null);
	};
	const clearNewPlot = () => {
		setNewPlot(initPlot);
		handleCancel();
	};
	const handleNewSave = () => {
		// validate
		for (const key in initPlot) {
			if (newPlot[key] === initPlot[key]) return;
		}
		if (newPlot.size < 0) return;

		// update
		setPlots([...plots, newPlot]);
		clearNewPlot();
	};
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

	// ////
	// Displays

	const PlotDetail = ({ isNew, i, name, size, harvests }) => {
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
							<i className="fa-solid fa-angle-up" onClick={() => moveUp(i)}></i>
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
				/>
			</div>
		);
	};

	const PlotSeeds = ({ cropSeasonalList, selectedCrops, handleCropSelect }) => {
		// console.log("selectedCrops", selectedCrops);
		return (
			<div style={{ display: "flex" }}>
				<div>
					{Object.entries(
						cropSeasonalList.reduce(
							(newList, seasonalCropName) => {
								cropsObj[seasonalCropName].Grow.time.regrow
									? newList.Reproduces.push(seasonalCropName)
									: newList["Single Harvest"].push(seasonalCropName);
								return newList;
							},
							{ "Single Harvest": [], Reproduces: [] }
						)
					).map(([growType, seasonalCropTypeList]) => (
						<div key={growType}>
							<div>{growType}: </div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									flexWrap: "wrap",
								}}
							>
								{seasonalCropTypeList.map((seasonalCropName) => {
									return (
										<Chip
											key={seasonalCropName}
											label={seasonalCropName}
											avatar={
												<RenderImageSmall
													label={seasonalCropName}
													styles={{ padding: "0", margin: "0 -6px 0 12px" }}
												/>
											}
											onClick={() => handleCropSelect(seasonalCropName)}
											variant={
												seasonalCropName &&
												selectedCrops &&
												selectedCrops.includes(seasonalCropName)
													? "outlined"
													: "filled"
											}
											sx={{ margin: "0 3px 3px 0" }}
										/>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	// ////
	// Render

	return (
		<StyledPlots>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h2>Plots</h2>
				<SeasonSelect
					selectedSeason={selectedSeason}
					handleChangeSeason={handleChangeSeason}
					multiSelect={false}
				/>
			</div>

			<hr />
			<div>
				{plots.map((plot, i) => {
					const isSelected = selectedPlot === i;
					return (
						<div key={i} className="plot">
							<div className="p-2">
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<div>
										{i + 1}. {plot.name} ({plot.size})
									</div>
									<div>
										{plot.selectedCrops
											.filter((c) =>
												cropsObj[c].seasons.includes(selectedSeason)
											)
											.map((selectedCropName) => (
												<RenderImageMedium
													label={selectedCropName}
													key={selectedCropName}
												/>
											))}
									</div>
									{isSelected ? (
										<button className="btn btn-sm" onClick={handleCancel}>
											Close
										</button>
									) : (
										<button
											className="btn btn-sm"
											onClick={() => setSelectedPlot(i)}
										>
											Open
										</button>
									)}
								</div>
								{isSelected && (
									<PlotDetail
										isNew={false}
										i={i}
										name={plot.name}
										size={plot.size}
										harvests={null}
									/>
								)}
							</div>
						</div>
					);
				})}
			</div>
			<hr />
			<div>
				{selectedPlot !== -1 ? (
					<button onClick={() => setSelectedPlot(-1)} className="btn">
						New Plot
					</button>
				) : (
					<PlotDetail
						isNew={true}
						i={-1}
						name={null}
						size={null}
						harvests={null}
					/>
				)}
			</div>
			<hr />
			<div>
				{!showClearConfirm ? (
					<button
						className="btn ms-auto"
						onClick={() => {
							setShowClearConfirm(true);
						}}
					>
						Clear All
					</button>
				) : (
					<div>
						<p>
							Confirm - Do you want to clear/delete all plots (this cannot be
							undone!)
						</p>
						<button
							className="btn ms-auto"
							onClick={() => {
								setPlots([]);
								setNewPlot(initPlot);
							}}
						>
							Confirm
						</button>
						<button
							className="btn ms-auto"
							onClick={() => {
								setShowClearConfirm(false);
							}}
						>
							Cancel
						</button>
					</div>
				)}
			</div>
		</StyledPlots>
	);
}

export default Plots;

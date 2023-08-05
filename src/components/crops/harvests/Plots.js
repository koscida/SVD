import { useState } from "react";
import data from "../../shared/data/crops";
import useLocalStorage from "../../shared/useLocalStorage";
import RenderImg from "../../shared/Icons/RenderImg";
import PlotFilter from "./PlotFilter";
import SeasonSelect from "../../shared/filters/SeasonSelect";

const { crops } = data;

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

	// handlers
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

	const Plot = ({ isNew, i, name, size, harvests }) => {
		return (
			<div className="row">
				<div className="col-4">
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
						<RenderImg label={"Marker3x2"} />
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
				<div className="col-8">
					<PlotFilter
						cropSeasonalList={cropSeasonalList}
						selectedCrops={
							selectedPlot !== null &&
							!(isNaN(selectedPlot) || selectedPlot < 0) &&
							plots[selectedPlot].selectedCrops
						}
						handleCropSelect={isNew ? () => {} : handleCropSelect}
					/>
				</div>
			</div>
		);
	};

	// return
	return (
		<div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h2>Plots</h2>
				<SeasonSelect
					selectedSeason={selectedSeason}
					handleChangeSeason={handleChangeSeason}
				/>
			</div>

			<hr />
			<div>
				{plots.map((plot, i) => {
					const isSelected = selectedPlot === i;
					const selectedStyles = isSelected && {
						background: "#eeeefa",
					};
					return (
						<div key={i}>
							<div style={{ ...selectedStyles }} className="p-2">
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
												crops[c].season.includes(
													selectedSeason
												)
											)
											.map((selectedCropName) => (
												<RenderImg
													label={selectedCropName}
													key={selectedCropName}
												/>
											))}
									</div>
									{isSelected ? (
										<button
											className="btn btn-sm"
											onClick={handleCancel}
										>
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
								{isSelected && <Plot />}
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
					<Plot />
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
							Confirm - Do you want to clear/delete all plots
							(this cannot be undone!)
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
		</div>
	);
}

export default Plots;

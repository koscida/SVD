import { useState } from "react";
import data from "../../shared/data";
import useLocalStorage from "../../shared/useLocalStorage";
import RenderImg from "../../shared/Icons/RenderImg";
import PlotFilter from "./PlotFilter";

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

	// return
	return (
		<div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h2>Plots</h2>
				<div className="dropdown me-2">
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
									onClick={handleChangeSeason}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>

			<hr />
			<div>
				{plots.map((plot, i) => {
					const isSelected = selectedPlot === i;
					const selectedStyles = isSelected && { background: "#eeeefa" };
					return (
						<div key={i}>
							<div style={{ ...selectedStyles }} className="p-2">
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<div>
										{i + 1}. {plot.name} ({plot.size})
									</div>
									<div>
										{plot.selectedCrops
											.filter((c) => crops[c].season.includes(selectedSeason))
											.map((selectedCropName) => (
												<RenderImg
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
									<div className="row">
										<div className="col-4">
											<div>
												Name:
												<input
													type="text"
													name="name"
													value={plot.name}
													onChange={({ target: { name, value } }) =>
														handlePrevChange(i, name, value)
													}
												/>
											</div>
											<div>
												<RenderImg label={"Marker3x2"} />
												Size:
												<input
													type="number"
													name="size"
													value={plot.size}
													onChange={({ target: { name, value } }) =>
														handlePrevChange(i, name, value)
													}
												/>
											</div>
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
										</div>
										<div className="col-8">
											<PlotFilter
												cropSeasonalList={cropSeasonalList}
												selectedCrops={
													selectedPlot !== null &&
													!(isNaN(selectedPlot) || selectedPlot < 0) &&
													plots[selectedPlot].selectedCrops
												}
												handleCropSelect={handleCropSelect}
											/>
										</div>
									</div>
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
					<>
						<div>
							<div>
								Name:
								<input
									type="text"
									name="name"
									value={newPlot.name}
									onChange={({ target: { name, value } }) =>
										setNewPlot({ ...newPlot, [name]: value })
									}
								/>
							</div>
							<div>
								Size:
								<input
									type="number"
									name="size"
									value={newPlot.size}
									onChange={({ target: { name, value } }) =>
										setNewPlot({ ...newPlot, [name]: value })
									}
								/>
							</div>
						</div>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<button onClick={clearNewPlot} className="btn">
								Cancel
							</button>
							<button onClick={handleNewSave} className="btn">
								Add
							</button>
						</div>
					</>
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
		</div>
	);
}

export default Plots;

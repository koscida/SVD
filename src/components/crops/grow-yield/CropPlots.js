import { useState } from "react";
import useLocalStorage from "../../shared/useLocalStorage";
import RenderImg from "../../shared/Icons/RenderImg";

function CropsPlots({ selectedPlot, setSelectedPlot, plots, setPlots }) {
	const initPlot = { name: "", size: 0 };

	const [newPlot, setNewPlot] = useState(initPlot);

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
		const newPlots = plots.map((p, j) => {
			if (i === j) p[name] = value;
			return p;
		});
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
			<div className="d-flex">
				<p>Plots</p>
				<button
					className="btn"
					onClick={() => {
						setPlots([]);
						setNewPlot(initPlot);
					}}
				>
					Clear
				</button>
			</div>
			<hr />
			<div>
				{plots.map((plot, i) => {
					return (
						<div key={i}>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<div>
									{i + 1}. {plot.name} ({plot.size})
								</div>
								{selectedPlot === i ? (
									<button className="btn" onClick={handleCancel}>
										Close
									</button>
								) : (
									<button className="btn" onClick={() => setSelectedPlot(i)}>
										Open
									</button>
								)}
							</div>
							{selectedPlot === i && (
								<div>
									<div>
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
							)}
							<hr />
						</div>
					);
				})}
			</div>
			<div>
				{selectedPlot !== -1 ? (
					<button onClick={() => setSelectedPlot(-1)} className="btn">
						New Plot
					</button>
				) : (
					<>
						<div style={{ display: "flex" }}>
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
		</div>
	);
}

export default CropsPlots;

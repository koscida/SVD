import { useState } from "react";
import useLocalStorage from "../../shared/useLocalStorage";
import EditImg from "../../shared/Icons/EditImg";
import RenderImg from "../../shared/Icons/RenderImg";

function CropsPlots({ selectedCrops }) {
	const initPlot = { name: "", size: 0 };
	const [plots, setPlots] = useLocalStorage("svd-crops-yield-plots", []);
	const [newPlot, setNewPlot] = useState(initPlot);
	const [editingPlot, setEditingPlot] = useState(null);

	// handlers
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
	const handleCancel = () => {
		setEditingPlot(null);
	};
	const handlePrevChange = (i, name, value) => {
		const newPlots = plots.map((p, j) => {
			if (i === j) p[name] = value;
			return p;
		});
		setPlots(newPlots);
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
							{editingPlot === i ? (
								<div>
									<div style={{ display: "flex" }}>
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
									<button onClick={handleCancel} className="btn">
										Save
									</button>
									<button onClick={handleCancel} className="btn">
										Cancel
									</button>
								</div>
							) : (
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<RenderImg label={"Marker3x2"} />
									<div
										style={{ display: "flex", justifyContent: "space-around" }}
									>
										<div>{i}.</div>
										<div>{plot.name}</div>
										<div>({plot.size})</div>
									</div>
									<button className="btn" onClick={() => setEditingPlot(i)}>
										<EditImg />
										Edit
									</button>
								</div>
							)}
							<hr />
						</div>
					);
				})}
			</div>
			<div>
				{editingPlot !== -1 ? (
					<button onClick={() => setEditingPlot(-1)} className="btn">
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
						<button onClick={handleNewSave} className="btn">
							Save
						</button>
						<button onClick={clearNewPlot} className="btn">
							Cancel
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default CropsPlots;

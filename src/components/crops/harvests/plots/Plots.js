import { useState } from "react";
import { Chip } from "@mui/material";
import styled from "styled-components";

import useLocalStorage from "../../../shared/useLocalStorage";

import SeasonSelect from "../../../shared/inputs/SeasonSelect";
// import RenderImg from "../../shared/Icons/RenderImg";
import RenderImageSmall from "../../../shared/Icons/RenderImageSmall";
import RenderImageMedium from "../../../shared/Icons/RenderImageMedium";

import { cropsObj } from "../../../../data/crops";
import ClearAllBtn from "./ClearAllBtn";
import PlotSeeds from "./PlotSeeds";
import PlotDetail from "./PlotDetail";

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

// Init
const initPlot = { name: "", size: 0 };

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
	const [newPlot, setNewPlot] = useState(initPlot);

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

	// clear the plots
	const handleClear = () => {
		setPlots([]);
		setNewPlot(initPlot);
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
												cropsObj[c].seasons.includes(
													selectedSeason
												)
											)
											.map((selectedCropName) => (
												<RenderImageMedium
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
								{isSelected && (
									<PlotDetail
										isNew={false}
										i={i}
										name={plot.name}
										size={plot.size}
										harvests={null}
										initPlot={initPlot}
										plots={plots}
										setPlots={setPlots}
										selectedPlot={selectedPlot}
										setSelectedPlot={setSelectedPlot}
										newPlot={newPlot}
										setNewPlot={setNewPlot}
										cropsObj={cropsObj}
										cropSeasonalList={cropSeasonalList}
										handleCropSelect={handleCropSelect}
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
						name={"Plot Name"}
						size={1}
						harvests={null}
						initPlot={initPlot}
						plots={plots}
						setPlots={setPlots}
						selectedPlot={selectedPlot}
						setSelectedPlot={setSelectedPlot}
						newPlot={newPlot}
						setNewPlot={setNewPlot}
						cropsObj={cropsObj}
						cropSeasonalList={cropSeasonalList}
						handleCropSelect={handleCropSelect}
					/>
				)}
			</div>
			<hr />

			<ClearAllBtn handleClear={handleClear} />
		</StyledPlots>
	);
}

export default Plots;

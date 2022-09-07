import data from "../../shared/data";
import RenderImg from "../../shared/Icons/RenderImg";

function CropFilter({
	selectedSeason,
	handleChangeSeason,
	cropSeasonalList,
	selectedCrops,
	handleCropSelect,
}) {
	// console.log("selectedCrops", selectedCrops);
	return (
		<div style={{ display: "flex" }}>
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
			<div>
				{Object.entries(
					cropSeasonalList.reduce(
						(newList, seasonalCropName) => {
							data.crops[seasonalCropName].regrow
								? newList.Reproduces.push(seasonalCropName)
								: newList["Single Harvest"].push(seasonalCropName);
							return newList;
						},
						{ "Single Harvest": [], Reproduces: [] }
					)
				).map(([growType, seasonalCropTypeList]) => (
					<div key={growType} style={{ display: "flex", alignItems: "center" }}>
						<div>{growType}: </div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexWrap: "wrap",
							}}
						>
							{seasonalCropTypeList.map((seasonalCropName) => {
								const checked =
									selectedCrops && selectedCrops.includes(seasonalCropName);
								const checkedStyle =
									seasonalCropName && checked
										? { background: "#dde", border: "1px solid #ccb" }
										: {};
								return (
									<div
										key={seasonalCropName}
										className="form-check m-0 me-1 mb-1 px-2 py-1 d-flex align-items-center"
										onClick={(e) => {
											handleCropSelect(seasonalCropName);
										}}
										style={{ ...checkedStyle }}
									>
										<RenderImg label={seasonalCropName} />
										{seasonalCropName}
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CropFilter;

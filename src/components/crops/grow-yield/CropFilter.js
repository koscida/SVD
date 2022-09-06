import data from "../../shared/data";
import RenderImg from "../../shared/Icons/RenderImg";

function CropFilter({
	selectedSeason,
	handleChangeSeason,
	cropOptionList,
	selectedCrops,
	handleCropSelect,
}) {
	return (
		<>
			<div className="dropdown">
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
			<hr />
			<div>
				{cropOptionList.map((crop) => {
					const checked = selectedCrops.map((x) => x.name).includes(crop);
					return (
						<div
							key={crop}
							className="form-check m-0 p-0 d-flex align-items-center"
						>
							<input
								className="form-check-input m-0 me-1"
								type="checkbox"
								name={crop}
								id={crop}
								onChange={(e) => {
									handleCropSelect(crop);
								}}
								checked={checked && crop}
								value={crop}
							/>

							<label
								className={"form-check-label m-0 d-flex flex-row " + crop}
								htmlFor={crop}
							>
								<RenderImg label={crop} />
								{crop}
							</label>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default CropFilter;

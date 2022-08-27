import data from "../../shared/data";

function CropFilter({
	selectedCrops,
	selectedSeason,
	handleSeasonSwitch,
	selectedCropType,
	handleCropTypeSelect,
	cropOptions,
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
								onClick={handleSeasonSwitch}
							/>
						</li>
					))}
				</ul>
			</div>
			<hr />
			<div>
				{data.cropTypes.map((type) => (
					<div
						key={type}
						className="form-check m-0 p-0 d-flex align-items-center"
					>
						<input
							className="form-check-input m-0 me-1"
							type="checkbox"
							name={type}
							id={type}
							onChange={(e) => {
								handleCropTypeSelect(type);
							}}
							checked={selectedCropType.includes(type) && type}
							value={type}
						/>
						<label
							className={"form-check-label m-0 d-flex flex-row " + type}
							htmlFor={type}
						>
							{type}
						</label>
					</div>
				))}
			</div>
			<hr />
			<div>
				{cropOptions.map((c) => {
					const checked = selectedCrops.map((x) => x.name).includes(c.name);
					return (
						<div
							key={c.name}
							className="form-check m-0 p-0 d-flex align-items-center"
						>
							<input
								className="form-check-input m-0 me-1"
								type="checkbox"
								name={c.name}
								id={c.name}
								onChange={(e) => {
									handleCropSelect(c.name);
								}}
								checked={checked && c.name}
								value={c.name}
							/>
							<label
								className={"form-check-label m-0 d-flex flex-row " + c.name}
								htmlFor={c.name}
							>
								{c.name}
							</label>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default CropFilter;

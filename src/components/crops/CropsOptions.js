import React from "react";

import MultipleSelectChip from "../shared/inputs/MultipleSelectChip";
import MultipleSelectChips from "../shared/inputs/MultipleSelectChips";
import RenderImageMedium from "../shared/Icons/RenderImageMedium";
import RenderImageSmall from "../shared/Icons/RenderImageSmall";
import SingleSwitch from "../shared/inputs/SingleSwitch";
import RadioOption from "../shared/inputs/RadioOption";
import RenderImg from "../shared/Icons/RenderImg";

import SeasonSelect from "../shared/inputs/SeasonSelect";
import SingleSelectChip from "../shared/inputs/SingleSelectChip";
import RadioChips from "../shared/inputs/RadioChips";

export default function CropsOptions({
	selectedFilters,
	setSelectedFilters,
	filtersOptions,
}) {
	return (
		<>
			{/* Crop Info */}
			<hr />
			<div>
				<p>
					<b>Crop Info</b>
				</p>
			</div>
			<hr />

			<SeasonSelect
				selectedSeason={selectedFilters.selectedSeasons}
				handleChangeSeason={(newSeason) => {
					// set season selected
					setSelectedFilters({
						...selectedFilters,
						selectedSeasons: newSeason,
					});
				}}
				multiSelect={true}
			/>

			<MultipleSelectChips
				label={"Category"}
				selectedOptions={selectedFilters.selectedCategories}
				options={filtersOptions.categoryOptions}
				handleChange={(value) => {
					setSelectedFilters({
						...selectedFilters,
						selectedCategories: value,
					});
				}}
			/>

			<MultipleSelectChips
				label={"Type"}
				selectedOptions={selectedFilters.selectedTypes}
				options={filtersOptions.typeOptions}
				handleChange={(value) => {
					setSelectedFilters({
						...selectedFilters,
						selectedTypes: value,
					});
				}}
			/>

			{/* Details  */}

			<SingleSwitch
				label={"Show detailed Crop Info"}
				checked={selectedFilters.selectedShowDetailedCropInfo}
				handleChange={(value) =>
					setSelectedFilters({
						...selectedFilters,
						selectedShowDetailedCropInfo:
							!selectedFilters.selectedShowDetailedCropInfo,
					})
				}
			/>

			{selectedFilters.selectedShowDetailedCropInfo ? (
				<>
					<SingleSwitch
						label={"Include crops with Trellis"}
						checked={selectedFilters.selectedTrellis}
						handleChange={() =>
							setSelectedFilters({
								...selectedFilters,
								selectedTrellis:
									!selectedFilters.selectedTrellis,
							})
						}
					/>

					<SingleSwitch
						label={"Include crops in Planters"}
						checked={selectedFilters.selectedPlanter}
						handleChange={() =>
							setSelectedFilters({
								...selectedFilters,
								selectedPlanter:
									!selectedFilters.selectedPlanter,
							})
						}
					/>

					<MultipleSelectChips
						label={"Regrow"}
						selectedOptions={selectedFilters.selectedRegrowCrops}
						options={filtersOptions.growTypes}
						handleChange={(value) => {
							setSelectedFilters({
								...selectedFilters,
								growTypes: value,
							});
						}}
					/>
				</>
			) : (
				<></>
			)}

			{/* Harvesting */}

			<hr />
			<div>
				<p>
					<b>Harvesting</b>
				</p>
			</div>
			<hr />

			<RadioChips
				label={"Harvests"}
				selectedOption={selectedFilters.selectedHarvestType}
				options={filtersOptions.harvestTypes}
				handleChange={(value) => {
					setSelectedFilters({
						...selectedFilters,
						selectedHarvestType: value,
					});
				}}
			/>

			{selectedFilters.selectedHarvestType !== 0 ? (
				<RadioChips
					label={"Harvest Display Type"}
					selectedOption={selectedFilters.selectedHarvestDisplayType}
					options={filtersOptions.harvestDisplayTypes}
					handleChange={(value) => {
						setSelectedFilters({
							...selectedFilters,
							selectedHarvestDisplayType: value,
						});
					}}
				/>
			) : (
				<></>
			)}

			{/* Profit */}

			<hr />
			<div>
				<p>
					<b>Profit</b>
				</p>
			</div>
			<hr />

			<RadioChips
				label={"Seed Cost"}
				selectedOption={selectedFilters.selectedSeedType}
				options={filtersOptions.seedTypes}
				handleChange={(value) => {
					setSelectedFilters({
						...selectedFilters,
						selectedSeedType: value,
					});
				}}
			/>

			<RadioChips
				label={"Sell Type"}
				selectedOption={selectedFilters.selectedSellType}
				options={filtersOptions.sellTypes}
				handleChange={(value) => {
					setSelectedFilters({
						...selectedFilters,
						selectedSellType: value,
					});
				}}
			/>
		</>
	);
}

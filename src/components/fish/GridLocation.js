import _dataSeasons from "../shared/data/dataSeasons";
import _dataWeather from "../shared/data/dataWeather";
import _dataLocations from "../shared/data/dataLocations";
import GridBody from "./GridBody";

const dataSeasons = _dataSeasons.seasons;
const dataWeather = _dataWeather.weather;
const dataLocations = _dataLocations.locations;

function GridLocation({
	showGridDisplay,
	displayFish,
	seasonName,
	seasonWeather,
	filteredWeatherNames,
	caughtFish,
	handleCaught,
}) {
	const townLocations = Object.values(dataLocations.locationTown);
	const townLocationsLen = townLocations.length;

	const specialLocations = Object.values(dataLocations.locationSpecial);
	const specialLocationsLen = specialLocations.length;

	const farmLocations = Object.values(dataLocations.locationFarm);
	const farmLocationsLen = farmLocations.length;

	const allLocations = [
		["locationTown", townLocations],
		["locationSpecial", specialLocations],
		["locationFarm", farmLocations],
	];
	const allLocationsLen =
		townLocationsLen + specialLocationsLen + farmLocationsLen;

	// displays
	const GridHeader = () => {
		const cellClasses = "cell cellHeader px-1";
		return (
			<>
				<div className={cellClasses} style={{ gridRowStart: 1, gridRowEnd: 3 }}>
					<p>Name</p>
				</div>
				<div className={cellClasses} style={{ gridRowStart: 1, gridRowEnd: 3 }}>
					<p>Caught?</p>
				</div>
				<div className={cellClasses} style={{ gridRowStart: 1, gridRowEnd: 3 }}>
					<p>Type</p>
				</div>
				<div className={cellClasses} style={{ gridRowStart: 1, gridRowEnd: 3 }}>
					<p>Tool</p>
				</div>
				{allLocations.map(([locationGroupKey, locationGroup], i) => {
					return Object.entries(
						locationGroup.reduce((prev, curr) => {
							if (!prev[curr.locationGroup]) prev[curr.locationGroup] = 0;
							prev[curr.locationGroup]++;
							return prev;
						}, {})
					).map(([location, val], i) => (
						<div
							key={i}
							className={cellClasses}
							style={{ gridColumnStart: "auto", gridColumnEnd: "span " + val }}
						>
							{location}
						</div>
					));
				})}
				{allLocations.map(([locationGroupKey, locationGroup], i) => {
					return locationGroup.map((location, i) => (
						<div key={i} className={cellClasses}>
							{location.name}
						</div>
					));
				})}
			</>
		);
	};

	return (
		<div
			className="seasonTimeline d-grid"
			style={{
				gridTemplateColumns:
					"100px repeat(3, auto) repeat(" + allLocationsLen + ", auto)",
			}}
		>
			<GridHeader />

			<GridBody
				key={seasonName}
				showGridDisplay={showGridDisplay}
				displayFish={displayFish}
				seasonName={seasonName}
				seasonWeather={seasonWeather}
				displayHeaders={allLocations}
				caughtFish={caughtFish}
				handleCaught={handleCaught}
			/>
		</div>
	);
}

export default GridLocation;

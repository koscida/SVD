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
	const locations = Object.values(dataLocations);
	const locationsLen = locations.length;

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
				{locations.map((location, i) => (
					<div key={i} className={cellClasses}>
						{location.name}
					</div>
				))}
			</>
		);
	};

	return (
		<div
			className="seasonTimeline d-grid"
			style={{
				gridTemplateColumns:
					"100px repeat(3, auto) repeat(" + locationsLen + ", auto)",
			}}
		>
			<GridHeader />

			<GridBody
				key={seasonName}
				showGridDisplay={showGridDisplay}
				displayFish={displayFish}
				seasonName={seasonName}
				seasonWeather={seasonWeather}
				displayHeaders={locations}
				caughtFish={caughtFish}
				handleCaught={handleCaught}
			/>
		</div>
	);
}

export default GridLocation;

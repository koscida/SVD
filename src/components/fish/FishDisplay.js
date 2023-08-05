import _dataSeasons from "../shared/data/dataSeasons";
import _dataFish from "../shared/data/fish";
import _dataLocations from "../shared/data/dataLocations";
import GridBody from "./GridBody";

const dataSeasons = _dataSeasons.seasons;
const locations = Object.values(_dataLocations.locations);
const dataFish = Object.values(_dataFish.fish);

const timelineLen = 20;
const blockIncramenter = 1;
const blockTimes = [...Array(timelineLen).keys()].map((i) => {
	const startTime = new Date("1970-01-01 6:00:00");
	startTime.setHours(startTime.getHours() + i * blockIncramenter);

	const endTime = new Date(startTime);
	endTime.setHours(endTime.getHours() + blockIncramenter);

	return [startTime, endTime];
});

function FishDisplay({
	filterShowBy,
	showType,
	filterSeasons,
	filterWeather,
	filterCaught,
	caughtFish,
	setCaughtFish,
}) {
	const filteredWeatherNames = filterWeather.map((x) => x.name);
	const filteredCaughtNames = filterCaught.map((x) => x.name);

	const columnsLen =
		filterShowBy === "Location" ? locations.length : timelineLen;

	//
	// Displays
	//
	// headers
	const LocationGridHeader = () => {
		const cellClasses = "cell cellHeader px-1";
		return (
			<>
				<div
					className={cellClasses}
					style={{ gridRowStart: 1, gridRowEnd: 3 }}
				>
					<p>Name</p>
				</div>
				<div
					className={cellClasses}
					style={{ gridRowStart: 1, gridRowEnd: 3 }}
				>
					<p>Caught?</p>
				</div>
				<div
					className={cellClasses}
					style={{ gridRowStart: 1, gridRowEnd: 3 }}
				>
					<p>Type</p>
				</div>
				<div
					className={cellClasses}
					style={{ gridRowStart: 1, gridRowEnd: 3 }}
				>
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
	const TimelineGridHeader = () => {
		const cellClasses = "cell cellHeader px-1";
		return (
			<>
				<div className={cellClasses}>
					<p>Name</p>
				</div>
				<div className={cellClasses}>
					<p>Caught?</p>
				</div>
				<div className={cellClasses}>
					<p>Type</p>
				</div>
				<div className={cellClasses}>
					<p>Tool</p>
				</div>
				{blockTimes.map(([blockTimeStart], i) => {
					// get hour
					let hour = blockTimeStart.getHours() % 12;
					hour = hour === 0 ? 12 : hour;
					const ending = hour > 12 ? "PM" : "AM";
					//hour
					return (
						<div key={i} className={cellClasses}>
							{hour + " " + ending}
						</div>
					);
				})}
			</>
		);
	};

	// click
	const handleCaught = (e) => {
		const { name, value } = e.target;
		// note: name will be the id
		const fishID = +name;

		// removing from list
		if (caughtFish.includes(fishID) && value === "true") {
			const newFish = caughtFish.filter((x) => x !== fishID);
			setCaughtFish(newFish);
		}
		// adding to list
		else if (!caughtFish.includes(fishID) && value === "false") {
			const newFish = [...caughtFish, fishID];
			setCaughtFish(newFish);
		}
	};

	return (
		<div className="seasonalDisplay">
			{filterSeasons.map((season) => {
				const { name, image } = season;
				// get viable weather statuses for the season
				const seasonWeather = dataSeasons[name].weather.filter((w) =>
					filteredWeatherNames.includes(w)
				);

				// Get fish to display in this season
				const caughtFilter =
					filteredCaughtNames.length !== 1
						? (f) => true
						: filteredCaughtNames.includes("Caught")
						? (f) => caughtFish.includes(f.id)
						: (f) => !caughtFish.includes(f.id);

				// filter season + weather + type + not crabpot
				//	+ caught
				// 	sort by id, type
				const displayFish = dataFish
					.filter(
						(thisFish) =>
							thisFish.season.includes(name) &&
							thisFish.weather.some((w) =>
								filteredWeatherNames.includes(w)
							) &&
							showType.includes(thisFish.type) &&
							thisFish.type !== "Crabpot"
					)
					.filter(caughtFilter)
					.sort((a, b) => a.id < b.id)
					.sort(
						(a, b) => a.type === "Regular" || a.type === "Special"
					);

				return (
					<div className={"season mb-5 " + name} key={name}>
						<h3>
							<img
								src={"images/" + image}
								alt={name}
								className="me-2"
							/>
							{name}
						</h3>

						<div
							className="seasonTimeline d-grid"
							style={{
								gridTemplateColumns:
									"100px repeat(3, auto) repeat(" +
									columnsLen +
									", auto)",
							}}
						>
							{filterShowBy === "Location" ? (
								<LocationGridHeader />
							) : (
								<TimelineGridHeader />
							)}

							<GridBody
								filterShowBy={filterShowBy}
								displayFish={displayFish}
								seasonName={name}
								seasonWeather={seasonWeather}
								displayHeaders={
									filterShowBy === "Location"
										? locations
										: blockTimes
								}
								caughtFish={caughtFish}
								handleCaught={handleCaught}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default FishDisplay;

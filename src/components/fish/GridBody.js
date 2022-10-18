import GridCell from "./GridCell";

function GridBody({
	filterShowBy,
	displayFish,
	seasonName,
	seasonWeather,
	displayHeaders,
	caughtFish,
	handleCaught,
}) {
	const GridRow = ({ fish, i }) => {
		const caught = caughtFish ? caughtFish.includes(fish.id) : false;
		const classStyle =
			(i % 2 === 1 ? " alt " : "") + (caught ? " caught " : "");

		// check if fish caught
		const checked = caught ? "checked" : null;
		// get viable fish weather statuses
		const fishWeather = fish
			? fish.weather.filter((weatherStatus) => {
					return seasonWeather.includes(weatherStatus);
			  })
			: [];

		return (
			<>
				<div className={"cell fishCell first-child" + classStyle}>
					<p className="m-0">{fish.name}</p>
				</div>

				<div className={"cell fishCell checkCell " + classStyle}>
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value={caught}
							checked={checked}
							onChange={handleCaught}
							name={fish.id}
						/>
					</div>
				</div>

				<div className={"cell fishCell " + classStyle}>
					<p className="m-0">{fish.type}</p>
				</div>
				<div className={"cell fishCell " + classStyle}>
					<p className="m-0">{fish.tool}</p>
				</div>

				{filterShowBy === "Location"
					? displayHeaders.map((location) => {
							const isShown = fish.locations.includes(location.name);

							return (
								<GridCell
									key={location.name}
									seasonName={seasonName}
									seasonWeather={seasonWeather}
									fishWeather={isShown ? fishWeather : []}
									classStyle={classStyle}
								/>
							);
					  })
					: displayHeaders.map(([blockTimeStart, blockTimeEnd], i) => {
							// console.log("blockTime",blockTime)

							let isShown = false;
							fish.times.forEach((time) => {
								const timeStart = new Date("1970-01-01 0:00:00");
								timeStart.setHours(timeStart.getHours() + time.start);
								const timeEnd = new Date("1970-01-01 0:00:00");
								timeEnd.setHours(timeEnd.getHours() + time.end);
								// console.log("timeStart",timeStart)
								// console.log("timeEnd",timeEnd)
								if (timeStart <= blockTimeStart && timeEnd >= blockTimeEnd) {
									isShown = true;
								}
							});

							return (
								<GridCell
									key={i}
									seasonName={seasonName}
									seasonWeather={seasonWeather}
									fishWeather={isShown ? fishWeather : []}
									classStyle={classStyle}
								/>
							);
					  })}
			</>
		);
	};

	return displayFish.map((fish, i) => <GridRow key={i} fish={fish} i={i} />);
}

export default GridBody;

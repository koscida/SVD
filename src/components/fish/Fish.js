import FishDisplay from "./FishDisplay";
import _dataSeasons from "../shared/data/dataSeasons";
import _dataWeather from "../shared/data/dataWeather";
import FishConfig from "./FishConfig";
import useLocalStorage from "../shared/useLocalStorage";

// get data from data file
const dataSeasons = _dataSeasons.seasons;
const dataWeather = _dataWeather.weather;

function Fish() {
	const [filterShowBy, setFilterShowBy] = useLocalStorage(
		"svd-fish-filter-showBy",
		"Timeline"
	);
	const [showType, setShowType] = useLocalStorage("svd-fish-filter-showType", [
		"Regular",
	]);
	const [filterSeasons, setFilterSeasons] = useLocalStorage(
		"svd-fish-filter-seasons",
		[Object.values(dataSeasons)[0]]
	);
	const [filterWeather, setFilterWeather] = useLocalStorage(
		"svd-fish-filter-weather",
		[Object.values(dataWeather)[0]]
	);
	const [filterCaught, setFilterCaught] = useLocalStorage(
		"svd-fish-filter-caught",
		[{ name: "Caught" }, { name: "Not Caught" }]
	);
	const [caughtFish, setCaughtFish] = useLocalStorage(
		"svd-fish-caught",
		[1, 2, 3]
	);

	// Main Display
	return (
		<div className="fishApp">
			<div className="row">
				<div className="col-2">
					<FishConfig
						filterShowBy={filterShowBy}
						setFilterShowBy={setFilterShowBy}
						showType={showType}
						setShowType={setShowType}
						filterSeasons={filterSeasons}
						setFilterSeasons={setFilterSeasons}
						filterWeather={filterWeather}
						setFilterWeather={setFilterWeather}
						filterCaught={filterCaught}
						setFilterCaught={setFilterCaught}
					/>
				</div>

				<div className="col-10">
					<FishDisplay
						filterShowBy={filterShowBy}
						showType={showType}
						filterSeasons={filterSeasons}
						filterWeather={filterWeather}
						filterCaught={filterCaught}
						caughtFish={caughtFish}
						setCaughtFish={setCaughtFish}
					/>
				</div>
			</div>
		</div>
	);
}

export default Fish;

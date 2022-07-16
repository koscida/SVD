import data from '../data'
import TimelineGrid from './TimelineGrid'
import LocationGrid from './LocationGrid'

const dataSeasons = data.seasons
const dataWeather = data.weather
const dataLocations = data.locations
const dataSeasonalFish = data.seasonalFish



function SeasonalDisplay({showBy, seasons, weather, caughtFish, setCaughtFish}) {
	const weatherNames = weather.map(x => x.name)
	
	// click
	const handleCaught = (e) => {
		const {name, value} = e.target
		// note: name will be the id
		const fishID = +name
		
		// removing from list
		if(caughtFish.includes(fishID) && value === "true") {
			const newFish = caughtFish.filter(x => x !== fishID)
			setCaughtFish(newFish)
		} 
		// adding to list
		else if (!caughtFish.includes(fishID) && value === "false") {
			const newFish = [...caughtFish, fishID]
			setCaughtFish(newFish)
		}
	}
	
	return seasons.map(season => {
		const {name, image} = season 
		// get viable weather statuses for the season
		const seasonWeather = dataSeasons[name].weather.filter(w => weatherNames.includes(w))
		return <div className={"season mb-5 " + name} key={name}>
			<h3>
				<img src={"images/" + image} alt={name} className="me-2"/>
				{name} 
			</h3>
				
			{showBy === "Location"
				? <LocationGrid 
					seasonName={name}
					filteredWeatherNames={weatherNames}
					seasonWeather={seasonWeather}
					caughtFish={caughtFish}
					handleCaught={handleCaught}
					/>
				: <TimelineGrid 
					seasonName={name}
					filteredWeatherNames={weatherNames}
					seasonWeather={seasonWeather}
					caughtFish={caughtFish}
					handleCaught={handleCaught}
					/>
			}
		</div>
	})
}

export default SeasonalDisplay;
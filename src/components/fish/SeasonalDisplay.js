import data from '../data'
import TimelineGrid from './TimelineGrid'
import LocationGrid from './LocationGrid'

const dataSeasons = data.seasons
const dataWeather = data.weather
const dataLocations = data.locations
const dataSeasonalFish = data.seasonalFish



function SeasonalDisplay({showBy, filterSeasons, filterWeather, filterCaught, caughtFish, setCaughtFish}) {
	const filteredWeatherNames = filterWeather.map(x => x.name)
	const filteredCaughtNames = filterCaught.map(x => x.name)
	
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
	
	return filterSeasons.map(season => {
		const {name, image} = season 
		// get viable weather statuses for the season
		const seasonWeather = dataSeasons[name].weather.filter(w => filteredWeatherNames.includes(w))
		// get fish to display in this season
		let displayFish = dataSeasonalFish
			.filter( thisFish => thisFish.season.includes(name) 
				&& thisFish.weather.some(w => filteredWeatherNames.includes(w)) 
				&& !thisFish.legend 
			)
			.sort( (a,b) =>  a.id < b.id )
		if(filteredCaughtNames.length === 1)
		{
			if(filteredCaughtNames.includes("Caught")) {
				displayFish = displayFish.filter( f => caughtFish.includes(f.id) )
			}
			else if(filteredCaughtNames.includes("Not Caught")) {
				displayFish = displayFish.filter( f => !caughtFish.includes(f.id) )
			}
		} 
		
			
		return <div className={"season mb-5 " + name} key={name}>
			<h3>
				<img src={"images/" + image} alt={name} className="me-2"/>
				{name} 
			</h3>
				
			{showBy === "Location"
				? <LocationGrid 
					displayFish = {displayFish}
					seasonName={name}
					filteredWeatherNames={filteredWeatherNames}
					seasonWeather={seasonWeather}
					caughtFish={caughtFish}
					handleCaught={handleCaught}
					/>
				: <TimelineGrid 
					displayFish = {displayFish}
					seasonName={name}
					filteredWeatherNames={filteredWeatherNames}
					seasonWeather={seasonWeather}
					caughtFish={caughtFish}
					handleCaught={handleCaught}
					/>
			}
		</div>
	})
}

export default SeasonalDisplay;
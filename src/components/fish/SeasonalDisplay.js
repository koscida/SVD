import data from '../shared/data'
import GridTimeline from './GridTimeline'
import GridLocation from './GridLocation'

const dataSeasons = data.seasons
const dataFish = data.fish



function SeasonalDisplay({showGridDisplay, showType, filterSeasons, filterWeather, filterCaught, caughtFish, setCaughtFish}) {
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
	
	return <div className='seasonalDisplay'>
		{filterSeasons.map(season => {
			const {name, image} = season 
			// get viable weather statuses for the season
			const seasonWeather = dataSeasons[name].weather.filter(w => filteredWeatherNames.includes(w))
			
			// Get fish to display in this season
			const caughtFilter = (filteredCaughtNames.length !== 1)
				? ( f => true )
				: (filteredCaughtNames.includes("Caught"))
					? ( f => caughtFish.includes(f.id) )
					: ( f => !caughtFish.includes(f.id) )
			
			// filter season + weather + type + not crabpot
			//	+ caught
			// 	sort by id, type
			const displayFish = dataFish
				.filter( thisFish => thisFish.season.includes(name) 
					&& thisFish.weather.some(w => filteredWeatherNames.includes(w)) 
					&& showType.includes(thisFish.type)
					&& thisFish.type !== "Crabpot"
				)
				.filter(caughtFilter)
				.sort( (a,b) =>  a.id < b.id )
				.sort( (a,b) =>  a.type === "Regular" || a.type === "Special" )
			
				
			return <div className={"season mb-5 " + name} key={name}>
				<h3>
					<img src={"images/" + image} alt={name} className="me-2"/>
					{name} 
				</h3>
					
				{showGridDisplay === "Location"
					? <GridLocation 
						showGridDisplay={showGridDisplay}
						displayFish = {displayFish}
						seasonName={name}
						filteredWeatherNames={filteredWeatherNames}
						seasonWeather={seasonWeather}
						caughtFish={caughtFish}
						handleCaught={handleCaught}
						/>
					: <GridTimeline 
						showGridDisplay={showGridDisplay}
						displayFish = {displayFish}
						seasonName={name}
						filteredWeatherNames={filteredWeatherNames}
						seasonWeather={seasonWeather}
						caughtFish={caughtFish}
						handleCaught={handleCaught}
						/>
				}
			</div>
		})}
	</div>
}

export default SeasonalDisplay;
import data from '../data'
import GridCell from './GridCell'

const dataSeasons = data.seasons
const dataWeather = data.weather
const dataLocations = data.locations



function LocationGrid({displayFish, seasonName, seasonWeather, filteredWeatherNames, caughtFish, handleCaught}) {
	const townLocations = Object.values(dataLocations.locationTown)
	const townLocationsLen = townLocations.length
	
	const specialLocations = Object.values(dataLocations.locationSpecial)
	const specialLocationsLen = specialLocations.length
	
	const farmLocations = Object.values(dataLocations.locationFarm)
	const farmLocationsLen = farmLocations.length
	
	const allLocations = [
		["locationTown", townLocations], 
		["locationSpecial", specialLocations], 
		["locationFarm", farmLocations]
	]
	const allLocationsLen = townLocationsLen + specialLocationsLen + farmLocationsLen
	
	// displays
	const GridHeader = () => {
		const cellClasses = "cell cellHeader px-1"
		return <>
			<div className={cellClasses} style={{gridRowStart: 1, gridRowEnd: 3}}><p>Name</p></div>
			<div className={cellClasses} style={{gridRowStart: 1, gridRowEnd: 3}}><p>Caught?</p></div>
			{allLocations.map( ([locationName, locationGroup], i) => {
				return Object.entries(locationGroup
					.reduce( (prev, curr) => {
						if(!prev[curr.locationGroup]) prev[curr.locationGroup] = 0
						prev[curr.locationGroup]++
						return prev
					},{}))
					.map( ([location, val], i) => <div key={i} className={cellClasses} style={{gridColumnStart: "auto", gridColumnEnd: "span " + val}}>{location}</div> )
			})}
			{allLocations.map( ([locationName, locationGroup], i) => {
				return locationGroup.map( (location, i) => <div key={i} className={cellClasses}>{location.name}</div> )
			})}
		</>
	}
	
	const GridRow = ({fish, caught, classStyle}) => {
		// check if fish caught
		const checked = caught ? "checked" : null
		// get viable fish weather statuses
		const fishWeather = fish
			? fish.weather.filter(weatherStatus => {
				return seasonWeather.includes(weatherStatus)
			})
			: []
	
		return <>
			<div className={"cell fishCell first-child" + classStyle}>
				<p className='m-0'>{fish.name}</p>
			</div>
			
			<div className={'cell fishCell checkCell ' + classStyle}>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value={caught} checked={checked} onChange={handleCaught} name={fish.id} />
				</div>
			</div>
			
			{allLocations.map( ([locationName, locationGroup], i) => {
				return locationGroup.map(location => { 
					
					const isShown = fish[locationName].includes(location.name)
					
					return <GridCell 
						key={location.name} 
						seasonName={seasonName}
						seasonWeather={seasonWeather}
						fishWeather={isShown ? fishWeather : []} 
						classStyle={classStyle}
						/>
				})
			})}
		</>
	}
	
	const GridBody = () => {
		return displayFish.map( (thisFish,i) => {
			const caught = caughtFish ? caughtFish.includes(thisFish.id) : false
			const altClass = (i % 2 === 1 ? " alt " : "") + (caught ? " caught " : "") 
			return <GridRow 
				key={thisFish.id}
				fish={thisFish}
				caught={caught}
				classStyle={altClass} 
				/>
		})
	}
	
	return <div 
		className='seasonTimeline d-grid' 
		style={{gridTemplateColumns: '100px auto repeat(' + allLocationsLen + ', calc((100% - 100px) / ' + allLocationsLen + '))'}}>
		
		<GridHeader />
		
		<GridBody />
	</div>
}

export default LocationGrid;
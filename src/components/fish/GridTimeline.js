import data from '../shared/data'
import GridBody from './GridBody'

const dataSeasons = data.seasons
const dataWeather = data.weather
const dataLocations = data.locations

const lenBlockTimes = 20
const blockIncramenter = 1
const blockTimes = [...Array(lenBlockTimes).keys()].map( i => {
	const startTime = new Date("1970-01-01 6:00:00");
	startTime.setHours(startTime.getHours() + (i*blockIncramenter))
	
	const endTime = new Date(startTime);
	endTime.setHours(endTime.getHours() + blockIncramenter)
	
	return [startTime, endTime]
})



function GridTimeline({showGridDisplay, displayFish, seasonName, seasonWeather, filteredWeatherNames, caughtFish, handleCaught}) {

	// displays
	const GridHeader = () => {
		const cellClasses = "cell cellHeader px-1"
		return <>
			<div className={cellClasses}><p>Name</p></div>
			<div className={cellClasses}><p>Caught?</p></div>
			<div className={cellClasses}><p>Type</p></div>
			<div className={cellClasses}><p>Tool</p></div>
			{blockTimes.map( ([blockTimeStart], i) => {
				// get hour
				let hour = blockTimeStart.getHours() % 12
				hour = (hour === 0) ? 12 : hour
				const ending = (hour > 12) ? "PM" : "AM"
				//hour
				return <div key={i} className={cellClasses}>{hour + " " + ending}</div>
			})}
		</>
	}
	
	return <div 
		className='seasonTimeline d-grid' 
		style={{gridTemplateColumns: '100px repeat(3, auto) repeat(' + lenBlockTimes + ', auto )'}}>
		
		<GridHeader />
		
		<GridBody
			key={seasonName}
			showGridDisplay={showGridDisplay}
			displayFish={displayFish}
			seasonName={seasonName}
			seasonWeather={seasonWeather}
			displayHeaders={blockTimes}
			caughtFish={caughtFish}
			handleCaught={handleCaught} 
			/>
	</div>
}

export default GridTimeline;
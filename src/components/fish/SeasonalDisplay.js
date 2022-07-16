import data from '../data'
import FishTimeline from './FishTimeline'
import FishLocation from './FishLocation'

const dataSeasons = data.seasons
const dataWeather = data.weather
const dataLocations = data.locations
const dataSeasonalFish = data.seasonalFish

const lenBlockTimes = 20
const blockIncramenter = 1
const blockTimes = [...Array(lenBlockTimes).keys()].map( i => {
	const startTime = new Date("1970-01-01 6:00:00");
	startTime.setHours(startTime.getHours() + (i*blockIncramenter))
	
	const endTime = new Date(startTime);
	endTime.setHours(endTime.getHours() + blockIncramenter)
	
	return [startTime, endTime]
})



function SeasonalDisplay({season, weather, showBy, caughtFish, setCaughtFish}) {
	const {name, image} = season
	const weatherNames = weather.map(x => x.name)
	
	// get viable weather statuses for the season
	const seasonWeather = dataSeasons[name].weather.filter(w => weatherNames.includes(w))
	
	// click
	const handleCheck = (e) => {
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
	
	// displays
	const DisplayHour = ({startTime}) => {
		// get hour
		let hour = startTime.getHours() % 12
		hour = (hour === 0) ? 12 : hour
		const ending = (hour > 12) ? "PM" : "AM"
		//hour
		return <div>{hour + " " + ending}</div>
	}
	const DisplayRow = ({fish, i}) => {
		// check if fish caught
		const caught = caughtFish ? caughtFish.includes(fish.id) : false
		const checked = caught ? "checked" : null
		
		// row class
		const altClass = (i % 2 === 1 ? " alt " : "") + (caught ? " caught " : "")
		
		return <>
			<div className={altClass}>
				<p className='m-0'>{fish.name}</p>
			</div>
			
			<div className={'checkCell d-flex align-items-center justify-content-center ' + altClass}>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value={caught} checked={checked} onChange={handleCheck} name={fish.id} />
				</div>
			</div>
			
			<FishTimeline 
				fish={fish}
				seasonWeather={seasonWeather} 
				seasonName={name}
				classStyle={altClass} 
				/>
		</>
	}
	
	return <div className={"season mb-5 " + name}>
		<h3>
			<img src={"images/" + image} alt={name} className="me-2"/>
			{name} 
		</h3>
		<div className='seasonTimeline d-grid' style={{gridTemplateColumns: '100px auto repeat(' + lenBlockTimes + ', calc((100% - 100px) / ' + lenBlockTimes + '))'}}>
			<div>Name</div>
			<div>Caught?</div>
			
			{blockTimes.map( ([blockTimeStart], i) => 
				<DisplayHour key={i} startTime={blockTimeStart} /> 
			)}
			
			{dataSeasonalFish
				.filter( thisFish => thisFish.season.includes(name) && thisFish.weather.some(w => weatherNames.includes(w)) && !thisFish.legend )
				.map( (thisFish,i) => 
					<DisplayRow fish={thisFish} i={i} key={i} />
				)}
		</div>
	</div>
	
}

export default SeasonalDisplay;
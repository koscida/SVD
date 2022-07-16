import data from '../data'
import GridCell from './GridCell'

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



function TimelineGrid({displayFish, seasonName, seasonWeather, filteredWeatherNames, caughtFish, handleCaught}) {

	// displays
	const GridHeader = () => <>
		<div>Name</div>
		<div>Caught?</div>
		{blockTimes.map( ([blockTimeStart], i) => {
			// get hour
			let hour = blockTimeStart.getHours() % 12
			hour = (hour === 0) ? 12 : hour
			const ending = (hour > 12) ? "PM" : "AM"
			//hour
			return <div key={i}>{hour + " " + ending}</div>
		})}
	</>
	
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
			<div className={"fishCell first-child " + classStyle}>
				<p className='m-0'>{fish.name}</p>
			</div>
			
			<div className={'fishCell checkCell d-flex align-items-center justify-content-center ' + classStyle}>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value={caught} checked={checked} onChange={handleCaught} name={fish.id} />
				</div>
			</div>
			{blockTimes.map( ([blockTimeStart, blockTimeEnd], i) => {
				// console.log("blockTime",blockTime)
				
				let isShown = false
				fish.times.forEach( time => {
					const timeStart = new Date("1970-01-01 0:00:00")
					timeStart.setHours(timeStart.getHours() + time.start)
					const timeEnd = new Date("1970-01-01 0:00:00");
					timeEnd.setHours(timeEnd.getHours() + time.end)
					// console.log("timeStart",timeStart)
					// console.log("timeEnd",timeEnd)
					if(timeStart <= blockTimeStart && timeEnd >= blockTimeEnd) {
						isShown = true
					}
				})
				
				return <GridCell 
					key={i} 
					seasonName={seasonName}
					seasonWeather={seasonWeather}
					fishWeather={isShown ? fishWeather : []} 
					classStyle={classStyle}
					/>
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
		style={{gridTemplateColumns: '100px auto repeat(' + lenBlockTimes + ', calc((100% - 100px) / ' + lenBlockTimes + '))'}}>
		
		<GridHeader />
		
		<GridBody />
	</div>
}

export default TimelineGrid;
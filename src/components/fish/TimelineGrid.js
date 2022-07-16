import data from '../data'

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



function TimelineGrid({seasonName, seasonWeather, filteredWeatherNames, caughtFish, handleCaught}) {

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
	
	const GridCell = ({fishWeather, cellWLen, classStyle}) => {
		const gridStyle = {gridTemplateColumns: 'repeat(' + cellWLen + ', ' + (100/cellWLen) + '%)'}
		
		const cellClass = "fishCell " + classStyle
		// display
		return <div className={cellClass}>
			
			<div className='weather h-100 d-flex flex-column ' style={gridStyle}>
				{seasonWeather.map(weatherStatus => {
					// if fish included for this weather cell
					const included = fishWeather.includes(weatherStatus);
					// what image and text is shown
					// const imgShown = included && cellWLen === 1
					const imgShown = true
					const src = imgShown && dataWeather[weatherStatus].images[seasonName]; 
					const imgName = !imgShown && (cellWLen === 2 ? dataWeather[weatherStatus].name : dataWeather[weatherStatus].shortName)
					// class
					const weatherClass =  "weatherStatus h-100 p-xl-1 " + weatherStatus + (included ? " included" : '');
					// console.log(src)
					return <div key={weatherStatus} className={weatherClass} style={{padding:"2px"}}>
						{(included && imgShown) && <img src={"images/" + src} alt={weatherStatus} />}
						{(included && !imgShown) && <p style={{fontSize: "0.8rem"}}>{imgName}</p>}
					</div>
				})}
			</div>
		</div>
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
		const cellWLen = seasonWeather.length
	
		return <>
			<div className={classStyle}>
				<p className='m-0'>{fish.name}</p>
			</div>
			
			<div className={'checkCell d-flex align-items-center justify-content-center ' + classStyle}>
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
					fishWeather={isShown ? fishWeather : []} 
					cellWLen={cellWLen} 
					classStyle={classStyle}
					/>
			})}
		</>
	}
	
	const GridBody = () => {
		return dataSeasonalFish
			.filter( thisFish => thisFish.season.includes(seasonName) && thisFish.weather.some(w => filteredWeatherNames.includes(w)) && !thisFish.legend )
			.sort( (a,b) =>  a.id < b.id )
			.map( (thisFish,i) => {
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
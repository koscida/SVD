import data from '../data'

const dataSeasons = data.seasons
const dataWeather = data.weather
const dataSeasonalFish = data.seasonalFish

function SeasonalDisplay({season, weather}) {
	const {name, image} = season
	const weatherNames = weather.map(x => x.name)
	const blockTimes = [...Array(20).keys()].map( i => {
		const blockTime = new Date("1970-01-01 6:00:00");
		blockTime.setHours(blockTime.getHours() + i)
		// console.log("blockTime",blockTime)
		return blockTime
	})
	
	
	const TimelineCell = ({fish}) => {
		// get viable weather statuses for the season
		const cellWeather = dataSeasons[name].weather.filter(w => weatherNames.includes(w))
		const cellWLen = cellWeather.length
		
		// get viable fish weather statuses
		let fishWeather = []
		if(fish) {
			fishWeather = fish.weather.filter(weatherStatus => {
				return cellWeather.includes(weatherStatus)
			})
		}
		
		// vars
		const gridStyle = {gridTemplateColumns: 'repeat(' + cellWLen + ', ' + (100/cellWLen) + '%)'}
		
		// display
		return <div className='fishCell'>
			
			<div className='weather d-grid h-100' style={gridStyle}>
				{cellWeather.map(weatherStatus => {
					const included = fishWeather.includes(weatherStatus);
					const imgShown = included && cellWLen === 1
					const src = imgShown && dataWeather[weatherStatus].images[name];
					const imgName = !imgShown && (cellWLen === 2 ? dataWeather[weatherStatus].name : dataWeather[weatherStatus].shortName)
					const weatherClass = weatherStatus + " h-100 d-flex p-1 flex-column " + (included ? " included" : '');
					// console.log(src)
					return <div key={weatherStatus} className={weatherClass}>
						{imgShown && <img src={"images/" + src} alt={weatherStatus} />}
						{(included && !imgShown) && <p style={{fontSize: "0.8rem"}}>{imgName}</p>}
					</div>
				})}
			</div>
		</div>
	}
	
	const FishTimeline = ({fish,i}) => {
		const altClass = i % 2 === 0 ? " alt " : ""
		return <>
			<div className={altClass}>
				<p className='m-0'>{fish.name}</p>
			</div>
			
			{blockTimes.map( (blockTime, i) => {
				// console.log("blockTime",blockTime)
				
				let isShown = false
				fish.times.forEach( time => {
					const timeStart = new Date("1970-01-01 0:00:00")
					timeStart.setHours(timeStart.getHours() + time.start)
					const timeEnd = new Date("1970-01-01 0:00:00");
					timeEnd.setHours(timeEnd.getHours() + time.end)
					// console.log("timeStart",timeStart)
					// console.log("timeEnd",timeEnd)
					if(blockTime >= timeStart && blockTime <= timeEnd) {
						isShown = true
					}
				})
				
				return isShown 
					? <TimelineCell key={i} fish={fish} />
					: <TimelineCell key={i} fish={null} />
			})}
		</>
	}
	
	return <div className={"season mb-5 " + name}>
		<h3>
			<img src={"images/" + image} alt={name} className="me-2"/>
			{name} 
		</h3>
		<div className='seasonTimeline d-grid' style={{gridTemplateColumns: '100px repeat(20, calc((100% - 100px) / 20))'}}>
			<div></div>
			{blockTimes.map( (blockTime, i) => {
				// get hour
				let hour = blockTime.getHours()
				let ending = "AM"
				if(hour > 12) ending = "PM"
				hour = hour % 12
				if(hour === 0) hour = 12
				//hour
				return <div key={i}>{hour + " " + ending}</div>
			})}
			{dataSeasonalFish
				.filter( thisFish => thisFish.season.includes(name) && thisFish.weather.some(w => weatherNames.includes(w)) && !thisFish.legend )
				.map( (thisFish,i) => 
					<FishTimeline fish={thisFish} i={i} key={thisFish.id} /> 
				)}
		</div>
	</div>
	
}

export default SeasonalDisplay;
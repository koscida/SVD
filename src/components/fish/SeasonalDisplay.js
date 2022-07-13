import data from '../data'

const dataSeasons = data.seasons
const dataWeather = data.weather
const dataSeasonalFish = data.seasonalFish

function SeasonalDisplay({season, weather}) {
	const {name, image} = season
	const weatherNames = weather.map(x => x.name)
	
	// get viable weather statuses for the season
	const cellWeather = dataSeasons[name].weather.filter(w => weatherNames.includes(w))
	
	const lenBlockTimes = 20
	const blockIncramenter = 1
	const blockTimes = [...Array(lenBlockTimes).keys()].map( i => {
		const startTime = new Date("1970-01-01 6:00:00");
		startTime.setHours(startTime.getHours() + (i*blockIncramenter))
		
		const endTime = new Date(startTime);
		endTime.setHours(endTime.getHours() + blockIncramenter)
		
		return [startTime, endTime]
	})
	
	
	const WeatherCell = ({fishWeather, cellWeather}) => {
		const cellWLen = cellWeather.length
		const gridStyle = {gridTemplateColumns: 'repeat(' + cellWLen + ', ' + (100/cellWLen) + '%)'}
		
		// display
		return <div className='fishCell'>
			
			<div className='weather h-100 d-md-grid d-flex flex-column ' style={gridStyle}>
				{cellWeather.map(weatherStatus => {
					// if fish included for this weather cell
					const included = fishWeather.includes(weatherStatus);
					// what image and text is shown
					// const imgShown = included && cellWLen === 1
					const imgShown = true
					const src = imgShown && dataWeather[weatherStatus].images[name];
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
	
	const FishTimeline = ({fish,i}) => {
		// get viable fish weather statuses
		let fishWeather = []
		if(fish) {
			fishWeather = fish.weather.filter(weatherStatus => {
				return cellWeather.includes(weatherStatus)
			})
		}
		
		const altClass = i % 2 === 0 ? " alt " : ""
		
		return <>
			<div className={altClass}>
				<p className='m-0'>{fish.name}</p>
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
				
				return isShown 
					? <WeatherCell key={i} fishWeather={fishWeather} cellWeather={cellWeather} />
					: <WeatherCell key={i} fishWeather={[]} cellWeather={cellWeather} />
			})}
		</>
	}
	
	return <div className={"season mb-5 " + name}>
		<h3>
			<img src={"images/" + image} alt={name} className="me-2"/>
			{name} 
		</h3>
		<div className='seasonTimeline d-grid' style={{gridTemplateColumns: '100px repeat(' + lenBlockTimes + ', calc((100% - 100px) / ' + lenBlockTimes + '))'}}>
			<div></div>
			{blockTimes.map( ([blockTimeStart, blockTimeEnd], i) => {
				// get hour
				let hour = blockTimeStart.getHours()
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
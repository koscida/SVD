import data from '../data'

const dataSeasons = data.seasons
const dataWeather = data.weather
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


function FishTimeline({fish, seasonWeather, seasonName, classStyle}) {
	// get viable fish weather statuses
	const fishWeather = fish
		? fish.weather.filter(weatherStatus => {
			return seasonWeather.includes(weatherStatus)
		})
		: []
	const cellWLen = seasonWeather.length
	
	const WeatherCell = ({fishWeather}) => {
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
	
	return <>
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
				? <WeatherCell key={i} fishWeather={fishWeather} />
				: <WeatherCell key={i} fishWeather={[]} />
		})}
	</>
	
	
}


export default FishTimeline;
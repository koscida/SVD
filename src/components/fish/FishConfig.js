import data from '../data'

const dataSeasons = data.seasons
const dataWeather = data.weather

function FishConfig({seasons, setSeasons, weather, setWeather}) {
	const seasonsNames = seasons.map(x => x.name)
	const weatherNames = weather.map(x => x.name)
	
	/* Configuration */
	
	const handleClick = (searchName, filterNames, group, setGroup, groupData) => {
		// if id in seasons
		if(filterNames.includes(searchName)) {
			// hide
			const newGroup = group.filter( x => x.name !== searchName )
			setGroup(newGroup)
			
		} else {
			// show
			const newGroup = Object.values(groupData).filter( x => x.name === searchName )
			setGroup([...group, ...newGroup])
		}
	}
	
	
	
	/* Main Display */
	const shownWeather = Object.values(dataWeather).filter(weatherStatus =>
		Object.keys(weatherStatus.images).some(x => seasonsNames.includes(x))
	)
	return <>
		<div className='configuration d-flex'>
			<div className='title'>
				<h2>Fish</h2>
			</div>
			<div className='filterOptions d-flex ms-auto'>
				{Object.values(dataSeasons).map(season => {
					const className = 'filterOption p-2 ms-1 ' + season.name + (seasonsNames.includes(season.name)?" shown":"")
					return <div 
						key={season.name} 
						className={className} 
						onClick={(e) => {handleClick(season.name, seasonsNames, seasons, setSeasons, dataSeasons)}}
						>
						<img src={"images/" + season.image} alt={season.name} />
						<p>{season.name}</p> 
					</div>
				})}
			</div>
			<div className='filterOptions d-flex ms-auto'>
				{shownWeather.map(weatherStatus => {
					const className = 'filterOption p-2 ms-1 ' + weatherStatus.name + (weatherNames.includes(weatherStatus.name)?" shown":"")
					return <div 
						key={weatherStatus.name}
						className={className} 
						onClick={(e) => {handleClick(weatherStatus.name, weatherNames, weather, setWeather, dataWeather)}}
						>
						<img src={"images/" + Object.values(weatherStatus.images)[0]} alt={weatherStatus.name} />
						<p>{weatherStatus.name}</p> 
					</div>
				})}
			</div>
			
		</div>
	</>;
}

export default FishConfig;
import data from '../data'

const dataSeasons = data.seasons
const dataWeather = data.weather
const showByOptions = ["Timeline", "Location"]

function Config({seasons, setSeasons, weather, setWeather, showBy, setShowBy}) {
	const seasonsNames = seasons.map(x => x.name)
	const weatherNames = weather.map(x => x.name)
	
	/* Configuration */
	const handleFilterChange = (newOption, setFunction) => {
		setFunction(newOption)
	}
	const handleFilterClick = (searchName, group, setGroup, groupData) => {
		const filterNames = group.map(x => x.name)
		// if id in group
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
		<div className='configuration'>
			<div>
				<h4>Display</h4>
				<div className='filterOptions mb-3'>
					<h6>Show by</h6>
					{showByOptions.map(showByOption => {
						return <div className="form-check" key={"showBy" + showByOption}>
							<input 
								className="form-check-input" 
								type="radio" 
								name={"showBy" + showByOption} 
								id={"showBy" + showByOption} 
								onChange={(e) => {handleFilterChange(showByOption, setShowBy)}}
								checked={showBy === showByOption}
								value={showByOption} />
							<label className="form-check-label" htmlFor={"showBy" + showByOption}>
								{showByOption}
							</label>
						</div>
					})}
				</div>
			</div>
			<div>
				<h4>Filters</h4>
				<div className='filterOptions mb-3'>
					<h6>Season</h6>
					<div className='d-flex flex-wrap'>
						{Object.values(dataSeasons).map(season => {
							const included = seasonsNames.includes(season.name)
							const className = 'filterOption p-2 me-1 mb-1 text-center ' + season.name + (included ? " shown" : "")
							return <div 
								key={season.name} 
								className={className} 
								onClick={(e) => {handleFilterClick(season.name, seasons, setSeasons, dataSeasons)}}
								>
								<img src={"images/" + season.image} alt={season.name} />
								<div className="form-check mt-1">
									<input 
										className="form-check-input" 
										type="checkbox" 
										name={"showBy" + season.name} 
										id={"filterSeason" + season.name} 
										onChange={(e) => {handleFilterClick(season.name, seasons, setSeasons, dataSeasons)}}
										checked={included && season.name}
										value={season.name} />
									<label className="form-check-label" htmlFor={"filterSeason" + season.name}>
										<p>{season.name}</p>
									</label>
								</div>
							</div>
						})}
					</div>
				</div>
				<div className='filterOptions mb-3'>
					<h6>Weather</h6>
					<div className='d-flex flex-wrap'>
						{shownWeather.map(weatherStatus => {
							const className = 'filterOption p-2 ms-1 ' + weatherStatus.name + (weatherNames.includes(weatherStatus.name)?" shown":"")
							return <div 
								key={weatherStatus.name}
								className={className} 
								onClick={(e) => {handleFilterClick(weatherStatus.name, weather, setWeather, dataWeather)}}
								>
								<img src={"images/" + Object.values(weatherStatus.images)[0]} alt={weatherStatus.name} />
								<p>{weatherStatus.name}</p> 
							</div>
						})}
					</div>
				</div>
			</div>
			
		</div>
	</>;
}

export default Config;
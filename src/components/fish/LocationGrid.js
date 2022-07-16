import data from '../data'

const dataSeasons = data.seasons
const dataWeather = data.weather
const dataLocations = data.locations
const dataSeasonalFish = data.seasonalFish



function LocationGrid({seasonName, seasonWeather, filteredWeatherNames, caughtFish, handleCaught}) {
	const townLocations = Object.values(dataLocations.locationTown)
	const townLocationsLen = townLocations.length
	
	// displays
	const GridHeader = () => <>
		<div>Name</div>
		<div>Caught?</div>
		{townLocations.map( (location, i) => <div key={i}>{location.name}</div> )}
	</>
	
	const GridCell = ({i, fishWeather, classStyle}) => {
		const cellClass = "fishCell " + classStyle
		// display
		return <div className={cellClass}>
			
			<div className='weather h-100 d-flex flex-column '>
				{seasonWeather.map(weatherStatus => {
					// if fish included for this weather cell
					const included = fishWeather.includes(weatherStatus);
					// what image and text is shown
					const imgShown = true
					const src = imgShown && dataWeather[weatherStatus].images[seasonName]; 
					const imgName = !imgShown && dataWeather[weatherStatus].name
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
	
		return <>
			<div className={"fishCell first-child" + classStyle}>
				<p className='m-0'>{fish.name}</p>
			</div>
			
			<div className={'fishCell checkCell d-flex align-items-center justify-content-center ' + classStyle}>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value={caught} checked={checked} onChange={handleCaught} name={fish.id} />
				</div>
			</div>
			{townLocations.map( (location, i) => {
				// console.log("blockTime",blockTime)
				const isShown = fish.locationTown.includes(location.name)
				
				return <GridCell 
					key={i} 
					i={i}
					fishWeather={isShown ? fishWeather : []} 
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
		style={{gridTemplateColumns: '100px auto repeat(' + townLocationsLen + ', calc((100% - 100px) / ' + townLocationsLen + '))'}}>
		
		<GridHeader />
		
		<GridBody />
	</div>
}

export default LocationGrid;
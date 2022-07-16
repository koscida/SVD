import React from 'react'
import SeasonalDisplay from './SeasonalDisplay'
import data from '../data'
import Config from './Config'

// get data from data file
const dataSeasons = data.seasons
const dataWeather = data.weather

// from: https://www.robinwieruch.de/local-storage-react/#local-storage-in-javascript
const useLocalStorage = (key, initState) => {
	const [value, setValue] = React.useState(
		JSON.parse(localStorage.getItem(key)) ?? initState
	);

	React.useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};

function Fish() {
	const [showBy, setShowBy] = useLocalStorage('svd-fish-showBy', "Timeline")
	const [filterSeasons, setFilterSeasons] = useLocalStorage('svd-fish-seasons', [Object.values(dataSeasons)[0]])
	const [filterWeather, setFilterWeather] = useLocalStorage('svd-fish-weather', [Object.values(dataWeather)[0]])
	const [caughtFish, setCaughtFish] = useLocalStorage('svd-fish-caught', [1,2,3])
	
	// Main Display
	return <div className='fishApp'>
		<div className='row'>
				
			<div className='col-2'>
				<Config 
					seasons={filterSeasons}
					setSeasons={setFilterSeasons}
					weather={filterWeather}
					setWeather={setFilterWeather}
					showBy={showBy}
					setShowBy={setShowBy}
					/>
			</div>
				
			<div className='col-10 seasonalDisplay'>
				<SeasonalDisplay 
					showBy={showBy}
					seasons={filterSeasons} 
					weather={filterWeather} 
					caughtFish={caughtFish} 
					setCaughtFish={setCaughtFish} 
					/>
			</div>
			
		</div>
	</div>;
}

export default Fish;
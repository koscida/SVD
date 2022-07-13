import React from 'react'
import SeasonalDisplay from './SeasonalDisplay'
import data from '../data'
import FishConfig from './FishConfig'

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
	const [seasons, setSeasons] = useLocalStorage('svd-fish-seasons', [Object.values(dataSeasons)[0]])
	const [weather, setWeather] = useLocalStorage('svd-fish-weather', [Object.values(dataWeather)[0]])
	const [caughtFish, setCaughtFish] = useLocalStorage('svd-fish-caught', [1,2,3])
	
	// Main Display
	return <div className='fishApp'>
			
			<FishConfig 
				seasons={seasons}
				setSeasons={setSeasons}
				weather={weather}
				setWeather={setWeather}
				/>
				
			<div className='seasonalDisplay'>
				{seasons.map(season => 
					<SeasonalDisplay season={season} weather={weather} caughtFish={caughtFish} setCaughtFish={setCaughtFish} key={season.id} />
				)}
			</div>
		
	</div>;
}

export default Fish;
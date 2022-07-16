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
	const [filterSeasons, setFilterSeasons] = useLocalStorage('svd-fish-filter-seasons', [Object.values(dataSeasons)[0]])
	const [filterWeather, setFilterWeather] = useLocalStorage('svd-fish-filter-weather', [Object.values(dataWeather)[0]])
	const [filterCaught, setFilterCaught] = useLocalStorage('svd-fish-filter-caught', [{"name": "Caught"}, {"name":"Not Caught"}])
	const [caughtFish, setCaughtFish] = useLocalStorage('svd-fish-caught', [1,2,3])
	
	// Main Display
	return <div className='fishApp'>
		<div className='row'>
				
			<div className='col-2'>
				<Config 
					filterSeasons={filterSeasons}
					setFilterSeasons={setFilterSeasons}
					filterWeather={filterWeather}
					setFilterWeather={setFilterWeather}
					filterCaught={filterCaught}
					setFilterCaught={setFilterCaught}
					showBy={showBy}
					setShowBy={setShowBy}
					/>
			</div>
				
			<div className='col-10 seasonalDisplay'>
				<SeasonalDisplay 
					showBy={showBy}
					filterSeasons={filterSeasons} 
					filterWeather={filterWeather} 
					filterCaught={filterCaught}
					caughtFish={caughtFish} 
					setCaughtFish={setCaughtFish} 
					/>
			</div>
			
		</div>
	</div>;
}

export default Fish;
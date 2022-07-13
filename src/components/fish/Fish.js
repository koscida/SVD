import React, {useState} from 'react'
import SeasonalDisplay from './SeasonalDisplay'
import data from '../data'
import FishConfig from './FishConfig'

// get data from data file
const dataSeasons = data.seasons
const dataWeather = data.weather

// get data local storage, if found
const seasonsLocal = JSON.parse(localStorage.getItem('svd-fish-seasons'));
const weatherLocal = JSON.parse(localStorage.getItem('svd-fish-weather'));

function Fish() {
	const [seasons, setSeasons] = useState(seasonsLocal ?? [Object.values(dataSeasons)[0]])
	const [weather, setWeather] = useState(weatherLocal ?? [Object.values(dataWeather)[0]])
	
	// config process before set new vars
	const setConfigSeasons = (newSeason) => {
		localStorage.setItem('svd-fish-seasons', JSON.stringify(newSeason));
		setSeasons(newSeason)
	}
	const setConfigWeather = (newWeather) => {
		localStorage.setItem('svd-fish-weather', JSON.stringify(newWeather));
		setWeather(newWeather)
	}
	
	// Main Display
	return <div className='fishApp'>
			
			<FishConfig 
				seasons={seasons}
				setSeasons={setConfigSeasons}
				weather={weather}
				setWeather={setConfigWeather}
				/>
				
			<div className='seasonalDisplay'>
				{seasons.map(season => {
					return <SeasonalDisplay season={season} weather={weather} key={season.id} />
				})}
			</div>
		
	</div>;
}

export default Fish;
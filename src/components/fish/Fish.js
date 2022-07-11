import React, {useState} from 'react'
import SeasonalDisplay from './SeasonalDisplay'
import data from '../data'
import FishConfig from './FishConfig'

const dataSeasons = data.seasons
const dataWeather = data.weather

function Fish() {
	const [seasons, setSeasons] = useState([Object.values(dataSeasons)[0]])
	const [weather, setWeather] = useState([Object.values(dataWeather)[0]])
	
	
	/* Main Display */
	
	return <div className='fishApp'>
			
			<FishConfig 
				seasons={seasons}
				setSeasons={setSeasons}
				weather={weather}
				setWeather={setWeather}
				/>
				
			<div className='seasonalDisplay'>
				{seasons.map(season => {
					// console.log(season)
					return <SeasonalDisplay season={season} weather={weather} key={season.id} />
				})}
			</div>
		
	</div>;
}

export default Fish;
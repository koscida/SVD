import SeasonalDisplay from './SeasonalDisplay'
import data from '../shared/data'
import Config from './Config'
import useLocalStorage from '../shared/useLocalStorage'

// get data from data file
const dataSeasons = data.seasons
const dataWeather = data.weather



function Fish() {
	const [showGridDisplay, setShowGridDisplay] = useLocalStorage('svd-fish-show-gridDisplay', "Timeline")
	const [showType, setShowType] = useLocalStorage('svd-fish-show-type', ["Regular"])
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
					showGridDisplay={showGridDisplay}
					setShowGridDisplay={setShowGridDisplay}
					showType={showType}
					setShowType={setShowType}
					/>
			</div>
				
			<div className='col-10'>
				<SeasonalDisplay 
					showGridDisplay={showGridDisplay}
					showType={showType}
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
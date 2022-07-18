import GridRow from './GridRow'

function GridBody({showGridDisplay, displayFish, seasonName, seasonWeather, displayHeaders, caughtFish, handleCaught}) {
	
	return displayFish.map( (thisFish,i) => {
		const caught = caughtFish ? caughtFish.includes(thisFish.id) : false
		const altClass = (i % 2 === 1 ? " alt " : "") + (caught ? " caught " : "") 
		return <GridRow 
			key={thisFish.id}
			showGridDisplay={showGridDisplay}
			fish={thisFish}
			seasonName={seasonName}
			seasonWeather={seasonWeather}
			displayHeaders={displayHeaders}
			caught={caught}
			handleCaught={handleCaught}
			classStyle={altClass} 
			/>
	})
	
}

export default GridBody;
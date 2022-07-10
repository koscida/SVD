import fish from './data'

function Fish() {
	const seasons = ['Spring', 'Summer', 'Fall', 'Winter']
	
	const Fish = ({fish}) => {
		return <p className='m-0'>{fish.name}</p>
	}
	
	const Season = ({season}) => {
		return <div class={"season " + season}>
			<h3>{season}</h3>
			{fish.seasonalFish
				.filter( thisFish => thisFish.season.includes(season) )
				.map( thisFish => <Fish fish={thisFish} key={thisFish.id} /> )}
		</div>
	}
	
	return <>
		<h2>Fish</h2>
		{seasons.map(season => <Season season={season} key={season} />)}
	</>;
}

export default Fish;
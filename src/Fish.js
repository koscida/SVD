import fish from './data'

// Date.prototype.addHours = function(h) {
//   this.setTime(this.getTime() + (h*60*60*1000));
//   return this;
// }

function Fish() {
	const seasons = ['Spring', 'Summer', 'Fall', 'Winter']
	
	
	const TimelineCell = ({fish}) => {
		return <div>
			{fish.weather}
		</div>
	}
	
	const Timeline = ({fish}) => {
		return <div className='timeline'>
			<div className="d-grid" style={{gridTemplateColumns: 'repeat(20, 1fr)'}}>
				{[...Array(20).keys()].map( i => {
					let startTime = new Date("1970-01-01 06:00:00");
					startTime.setHours(startTime.getHours() + i)
					console.log("startTime",startTime)
					
					let isShown = false
					fish.times.forEach( time => {
						let timeStart = new Date("1970-01-01 " + time.start);
						let timeEnd = new Date("1970-01-01 " + time.end);
						console.log("timeStart",timeStart)
						console.log("timeEnd",timeEnd)
						if(startTime >= timeStart && startTime <= timeEnd) {
							isShown = true
						}
					})
					
					return isShown 
						? <TimelineCell key={i} fish={fish} />
						: <div key={i}>{i}</div>
				})}
			</div>
		</div>
	}
	
	const Fish = ({fish}) => {
		return <div className="fish">
			<p className='m-0'>{fish.name}</p>
			<Timeline fish={fish} />
		</div>
	}
	
	const Season = ({season}) => {
		return <div className={"season " + season}>
			<h3>{season}</h3>
			{fish.seasonalFish
				.filter( thisFish => thisFish.season.includes(season) && !thisFish.legend )
				.map( thisFish => <Fish fish={thisFish} key={thisFish.id} /> )}
		</div>
	}
	
	return <>
		<h2>Fish</h2>
		{seasons.map(season => <Season season={season} key={season} />)}
	</>;
}

export default Fish;
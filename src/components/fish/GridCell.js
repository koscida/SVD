import data from '../shared/data'

const dataWeather = data.weather

function GridCell({seasonName, seasonWeather, fishWeather, classStyle}) {
	const cellWeatherLen = seasonWeather.length;
	const gridStyle = {gridTemplateColumns: 'repeat(' + cellWeatherLen + ', ' + (100/cellWeatherLen) + '%)'}
	const imgStyle = {margin: (cellWeatherLen < 3 ? "3px" : "2px")}
	
	const cellClass = "cell fishCell " + classStyle
	// display
	return <div className={cellClass}>
		
		<div className='weather w-100 d-grid ' style={gridStyle}>
			{seasonWeather.map(weatherStatus => {
				// if fish included for this weather cell
				const included = fishWeather.includes(weatherStatus);
				// what image and text is shown
				// const imgShown = included && cellWLen === 1
				const imgShown = true
				const src = imgShown && dataWeather[weatherStatus].images[seasonName]; 
				const imgName = !imgShown && dataWeather[weatherStatus].name
				// class
				const weatherClass =  "weatherStatus h-100 " + weatherStatus + (included ? " included" : '');
				// console.log(src)
				return <div key={weatherStatus} className={weatherClass} >
					{(included && imgShown) && <img src={"images/" + src} alt={weatherStatus} style={imgStyle} />}
					{(included && !imgShown) && <p style={{fontSize: "0.8rem"}}>{imgName}</p>}
				</div>
			})}
		</div>
	</div>
}
export default GridCell;
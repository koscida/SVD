import useLocalStorage from '../shared/useLocalStorage'
import data from '../shared/data'

// get data from data file
const dataCrops = data.crops
console.log("dataCrops", dataCrops)

function Crops() {
	const [selectedSeason, setSelectedSeason] = useLocalStorage('svd-crops-selectedseason', "Spring")
	const [selectedCrops, setSelectedCrops] = useLocalStorage('svd-crops-selectedcrops', dataCrops)
	
	const crops = dataCrops.reduce( (cropsTmp, c) => {
		cropsTmp[c.name] = c
		return cropsTmp
	}, {} )
	console.log("crops", crops)
	const cropNames = dataCrops.map(c => c.name)
	console.log("cropNames", cropNames)

	const handleSeasonSwitch = (e) => {
		setSelectedSeason(e.target.value)
	}
	
	const CropCalendar = () => {
					
		return <div className='d-grid' style={{gridTemplateColumns: 'repeat(7, calc(100% / 7))', gridtemplateRows: 'repeat(4, calc(100% / 4))'}}>
			{[...Array(28).keys()].map( i => 
				<div className='cell' key={i}>
					<div className='date'>{i + 1}</div>
					{cropNames.map( cropName => {
						const crop = crops[cropName]
						console.log("cropName", cropName)
						// console.log("crop", crop)
						return <div>
							
						</div>
					})}
				</div>
			)}
		</div>
	}
	
	return <div className='cropsApp'>
		<div className='row'>
			<div className='col-2'>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="cropSeason" data-bs-toggle="dropdown" aria-expanded="false">
						{selectedSeason}
					</button>
					<ul className="dropdown-menu" aria-labelledby="cropSeason">
						{data.seasonsNames.map(seasonName => 
							<li key={seasonName}>
								<input type="button" className="dropdown-item" value={seasonName} onClick={handleSeasonSwitch} />
							</li>
						)}
					</ul>
				</div>
				<div>
					{dataCrops
						.filter( c => c.season.includes(selectedSeason))
						.map( c => <div key={c.name}>
							{c.name} 
							</div>
						)
					}
				</div>
			</div>
			<div className='col-10'>
				<CropCalendar />
				<div>
					{dataCrops
						.filter( c => c.season.includes(selectedSeason))
						.map( (c,i) => {
							const harvest = c.growTime + 1
							const reharvest = []
							if(c.regrow) {
								let day = harvest + c.regrowTime
								while(day <= 28) {
									reharvest.push(day)
									day += c.regrowTime
								}
							}
							return <div key={i}>
								<p>{c.name}</p>
								<p>Plant: 1</p>
								<p>
									Harvest: {harvest} 
									{c.regrow && ", " + reharvest.join(", ")}
								</p>
							</div>
						})
					}
				</div>
			</div>
		</div>
		
	</div>
}

export default Crops;
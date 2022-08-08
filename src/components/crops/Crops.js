import useLocalStorage from '../shared/useLocalStorage'
import data from '../shared/data'

// get data from data file
const dataCrops = data.crops
const crops = dataCrops.reduce( (cropsTmp, c) => {
		cropsTmp[c.name] = c
		
		cropsTmp[c.name].growDays = [1]
		cropsTmp[c.name].harvestDays = [c.growTime + 1]
		
		let day = c.growTime + 1
		if(c.regrow) {
			day += c.regrowTime
		} else {
			day += c.growTime
		}
		while(day <= 28) {
			if(c.regrow) {
				cropsTmp[c.name].harvestDays.push(day)
				day += c.regrowTime
			} else {
				cropsTmp[c.name].harvestDays.push(day)
				cropsTmp[c.name].growDays.push(day)
				day += c.growTime
			}
		}
		
		return cropsTmp
	}, {} )
console.log("crops", crops)
const cropNames = dataCrops.map(c => c.name)

function Crops() {
	const [selectedSeason, setSelectedSeason] = useLocalStorage('svd-crops-selectedseason', "Spring")
	const [selectedCrops, setSelectedCrops] = useLocalStorage('svd-crops-selectedcrops', Object.values(crops).filter( c => c.season.includes(selectedSeason)))
	
	
	const handleSeasonSwitch = (e) => {
		const newSeason = e.target.value
		setSelectedSeason(newSeason)
		setSelectedCrops(Object.values(crops).filter( c => c.season.includes(newSeason)))
	}
	
	const CropCalendar = () => {
		const cols = selectedCrops.length + 1
		return <div className='d-grid' style={{gridTemplateColumns: 'repeat(7, calc(100% / 7))', gridtemplateRows: 'repeat(4, calc(100% / 4))'}}>
			{[...Array(29).keys()].slice(1,).map( i => 
				<div className='cell cropCell d-grid' key={i} style={{gridTemplateRows: 'repeat('+cols+', calc(100% / '+cols+'))'}}>
					<div className='date'>{i}</div>
					{selectedCrops.map( selectedCrop => {
						const crop = crops[selectedCrop.name]
						return <div key={selectedCrop.name} className="d-flex direction-row">
							{crop.growDays.includes(i) 
								&& <img src={"images/" + crop.seeds.replaceAll(' ','_') + ".png"} alt="" className='seed' />}
							{crop.harvestDays.includes(i)
								&& <img src={"images/" + crop.name.replaceAll(' ','_') + ".png"} alt="" className='crop' />}
							<div style={{background: crop.color, height: "8px", flex: "1 0"}}>
							</div>
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
					{Object.values(crops)
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
			</div>
		</div>
		
	</div>
}

export default Crops;
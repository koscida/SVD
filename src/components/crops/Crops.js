import useLocalStorage from '../shared/useLocalStorage'
import data from '../shared/data'

// get data from data file
const dataCrops = data.crops
const crops = dataCrops.reduce( (cropsTmp, c) => {
		cropsTmp[c.name] = c
		
		let day = 1
		cropsTmp[c.name].growDays = [day]
		cropsTmp[c.name].harvestDays = []
		
		day += c.growTime
		
		while(day <= 28) {
			cropsTmp[c.name].harvestDays.push(day)
			if(c.regrow) {
				day += c.regrowTime
			} else {
				if(day + c.growTime <= 28) {
					cropsTmp[c.name].growDays.push(day)
				}
				day += c.growTime
			}
		}
		
		return cropsTmp
	}, {} )
console.log("crops", crops)
const cropNames = dataCrops.map(c => c.name)

const getSelectedCrops = (setSeason) => {
	return Object.values(crops)
		.filter( c => c.season.includes(setSeason))
		.sort( (a,b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0 )
		.sort( (a,b) => (a.growTime > b.growTime) )
		.sort( (a,b) => (a.season.length < b.season.length) ? -1 : (a.season.length > b.season.length) ? 1 : 0 )
		.sort( (a,b) => (!a.regrow && b.regrow) ? -1 : (a.regrow && !b.regrow) ? 1 : 0 )
}

function Crops() {
	const [selectedSeason, setSelectedSeason] = useLocalStorage('svd-crops-selectedseason', "Spring")
	const [cropOptions, setCropOptions] = useLocalStorage('svd-crops-cropoptions', getSelectedCrops(selectedSeason))
	const [selectedCrops, setSelectedCrops] = useLocalStorage('svd-crops-selectedcrops', getSelectedCrops(selectedSeason))
	
	const handleSeasonSwitch = (e) => {
		const newSeason = e.target.value
		setSelectedSeason(newSeason)
		setSelectedCrops(getSelectedCrops(newSeason))
		setCropOptions(getSelectedCrops(newSeason))
	}
	
	const CropCalendar = () => {
		const cols = selectedCrops.length + 1
		return <div className='d-grid' style={{gridTemplateColumns: 'repeat(7, calc(100% / 7))', gridtemplateRows: 'repeat(4, calc(100% / 4))'}}>
			{[...Array(29).keys()].slice(1,).map( i => 
				<div className='cell cropCell d-grid' key={i} style={{gridTemplateRows: 'repeat('+cols+', calc(100% / '+cols+'))'}}>
					<div className='date'>{i}</div>
					{selectedCrops.map( selectedCrop => {
						const crop = crops[selectedCrop.name]
						let opacity = 1
						// if within first growing period
						if(i <= crop.growTime) {
							// color porpotional to growing time
							opacity = ((1 * i) / crop.growTime)
						} else {
							if(crop.regrow) {
								opacity = ((((i - crop.growTime - 1) % crop.regrowTime) + 1) / crop.regrowTime)
							} else {
								opacity = ((((i - crop.growTime - 1) % crop.growTime) + 1) / crop.growTime)
							}
						}
						return <div key={selectedCrop.name} className="d-flex direction-row align-items-center" style={{"minHeight": "20px"}}>
							{crop.harvestDays.includes(i)
								&& <img src={"images/" + crop.name.replaceAll(' ','_') + ".png"} alt="" className='crop' />}
							{crop.growDays.includes(i) 
								&& <img src={"images/" + crop.seeds.replaceAll(' ','_') + ".png"} alt="" className='seed' />}
							<div style={{background: crop.color, opacity, height: "8px", flex: "1 0"}}>
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
					{cropOptions
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
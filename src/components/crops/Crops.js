import useLocalStorage from '../shared/useLocalStorage'
import data from '../shared/data'

function Crops() {
	const [selectedSeason, setSelectedSeason] = useLocalStorage('svd-crops-selectedseason', "Spring")
	
	const handleSeasonSwitch = (e) => {
		setSelectedSeason(e.target.value)
	}
	
	return <>
		<div>
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
			</div>
			<div>
		</div>
	</>;
}

export default Crops;
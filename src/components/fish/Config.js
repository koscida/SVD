import data from '../data'

const showByOptions = ["Timeline", "Location"]

const dataSeasons = data.seasons
const dataWeather = data.weather
const caughtOptions = [{"name": "Caught"}, {"name":"Not Caught"}]


function Config({filterSeasons, setFilterSeasons, filterWeather, setFilterWeather, filterCaught, setFilterCaught, showBy, setShowBy}) {
	const seasonsNames = filterSeasons.map(x=>x.name)
	const filterOptions = [
		{
			"label": "Season",
			"data": dataSeasons,
			"shownData": dataSeasons,
			"filterdData": filterSeasons,
			"filterdDataNames": seasonsNames,
			"setfilterData": setFilterSeasons,
		},
		{
			"label": "Weather",
			"data": dataWeather,
			"shownData": Object.values(dataWeather).filter(weatherStatus =>
				Object.keys(weatherStatus.images).some(x => seasonsNames.includes(x))
			),
			"filterdData": filterWeather,
			"filterdDataNames": filterWeather.map(x=>x.name),
			"setfilterData": setFilterWeather,
		},
		{
			"label": "Caught",
			"data": caughtOptions,
			"shownData": caughtOptions,
			"filterdData": filterCaught,
			"filterdDataNames": filterCaught.map(x=>x.name),
			"setfilterData": setFilterCaught,
		}
	]
	
	/* Configuration */
	const handleFilterChange = (newOption, setFunction) => {
		setFunction(newOption)
	}
	const handleFilterClick = (searchName, group, groupNames, setGroup, groupData) => {
		// if id in group
		if(groupNames.includes(searchName)) {
			// hide
			const newGroup = group.filter( x => x.name !== searchName )
			setGroup(newGroup)
			
		} else {
			// show
			const newGroup = Object.values(groupData).filter( x => x.name === searchName )
			setGroup([...group, ...newGroup])
		}
	}
	
	/* Displays */
	const FilterOption = ({option}) => {
		const { label, data, shownData, filterdData, filterdDataNames, setfilterData} = option
					
		return <div className='filterOptions mb-3'>
		<h6>{label}</h6>
		<div className='d-flex flex-wrap'>
			{Object.values(shownData).map(filterOption => {
				const { name, image, images } = filterOption
				
				const included = filterdDataNames.includes(name)
				const className = 'filterOption me-1 mb-1 ' + name + (included ? " shown" : "")
				return <div 
					key={name} 
					className={className} 
					>
					<div className="form-check m-0 p-0 d-flex align-items-center">
						<input 
							className="form-check-input m-1 " 
							type="checkbox" 
							name={label + name} 
							id={label + name} 
							onChange={(e) => {handleFilterClick(name, filterdData, filterdDataNames, setfilterData, data)}}
							checked={included && name}
							value={name} />
						<label className="form-check-label m-1 d-flex flex-row" htmlFor={label + name}>
							{image && <img src={"images/" + image} alt={name} />}
							{images && <img src={"images/" + Object.values(images)[0]} alt={name} />}
							<p className='ms-1'>{name}</p>
						</label>
					</div>
				</div>
			})}
		</div>
	</div>
	}
	
	
	/* Main Display */
	return <>
		<div className='configuration'>
			<div>
				<h4>View</h4>
				<div className='filterOptions mb-3'>
					<h6>Show by</h6>
					{showByOptions.map(showByOption => {
						return <div className="form-check" key={"showBy" + showByOption}>
							<input 
								className="form-check-input" 
								type="radio" 
								name={"showBy" + showByOption} 
								id={"showBy" + showByOption} 
								onChange={(e) => {handleFilterChange(showByOption, setShowBy)}}
								checked={showBy === showByOption}
								value={showByOption} />
							<label className="form-check-label" htmlFor={"showBy" + showByOption}>
								{showByOption}
							</label>
						</div>
					})}
				</div>
			</div>
			<div>
				<h4>Filters</h4>
				
				{filterOptions.map(filterOptionGroup => 
					<FilterOption option={filterOptionGroup} key={filterOptionGroup.label} />
				)}
				
			</div>
			
		</div>
	</>;
}

export default Config;
import React from "react";
import { useState } from "react";
import CollectionView from "./CollectionView";
import {
	Typography,
	Box,
	Paper,
	TextField,
	Divider,
	Card,
	CardContent,
	FormGroup,
	FormControlLabel,
	Switch,
} from "@mui/material";

import { seasons } from "../shared/data/collectionShipped";

import useLocalStorage from "../shared/useLocalStorage";
import RenderImg from "../shared/Icons/RenderImg";
import CancelImg from "../shared/Icons/CancelImg";
import CollectionTabs from "./CollectionTabs";
import CollectionSummary from "./CollectionSummary";
import MultipleSelectChip from "../shared/inputs/MultipleSelectChip";
import GenericItem from "../shared/views/GenericItem";
import styled from "styled-components";

// ////
// helper functions

const createCollectedData = (collectionName, dataSource) => {
	const collectedData = dataSource.reduce((collectedData, item) => {
		collectedData[item.name] = {
			id: item.id,
			name: item.name,
			collected: 0,
		};
		return collectedData;
	}, {});
	return collectedData;
};

const createCollectionData = (collectedData, collectionName, dataSource) => {
	let collectionData = dataSource
		.sort((a, b) => a.id - b.id)
		.map((item) => {
			item.collected = collectedData[item.id]
				? collectedData[item.id].collected
				: 0;
			return item;
		});

	if (collectionName === "Fish")
		collectionData = collectionData.filter((f) => f.id > 0);

	// console.log(
	// 	"-createCollectionData-",
	// 	" collectedData: ",
	// 	collectedData,
	// 	" collectionData: ",
	// 	collectionData,
	// 	" dataSource: ",
	// 	dataSource
	// );

	return collectionData;
};

// create filter options
const createCollectionTypeOptions = (filterItemTypes) => [
	"All",
	...filterItemTypes,
];
const createSeasonOptions = (seasons) => [...seasons];

const StyledCollectionPage = styled.div`
	.flexRow {
		display: flex;
		flex-direction: row;
	}

	.collectionContent {
		display: grid;
		grid-template-columns: 30% 70%;
		grid-gap: 1rem;

		> div {
			height: calc(100vh - 230px);
			overflow-y: scroll;
			border: 1px solid #ddd;
		}
	}
`;
// ////
// CollectionPageGeneric()

function CollectionPageGeneric({
	collectionName,
	collectionItemName,
	collectionGoal,
	dataSource,
	filterItemTypes,
}) {
	// //
	// collection
	//
	// collected data - what is being stored
	const [collectedData, setCollectedData] = useLocalStorage(
		"svd-collections-" + collectionName,
		createCollectedData(collectionName, dataSource)
	);
	// collection data - what is shown in the box
	const [collectionData, setCollectionData] = useState(
		createCollectionData(collectedData, collectionName, dataSource)
	);
	// which item is selected
	const [selectedItem, setSelectedItem] = useState(null);

	// //
	// filters
	//
	// hide items that have been collected
	const [hideCollected, setHideCollected] = useState(false);
	// 	dropdown of item types
	const [collectionTypeOptions, setCollectionTypeOptions] = useState(
		createCollectionTypeOptions(filterItemTypes)
	);
	const [itemTypesSelected, setItemTypeSelected] = useState(["All"]);
	// dropdown of seasons
	const [seasonOptions, setSeasonsOptions] = useState(
		createSeasonOptions(seasons)
	);
	const [seasonsSelected, setSeasonsSelected] = useState(seasonOptions);

	//
	//
	// //////
	// handlers

	//
	// select item

	// selected item in collection
	const setSelectedItemValue = (itemName) => (e) => {
		const newItem = dataSource.find((item) => item.name === itemName);
		// console.log(
		// 	"---setSelectedItemValue--- itemName: ",
		// 	itemName,
		// 	" newItem: ",
		// 	newItem
		// );
		setSelectedItem(newItem);
	};
	// exit button
	const resetSelectedItemValue = () => {
		setSelectedItem(null);
	};

	//
	// filters

	// filter collected
	const handleShowCollected = () => {
		const newHideCollected = !hideCollected;
		setHideCollected(newHideCollected);
	};

	// filter item types
	const handleItemTypeChange = (event) => {
		const {
			target: { value },
		} = event;
		const newItemType =
			value.length === 0 ||
			(value.find((x) => x === "All") &&
				(!itemTypesSelected.find((x) => x === "All") || value.length === 1))
				? ["All"]
				: value.filter((x) => x !== "All");
		setItemTypeSelected(newItemType);
	};

	// filter seasons
	const handleSeasonChange = (event) => {
		const {
			target: { value },
		} = event;
		const newSeason = value.length === 0 ? seasonOptions : value;
		setSeasonsSelected(newSeason);
	};

	//
	// item collected

	// number of items shipped
	const handleItemCollectedChanged = (itemName) => (e) => {
		const collected = parseInt(e.target.value);
		console.log("itemName: ", itemName, " e: ", collected);

		// update collected data (stored locally)
		let newCollectedData = JSON.parse(JSON.stringify(collectedData));
		console.log("newCollectedData: ", newCollectedData);
		newCollectedData[itemName].collected = collected;
		setCollectedData(newCollectedData);

		// update what is selected
		// update collection data (what is shown in display)
		let newCollectionData = JSON.parse(JSON.stringify(collectionData));
		console.log("newCollectionData: ", newCollectionData);
		newCollectionData = newCollectionData.map((item) => {
			if (item.name === itemName) {
				item.collected = collected;
				setSelectedItem(item);
			}
			return item;
		});
		setCollectionData(newCollectionData);
	};

	//
	//
	// filter the collection data
	const filterCollectionData = (collectionData) =>
		collectionData.filter((item) => {
			// is collected hidden
			const inHideSelected = hideCollected ? item.collected < 1 : true;

			// if item type selected
			const type = !item.item ? item["sub-type"] : item.type;
			const inTypeSelected = itemTypesSelected.includes("All")
				? true
				: itemTypesSelected.includes(type);

			// if seasons selected
			const itemSeasons = !item.seasons
				? !item.item
					? null
					: !item.item.seasons
					? null
					: item.item.seasons
				: item.seasons;
			const inSeasons =
				!itemSeasons || itemSeasons.length === 0
					? true
					: itemSeasons.reduce(
							(inSeason, season) =>
								inSeason || seasonsSelected.includes(season),
							false
					  );

			// console.log(
			// 	"-filterCollectionData- ",
			// 	" item: ",
			// 	item,
			// 	" inHideSelected: ",
			// 	inHideSelected,
			// 	" inTypeSelected: ",
			// 	inTypeSelected,
			// 	" inSeasons: ",
			// 	inSeasons
			// );
			return inHideSelected && inTypeSelected && inSeasons;
		});

	//
	//
	// //////
	// reuse displays

	const CollectionItem = ({ item }) => {
		if (!item) return <></>;

		const itemType = item.type;
		const newItem = !item.item ? item : item.item;

		return (
			<>
				<Paper sx={{ padding: "1em", margin: "0 1em 1em" }}>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "50% 50%",
						}}
					>
						<div style={{ display: "flex", flexDirection: "row" }}>
							<RenderImg label={item.name} styles={{ padding: "0 10px 0 0" }} />
							<h2>{item.name}</h2>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "row-reverse",
							}}
						>
							<Box
								sx={{
									padding: "15px",
								}}
							>
								<CancelImg handleClick={resetSelectedItemValue} />
							</Box>
							<TextField
								id="shippedItem"
								label={`${collectionItemName} ${collectionGoal}`}
								variant="outlined"
								value={item.collected}
								onChange={handleItemCollectedChanged(item.name)}
							/>
						</div>
					</div>
				</Paper>

				{newItem ? <GenericItem item={newItem} type={itemType} /> : <></>}
			</>
		);
	};

	// //////
	// render
	const filteredCollectionData = filterCollectionData(collectionData);
	return (
		<StyledCollectionPage>
			<CollectionTabs collectionName={collectionName} />
			<Box sx={{ padding: "1em" }}>
				<div className="flexRow">
					<h1>Collections: {collectionName}</h1>
					<Box
						className="flexRow"
						sx={{
							alignItems: "center",
							margin: "0 1em",
						}}
					>
						{
							<FormGroup>
								<FormControlLabel
									control={
										<Switch
											checked={hideCollected}
											onChange={handleShowCollected}
											inputProps={{
												"aria-label": "controlled",
											}}
										/>
									}
									label={`Hide ${collectionGoal}`}
								/>
							</FormGroup>
						}
						{filterItemTypes.length > 0 &&
						collectionTypeOptions &&
						itemTypesSelected ? (
							<MultipleSelectChip
								label={`${collectionItemName} Type`}
								options={collectionTypeOptions}
								handleChange={handleItemTypeChange}
								selectedOption={itemTypesSelected}
							/>
						) : (
							<></>
						)}
						{seasonOptions && seasonsSelected ? (
							<MultipleSelectChip
								label={"Season"}
								options={seasonOptions}
								handleChange={handleSeasonChange}
								selectedOption={seasonsSelected}
							/>
						) : (
							<></>
						)}
					</Box>
				</div>

				<Box className="collectionContent">
					<CollectionView
						collection={filteredCollectionData}
						selected={selectedItem}
						setSelected={setSelectedItemValue}
					/>
					<Box>
						{selectedItem ? (
							<CollectionItem item={selectedItem} />
						) : (
							<Box sx={{ margin: "1em" }}>
								<CollectionSummary
									collection={filteredCollectionData}
									collectionName={collectionName}
								/>
							</Box>
						)}
					</Box>
				</Box>
			</Box>
		</StyledCollectionPage>
	);
}

export default CollectionPageGeneric;

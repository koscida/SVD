import React from "react";
import { useState } from "react";

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
import styled from "styled-components";

import { seasons } from "../shared/data/collectionShipped";

import useLocalStorage from "../shared/useLocalStorage";

import MultipleSelectChip from "../shared/inputs/MultipleSelectChip";
import RenderImg from "../shared/Icons/RenderImg";
import CancelImg from "../shared/Icons/CancelImg";

import CollectionTabs from "./CollectionTabs";
import CollectionView from "./CollectionView";
import CollectionSummary from "./CollectionSummary";
import CollectionItem from "./CollectionItem";

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
			item.collected = collectedData[item.name]
				? collectedData[item.name].collected
				: 0;
			return item;
		});

	// if (collectionName === "Fish")
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
	const handleSelectedItem = (itemName) => {
		setSelectedItem(itemName);
	};
	// exit button
	const handleResetSelectedItem = () => {
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
		const newCollected = parseInt(e.target.value);
		// console.log("itemName: ", itemName, " newCollected: ", newCollected);

		// update collected data (stored locally)
		let newCollectedData = { ...collectedData };
		newCollectedData[itemName].collected = newCollected;
		setCollectedData(newCollectedData);
		// console.log("newCollectedData: ", newCollectedData);

		// update collection data (what is shown in display)
		let newCollectionData = [...collectionData];
		let newCollectionData2 = newCollectionData.map((item) => {
			if (item.name === itemName) {
				let newItem = { ...item };
				newItem["collected"] = newCollected;
				// console.log(
				// 	"-handleItemCollectedChanged- item.name: ",
				// 	item.name,
				// 	" newItem: ",
				// 	newItem
				// );
				return newItem;
			}
			return item;
		});
		setCollectionData(newCollectionData2);
		// console.log("newCollectionData: ", newCollectionData2);
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

	// //////
	// render
	const filteredCollectionData = filterCollectionData(collectionData);
	const selectedItemData = collectionData.find((x) => x.name === selectedItem);
	// console.log(
	// 	"-above render- filteredCollectionData: ",
	// 	filteredCollectionData
	// );
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
						setSelected={handleSelectedItem}
					/>
					<Box>
						{selectedItem ? (
							<CollectionItem
								selected={selectedItemData}
								collectionItemChange={handleItemCollectedChanged}
								setSelected={handleSelectedItem}
							/>
						) : (
							<Box sx={{ margin: "1em" }}>
								<CollectionSummary
									collection={filteredCollectionData}
									collectionName={collectionName}
									collectionItemChange={handleItemCollectedChanged}
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

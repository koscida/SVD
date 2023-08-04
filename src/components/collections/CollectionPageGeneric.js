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

import {
	shipped,
	shippedTypes,
	seasons,
} from "../shared/data/collectionShipped";
import { crops } from "../shared/data/dataCrops";
import { fish, fishTypes } from "../shared/data/dataFish";
import { foraging } from "../shared/data/foraging";
import { animalProducts } from "../shared/data/dataAnimals";
import { artisanProducts } from "../shared/data/artisanProducts";

import useLocalStorage from "../shared/useLocalStorage";
import RenderImg from "../shared/Icons/RenderImg";
import CancelImg from "../shared/Icons/CancelImg";
import CollectionTabs from "./CollectionTabs";
import MultipleSelectChip from "../shared/inputs/MultipleSelectChip";
import GenericItem from "../shared/views/GenericItem";

// ////
// helper functions

// create data
const createDataSource = (collectionName, shipped, fish) =>
	collectionName === "Shipped"
		? shipped.map((item) => {
				item.item =
					item.type === "Crop"
						? crops.find((x) => x.name === item.name)
						: item.type === "Forage"
						? foraging.find((x) => x.name === item.name)
						: item.type === "Artisan Product"
						? artisanProducts.find((x) => x.name === item.name)
						: item.type === "Animal Product"
						? animalProducts.find((x) => x.name === item.name)
						: null;
				return item;
		  })
		: collectionName === "Fish"
		? fish
		: [];

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

	return collectionData;
};

// create filter options
const createCollectionTypeOptions = (collectionName) => {
	const types =
		collectionName === "Shipped"
			? shippedTypes
			: collectionName === "Fish"
			? fishTypes
			: [];
	// console.log(" types: ", types);
	const options = ["All", ...types];
	return options;
};
const createSeasonOptions = (seasons) => [...seasons];

// ////
// CollectionPageGeneric()

function CollectionPageGeneric({
	collectionName,
	collectionItemName,
	collectionGoal,
}) {
	// //
	// data
	const [dataSource, setDataSource] = useState(
		createDataSource(collectionName, shipped, fish)
	);

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
		createCollectionTypeOptions(collectionName)
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
	const setSelectedItemValue = (itemID) => (e) => {
		// console.log("---ShippedItem--- itemID: ", itemID, " e: ", e);
		if (typeof parseInt(itemID) === "number") {
			const newItem = dataSource.find((item) => item.id === itemID);
			// console.log("itemID: ", itemID, " newItem: ", newItem);
			setSelectedItem(newItem);
		}
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
				(!itemTypesSelected.find((x) => x === "All") ||
					value.length === 1))
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
			const seasons = !item.seasons
				? !item.item
					? null
					: !item.item.seasons
					? null
					: item.item.seasons
				: item.seasons;
			const inSeasons = !seasons
				? true
				: seasons.reduce(
						(inSeason, season) =>
							inSeason || seasonsSelected.includes(season),
						false
				  );

			// combine
			// console.log(
			// 	"- name: ",
			// 	item.name,
			// 	" inTypeSelected: ",
			// 	inTypeSelected,
			// 	" type: ",
			// 	type
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
		const newItem =
			itemType === "Crop"
				? crops.find((x) => x.name === item.name)
				: itemType === "Forage"
				? foraging.find((x) => x.name === item.name)
				: itemType === "Artisan Product"
				? artisanProducts.find((x) => x.name === item.name)
				: itemType === "Animal Product"
				? animalProducts.find((x) => x.name === item.name)
				: null;

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
							<RenderImg
								label={item.name}
								styles={{ padding: "0 10px 0 0" }}
							/>
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
								<CancelImg
									handleClick={resetSelectedItemValue}
								/>
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
				<Paper sx={{ padding: "1em", margin: "0 1em 1em" }}>
					<h3>{itemType}</h3>
					{newItem ? (
						<GenericItem item={newItem} type={itemType} />
					) : (
						<></>
					)}
				</Paper>
			</>
		);
	};

	// //////
	// render
	return (
		<>
			<CollectionTabs />
			<Box sx={{ padding: "1em" }}>
				<h1>Collections: {collectionName}</h1>
				<Box sx={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
					<CollectionView
						collection={filterCollectionData(collectionData)}
						selected={selectedItem}
						setSelected={setSelectedItemValue}
					/>
					<Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
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
							{collectionTypeOptions && itemTypesSelected ? (
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
						<Divider />
						{selectedItem ? (
							<CollectionItem item={selectedItem} />
						) : (
							<>select an item from the collection</>
						)}
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default CollectionPageGeneric;

import { useState } from "react";
import CollectionView from "../CollectionView";
import { Typography, Box, Paper, TextField, Divider } from "@mui/material";

import { shipped } from "../../shared/data/collectionShipped";
import { crops } from "../../shared/data/dataCrops";
import { foraging } from "../../shared/data/foraging";

import RenderImg from "../../shared/Icons/RenderImg";
import useLocalStorage from "../../shared/useLocalStorage";
import CollectionTabs from "../CollectionTabs";

// ////
// helper functions

const createShippedCollectedData = (shipped) => {
	const d = [...Array(shipped.length + 1).keys()].splice(1).map((x) => {
		return {
			id: x,
			collected: 0,
		};
	});
	return d;
};

const createShippedData = (shipped, shippedCollected) => {
	const d = shipped
		.sort((a, b) => a.id - b.id)
		.map((item) => {
			item.collected = shippedCollected[item.id - 1].collected;
			return item;
		});
	return d;
};

// ////
// ShippedHome()

function ShippedHome() {
	const [selected, setSelected] = useState(-1);
	const [shippedCollected, setShippedCollected] = useLocalStorage(
		"svd-collections-shippedCollected",
		createShippedCollectedData(shipped)
	);
	const [shippedData, setShippedData] = useState(
		createShippedData(shipped, shippedCollected)
	);

	// //////
	// handlers

	const handleItemShippedChanged = (itemID) => (e) => {
		const newShippedCollected = [
			...shippedCollected.map((item) => {
				item.collected = e.target.value;
				return item;
			}),
		];
		setShippedCollected(newShippedCollected);
		setShippedData(createShippedData(shipped, newShippedCollected));
	};

	const setSelectedValue = (itemID) => (e) => setSelected(itemID);

	const handleTabChange = (e) => {
		const newTab = e.target.value;
	};

	// //////
	// reuse displays

	const CropView = ({ crop }) => (
		<>
			<div>Seasons: {crop.season.join(", ")}</div>
			<Divider />
			<div>
				<RenderImg
					label={crop.seeds}
					styles={{ padding: "0 10px 0 0" }}
				/>
				{crop.seeds}
			</div>
			<Divider />
			<div>
				Grow Time: {crop.growTime} Days
				{crop.regrow ? "(Regrow: " + crop.regrowTime + " Days)" : ""}
			</div>
		</>
	);

	const ForageView = ({ forage }) => (
		<>
			<div>{forage.description}</div>
			<Divider />
			<div>
				{forage.sell ? (
					<>Sellable: {forage.sellPrice}</>
				) : (
					"Not sellable"
				)}
			</div>
		</>
	);

	const GenericView = ({ item }) => <>{item.name}</>;

	const ShippedItem = ({ item }) => (
		<>
			<Paper sx={{ padding: "1em", margin: "0 1em 1em" }}>
				<div
					style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
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
						<TextField
							id="shippedItem"
							label="Items shipped"
							variant="outlined"
							value={item.collected}
							onChange={handleItemShippedChanged(item.id)}
						/>
					</div>
				</div>
			</Paper>
			<Paper sx={{ padding: "1em", margin: "0 1em 1em" }}>
				<h3>{item.type}</h3>
				{item.type === "Crop" ? (
					<CropView
						crop={crops.find((crop) => crop.name === item.name)}
					/>
				) : item.type === "Forage" ? (
					<ForageView
						forage={foraging.find(
							(forage) => forage.name === item.name
						)}
					/>
				) : (
					<></>
				)}
			</Paper>
		</>
	);

	// //////
	// render
	return (
		<>
			<CollectionTabs />
			<Box sx={{ padding: "1em" }}>
				<h1>Collections: Shipped</h1>
				<Box sx={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
					<CollectionView
						collection={shippedData}
						selected={selected}
						setSelected={setSelectedValue}
					/>
					<Box>
						{selected === -1 ? (
							<>select an item from the collection</>
						) : (
							<ShippedItem
								item={shippedData.find(
									(item) => item.id === selected
								)}
							/>
						)}
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default ShippedHome;

import React from "react";
import { useState } from "react";
import CollectionView from "../CollectionView";
import {
	Typography,
	Box,
	Paper,
	TextField,
	Divider,
	Card,
	CardContent,
} from "@mui/material";

import { shipped, shippedTypes } from "../../shared/data/collectionShipped";
import { crops } from "../../shared/data/dataCrops";
import { foraging } from "../../shared/data/foraging";
import { animalProducts } from "../../shared/data/dataAnimals";
import { artisanProducts } from "../../shared/data/artisanProducts";

import RenderImg from "../../shared/Icons/RenderImg";
import CancelImg from "../../shared/Icons/CancelImg";
import useLocalStorage from "../../shared/useLocalStorage";
import CollectionTabs from "../CollectionTabs";
import MultipleSelectChip from "../../shared/inputs/MultipleSelectChip";

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

const createShippedOptions = (types) => {
	// console.log(" types: ", types);
	const shippedOptions = ["All", "None", ...types];
	return shippedOptions;
};

// ////
// ShippedHome()

function ShippedHome() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [shippedCollected, setShippedCollected] = useLocalStorage(
		"svd-collections-shippedCollected",
		createShippedCollectedData(shipped)
	);
	const [shippedData, setShippedData] = useState(
		createShippedData(shipped, shippedCollected)
	);
	const [shippedOptions, setShippedOptions] = useState(
		createShippedOptions(shippedTypes)
	);
	const [itemTypeSelected, setItemTypeSelected] = useState(["All"]);

	// //////
	// handlers

	// collection tab
	const handleTabChange = (e) => {
		const newTab = e.target.value;
	};

	// selected item in collection
	const setSelectedItemValue = (itemID) => (e) => {
		// console.log("---ShippedItem--- itemID: ", itemID, " e: ", e);
		if (typeof parseInt(itemID) === "number") {
			const newItem = shippedData.find((item) => item.id === itemID);
			// console.log("itemID: ", itemID, " newItem: ", newItem);
			setSelectedItem(newItem);
		}
	};
	const resetSelectedItemValue = () => {
		setSelectedItem(null);
	};

	// filter item types
	const handleItemTypeChange = ({
		e: {
			target: { value },
		},
	}) => {
		const newItemType =
			value === "All" || value === "None"
				? [value]
				: itemTypeSelected.find((x) => x === value)
				? itemTypeSelected.filter((x) => x !== value)
				: [...itemTypeSelected, value];

		setItemTypeSelected(newItemType);
	};

	// number of items shipped
	const handleItemShippedChanged = (itemID) => (e) => {
		const newShippedCollected = [
			...shippedCollected.map((item) => {
				if (item.id === itemID) item.collected = e.target.value;
				return item;
			}),
		];
		setShippedCollected(newShippedCollected);
		setShippedData(createShippedData(shipped, newShippedCollected));
	};

	// //////
	// reuse displays

	const CropView = ({ crop }) => (
		<>
			<h4>Grow</h4>
			<p>
				Seeds:
				<RenderImg
					label={crop.seeds}
					styles={{ padding: "0 10px 0 0" }}
				/>
				{crop.seeds}
			</p>
			<p>Seasons: {crop.season.join(", ")}</p>
			<p>
				Grow Time: {crop.growTime} Days
				{crop.regrow ? "(Regrow: " + crop.regrowTime + " Days)" : ""}
			</p>
		</>
	);

	const ForageView = ({ forage }) => (
		<>
			<h4>Forage</h4>
		</>
	);

	const AnimalProductView = ({ animalProduct }) => (
		<>
			<h4>Animals</h4>
			<p>
				{animalProduct.animals.map((animal, i) => (
					<span key={i}>
						<RenderImg
							label={animal}
							styles={{ padding: "0 10px 0 0" }}
						/>
						{animal.name}
					</span>
				))}
			</p>
		</>
	);

	const ArtisanProductsView = ({ artisanProduct }) => (
		<>
			<h4>Equipment</h4>
			{/* <p>Machine: {artisanProduct.machine}</p> */}
			{/* <p>
				Processing Time:{" "}
				{artisanProduct.time.days > 1.0
					? artisanProduct.time.days + " Days"
					: artisanProduct.time.hours > 1.0
					? artisanProduct.time.hours + " Hours"
					: artisanProduct.time.minutes + " Minutes"}
			</p> */}
			{/* <p>Ingredients: {artisanProduct.machine}</p> */}
		</>
	);

	const GenericItem = ({ item, type }) => {
		return (
			<>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Card variant="outlined">
						<CardContent>
							<div>
								<h4>Information</h4>
								<p>
									<i>{item["sub-type"]}</i>
								</p>
								<p>{item.description}</p>
								<Divider />
								<p>Sources: </p>
							</div>
						</CardContent>
					</Card>

					<Card variant="outlined">
						<CardContent>
							<>
								<h4>Sell Prices</h4>
								<div>
									{typeof item.sell === "object" ? (
										item.sell.type === "Unsellable" ? (
											<div>Unsellable</div>
										) : item.sell.type === "Flat" ? (
											<div>{item.sell.price}</div>
										) : item.sell.type === "Quality" ? (
											<div
												style={{
													display: "flex",
													flexDirection: "row",
												}}
											>
												{[
													"Regular",
													"Silver",
													"Gold",
													"Iridium",
												].map((quality, i) => (
													<div key={i}>
														<RenderImg
															label={`${quality} Quality`}
														/>
														{item.sell[quality]}
													</div>
												))}
											</div>
										) : (
											<>{item.sell.type}</>
										)
									) : (
										<>"no sell"</>
									)}
								</div>
							</>
						</CardContent>
					</Card>

					<Card variant="outlined">
						<CardContent>
							<div>
								{type === "Crop" ? (
									<CropView crop={item} />
								) : type === "Forage" ? (
									<ForageView forage={item} />
								) : type === "Animal Product" ? (
									<AnimalProductView animalProduct={item} />
								) : type === "Artisan Product" ? (
									<ArtisanProductsView
										artisanProduct={item}
									/>
								) : (
									<></>
								)}
							</div>
						</CardContent>
					</Card>
				</Box>
			</>
		);
	};

	const ShippedItem = ({ item }) => {
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
								label="Items shipped"
								variant="outlined"
								value={item.collected}
								onChange={handleItemShippedChanged(item.id)}
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
				<h1>Collections: Shipped</h1>
				<Box sx={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
					<CollectionView
						collection={shippedData}
						selected={selectedItem}
						setSelected={setSelectedItemValue}
					/>
					<Box>
						<Box>
							{shippedOptions && itemTypeSelected ? (
								<MultipleSelectChip
									label={"Item Type"}
									options={shippedOptions}
									handleChange={handleItemTypeChange}
									selectedOption={itemTypeSelected}
								/>
							) : (
								<></>
							)}
						</Box>
						{selectedItem ? (
							<ShippedItem item={selectedItem} />
						) : (
							<>select an item from the collection</>
						)}
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default ShippedHome;

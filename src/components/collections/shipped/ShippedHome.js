import { useState } from "react";
import CollectionView from "../CollectionView";
import { shipped } from "../../shared/data/collectionShipped";
import { Box, Paper, TextField } from "@mui/material";

import RenderImg from "../../shared/Icons/RenderImg";
import useLocalStorage from "../../shared/useLocalStorage";

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

// //////
// render displays

const ShippedItem = ({ item }) => (
	<Paper sx={{ padding: "1em", margin: "0 1em" }}>
		<div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
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
				/>
			</div>
		</div>
	</Paper>
);

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

	const setSelectedValue = (itemID) => (e) => setSelected(itemID);

	return (
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
	);
}

export default ShippedHome;

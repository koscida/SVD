import React from "react";
import { Box, Paper, TextField } from "@mui/material";

import GenericItem from "../shared/views/GenericItem";

import RenderImg from "../shared/Icons/RenderImg";
import CancelImg from "../shared/Icons/CancelImg";

function CollectionItem({ selected, collectionItemChange, setSelected }) {
	if (!selected) return <></>;

	const itemType = selected.type;
	const newItem = !selected.item ? selected : selected.item;

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
							label={selected.name}
							styles={{ padding: "0 10px 0 0" }}
						/>
						<h2>{selected.name}</h2>
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
							<CancelImg handleClick={() => setSelected(null)} />
						</Box>
						<TextField
							id="shippedItem"
							label={`Collected`}
							variant="outlined"
							value={selected.collected}
							onChange={() => collectionItemChange(selected.name)}
						/>
					</div>
				</div>
			</Paper>

			{newItem ? <GenericItem item={newItem} type={itemType} /> : <></>}
		</>
	);
}

export default CollectionItem;

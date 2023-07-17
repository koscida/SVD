import React from "react";
import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

import RenderImg from "../shared/Icons/RenderImg";

import navigationLinks from "../shared/navigation/navigationLinks";

// selected ids:
// 0 = shipped
// 1 = fish
// 2 = artifacts
// 3 = minerals
// 4 = cooking
// 5 = achievements
// 6 = letters
// 7 = journal scraps
// 8 = secret notes

const tabs = [
	{
		name: "shipped",
		label: "Shipped",
	},
	{
		name: "fish",
		label: "Fish",
	},
	{
		name: "artifacts",
		label: "Artifacts",
	},
	{
		name: "minerals",
		label: "Minerals",
	},
	{
		name: "cooking",
		label: "Cooking",
	},
	{
		name: "achievements",
		label: "Achievements",
	},
	{
		name: "letters",
		label: "Letters",
	},
	{
		name: "journal scraps",
		label: "Journal Scraps",
	},
	{
		name: "secret notes",
		label: "Secret Notes",
	},
];

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={(event) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

const CollectionTabs = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="collection tab"
			>
				{tabs.map((tab, i) => (
					<LinkTab
						key={i}
						icon={<RenderImg label={tab.name} />}
						label={tab.label}
						href={`/${
							navigationLinks.Collections.find(
								(collection) => collection.label === tab.label
							).to
						}`}
					/>
				))}
			</Tabs>
		</Box>
	);
};

export default CollectionTabs;

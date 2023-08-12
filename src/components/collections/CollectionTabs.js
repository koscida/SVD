import React from "react";
import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

import RenderImg from "../shared/Icons/RenderImg";

import navigationLinks from "../shared/navigation/navigationLinks";

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={(event) => {
				//event.preventDefault();
			}}
			{...props}
		/>
	);
}

const CollectionTabs = ({ collectionName }) => {
	const [tabs, setTabs] = useState(navigationLinks.Collections);

	const [value, setValue] = useState(
		tabs.reduce(
			(value, tab, i) => (tab.label === collectionName ? i : value),
			0
		)
	);

	return (
		<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
			<Tabs value={value} aria-label="collection tab">
				{tabs.map((tab, i) => (
					<LinkTab
						key={i}
						icon={<RenderImg label={tab.label} styles={{ width: "2rem" }} />}
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

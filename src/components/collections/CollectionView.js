import React from "react";
import styled from "styled-components";

import RenderImg from "../shared/Icons/RenderImg";

// ///////
// CollectionView
//
// Will display a Collection, expects:
//
// collection is the collection that will be displayed, it expects the following values:
// collection = [
//     {
//         id: <int>,
//         name: <string>,
//         collected: <int>
//     }
// ]
//
// selected is the id of the item in the collection that is currently selected
// selected = <int>
//
// setSelected is the callback function that sets the selected value
// setSelected = <func>

const StyledCollection = styled.div`
	> div {
		display: grid;
		grid-template-columns: repeat(10, 10%);

		> div {
			padding: 3px;
			box-sizing: border-box;
			border: 1px solid transparent;
		}
		.selected {
			border: 1px solid #ddd;
		}

		img {
			width: 100%;
		}
	}
`;

function CollectionView({ collection, selected, setSelected }) {
	// console.log("--CollectionView-- collection: ", collection);
	return (
		<StyledCollection>
			<div>
				{collection.map((item) => (
					<div
						key={item.id}
						onClick={setSelected(item.name)}
						className={
							selected && item.name === selected.name ? "selected" : ""
						}
						value={item.id}
					>
						{<RenderImg label={item.name} disabled={item.collected === 0} />}
					</div>
				))}
			</div>
		</StyledCollection>
	);
}

export default CollectionView;

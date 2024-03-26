import React, { useState } from "react";

import { recipes } from "../../data/recipes";
import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import EverythingTable from "../shared/react-table/everything-table/EverythingTable";

const Testing = () => {
	const [selectedRecipeId, setSelectedRecipeId] = useState(-1);

	const RecipeList = styled.div`
		padding-top: 18px;
	`;
	const RecipeHeader = styled.div`
		position: fixed;
		background: white;
		width: 100%;

		border-bottom: 1px solid #ddd;
		display: flex;
		flex-direction: row;
		grid-gap: 5px;

		> *:first-child {
			width: 18px;
		}
	`;
	const RecipeBox = styled.div`
		border-bottom: 1px solid #ddd;
		display: flex;
		flex-direction: row;
		grid-gap: 5px;

		> *:first-child {
			width: 18px;
		}
	`;

	return (
		<>
			<RecipeHeader>
				<Box>ID</Box>
				<Box>Name</Box>
			</RecipeHeader>
			<RecipeList>
				{recipes.map((recipe) => {
					return (
						<RecipeBox>
							<Box>{recipe.id}</Box>
							<Box>{recipe.name}</Box>
						</RecipeBox>
					);
				})}
			</RecipeList>
			<EverythingTable />
		</>
	);
};

export default Testing;

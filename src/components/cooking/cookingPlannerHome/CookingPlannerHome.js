import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import SVDBasicTable from "../../shared/views/SVDBasicTable";
import Table from "../../shared/react-table/Table";
import useLocalStorage from "../../shared/useLocalStorage";
import RadioOption from "../../shared/inputs/RadioOption";
import CheckOption from "../../shared/inputs/CheckOption";
import RenderImg from "../../shared/Icons/RenderImg";

import { recipes, ingredientTypes } from "../../shared/data/recipes";
import { animalProducts, productTypesData } from "../../shared/data/animals";
import { crops } from "../../shared/data/crops";
// ///////////
// CookingPlannerHome()

// //
// useState init

//
// table data
const getRecipeColumnsInit = (ingredientTypes) => {
	const ingredientTypesHeaders = ingredientTypes.reduce((headers, type) => {
		const h = [
			...headers,
			{
				Header: type,
				accessor: type,
			},
		];
		return h;
	}, []);
	return [
		{
			Header: "Name",
			accessor: "name",
		},
		{
			Header: "Description",
			accessor: "description",
		},
		{
			Header: "Sell Price",
			accessor: "sellPrice",
		},
		{
			Header: "Ingredients",
			accessor: "ingredients",
		},
		...ingredientTypesHeaders,
		{
			Header: "Sources",
			accessor: "sources",
		},
		{
			Header: "Energy",
			accessor: "energy",
		},
		{
			Header: "Health",
			accessor: "health",
		},
		{
			Header: "Buffs",
			accessor: "buffs",
		},
	];
};

const getRecipeDataInit = (recipes) =>
	Object.values(recipes).map((recipe) => {
		const newRow = {};
		//
		// recipe data
		newRow.name = (
			<>
				<RenderImg label={recipe.name} /> {recipe.name}
			</>
		);
		newRow.description = (
			<Box sx={{ maxWidth: "250px" }}>{recipe.description}</Box>
		);
		newRow.sellPrice = recipe.sellPrice;
		//
		// ingredients
		newRow.ingredients = (
			<>
				{recipe.ingredients.map((ingredient, i) => (
					<Box key={ingredient.ingredient}>
						<RenderImg label={ingredient.ingredient} />
						{ingredient.ingredient} ({ingredient.amount})
					</Box>
				))}
			</>
		);
		ingredientTypes.forEach((type) => {
			newRow[type] = (
				<>
					{recipe.ingredients
						.filter((ingredient) => ingredient.type === type)
						.map((ingredient, i) => (
							<Box key={ingredient.ingredient}>
								<RenderImg label={ingredient.ingredient} />
								{ingredient.ingredient} ({ingredient.amount})
							</Box>
						))}
				</>
			);
		});

		//
		// effects
		newRow.energy = recipe.effects.energy;
		newRow.health = recipe.effects.health;
		newRow.buffs = recipe.effects.buffs ? (
			recipe.effects.buffs.map((buff) => (
				<Box key={buff.buff}>
					<RenderImg label={buff.buff} /> &nbsp;
					{buff.buff} ({buff.value > 0 ? "+" : ""}
					{buff.value})
				</Box>
			))
		) : (
			<></>
		);
		//
		// sources
		newRow.sources = (
			<>
				{Object.entries(recipe.sources).map(([sourceType, sourceInfo], i) => (
					<Box key={i}>
						{sourceType === "Starter" ? (
							<>Starter</>
						) : sourceType === "The Queen of Sauce" ? (
							<>
								<RenderImg label={sourceType} /> &nbsp;
								{sourceInfo.date}, {sourceInfo.year}
							</>
						) : sourceType === "Shop" ? (
							<>
								<RenderImg label={sourceInfo.shopName} /> &nbsp;
								{sourceInfo.shopName}{" "}
								{typeof sourceInfo.price === "number" ? (
									<>
										({sourceInfo.price} <RenderImg label={"Gold"} /> gold)
									</>
								) : (
									<>
										({sourceInfo.price.amount}{" "}
										<RenderImg label={sourceInfo.price.artifact} />{" "}
										{sourceInfo.price.artifact} )
									</>
								)}
							</>
						) : sourceType === "Friendship" ? (
							<>
								<RenderImg label={`${sourceInfo.friend}_Icon`} /> &nbsp;
								{sourceInfo.friend} {sourceInfo.hearts} Hearts
							</>
						) : sourceType === "Skill" ? (
							<>
								<RenderImg label={`${sourceInfo.skill}`} /> &nbsp;
								{sourceInfo.skill} Level {sourceInfo.level}
							</>
						) : (
							""
						)}
					</Box>
				))}
			</>
		);
		//
		return newRow;
	});

//
// ingredients lists
const getIngredientsDataInit = (recipes) =>
	Object.values(recipes).reduce(
		(ingredientsList, recipe) =>
			recipe.ingredients.reduce((ingredientsList, ingredient) => {
				// check if ingredient groups empty
				if (!(ingredient.type in ingredientsList)) {
					ingredientsList[ingredient.type] = {};
				}
				if (!(ingredient.ingredient in ingredientsList[ingredient.type])) {
					ingredientsList[ingredient.type][ingredient.ingredient] = {};
				}

				// add ingredient
				ingredientsList[ingredient.type][ingredient.ingredient][recipe.name] =
					ingredient.amount;

				// check if cooking
				if (ingredient.type === "Cooking") {
					// find ingredients for the cooking recipe
					recipes[ingredient.ingredient].ingredients.forEach(
						(cookingIngredient) => {
							// check if ingredient group empty
							if (!(cookingIngredient.type in ingredientsList)) {
								ingredientsList[cookingIngredient.type] = {};
							}
							if (
								!(
									cookingIngredient.ingredient in
									ingredientsList[cookingIngredient.type]
								)
							) {
								ingredientsList[cookingIngredient.type][
									cookingIngredient.ingredient
								] = {};
							}

							// add ingredient
							ingredientsList[cookingIngredient.type][
								cookingIngredient.ingredient
							][recipe.name] = cookingIngredient.amount;
						}
					);
				}

				return ingredientsList;
			}, ingredientsList),

		{}
	);

// ingredients columns
const getIngredientsColumns = (ingredientType) => {
	let extraFields = [];
	if (ingredientType === "Crop")
		extraFields = [
			...extraFields,
			{ field: "source", label: "Source" },
			{ field: "season", label: "Season" },

			{ field: "days", label: "Days" },
			{ field: "seasonalHarvest", label: "Seasonal Harvest" },
			{ field: "extra", label: "Extra" },
		];
	else if (ingredientType === "Animal Product")
		extraFields = [
			...extraFields,
			{ field: "source", label: "Source" },
			{ field: "rate", label: "Rate" },
		];
	else if (ingredientType === "Artisan Goods")
		extraFields = [...extraFields, { field: "source", label: "Source" }];
	else if (ingredientType === "Fish")
		extraFields = [
			...extraFields,
			{ field: "location", label: "Location" },
			{ field: "conditions", label: "Conditions" },
		];
	return [
		{ field: "name", label: "Name" },
		{ field: "amount", label: "Needed" },
		{
			field: "recipes",
			label: "Recipes",
			sx: { maxWidth: "500px" },
		},
		...extraFields,
	];
};

// ingredients rows
const getIngredientsRows = (ingredientType, ingredientTypeData) =>
	Object.entries(ingredientTypeData).reduce(
		(rows, [ingredientName, recipes]) => {
			rows = [
				...rows,
				{
					name: (
						<>
							<RenderImg label={ingredientName} /> &nbsp;
							{ingredientName}
						</>
					),
					amount: Object.values(recipes).reduce(
						(totalAmount, recipeAmount) => (totalAmount += recipeAmount),
						0
					),
					recipes: (
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "flex-start",
								gap: "4px 10px",
							}}
						>
							{Object.entries(recipes).map(([recipeName, amount]) => (
								<Box key={recipeName}>
									<RenderImg label={recipeName} /> &nbsp;
									{recipeName} ({amount})
								</Box>
							))}
						</Box>
					),
					source:
						ingredientType === "Crop" ? (
							ingredientName in crops ? (
								<Box>
									<RenderImg label={crops[ingredientName].seeds} />{" "}
									{crops[ingredientName].seeds}
								</Box>
							) : (
								<></>
							)
						) : ingredientType === "Animal Product" ? (
							<>
								{productTypesData[ingredientName].animals.map((animal) => (
									<Box key={animal}>
										<RenderImg label={animal} /> {animal}
									</Box>
								))}
							</>
						) : (
							<></>
						),
					rate:
						ingredientType === "Animal Product" ? (
							<>{productTypesData[ingredientName].rate ?? <></>}</>
						) : (
							<></>
						),
					season:
						ingredientType === "Crop" ? (
							ingredientName in crops ? (
								<>
									{crops[ingredientName].season.map((season) => (
										<Box key={season}>
											<RenderImg label={season} /> {season}
										</Box>
									))}
								</>
							) : (
								<></>
							)
						) : (
							<></>
						),
				},
			];
			return rows;
		},
		[]
	);

// //
// styles

//
// accordion stylings
const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));
const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(255, 255, 255, .05)"
			: "rgba(0, 0, 0, .03)",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// //
// CookingPlannerHome()
function CookingPlannerHome() {
	// table data
	const [recipeColumns, setRecipeColumns] = useState(
		getRecipeColumnsInit(ingredientTypes)
	);
	const [recipeData, setRecipeData] = useState(getRecipeDataInit(recipes));
	//
	// ingredients lists
	const [ingredientsData, setIngredientsData] = useState(
		getIngredientsDataInit(recipes)
	);

	// return
	return (
		<>
			<Box>
				<h1>Recipes</h1>
				<Table
					columns={recipeColumns}
					data={recipeData}
					offset={{ yOffset: "100px - 32px" }}
				/>
			</Box>
			<Box>
				<h1>Ingredients</h1>
				{Object.entries(ingredientsData).map(
					([ingredientType, ingredientTypeData]) => (
						<div key={ingredientType}>
							<h3>{ingredientType}</h3>
							<SVDBasicTable
								columns={getIngredientsColumns(ingredientType)}
								rows={getIngredientsRows(ingredientType, ingredientTypeData)}
							/>
						</div>
					)
				)}
			</Box>
		</>
	);
}

export default CookingPlannerHome;

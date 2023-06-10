import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import Table from "../../shared/react-table/Table";
import useLocalStorage from "../../shared/useLocalStorage";
import RadioOption from "../../shared/filters/RadioOption";
import CheckOption from "../../shared/filters/CheckOption";
import RenderImg from "../../shared/Icons/RenderImg";

import { recipes } from "../../shared/data/recipes";

// ////
// CookingPlannerHome()

//
// table data
const tableColumnsInit = [
	{
		Header: "Recipe",
		columns: [
			{
				Header: "",
				accessor: "icon",
			},
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
		],
	},
	{
		Header: "Ingredients",
		columns: [
			{
				Header: "",
				accessor: "ingredientIcon0",
			},
			{
				Header: "Ingredient",
				accessor: "ingredient0",
			},
			{
				Header: "Type",
				accessor: "type0",
			},
			{
				Header: "Amount",
				accessor: "amount0",
			},
			{
				Header: "",
				accessor: "ingredientIcon1",
			},

			{
				Header: "Ingredient",
				accessor: "ingredient1",
			},
			{
				Header: "Type",
				accessor: "type1",
			},
			{
				Header: "Amount",
				accessor: "amount1",
			},
			{
				Header: "",
				accessor: "ingredientIcon2",
			},
			{
				Header: "Ingredient",
				accessor: "ingredient2",
			},
			{
				Header: "Type",
				accessor: "type2",
			},
			{
				Header: "Amount",
				accessor: "amount2",
			},
			{
				Header: "",
				accessor: "ingredientIcon3",
			},
			{
				Header: "Ingredient",
				accessor: "ingredient3",
			},
			{
				Header: "Type",
				accessor: "type3",
			},
			{
				Header: "Amount",
				accessor: "amount3",
			},
		],
	},

	{
		Header: "Effects",
		columns: [
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
		],
	},

	{
		Header: "Sources",
		columns: [
			{
				Header: "Source",
				accessor: "source0",
			},
			{
				Header: "Source",
				accessor: "source1",
			},
		],
	},
];

const getTableDataInit = (recipes) =>
	Object.values(recipes).map((recipe) => {
		const newRow = {};
		//
		// recipe data
		newRow.name = recipe.name;
		newRow.icon = <RenderImg label={recipe.name} />;
		newRow.description = recipe.description;
		newRow.sellPrice = recipe.sellPrice;
		//
		// ingredients
		recipe.ingredients.forEach((ingredient, i) => {
			newRow[`ingredient${i}`] = ingredient.ingredient;
			newRow[`ingredientIcon${i}`] = (
				<RenderImg label={ingredient.ingredient} />
			);
			newRow[`type${i}`] = ingredient.type;
			newRow[`amount${i}`] = ingredient.amount;
		});
		//
		// effects
		newRow.energy = recipe.effects.energy;
		newRow.health = recipe.effects.health;
		newRow.buffs = recipe.effects.buffs
			? recipe.effects.buffs.reduce(
					(buffs, buff) => (buffs += `${buff.buff} ${buff.value} \n`),
					""
			  )
			: "";
		//
		// sources
		Object.keys(recipe.sources).forEach((source, i) => {
			newRow[`source${i}`] = source;
		});
		//
		return newRow;
	});

//
// ingredients lists
const getIngredientsListInit = (recipes) =>
	Object.values(recipes).reduce(
		(ingredientsList, recipe) =>
			recipe.ingredients.reduce((ingredientsList, ingredient) => {
				if (!(ingredient.type in ingredientsList)) {
					ingredientsList[ingredient.type] = {};
				}
				if (!(ingredient.ingredient in ingredientsList[ingredient.type])) {
					ingredientsList[ingredient.type][ingredient.ingredient] = {};
				}

				ingredientsList[ingredient.type][ingredient.ingredient][recipe.name] =
					ingredient.amount;

				return ingredientsList;
			}, ingredientsList),

		{}
	);

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

//
// component
function CookingPlannerHome() {
	// table data
	const [tableColumns, setTableColumns] = useState(tableColumnsInit);
	const [tableData, setTableData] = useState(getTableDataInit(recipes));
	//
	// ingredients lists
	const [ingredientsList, setIngredientsList] = useState(
		getIngredientsListInit(recipes)
	);

	// return
	return (
		<>
			<Box>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>All Recipes</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Table
							columns={tableColumns}
							data={tableData}
							filterLocation={{ top: 40 }}
						/>
					</AccordionDetails>
				</Accordion>
			</Box>
			<Box></Box>
		</>
	);
}

export default CookingPlannerHome;

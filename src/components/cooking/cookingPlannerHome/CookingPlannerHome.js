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

import SVDBasicTable from "../../shared/SVDBasicTable";
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

const getTableDataInit = (recipes) =>
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
				<Accordion expanded={true}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1"
						id="panel1"
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
			<Box>
				{Object.entries(ingredientsList).map(([category, categoryData]) => (
					<div key={category}>
						<h3>{category}</h3>
						<SVDBasicTable
							columns={[
								{ field: "name", headerName: "Name" },
								{ field: "amount", headerName: "Needed" },
								{
									field: "recipes",
									headerName: "Recipes",
									sx: { maxWidth: "500px" },
								},
							]}
							rows={Object.entries(categoryData).reduce(
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
												(totalAmount, recipeAmount) =>
													(totalAmount += recipeAmount),
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
													{Object.entries(recipes).map(
														([recipeName, amount]) => (
															<Box key={recipeName}>
																<RenderImg label={recipeName} /> &nbsp;
																{recipeName} ({amount})
															</Box>
														)
													)}
												</Box>
											),
										},
									];
									return rows;
								},
								[]
							)}
						/>
					</div>
				))}
			</Box>
		</>
	);
}

export default CookingPlannerHome;

import Home from "../../home/Home";
import Fish from "../../fish/Fish";
import Crops from "../../crops/Crops";
import HarvestHome from "../../crops/harvests/HarvestHome";
import AnimalsHome from "../../animals/AnimalsHome";

import CookingHome from "../../cooking/cookingHome/CookingHome";
import RecipesHome from "../../cooking/recipesHome/RecipesHome";
import CookingPlannerHome from "../../cooking/cookingPlannerHome/CookingPlannerHome";

import ShippedHome from "../../collections/shipped/ShippedHome";

const navigationLinks = {
	Home: [
		{
			to: "/",
			label: "Home",
			element: <Home />,
		},
	],
	Collections: [
		{
			to: "shipped",
			label: "Shipped",
			element: <ShippedHome />,
		},
		{
			to: "fish",
			label: "Fish",
		},
		{
			to: "artifacts",
			label: "Artifacts",
		},
		{
			to: "minerals",
			label: "Minerals",
		},
		{
			to: "cooking",
			label: "Cooking",
			element: <CookingHome />,
		},
		{
			to: "achievements",
			label: "Achievements",
		},
		{
			to: "letters",
			label: "Letters",
		},
		{
			to: "secretNotes",
			label: "Secret Notes",
		},
		{
			to: "journalScraps",
			label: "Journal Scraps",
		},
		{
			to: "perfection",
			label: "Perfection",
		},
	],
	Resources: [
		{
			to: "crops",
			label: "Crops",
			element: <Crops />,
		},
		{
			to: "fish",
			label: "Fish",
			element: <Fish />,
		},

		{
			to: "animals",
			label: "Animals",
			element: <AnimalsHome />,
		},
		{
			to: "ranching",
			label: "Ranching",
		},
		{
			to: "machines",
			label: "Machines",
		},
		{
			to: "recepies",
			label: "Receipes",
			element: <RecipesHome />,
		},
	],
	Planners: [
		{
			to: "seasonal",
			label: "Seasonal",
		},
		{
			to: "planner",
			label: "Planner",
		},
		{
			to: "harvests",
			label: "Harvests",
			element: <HarvestHome />,
		},
		{
			to: "cookingPlanner",
			label: "Cooking Planner",
			element: <CookingPlannerHome />,
		},
	],
};

export default navigationLinks;

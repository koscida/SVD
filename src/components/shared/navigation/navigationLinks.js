import Home from "../../home/Home";
import Fish from "../../fish/Fish";
import Crops from "../../crops/Crops";
import HarvestHome from "../../crops/harvests/HarvestHome";
import AnimalsHome from "../../animals/AnimalsHome";

import CookingHome from "../../cooking/cookingHome/CookingHome";
import RecipiesHome from "../../cooking/recipiesHome/RecipiesHome";
import CookingPlannerHome from "../../cooking/cookingPlanner/CookingPlannerHome";

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
			element: <RecipiesHome />,
		},
	],
	Planners: [
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

import Home from "../../home/Home";
import Fish from "../../fish/Fish";
import Crops from "../../crops/Crops";
import HarvestHome from "../../crops/harvests/HarvestHome";
import AnimalsHome from "../../animals/AnimalsHome";

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
	],
};

export default navigationLinks;

import Home from "../../home/Home";
import Fish from "../../fish/Fish";
import Crops from "../../crops/Crops";
import HarvestHome from "../../crops/harvests/HarvestHome";
import AnimalsHome from "../../animals/AnimalsHome";

import CookingHome from "../../cooking/cookingHome/CookingHome";
import RecipesHome from "../../cooking/recipesHome/RecipesHome";
import CookingPlannerHome from "../../cooking/cookingPlannerHome/CookingPlannerHome";

import ShippedHome from "../../collections/shipped/ShippedHome";
import FishCollectedHome from "../../collections/fish/FishCollectedHome";
import ArtifactsFoundHome from "../../collections/artifacts/ArtifactsFoundHome";
import MineralsCollectedHome from "../../collections/minerals/MineralsCollectedHome";
import RecipesCookedHome from "../../collections/cooking/RecipesCookedHome";
import AchievementsHome from "../../collections/achievements/AchievementsHome";
import LettersReceivedHome from "../../collections/letters/LettersReceivedHome";
import SecretNotesHome from "../../collections/secretNotes/SecretNotesHome";
import JournalScrapsFoundHome from "../../collections/journalScraps/JournalScrapsFoundHome";
import PerfectionHome from "../../collections/perfection/PerfectionHome";

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
			to: "fishCollected",
			label: "Fish",
			element: <FishCollectedHome />,
		},
		{
			to: "artifacts",
			label: "Artifacts",
			element: <ArtifactsFoundHome />,
		},
		{
			to: "minerals",
			label: "Minerals",
			element: <MineralsCollectedHome />,
		},
		{
			to: "cooking",
			label: "Cooking",
			element: <RecipesCookedHome />,
		},
		{
			to: "achievements",
			label: "Achievements",
			element: <AchievementsHome />,
		},
		{
			to: "letters",
			label: "Letters",
			element: <LettersReceivedHome />,
		},
		{
			to: "secretNotes",
			label: "Secret Notes",
			element: <SecretNotesHome />,
		},
		{
			to: "journalScraps",
			label: "Journal Scraps",
			element: <JournalScrapsFoundHome />,
		},
		{
			to: "perfection",
			label: "Perfection",
			element: <PerfectionHome />,
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

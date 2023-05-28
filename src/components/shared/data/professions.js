const professions = {
	Rancher: {
		level: "Level 5",
		profession: "Rancher",
		skill: "Farming",
		description: "Animal products worth 20% more.",
	},
	Tiller: {
		level: "Level 5",
		profession: "Tiller",
		skill: "Farming",
		description:
			"Crops worth 10% more.(Bonus applies to all Vegetables and Flowers, plus any Fruit that has not been foraged) ",
	},
	Coopmaster: {
		level: "Level 10",
		profession: "Coopmaster",
		skill: "Farming",
		description:
			"Befriend coop animals quicker. Incubation time (for Incubator and Ostrich Incubator) cut in half. ",
		"Level 5": "Rancher",
	},
	Shepherd: {
		level: "Level 10",
		profession: "Shepherd",
		skill: "Farming",
		description: "Befriend barn animals quicker. Sheep produce wool faster.",
		"Level 5": "Rancher",
	},
	Artisan: {
		level: "Level 10",
		profession: "Artisan",
		skill: "Farming",
		description: "Artisan goods (wine, cheese, oil, etc.) worth 40% more. ",
		"Level 5": "Tiller",
	},
	Agriculturist: {
		level: "Level 10",
		profession: "Agriculturist",
		skill: "Farming",
		description: "All crops grow 10% faster. ",
		"Level 5": "Tiller",
	},
	Miner: {
		level: "Level 5",
		profession: "Miner",
		skill: "Mining",
		description: " +1 ore per vein.",
	},
	Geologist: {
		level: "Level 5",
		profession: "Geologist",
		skill: "Mining",
		description: "Chance for gems to appear in pairs.",
	},
	Blacksmith: {
		level: "Level 10",
		profession: "Blacksmith",
		skill: "Mining",
		description: "Metal bars worth 50% more.",
		"Level 5": "Miner",
	},
	Excavator: {
		level: "Level 10",
		profession: "Excavator",
		skill: "Mining",
		description: "Chance to find geodes doubled.",
		"Level 5": "Miner",
	},
	Prospector: {
		level: "Level 10",
		profession: "Prospector",
		skill: "Mining",
		description: "Chance to find coal doubled.",
		"Level 5": "Geologist",
	},
	Gemologist: {
		level: "Level 10",
		profession: "Gemologist",
		skill: "Mining",
		description: "Gems worth 30% more.",
		"Level 5": "Geologist",
	},
	Forester: {
		level: "Level 5",
		profession: "Forester",
		skill: "Foraging",
		description: "Gain 25% more wood when chopping",
	},
	Gatherer: {
		level: "Level 5",
		profession: "Gatherer",
		skill: "Foraging",
		description: "Chance for double harvest of foraged items.",
	},
	Lumberjack: {
		level: "Level 10",
		profession: "Lumberjack",
		skill: "Foraging",
		description: "All trees have a chance to drop hardwood.",
		"Level 5": "Forester",
	},
	Tapper: {
		level: "Level 10",
		profession: "Tapper",
		skill: "Foraging",
		description: "Syrups worth 25% more.",
		"Level 5": "Forester",
	},
	Botanist: {
		level: "Level 10",
		profession: "Botanist",
		skill: "Foraging",
		description: "Foraged items are always highest quality.",
		"Level 5": "Gatherer",
	},
	Tracker: {
		level: "Level 10",
		profession: "Tracker",
		skill: "Foraging",
		description: "Location of forageable items revealed.",
		"Level 5": "Gatherer",
	},
	Fisher: {
		level: "Level 5",
		profession: "Fisher",
		skill: "Fishing",
		description: "Fish worth 25% more.",
	},
	Trapper: {
		level: "Level 5",
		profession: "Trapper",
		skill: "Fishing",
		description: "Resources required to craft crab pots reduced.",
	},
	Angler: {
		level: "Level 10",
		profession: "Angler",
		skill: "Fishing",
		description: "Fish worth 50% more.",
		"Level 5": "Fisher",
	},
	Pirate: {
		level: "Level 10",
		profession: "Pirate",
		skill: "Fishing",
		description: "Chance to find treasure doubled.",
		"Level 5": "Fisher",
	},
	Mariner: {
		level: "Level 10",
		profession: "Mariner",
		skill: "Fishing",
		description: "Crab pots no longer produce junk items.",
		"Level 5": "Trapper",
	},
	Luremaster: {
		level: "Level 10",
		profession: "Luremaster",
		skill: "Fishing",
		description: "Crab pots no longer require bait.",
		"Level 5": "Trapper",
	},
	Fighter: {
		level: "Level 5",
		profession: "Fighter",
		skill: "Combat",
		description: " All attacks deal 10% more damage.",
		hp: 15,
	},
	Scout: {
		level: "Level 5",
		profession: "Scout",
		skill: "Combat",
		description: "Critical strike chance increased by 50%.",
		hp: 0,
	},
	Brute: {
		level: "Level 10",
		profession: "Brute",
		skill: "Combat",
		description: "Deal 15% more damage.",
		hp: 0,
		"Level 5": "Fighter",
	},
	Acrobat: {
		level: "Level 10",
		profession: "Acrobat",
		skill: "Combat",
		description: "Cooldown on special moves cut in half.",
		hp: 0,
		"Level 5": "Fighter",
	},
	Defender: {
		level: "Level 10",
		profession: "Defender",
		skill: "Combat",
		description: "",
		hp: 25,
	},
	Desperado: {
		level: "Level 10",
		profession: "Desperado",
		skill: "Combat",
		description: "Critical strikes are deadlier.",
		hp: 0,
	},
};
exports.professions = professions;

const skills = ["Farming", "Mining", "Foraging", "Fishing", "Combat"];
exports.skills = skills;

exports.foraging = [
	{
		name: "Sap",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Tree",
		description: "A fluid obtained from trees.",
		sell: { type: "Flat", price: 2 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: true,
		stats: { energy: -5, health: 0 },
		buffs: [{ name: "Poison", stat: "Energy", effect: -2 }],
		sources: [],
		locationTree: "Wherever there are trees that can be chopped down ",
	},
	{
		name: "Wild Horseradish",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "A spicy root found in the spring.",
		sell: { type: "Flat", price: 50 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: [
			"Forest Farm",
			"Cindersap Forest",
			"Secret Woods",
			"Mountain",
			"Backwoods",
		],
	},
	{
		name: "Daffodil",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "A traditional spring flower that makes a nice gift.",
		sell: { type: "Flat", price: 30 },
		seasons: ["Spring"],
		edible: false,
		sources: [],
		location: ["Bus Stop", "Pelican Town", "Railroad"],
	},
	{
		name: "Leek",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "A tasty relative of the onion.",
		sell: { type: "Flat", price: 60 },
		seasons: ["Spring"],
		edible: false,
		sources: [],
		location: [
			"Forest Farm",
			"Bus Stop",
			"Mountain",
			"Backwoods",
			"Railroad",
		],
	},
	{
		name: "Dandelion",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description:
			"Not the prettiest flower, but the leaves make a good salad.",
		sell: { type: "Flat", price: 40 },
		seasons: ["Spring"],
		edible: false,
		sources: [],
		location: ["Forest Farm", "Bus Stop", "Cindersap Forest", "Railroad"],
	},
	{
		name: "Spring Onion",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "These grow wild during the spring.",
		sell: { type: "Flat", price: 8 },
		seasons: ["Spring"],
		edible: false,
		sources: [],
		location: ["Cindersap Forest"],
	},
	{
		name: "Morel",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Mushroom",
		description: "Sought after for its unique nutty flavor.",
		sell: { type: "Flat", price: 150 },
		seasons: ["Spring"],
		edible: false,
		sources: [],
		location: ["Forest Farm", "Farm Cave (Mushroom)", "Secret Woods"],
	},
	{
		name: "Common Mushroom",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Mushroom",
		description: "Slightly nutty, with good texture.",
		sell: { type: "Flat", price: 40 },
		seasons: ["Spring"],
		edible: false,
		sources: [],
		location: [
			"Forest Farm",
			"Farm Cave (Mushroom)",
			"Cindersap Forest",
			"Secret Woods",
			"Mountain",
			"Backwoods",
		],
	},
	{
		name: "Salmonberry",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Berry",
		description: "A spring-time berry with the flavor of the forest.",
		sell: { type: "Flat", price: 5 },
		seasons: ["Spring", "Summer"],
		edible: false,
		sources: [],
		location: ["Farm Cave (Fruit Bats)"],
	},
	{
		name: "Grape",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "A sweet cluster of fruit.",
		sell: { type: "Flat", price: 80 },
		seasons: ["Spring"],
		edible: false,
		sources: [],
		location: [
			"Forest Farm",
			"Bus Stop",
			"Mountain",
			"Backwoods",
			"Railroad",
		],
	},
	{
		name: "Spice Berry",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "It fills the air with a pungent aroma.",
		sell: { type: "Flat", price: 80 },
		seasons: ["Summer"],
		edible: false,
		sources: [],
		location: [
			"Forest Farm",
			"Farm Cave (Fruit Bats)",
			"Bus Stop",
			"Cindersap Forest",
			"Mountain",
			"Backwoods",
			"Railroad",
		],
	},
	{
		name: "Sweet Pea",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "A fragrant summer flower.",
		sell: { type: "Flat", price: 50 },
		seasons: ["Summer"],
		edible: false,
		sources: [],
		location: [
			"Forest Farm",
			"Bus Stop",
			"Pelican Town",
			"Cindersap Forest",
			"Railroad",
		],
	},
	{
		name: "Red Mushroom",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Mushroom",
		description: "A spotted mushroom sometimes found in caves.",
		sell: { type: "Flat", price: 75 },
		seasons: ["Summer"],
		edible: false,
		sources: [],
		location: [
			"Forest Farm",
			"Farm Cave (Mushroom)",
			"Secret Woods",
			"Mines",
		],
	},
	{
		name: "Fiddlehead Fern",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "The young shoots are an edible specialty.",
		sell: { type: "Flat", price: 90 },
		seasons: ["Summer", "Fall"],
		edible: false,
		sources: [],
		location: ["Secret Woods"],
	},
	{
		name: "Wild Plum",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "",
		sell: { type: "Flat", price: 80 },
		seasons: ["Summer"],
		edible: false,
		sources: [],
		location: [
			"Farm Cave (Fruit Bats)",
			"Bus Stop",
			"Mountain",
			"Backwoods",
			"Railroad",
		],
	},
	{
		name: "Hazelnut",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "",
		sell: { type: "Flat", price: 90 },
		seasons: ["Fall"],
		edible: false,
		sources: [],
		locationTree: "Shaking Maple Trees on or after Fall 14",
	},
	{
		name: "Blackberry",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Berry",
		description: "",
		sell: { type: "Flat", price: 20 },
		seasons: ["Fall"],
		edible: false,
		sources: [],
		location: [
			"Blackberry",
			"Farm Cave (Fruit Bats)",
			"Pelican Town",
			"Cindersap Forest",
			"Backwoods",
		],
	},
	{
		name: "Chanterelle",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Mushroom",
		description: "",
		sell: { type: "Flat", price: 160 },
		seasons: ["Fall"],
		edible: false,
		sources: [],
		location: ["Forest Farm", "Farm Cave (Mushroom)", "Secret Woods"],
	},
	{
		name: "Purple Mushroom",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Mushroom",
		description: "",
		sell: { type: "Flat", price: 250 },
		seasons: ["Fall"],
		edible: false,
		sources: [],
		location: ["Forest Farm", "Farm Cave (Mushroom)", "Mines"],
	},
	{
		name: "Winter Root",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "",
		sell: { type: "Flat", price: 70 },
		seasons: ["Fall"],
		edible: false,
		sources: [],
		locationTree: "Tilling soil throughout Stardew Valley",
	},
	{
		name: "Crystal Fruit",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "",
		sell: { type: "Flat", price: 150 },
		seasons: ["Winter"],
		edible: false,
		sources: [],
		location: [
			"Bus Stop",
			"Pelican Town",
			"Cindersap Forest",
			"Mountain",
			"Backwoods",
			"Railroad",
		],
	},
	{
		name: "Snow Yam",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "",
		sell: { type: "Flat", price: 100 },
		seasons: ["Winter"],
		edible: false,
		sources: [],
		locationTree: "Tilling soil throughout Stardew Valley",
	},
	{
		name: "Crocus",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "",
		sell: { type: "Flat", price: 60 },
		seasons: ["Winter"],
		edible: false,
		sources: [],
		location: [
			"Bus Stop",
			"Pelican Town",
			"Cindersap Forest",
			"Mountain",
			"Backwoods",
			"Railroad",
		],
	},
	{
		name: "Holly",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Seasonal",
		description: "",
		sell: { type: "Flat", price: 80 },
		seasons: ["Winter"],
		edible: false,
		sources: [],
		location: [
			"Bus Stop",
			"Pelican Town",
			"Cindersap Forest",
			"Secret Woods",
			"Mountain",
			"Backwoods",
		],
	},
	{
		name: "Nautilus Shell",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Beach",
		description: "An ancient shell.",
		sell: { type: "Flat", price: 120 },
		seasons: ["Winter"],
		edible: false,
		sources: [],
		location: ["Beach"],
	},
	{
		name: "Coral",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Beach",
		description:
			"A colony of tiny creatures that clump together to form beautiful structures.",
		sell: { type: "Flat", price: 80 },
		seasons: ["Winter"],
		edible: false,
		sources: [],
		location: ["Beach"],
	},
	{
		name: "Sea Urchin",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Beach",
		description:
			"A slow-moving, spiny creature that some consider a delicacy.",
		sell: { type: "Flat", price: 160 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Beach"],
	},
	{
		name: "Rainbow Shell",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Beach",
		description: "It's a very beautiful shell.",
		sell: { type: "Flat", price: 300 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Beach"],
	},
	{
		name: "Clam",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Beach",
		description: "Someone lived here once.",
		sell: { type: "Flat", price: 50 },
		seasons: ["Summer"],
		edible: false,
		sources: [],
		location: ["Beach"],
	},
	{
		name: "Cockle",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Beach",
		description: "A common saltwater clam.",
		sell: { type: "Flat", price: 50 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Beach"],
	},
	{
		name: "Mussel",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Beach",
		description: "A common bivalve that often lives in clusters.",
		sell: { type: "Flat", price: 30 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Beach"],
	},
	{
		name: "Oyster",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Beach",
		description:
			"Constantly filters water to find food. In the process, it removes dangerous toxins from the environment.",
		sell: { type: "Flat", price: 40 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Beach"],
	},
	{
		name: "Seaweed",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Beach",
		description: "It can be used in cooking.",
		sell: { type: "Flat", price: 20 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Beach"],
	},
	{
		name: "Cave Carrot",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Mines",
		description:
			"A starchy snack found in caves. It helps miners work longer.",
		sell: { type: "Flat", price: 25 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Mines"],
	},
	{
		name: "Cactus Fruit",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Desert",
		description: "The sweet fruit of the prickly pear cactus.",
		sell: { type: "Flat", price: 75 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Desert"],
	},
	{
		name: "Coconut",
		id: "",
		version: 1,
		type: "Forage",
		"sub-type": "Desert",
		description: "A seed of the coconut palm. It has many culinary uses.",
		sell: { type: "Flat", price: 120 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Desert"],
	},
	{
		name: "Ginger",
		id: "",
		version: 1.5,
		type: "Forage",
		"sub-type": "Ginger Island",
		description: "This sharp, spicy root is said to increase vitality.",
		sell: { type: "Flat", price: 60 },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Ginger Island"],
	},
	{
		name: "Magma Cap",
		id: "",
		version: 1.5,
		type: "Forage",
		"sub-type": "Ginger Island",
		description: "A very rare mushroom that lives next to pools of lava.",
		sell: { type: "Unsellable" },
		seasons: ["Spring", "Summer", "Fall", "Winter"],
		edible: false,
		sources: [],
		location: ["Volcano Dungeon"],
	},
];

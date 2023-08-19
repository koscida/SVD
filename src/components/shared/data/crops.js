// ////
// crops
const crops = [
	{
		name: "Amaranth",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Amaranth",
		description: "",
		sell: { type: "Quality", Regular: 150 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Amaranth Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 7,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 70 },
				{ shopName: "JojaMart", price: 87 },
				{ shopName: "Night Market", price: 70 },
			],
		},
		color: "#91088a",
		trellis: false,
		giant: true,
	},
	{
		name: "Artichoke",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 160 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Artichoke Seeds", type: "Seeds", amount: 1 },
			],
			time: {
				time: 8,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 30 },
				{ shopName: "Night Market", price: 30 },
			],
		},
		color: "#5e7a31",
		trellis: false,
		giant: true,
	},
	{
		name: "Beet",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 100 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Beet Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 6,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [{ shopName: "Oasis", price: 20 }],
		},
		color: "#8b1e16",
		trellis: false,
		giant: true,
	},
	{
		name: "Bok Choy",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 80 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Bok Choy Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 4,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 50 },
				{ shopName: "JojaMart", price: 62 },
				{ shopName: "Night Market", price: 50 },
			],
		},
		color: "#6cda6c",
		trellis: false,
		giant: true,
	},
	{
		name: "Cauliflower",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 175 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Cauliflower Seeds", type: "Seeds", amount: 1 },
			],
			time: {
				time: 12,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 80 },
				{ shopName: "JojaMart", price: 100 },
				{ shopName: "Night Market", price: 80 },
			],
		},
		color: "#cbbe93",
		trellis: false,
		giant: true,
	},
	{
		name: "Fairy Rose",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Flower",
		description: "",
		sell: { type: "Quality", Regular: 290 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Fairy Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 12,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 200 },
				{ shopName: "JojaMart", price: 250 },
				{ shopName: "Night Market", price: 200 },
			],
		},
		color: "#cc75c4",
		trellis: false,
		giant: true,
	},
	{
		name: "Blackberry",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality" },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Fall Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 7,
				regrow: false,
			},
		},
		recipeSources: {},
		trellis: false,
		giant: true,
	},
	{
		name: "Wild Plum",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality" },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Fall Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 7,
				regrow: false,
			},
		},
		recipeSources: {},
		trellis: false,
		giant: true,
	},
	{
		name: "Garlic",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 60 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Garlic Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 4,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 40 },
				{ shopName: "Night Market", price: 40 },
			],
		},
		color: "#e5c89c",
		trellis: false,
		giant: true,
	},
	{
		name: "Blue Jazz",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Flower",
		description: "",
		sell: { type: "Quality", Regular: 50 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Jazz Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 7,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 30 },
				{ shopName: "JojaMart", price: 37 },
				{ shopName: "Night Market", price: 30 },
			],
		},
		color: "#00b7c8",
		trellis: false,
		giant: true,
	},
	{
		name: "Kale",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 110 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Kale Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 6,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 70 },
				{ shopName: "JojaMart", price: 87 },
				{ shopName: "Night Market", price: 70 },
			],
		},
		color: "#5e7b31",
		trellis: false,
		giant: true,
	},
	{
		name: "Melon",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 250 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Melon Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 12,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 80 },
				{ shopName: "JojaMart", price: 100 },
				{ shopName: "Night Market", price: 80 },
			],
		},
		color: "#fe9493",
		trellis: false,
		giant: true,
	},
	{
		name: "Parsnip",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 35 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Parsnip Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 4,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 20 },
				{ shopName: "JojaMart", price: 25 },
				{ shopName: "Night Market", price: 20 },
			],
		},
		color: "#fcf029",
		trellis: false,
		giant: true,
	},
	{
		name: "Poppy",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Flower",
		description: "",
		sell: { type: "Quality", Regular: 140 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Poppy Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 7,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 100 },
				{ shopName: "JojaMart", price: 125 },
				{ shopName: "Night Market", price: 100 },
			],
		},
		color: "#b40c18",
		trellis: false,
		giant: true,
	},
	{
		name: "Potato",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 80 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Potato Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 6,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 50 },
				{ shopName: "JojaMart", price: 62 },
				{ shopName: "Night Market", price: 50 },
			],
		},
		color: "#dcac6d",
		trellis: false,
		giant: true,
	},
	{
		name: "Pumpkin",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 320 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Pumpkin Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 13,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 100 },
				{ shopName: "JojaMart", price: 125 },
				{ shopName: "Night Market", price: 100 },
			],
		},
		color: "#d55f10",
		trellis: false,
		giant: true,
	},
	{
		name: "Qi Fruit",
		id: "",
		version: 1.5,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality" },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Qi Bean", type: "Seeds", amount: 1 }],
			time: {
				time: 4,
				regrow: false,
			},
		},
		recipeSources: {},
		trellis: false,
		giant: true,
	},
	{
		name: "Radish",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 90 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Radish Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 6,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 40 },
				{ shopName: "JojaMart", price: 50 },
				{ shopName: "Night Market", price: 40 },
			],
		},
		color: "#a20101",
		trellis: false,
		giant: true,
	},
	{
		name: "Sweet Gem Berry",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Rare",
		description: "",
		sell: { type: "Quality", Regular: 3000 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Rare Seed", type: "Seeds", amount: 1 }],
			time: {
				time: 24,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [{ shopName: "Traveling Cart", price: 1000 }],
		},
		color: "#ae0000",
		trellis: false,
		giant: true,
	},
	{
		name: "Red Cabbage",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 260 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Red Cabbage Seeds", type: "Seeds", amount: 1 },
			],
			time: {
				time: 9,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 100 },
				{ shopName: "Night Market", price: 100 },
			],
		},
		color: "#d900ce",
		trellis: false,
		giant: true,
	},
	{
		name: "Rhubarb",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 220 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Rhubarb Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 13,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [{ shopName: "Oasis", price: 100 }],
		},
		color: "#b30000",
		trellis: false,
		giant: true,
	},
	{
		name: "Unmilled Rice",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 30 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Rice Shoot", type: "Seeds", amount: 1 }],
			time: {
				time: 8,
				irrigated: 6,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 40 },
				{ shopName: "Night Market", price: 40 },
			],
		},
		color: "#ce7b20",
		trellis: false,
		giant: true,
	},
	{
		name: "Summer Spangle",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Flower",
		description: "",
		sell: { type: "Quality", Regular: 90 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Spangle Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 8,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 50 },
				{ shopName: "JojaMart", price: 62 },
				{ shopName: "Night Market", price: 50 },
			],
		},
		color: "#90668c",
		trellis: false,
		giant: true,
	},
	{
		name: "Starfruit",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 750 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Starfruit Seeds", type: "Seeds", amount: 1 },
			],
			time: {
				time: 13,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [{ shopName: "Oasis", price: 400 }],
		},
		color: "#fdfe1b",
		trellis: false,
		giant: true,
	},
	{
		name: "Spice Berry",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality" },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Summer Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 7,
				regrow: false,
			},
		},
		recipeSources: {},
		trellis: false,
		giant: true,
	},
	{
		name: "Sunflower",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Flower",
		description: "",
		sell: { type: "Quality", Regular: 80 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Sunflower Seeds", type: "Seeds", amount: 1 },
			],
			time: {
				time: 8,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 200 },
				{ shopName: "JojaMart", price: 125 },
				{ shopName: "Night Market", price: 200 },
			],
		},
		color: "#a44310",
		trellis: false,
		giant: true,
	},
	{
		name: "Taro Root",
		id: "",
		version: 1.5,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 100 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Taro Tuber", type: "Seeds", amount: 1 }],
			time: {
				time: 10,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{
					shopName: "Island Trader",
					price: { artifact: "Bone Fragment", amount: 2 },
				},
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Tulip",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Flower",
		description: "",
		sell: { type: "Quality", Regular: 30 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Tulip Bulb", type: "Seeds", amount: 1 }],
			time: {
				time: 6,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 20 },
				{ shopName: "JojaMart", price: 25 },
				{ shopName: "Night Market", price: 20 },
			],
		},
		color: "#fc8fa8",
		trellis: false,
		giant: true,
	},
	{
		name: "Wheat",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 25 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Wheat Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 4,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 10 },
				{ shopName: "JojaMart", price: 12 },
				{ shopName: "Night Market", price: 10 },
			],
		},
		color: "#f1d03a",
		trellis: false,
		giant: true,
	},
	{
		name: "Crystal Fruit",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality" },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Winter Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 7,
				regrow: false,
			},
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Yam",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 160 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Yam Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 10,
				regrow: false,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 60 },
				{ shopName: "JojaMart", price: 75 },
				{ shopName: "Night Market", price: 60 },
			],
		},
		color: "#c2640c",
		trellis: false,
		giant: true,
	},
	{
		name: "Ancient Fruit",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 550 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring", "Summer", "Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Ancient Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 7,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [{ shopName: "Traveling Cart", price: 1000 }],
		},
		color: "#00b3c6",
		trellis: false,
		giant: true,
	},
	{
		name: "Apple",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 100 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Apple Sapling", type: "Seeds", amount: 1 }],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 4000 },
				{ shopName: "Traveling Cart", price: 4000 },
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Apricot",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 50 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Apricot Sapling", type: "Seeds", amount: 1 },
			],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 2000 },
				{ shopName: "Traveling Cart", price: 2000 },
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Banana",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 150 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Banana Sapling", type: "Seeds", amount: 1 }],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{
					shopName: "Island Trader",
					price: { artifact: "Dragon Tooth", amount: 5 },
				},
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Green Bean",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 40 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Bean Starter", type: "Seeds", amount: 1 }],
			time: {
				time: 10,
				regrow: true,
				regrowTime: 3,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 60 },
				{ shopName: "JojaMart", price: 75 },
				{ shopName: "Night Market", price: 60 },
			],
		},
		color: "#6cda6b",
		trellis: true,
		giant: true,
	},
	{
		name: "Blueberry",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 50 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Blueberry Seeds", type: "Seeds", amount: 1 },
			],
			time: {
				time: 13,
				regrow: true,
				regrowTime: 4,
			},
			amount: {
				Min: 3,
				Chance: 0.02,
				Multiplier: 0.33,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 80 },
				{ shopName: "Night Market", price: 80 },
			],
		},
		color: "#4d67a4",
		trellis: false,
		giant: true,
	},
	{
		name: "Cactus Fruit",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 75 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Cactus Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 12,
				irrigated: 7,
				regrow: true,
				regrowTime: 3,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [{ shopName: "Oasis", price: 100 }],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Cherry",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 80 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Cherry Sapling", type: "Seeds", amount: 1 }],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 3400 },
				{ shopName: "Traveling Cart", price: 3400 },
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Coffee Bean",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Seed",
		description: "",
		sell: { type: "Quality", Regular: 15 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring", "Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Coffee Bean", type: "Seeds", amount: 1 }],
			time: {
				time: 10,
				regrow: true,
				regrowTime: 2,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [{ shopName: "Traveling Cart", price: 2500 }],
		},
		color: "#cfa036",
		trellis: false,
		giant: true,
	},
	{
		name: "Corn",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 50 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer", "Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Corn Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 14,
				regrow: true,
				regrowTime: 4,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 150 },
				{ shopName: "JojaMart", price: 187 },
				{ shopName: "Night Market", price: 150 },
			],
		},
		color: "#e4c500",
		trellis: false,
		giant: true,
	},
	{
		name: "Cranberries",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 75 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Cranberry Seeds", type: "Seeds", amount: 1 },
			],
			time: {
				time: 7,
				regrow: true,
				regrowTime: 5,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 240 },
				{ shopName: "JojaMart", price: 300 },
				{ shopName: "Night Market", price: 240 },
			],
		},
		color: "#be321b",
		trellis: false,
		giant: true,
	},
	{
		name: "Eggplant",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 60 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Eggplant Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 5,
				regrow: true,
				regrowTime: 5,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 20 },
				{ shopName: "JojaMart", price: 25 },
				{ shopName: "Night Market", price: 20 },
			],
		},
		color: "#9355b0",
		trellis: false,
		giant: true,
	},
	{
		name: "Grape",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 80 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Grape Starter", type: "Seeds", amount: 1 }],
			time: {
				time: 10,
				regrow: true,
				regrowTime: 3,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 60 },
				{ shopName: "JojaMart", price: 75 },
				{ shopName: "Night Market", price: 60 },
			],
		},
		color: "#781896",
		trellis: true,
		giant: true,
	},
	{
		name: "Hops",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 25 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Hops Starter", type: "Seeds", amount: 1 }],
			time: {
				time: 11,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 60 },
				{ shopName: "JojaMart", price: 75 },
				{ shopName: "Night Market", price: 60 },
			],
		},
		color: "#154923",
		trellis: true,
		giant: true,
	},
	{
		name: "Mango",
		id: "",
		version: 1.5,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 130 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Mango Sapling", type: "Seeds", amount: 1 }],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{
					shopName: "Island Trader",
					price: { artifact: "Mussel", amount: 75 },
				},
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Orange",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 100 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Orange Sapling", type: "Seeds", amount: 1 }],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 4000 },
				{ shopName: "Traveling Cart", price: 4000 },
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Coconut",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality" },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Palm Tree", type: "Seeds", amount: 1 }],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Skill: { skill: "Foraging", level: 1 },
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Peach",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 140 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Peach Sapling", type: "Seeds", amount: 1 }],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 6000 },
				{ shopName: "Traveling Cart", price: 6000 },
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Hot Pepper",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 40 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Pepper Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 5,
				regrow: true,
				regrowTime: 3,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 40 },
				{ shopName: "JojaMart", price: 50 },
				{ shopName: "Night Market", price: 40 },
			],
		},
		color: "#a85f1a",
		trellis: false,
		giant: true,
	},
	{
		name: "Pineapple",
		id: "",
		version: 1.5,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 300 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Pineapple Seeds", type: "Seeds", amount: 1 },
			],
			time: {
				time: 14,
				regrow: true,
				regrowTime: 7,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{
					shopName: "Island Trader",
					price: { artifact: "Magma Cap", amount: 1 },
				},
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Pomegranate",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 140 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Pomegranate Sapling", type: "Seeds", amount: 1 },
			],
			time: {
				time: 28,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 6000 },
				{ shopName: "Traveling Cart", price: 6000 },
			],
		},
		trellis: false,
		giant: true,
	},
	{
		name: "Strawberry",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality", Regular: 120 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [
				{ ingredient: "Strawberry Seeds", type: "Seeds", amount: 1 },
			],
			time: {
				time: 8,
				regrow: true,
				regrowTime: 4,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [{ shopName: "Egg Festival", price: 100 }],
		},
		color: "#c0321b",
		trellis: false,
		giant: true,
	},
	{
		name: "Tea Leaves",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 50 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Spring", "Summer", "Fall"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Tea Sapling", type: "Seeds", amount: 1 }],
			time: {
				time: 20,
				regrow: true,
				regrowTime: 1,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {},
		color: "#1d8004",
		trellis: false,
		giant: true,
	},
	{
		name: "Tomato",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality", Regular: 60 },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		seasons: ["Summer"],
		sources: [{ type: "Farming", name: "Farm" }],
		Grow: {
			ingredients: [{ ingredient: "Tomato Seeds", type: "Seeds", amount: 1 }],
			time: {
				time: 11,
				regrow: true,
				regrowTime: 4,
			},
			amount: {
				Min: 1,
			},
		},
		recipeSources: {
			Shops: [
				{ shopName: "Pierre", price: 50 },
				{ shopName: "JojaMart", price: 62 },
				{ shopName: "Night Market", price: 50 },
			],
		},
		color: "#a80000",
		trellis: false,
		giant: true,
	},
	{
		name: "Fiddlehead Fern",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Vegetable",
		description: "",
		sell: { type: "Quality" },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		sources: [{ type: "Forage", name: "Secret Woods" }],
		trellis: false,
		giant: true,
	},
	{
		name: "Salmonberry",
		id: "",
		version: 1.4,
		type: "Crop",
		"sub-type": "Fruit",
		description: "",
		sell: { type: "Quality" },
		edible: true,
		edibleStats: {
			energy: 0,
			health: 0,
		},
		sources: [{ type: "Forage", name: "Berry" }],
		recipeSources: {},
		trellis: false,
		giant: true,
	},
];
exports.crops = crops;
//
// create object
exports.cropsObj = crops.reduce((cropsObj, crop) => {
	cropsObj[crop.name] = crop;
	return cropsObj;
}, {});

// //////
// crop types
exports.cropSubTypes = ["Crop", "Forage", "Tree"];
exports.cropSeasons = ["Spring", "Summer", "Fall"];
exports.cropSources = [
	"Pierre",
	"JojaMart",
	"Oasis",
	"Traveling Cart",
	"Egg Festival",
	"Night Market",
	"Island Trader",
];

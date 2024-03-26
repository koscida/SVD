////////////
// Recipes
//

//
//
// /////
// recipe db
exports.recipes = [
	{
		name: "Algae Soup",
		id: "53",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's a little slimy.",
		sell: { type: "Flat", price: 100 },
		edible: true,
		edibleStats: {
			energy: 75,
			health: 33,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Green Algae", type: "Fish", amount: 4 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Clint", hearts: 3 },
		},
	},
	{
		name: "Artichoke Dip",
		id: "56",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's cool and refreshing.",
		sell: { type: "Flat", price: 210 },
		edible: true,
		edibleStats: {
			energy: 100,
			health: 45,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Artichoke", type: "Crop", amount: 1 },
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Fall 28" },
		},
	},
	{
		name: "Autumn's Bounty",
		id: "41",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A taste of the season.",
		sell: { type: "Flat", price: 350 },
		edible: true,
		edibleStats: {
			energy: 220,
			health: 99,
			buffs: [
				{ stat: "Foraging", effect: 2, duration: 461 },
				{ stat: "Defense", effect: 2, duration: 461 },
			],
		},
		sources: ["Cooking", "Bundle"],
		Cooking: {
			ingredients: [
				{ ingredient: "Pumpkin", type: "Crop", amount: 1 },
				{ ingredient: "Yam", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Demetrius", hearts: 7 },
		},
	},
	{
		name: "Baked Fish",
		id: "5",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Baked fish on a bed of herbs.",
		sell: { type: "Flat", price: 100 },
		edible: true,
		edibleStats: {
			energy: 75,
			health: 33,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Bream", type: "Fish", amount: 1 },
				{ ingredient: "Sunfish", type: "Fish", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Summer 7" },
		},
	},
	{
		name: "Banana Pudding",
		id: "76",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A creamy dessert with a wonderful tropical flavor.",
		sell: { type: "Flat", price: 260 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
			buffs: [
				{ stat: "Mining", effect: 1, duration: 301 },
				{ stat: "Luck", effect: 1, duration: 301 },
				{ stat: "Defense", effect: 1, duration: 301 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			],
		},
		recipeSources: {
			Shops: [
				{
					shopName: "Island Trader",
					price: { artifact: "Bone Fragment", amount: 30 },
				},
			],
		},
	},
	{
		name: "Bean Hotpot",
		id: "14",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It sure is healthy.",
		sell: { type: "Flat", price: 100 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
			buffs: [
				{ stat: "Max Energy", effect: 30, duration: 420 },
				{ stat: "Magnetism", effect: 32, duration: 420 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Green Bean", type: "Crop", amount: 2 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Clint", hearts: 7 },
		},
	},
	{
		name: "Blackberry Cobbler",
		id: "62",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "There's nothing quite like it.",
		sell: { type: "Flat", price: 260 },
		edible: true,
		edibleStats: {
			energy: 175,
			health: 78,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Blackberry", type: "Forage", amount: 2 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Fall 14" },
		},
	},
	{
		name: "Blueberry Tart",
		id: "40",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's subtle and refreshing.",
		sell: { type: "Flat", price: 150 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Blueberry", type: "Crop", amount: 1 },
				{ ingredient: "Egg", type: "Animal Product", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Pierre", hearts: 3 },
		},
	},
	{
		name: "Bread",
		id: "23",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A crusty baguette.",
		sell: { type: "Flat", price: 60 },
		edible: true,
		edibleStats: {
			energy: 50,
			health: 22,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 3 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Summer 28" },
			Shops: [{ shopName: "Stardrop Saloon", price: 100 }],
		},
	},
	{
		name: "Bruschetta",
		id: "64",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Roasted tomatoes on a crisp white bread.",
		sell: { type: "Flat", price: 210 },
		edible: true,
		edibleStats: {
			energy: 113,
			health: 50,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Tomato", type: "Crop", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Bread", type: "Cooking", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Winter 21" },
		},
	},
	{
		name: "Carp Surprise",
		id: "16",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's bland and oily.",
		sell: { type: "Flat", price: 150 },
		edible: true,
		edibleStats: {
			energy: 90,
			health: 40,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [{ ingredient: "Carp", type: "Fish", amount: 4 }],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Summer 7" },
		},
	},
	{
		name: "Cheese Cauliflower",
		id: "4",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It smells great!",
		sell: { type: "Flat", price: 300 },
		edible: true,
		edibleStats: {
			energy: 138,
			health: 62,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Cauliflower", type: "Crop", amount: 1 },
				{ ingredient: "Cheese", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Pam", hearts: 3 },
		},
	},
	{
		name: "Chocolate Cake",
		id: "26",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Rich and moist with a thick fudge icing.",
		sell: { type: "Flat", price: 200 },
		edible: true,
		edibleStats: {
			energy: 150,
			health: 67,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Egg", type: "Animal Product", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Winter 14" },
		},
	},
	{
		name: "Chowder",
		id: "68",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description:
			"A perfect way to warm yourself after a cold night at sea.",
		sell: { type: "Flat", price: 135 },
		edible: true,
		edibleStats: {
			energy: 225,
			health: 101,
			buffs: [{ stat: "Fishing", effect: 1, duration: 1007 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Clam", type: "Forage", amount: 1 },
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Willy", hearts: 3 },
		},
	},
	{
		name: "Coleslaw",
		id: "65",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's light, fresh and very healthy.",
		sell: { type: "Flat", price: 345 },
		edible: true,
		edibleStats: {
			energy: 213,
			health: 95,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Red Cabbage", type: "Crop", amount: 1 },
				{ ingredient: "Mayonnaise", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Vinegar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Spring 14" },
		},
	},
	{
		name: "Complete Breakfast",
		id: "8",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "You'll feel ready to take on the world!",
		sell: { type: "Flat", price: 350 },
		edible: true,
		edibleStats: {
			energy: 200,
			health: 90,
			buffs: [
				{ stat: "Farming", effect: 2, duration: 420 },
				{ stat: "Max Energy", effect: 50, duration: 420 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
				{ ingredient: "Fried Egg", type: "Cooking", amount: 1 },
				{ ingredient: "Hashbrowns", type: "Cooking", amount: 1 },
				{ ingredient: "Pancakes", type: "Cooking", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Spring 21" },
		},
	},
	{
		name: "Cookie",
		id: "29",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Very chewy.",
		sell: { type: "Flat", price: 140 },
		edible: true,
		edibleStats: {
			energy: 90,
			health: 40,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Egg", type: "Animal Product", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Evelyn", hearts: 4 },
		},
	},
	{
		name: "Crab Cakes",
		id: "73",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description:
			"Crab, bread crumbs, and egg formed into patties then fried to a golden brown.",
		sell: { type: "Flat", price: 275 },
		edible: true,
		edibleStats: {
			energy: 225,
			health: 101,
			buffs: [
				{ stat: "Speed", effect: 1, duration: 1007 },
				{ stat: "Defense", effect: 1, duration: 1007 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Crab", type: "Fish", amount: 1 },
				{ ingredient: "Egg", type: "Animal Product", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Fall 21" },
		},
	},
	{
		name: "Cranberry Candy",
		id: "63",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's sweet enough to mask the bitter fruit.",
		sell: { type: "Flat", price: 175 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Cranberries", type: "Crop", amount: 1 },
				{ ingredient: "Apple", type: "Crop", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Winter 28" },
		},
	},
	{
		name: "Cranberry Sauce",
		id: "44",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A festive treat.",
		sell: { type: "Flat", price: 120 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
			buffs: [{ stat: "Mining", effect: 2, duration: 210 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Cranberries", type: "Crop", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Gus", hearts: 7 },
		},
	},
	{
		name: "Crispy Bass",
		id: "21",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Wow, the breading is perfect.",
		sell: { type: "Flat", price: 150 },
		edible: true,
		edibleStats: {
			energy: 90,
			health: 40,
			buffs: [{ stat: "Magnetism", effect: 64, duration: 420 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Largemouth Bass", type: "Fish", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Kent", hearts: 3 },
		},
	},
	{
		name: "Dish O' The Sea",
		id: "48",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "This'll keep you warm in the cold sea air.",
		sell: { type: "Flat", price: 220 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
			buffs: [{ stat: "Fishing", effect: 3, duration: 335 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Sardine", type: "Fish", amount: 2 },
				{ ingredient: "Hashbrowns", type: "Cooking", amount: 1 },
			],
		},
		recipeSources: {
			Skill: { skill: "Fishing", level: 3 },
		},
	},
	{
		name: "Eggplant Parmesan",
		id: "37",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Tangy, cheesy, and wonderful.",
		sell: { type: "Flat", price: 200 },
		edible: true,
		edibleStats: {
			energy: 175,
			health: 78,
			buffs: [
				{ stat: "Mining", effect: 1, duration: 279 },
				{ stat: "Defense", effect: 3, duration: 279 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Eggplant", type: "Crop", amount: 1 },
				{ ingredient: "Tomato", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Lewis", hearts: 7 },
		},
	},
	{
		name: "Escargot",
		id: "70",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Butter-soaked snails cooked to perfection.",
		sell: { type: "Flat", price: 125 },
		edible: true,
		edibleStats: {
			energy: 225,
			health: 101,
			buffs: [{ stat: "Fishing", effect: 2, duration: 1007 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Snail", type: "Fish", amount: 1 },
				{ ingredient: "Garlic", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Willy", hearts: 5 },
		},
	},
	{
		name: "Farmer's Lunch",
		id: "46",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "This'll keep you going.",
		sell: { type: "Flat", price: 150 },
		edible: true,
		edibleStats: {
			energy: 200,
			health: 90,
			buffs: [{ stat: "Farming", effect: 3, duration: 335 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Parsnip", type: "Crop", amount: 1 },
				{ ingredient: "Omelet", type: "Cooking", amount: 1 },
			],
		},
		recipeSources: {
			Skill: { skill: "Farming", level: 3 },
		},
	},
	{
		name: "Fiddlehead Risotto",
		id: "66",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description:
			"A creamy rice dish served with sauteed fern heads. It's a little bland.",
		sell: { type: "Flat", price: 350 },
		edible: true,
		edibleStats: {
			energy: 225,
			health: 101,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Fiddlehead Fern", type: "Forage", amount: 1 },
				{ ingredient: "Garlic", type: "Crop", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Fall 28" },
		},
	},
	{
		name: "Fish Stew",
		id: "69",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It smells a lot like the sea. Tastes better, though.",
		sell: { type: "Flat", price: 175 },
		edible: true,
		edibleStats: {
			energy: 225,
			health: 101,
			buffs: [{ stat: "Fishing", effect: 3, duration: 1007 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Crayfish", type: "Fish", amount: 1 },
				{ ingredient: "Mussel", type: "Fish", amount: 1 },
				{ ingredient: "Periwinkle", type: "Fish", amount: 1 },
				{ ingredient: "Tomato", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Willy", hearts: 7 },
		},
	},
	{
		name: "Fish Taco",
		id: "20",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It smells delicious.",
		sell: { type: "Flat", price: 500 },
		edible: true,
		edibleStats: {
			energy: 165,
			health: 74,
			buffs: [{ stat: "Fishing", effect: 2, duration: 420 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Tuna", type: "Fish", amount: 1 },
				{ ingredient: "Red Cabbage", type: "Crop", amount: 1 },
				{ ingredient: "Mayonnaise", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Tortilla", type: "Cooking", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Linus", hearts: 7 },
		},
	},
	{
		name: "Fried Calamari",
		id: "9",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's so chewy.",
		sell: { type: "Flat", price: 150 },
		edible: true,
		edibleStats: {
			energy: 80,
			health: 36,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Squid", type: "Fish", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Jodi", hearts: 3 },
		},
	},
	{
		name: "Fried Eel",
		id: "31",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Greasy but flavorful.",
		sell: { type: "Flat", price: 120 },
		edible: true,
		edibleStats: {
			energy: 75,
			health: 33,
			buffs: [{ stat: "Luck", effect: 1, duration: 420 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Eel", type: "Fish", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "George", hearts: 3 },
		},
	},
	{
		name: "Fried Egg",
		id: "1",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Sunny-side up.",
		sell: { type: "Flat", price: 35 },
		edible: true,
		edibleStats: {
			energy: 50,
			health: 22,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Egg", type: "Animal Product", amount: 1 },
			],
		},
		recipeSources: {
			Starter: { starter: "Starter" },
		},
	},
	{
		name: "Fried Mushroom",
		id: "12",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Earthy and aromatic.",
		sell: { type: "Flat", price: 200 },
		edible: true,
		edibleStats: {
			energy: 135,
			health: 60,
			buffs: [{ stat: "Attack", effect: 2, duration: 420 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Common Mushroom", type: "Forage", amount: 1 },
				{ ingredient: "Morel", type: "Forage", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Demetrius", hearts: 3 },
		},
	},
	{
		name: "Fruit Salad",
		id: "61",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A delicious combination of summer fruits.",
		sell: { type: "Flat", price: 450 },
		edible: true,
		edibleStats: {
			energy: 263,
			health: 118,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Blueberry", type: "Crop", amount: 1 },
				{ ingredient: "Melon", type: "Crop", amount: 1 },
				{ ingredient: "Apricot", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Fall 7" },
		},
	},
	{
		name: "Ginger Ale",
		id: "75",
		version: 1.5,
		type: "Recipe",
		"sub-type": "",
		description:
			"A zesty soda known for its soothing effect on the stomach.",
		sell: { type: "Flat", price: 200 },
		edible: true,
		edibleStats: {
			energy: 63,
			health: 28,
			buffs: [{ stat: "Luck", effect: 1, duration: 300 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Ginger", type: "Crop", amount: 3 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Shops: [{ shopName: "Dwarf Shop in Volcano Dungeon", price: 1000 }],
		},
	},
	{
		name: "Glazed Yams",
		id: "15",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description:
			"Sweet and satisfying... The sugar gives it a hint of caramel.",
		sell: { type: "Flat", price: 200 },
		edible: true,
		edibleStats: {
			energy: 200,
			health: 90,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Yam", type: "Crop", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Fall 21" },
		},
	},
	{
		name: "Hashbrowns",
		id: "17",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Crispy and golden-brown!",
		sell: { type: "Flat", price: 120 },
		edible: true,
		edibleStats: {
			energy: 90,
			health: 40,
			buffs: [{ stat: "Farming", effect: 1, duration: 335 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Potato", type: "Crop", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Spring 14" },
			Shops: [{ shopName: "Stardrop Saloon", price: 50 }],
		},
	},
	{
		name: "Ice Cream",
		id: "39",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's hard to find someone who doesn't like this.",
		sell: { type: "Flat", price: 120 },
		edible: true,
		edibleStats: {
			energy: 100,
			health: 45,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Jodi", hearts: 7 },
		},
	},
	{
		name: "Lobster Bisque",
		id: "71",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "This delicate soup is a secret family recipe of Willy's.",
		sell: { type: "Flat", price: 205 },
		edible: true,
		edibleStats: {
			energy: 225,
			health: 101,
			buffs: [
				{ stat: "Fishing", effect: 3, duration: 1007 },
				{ stat: "Max Energy", effect: 50, duration: 1007 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Lobster", type: "Fish", amount: 1 },
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Winter 14" },
			Friendship: { friend: "Willy", hearts: 9 },
		},
	},
	{
		name: "Lucky Lunch",
		id: "11",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A special little meal.",
		sell: { type: "Flat", price: 250 },
		edible: true,
		edibleStats: {
			energy: 100,
			health: 45,
			buffs: [{ stat: "Luck", effect: 3, duration: 671 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Sea Cucumber", type: "Fish", amount: 1 },
				{ ingredient: "Blue Jazz ", type: "Crop", amount: 1 },
				{ ingredient: "Tortilla", type: "Cooking", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Spring 28" },
		},
	},
	{
		name: "Maki Roll",
		id: "34",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Fish and rice wrapped in seaweed.",
		sell: { type: "Flat", price: 220 },
		edible: true,
		edibleStats: {
			energy: 100,
			health: 45,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Fish", type: "Fish", amount: 1 },
				{ ingredient: "Seaweed", type: "Fish", amount: 1 },
				{ ingredient: "Rice", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Summer 21" },
			Shops: [{ shopName: "Stardrop Saloon", price: 300 }],
		},
	},
	{
		name: "Mango Sticky Rice",
		id: "77",
		version: 1.5,
		type: "Recipe",
		"sub-type": "",
		description:
			"Sweet mango and coconut transforms this rice into something very special.",
		sell: { type: "Flat", price: 250 },
		edible: true,
		edibleStats: {
			energy: 113,
			health: 50,
			buffs: [{ stat: "Defense", effect: 3, duration: 301 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Mango", type: "Crop", amount: 1 },
				{ ingredient: "Coconut", type: "Forage", amount: 1 },
				{ ingredient: "Rice", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Leo", hearts: 7 },
		},
	},
	{
		name: "Maple Bar",
		id: "72",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's a sweet doughnut topped with a rich maple glaze.",
		sell: { type: "Flat", price: 300 },
		edible: true,
		edibleStats: {
			energy: 225,
			health: 101,
			buffs: [
				{ stat: "Farming", effect: 1, duration: 1007 },
				{ stat: "Fishing", effect: 1, duration: 1007 },
				{ stat: "Mining", effect: 1, duration: 1007 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Maple Syrup", type: "Crop", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Summer 14" },
		},
	},
	{
		name: "Miner's Treat",
		id: "49",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "This should keep your energy up.",
		sell: { type: "Flat", price: 200 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
			buffs: [
				{ stat: "Mining", effect: 3, duration: 335 },
				{ stat: "Magnetism", effect: 32, duration: 335 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Cave Carrot", type: "Forage", amount: 2 },
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Skill: { skill: "Mining", level: 3 },
		},
	},
	{
		name: "Omelet",
		id: "2",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's super fluffy.",
		sell: { type: "Flat", price: 125 },
		edible: true,
		edibleStats: {
			energy: 100,
			health: 45,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Egg", type: "Animal Product", amount: 1 },
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Spring 28" },
			Shops: [{ shopName: "Stardrop Saloon", price: 100 }],
		},
	},
	{
		name: "Pale Broth",
		id: "54",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A delicate broth with a hint of sulfur.",
		sell: { type: "Flat", price: 150 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "White Algae", type: "Fish", amount: 2 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Marnie", hearts: 3 },
		},
	},
	{
		name: "Pancakes",
		id: "18",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A double stack of fluffy, soft pancakes.",
		sell: { type: "Flat", price: 80 },
		edible: true,
		edibleStats: {
			energy: 90,
			health: 40,
			buffs: [{ stat: "Foraging", effect: 2, duration: 671 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Egg", type: "Animal Product", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Summer 14" },
			Shops: [{ shopName: "Stardrop Saloon", price: 100 }],
		},
	},
	{
		name: "Parsnip Soup",
		id: "6",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's fresh and hearty.",
		sell: { type: "Flat", price: 120 },
		edible: true,
		edibleStats: {
			energy: 85,
			health: 38,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Parsnip", type: "Crop", amount: 1 },
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
				{ ingredient: "Vinegar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Caroline", hearts: 3 },
		},
	},
	{
		name: "Pepper Poppers",
		id: "22",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Spicy breaded peppers filled with cheese.",
		sell: { type: "Flat", price: 200 },
		edible: true,
		edibleStats: {
			energy: 130,
			health: 58,
			buffs: [
				{ stat: "Farming", effect: 2, duration: 420 },
				{ stat: "Speed", effect: 1, duration: 420 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Hot Pepper", type: "Crop", amount: 1 },
				{ ingredient: "Cheese", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Shane", hearts: 3 },
		},
	},
	{
		name: "Pink Cake",
		id: "27",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "There's little heart candies on top.",
		sell: { type: "Flat", price: 480 },
		edible: true,
		edibleStats: {
			energy: 250,
			health: 112,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Melon", type: "Crop", amount: 1 },
				{ ingredient: "Egg", type: "Animal Product", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Summer 21" },
		},
	},
	{
		name: "Pizza",
		id: "13",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's popular for all the right reasons.",
		sell: { type: "Flat", price: 300 },
		edible: true,
		edibleStats: {
			energy: 150,
			health: 67,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Tomato", type: "Crop", amount: 1 },
				{ ingredient: "Cheese", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Spring 7" },
			Shops: [{ shopName: "Stardrop Saloon", price: 150 }],
		},
	},
	{
		name: "Plum Pudding",
		id: "55",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A traditional holiday treat.",
		sell: { type: "Flat", price: 260 },
		edible: true,
		edibleStats: {
			energy: 175,
			health: 78,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Wild Plum", type: "Forage", amount: 2 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Winter 7" },
		},
	},
	{
		name: "Poi",
		id: "78",
		version: 1.5,
		type: "Recipe",
		"sub-type": "",
		description:
			"A traditional food with a delicate, sweet flavor when eaten fresh.",
		sell: { type: "Flat", price: 400 },
		edible: true,
		edibleStats: {
			energy: 75,
			health: 33,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [{ ingredient: "Taro Root", type: "Crop", amount: 4 }],
		},
		recipeSources: {
			Friendship: { friend: "Leo", hearts: 3 },
		},
	},
	{
		name: "Poppyseed Muffin",
		id: "67",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It has a soothing effect.",
		sell: { type: "Flat", price: 250 },
		edible: true,
		edibleStats: {
			energy: 150,
			health: 67,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Poppy", type: "Crop", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Winter 7" },
		},
	},
	{
		name: "Pumpkin Pie",
		id: "59",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Silky pumpkin cream in a flakey crust.",
		sell: { type: "Flat", price: 385 },
		edible: true,
		edibleStats: {
			energy: 225,
			health: 101,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Pumpkin", type: "Crop", amount: 1 },
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Winter 21" },
		},
	},
	{
		name: "Pumpkin Soup",
		id: "42",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A seasonal favorite.",
		sell: { type: "Flat", price: 300 },
		edible: true,
		edibleStats: {
			energy: 200,
			health: 90,
			buffs: [
				{ stat: "Defense", effect: 2, duration: 461 },
				{ stat: "Luck", effect: 2, duration: 461 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Pumpkin", type: "Crop", amount: 1 },
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Robin", hearts: 7 },
		},
	},
	{
		name: "Radish Salad",
		id: "60",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "The radishes are so crisp!",
		sell: { type: "Flat", price: 300 },
		edible: true,
		edibleStats: {
			energy: 200,
			health: 90,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Radish", type: "Crop", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Vinegar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Spring 21" },
		},
	},
	{
		name: "Red Plate",
		id: "36",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Full of antioxidants.",
		sell: { type: "Flat", price: 400 },
		edible: true,
		edibleStats: {
			energy: 240,
			health: 108,
			buffs: [{ stat: "Max Energy", effect: 50, duration: 210 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [{ ingredient: "Radish", type: "Crop", amount: 1 }],
		},
		recipeSources: {
			Friendship: { friend: "Emily", hearts: 7 },
		},
	},
	{
		name: "Rhubarb Pie",
		id: "28",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Mmm, tangy and sweet!",
		sell: { type: "Flat", price: 400 },
		edible: true,
		edibleStats: {
			energy: 215,
			health: 96,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Rhubarb", type: "Crop", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Marnie", hearts: 7 },
		},
	},
	{
		name: "Rice Pudding",
		id: "38",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's creamy, sweet, and fun to eat.",
		sell: { type: "Flat", price: 260 },
		edible: true,
		edibleStats: {
			energy: 115,
			health: 51,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Rice", type: "Artisan Goods", amount: 1 },
				{ ingredient: "Milk", type: "Animal Product", amount: 1 },
				{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Evelyn", hearts: 7 },
		},
	},
	{
		name: "Roasted Hazelnuts",
		id: "58",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "The roasting process creates a rich forest flavor.",
		sell: { type: "Flat", price: 270 },
		edible: true,
		edibleStats: {
			energy: 175,
			health: 78,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Hazelnut", type: "Forage", amount: 3 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Summer 28" },
		},
	},
	{
		name: "Roots Platter",
		id: "50",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "This'll get you digging for more.",
		sell: { type: "Flat", price: 100 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
			buffs: [{ stat: "Attack", effect: 3, duration: 335 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Cave Carrot", type: "Forage", amount: 1 },
				{ ingredient: "Winter Root", type: "Forage", amount: 1 },
			],
		},
		recipeSources: {
			Skill: { skill: "Combat", level: 3 },
		},
	},
	{
		name: "Salad",
		id: "3",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A healthy garden salad.",
		sell: { type: "Flat", price: 110 },
		edible: true,
		edibleStats: {
			energy: 113,
			health: 50,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Dandelion", type: "Forage", amount: 1 },
				{ ingredient: "Leek", type: "Forage", amount: 1 },
				{ ingredient: "Vinegar", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Emily", hearts: 3 },
		},
	},
	{
		name: "Salmon Dinner",
		id: "19",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "The lemon spritz makes it special.",
		sell: { type: "Flat", price: 300 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Salmon", type: "Fish", amount: 1 },
				{ ingredient: "Amaranth ", type: "Crop", amount: 1 },
				{ ingredient: "Kale", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Gus", hearts: 3 },
		},
	},
	{
		name: "Sashimi",
		id: "33",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Raw fish sliced into thin pieces.",
		sell: { type: "Flat", price: 75 },
		edible: true,
		edibleStats: {
			energy: 75,
			health: 33,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [{ ingredient: "Fish", type: "Fish", amount: 1 }],
		},
		recipeSources: {
			Friendship: { friend: "Linus", hearts: 3 },
		},
	},
	{
		name: "Seafoam Pudding",
		id: "52",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description:
			"This briny pudding will really get you into the maritime mindset!",
		sell: { type: "Flat", price: 300 },
		edible: true,
		edibleStats: {
			energy: 175,
			health: 78,
			buffs: [{ stat: "Fishing", effect: 4, duration: 210 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Flounder", type: "Fish", amount: 1 },
				{ ingredient: "Midnight Carp", type: "Fish", amount: 1 },
				{ ingredient: "Squid Ink", type: "Forage", amount: 1 },
			],
		},
		recipeSources: {
			Skill: { skill: "Fishing", level: 9 },
		},
	},
	{
		name: "Shrimp Cocktail",
		id: "74",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A sumptuous appetizer made with freshly-caught shrimp.",
		sell: { type: "Flat", price: 160 },
		edible: true,
		edibleStats: {
			energy: 225,
			health: 101,
			buffs: [
				{ stat: "Fishing", effect: 1, duration: 602 },
				{ stat: "Luck", effect: 1, duration: 602 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Shrimp", type: "Fish", amount: 1 },
				{ ingredient: "Tomato", type: "Crop", amount: 1 },
				{ ingredient: "Wild Horseradish", type: "Forage", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 2", date: "Winter 28" },
		},
	},
	{
		name: "Spaghetti",
		id: "30",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "An old favorite.",
		sell: { type: "Flat", price: 120 },
		edible: true,
		edibleStats: {
			energy: 75,
			health: 33,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Tomato", type: "Crop", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Lewis", hearts: 3 },
		},
	},
	{
		name: "Spicy Eel",
		id: "32",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's really spicy! Be careful.",
		sell: { type: "Flat", price: 175 },
		edible: true,
		edibleStats: {
			energy: 115,
			health: 51,
			buffs: [
				{ stat: "Luck", effect: 1, duration: 420 },
				{ stat: "Speed", effect: 1, duration: 420 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Eel", type: "Fish", amount: 1 },
				{ ingredient: "Hot Pepper", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "George", hearts: 7 },
		},
	},
	{
		name: "Squid Ink Ravioli",
		id: "80",
		version: 1.5,
		type: "Recipe",
		"sub-type": "",
		description: "Temporarily protects from debuffs.",
		sell: { type: "Flat", price: 150 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
			buffs: [{ stat: "Mining", effect: 1, duration: 279 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Squid Ink", type: "Forage", amount: 1 },
				{ ingredient: "Tomato", type: "Crop", amount: 1 },
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Skill: { skill: "Combat", level: 9 },
		},
	},
	{
		name: "Stir Fry",
		id: "57",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Julienned vegetables on a bed of rice.",
		sell: { type: "Flat", price: 335 },
		edible: true,
		edibleStats: {
			energy: 200,
			health: 90,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Kale", type: "Crop", amount: 1 },
				{ ingredient: "Cave Carrot", type: "Forage", amount: 1 },
				{ ingredient: "Common Mushroom", type: "Forage", amount: 1 },
				{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Spring 7" },
		},
	},
	{
		name: "Strange Bun",
		id: "10",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "What's inside?",
		sell: { type: "Flat", price: 225 },
		edible: true,
		edibleStats: {
			energy: 100,
			health: 45,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Periwinkle", type: "Fish", amount: 1 },
				{
					ingredient: "Void Mayonnaise",
					type: "Artisan Goods",
					amount: 1,
				},
				{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Shane", hearts: 7 },
		},
	},
	{
		name: "Stuffing",
		id: "45",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Ahh... the smell of warm bread and sage.",
		sell: { type: "Flat", price: 165 },
		edible: true,
		edibleStats: {
			energy: 170,
			health: 76,
			buffs: [{ stat: "Defense", effect: 2, duration: 335 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Cranberries", type: "Crop", amount: 1 },
				{ ingredient: "Hazelnut", type: "Forage", amount: 1 },
				{ ingredient: "Bread", type: "Cooking", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Pam", hearts: 7 },
		},
	},
	{
		name: "Super Meal",
		id: "43",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's a really energizing meal.",
		sell: { type: "Flat", price: 220 },
		edible: true,
		edibleStats: {
			energy: 160,
			health: 72,
			buffs: [
				{ stat: "Max Energy", effect: 40, duration: 210 },
				{ stat: "Speed", effect: 1, duration: 210 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Artichoke", type: "Crop", amount: 1 },
				{ ingredient: "Bok Choy", type: "Crop", amount: 1 },
				{ ingredient: "Cranberries", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Kent", hearts: 7 },
		},
	},
	{
		name: "Survival Burger",
		id: "47",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "A convenient snack for the explorer.",
		sell: { type: "Flat", price: 180 },
		edible: true,
		edibleStats: {
			energy: 125,
			health: 56,
			buffs: [{ stat: "Foraging", effect: 3, duration: 335 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Eggplant", type: "Crop", amount: 1 },
				{ ingredient: "Cave Carrot", type: "Forage", amount: 1 },
				{ ingredient: "Bread", type: "Cooking", amount: 1 },
			],
		},
		recipeSources: {
			Skill: { skill: "Foraging", level: 2 },
		},
	},
	{
		name: "Tom Kha Soup",
		id: "24",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "These flavors are incredible!",
		sell: { type: "Flat", price: 250 },
		edible: true,
		edibleStats: {
			energy: 175,
			health: 78,
			buffs: [
				{ stat: "Farming", effect: 2, duration: 420 },
				{ stat: "Max Energy", effect: 30, duration: 420 },
			],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Shrimp", type: "Fish", amount: 1 },
				{ ingredient: "Coconut", type: "Forage", amount: 1 },
				{ ingredient: "Common Mushroom", type: "Forage", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Sandy", hearts: 7 },
		},
	},
	{
		name: "Tortilla",
		id: "35",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Can be used as a vessel for food or eaten by itself.",
		sell: { type: "Flat", price: 50 },
		edible: true,
		edibleStats: {
			energy: 50,
			health: 22,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [{ ingredient: "Corn", type: "Crop", amount: 2 }],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Fall 7" },
			Shops: [{ shopName: "Stardrop Saloon", price: 100 }],
		},
	},
	{
		name: "Triple Shot Espresso",
		id: "51",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "It's more potent than regular coffee!",
		sell: { type: "Flat", price: 450 },
		edible: true,
		edibleStats: {
			energy: 8,
			health: 3,
			buffs: [{ stat: "Speed", effect: 1, duration: 252 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Coffee", type: "Artisan Goods", amount: 3 },
			],
		},
		recipeSources: {
			Shops: [{ shopName: "Stardrop Saloon", price: 5000 }],
		},
	},
	{
		name: "Tropical Curry",
		id: "79",
		version: 1.5,
		type: "Recipe",
		"sub-type": "",
		description: "An exotic, fragrant curry served in a pineapple bowl.",
		sell: { type: "Flat", price: 500 },
		edible: true,
		edibleStats: {
			energy: 150,
			health: 67,
			buffs: [{ stat: "Foraging", effect: 4, duration: 301 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Coconut", type: "Forage", amount: 1 },
				{ ingredient: "Pineapple", type: "Crop", amount: 4 },
				{ ingredient: "Hot Pepper", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			Shops: [{ shopName: "Ginger Island Resort", price: 2000 }],
		},
	},
	{
		name: "Trout Soup",
		id: "25",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "Pretty salty.",
		sell: { type: "Flat", price: 100 },
		edible: true,
		edibleStats: {
			energy: 100,
			health: 45,
			buffs: [{ stat: "Fishing", effect: 1, duration: 279 }],
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Rainbow Trout", type: "Fish", amount: 1 },
				{ ingredient: "Green Algae", type: "Fish", amount: 1 },
			],
		},
		recipeSources: {
			"The Queen of Sauce": { year: "Year 1", date: "Fall 14" },
		},
	},
	{
		name: "Vegetable Medley",
		id: "7",
		version: 1.4,
		type: "Recipe",
		"sub-type": "",
		description: "This is very nutritious.",
		sell: { type: "Flat", price: 120 },
		edible: true,
		edibleStats: {
			energy: 165,
			health: 74,
		},
		sources: ["Cooking"],
		Cooking: {
			ingredients: [
				{ ingredient: "Beet", type: "Crop", amount: 1 },
				{ ingredient: "Tomato", type: "Crop", amount: 1 },
			],
		},
		recipeSources: {
			Friendship: { friend: "Caroline", hearts: 7 },
		},
	},
];

//
//
// pull meta types
exports.ingredientTypes = [
	"Animal Product",
	"Artisan Goods",
	"Cooking",
	"Crop",
	"Fish",
	"Forage",
];

exports.buffTypes = [
	"Attack",
	"Defense",
	"Farming",
	"Fishing",
	"Foraging",
	"Luck",
	"Magnetism",
	"Max Energy",
	"Mining",
	"Speed",
	"Squid Ink Ravioli Buff",
];

exports.sourceTypes = [
	"Friendship",
	"Shop",
	"Skill",
	"Starter",
	"The Queen of Sauce",
];

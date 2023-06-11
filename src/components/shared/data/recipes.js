const recipes = {
	"Blueberry Tart": {
		name: "Blueberry Tart",
		version: 1.4,
		description: "It's subtle and refreshing.",
		sellPrice: 150,
		ingredients: [
			{ ingredient: "Blueberry", type: "Crop", amount: 1 },
			{ ingredient: "Egg", type: "Animal Product", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 125,
			health: 56,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Pierre", hearts: 3 },
		},
	},
	"Pink Cake": {
		name: "Pink Cake",
		version: 1.4,
		description: "There's little heart candies on top.",
		sellPrice: 480,
		ingredients: [
			{ ingredient: "Melon", type: "Crop", amount: 1 },
			{ ingredient: "Egg", type: "Animal Product", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 250,
			health: 112,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Summer 21" },
		},
	},
	"Pumpkin Pie": {
		name: "Pumpkin Pie",
		version: 1.4,
		description: "Silky pumpkin cream in a flakey crust.",
		sellPrice: 385,
		ingredients: [
			{ ingredient: "Pumpkin", type: "Crop", amount: 1 },
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 225,
			health: 101,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Winter 21" },
		},
	},
	"Crab Cakes": {
		name: "Crab Cakes",
		version: 1.4,
		description:
			"Crab, bread crumbs, and egg formed into patties then fried to a golden brown.",
		sellPrice: 275,
		ingredients: [
			{ ingredient: "Crab", type: "Fish", amount: 1 },
			{ ingredient: "Egg", type: "Animal Product", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 225,
			health: 101,
			buffs: [
				{ buff: "Speed", value: 1 },
				{ buff: "Defense", value: 1 },
			],
			duration: [16, 47],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Fall 21" },
		},
	},
	"Stir Fry": {
		name: "Stir Fry",
		version: 1.4,
		description: "Julienned vegetables on a bed of rice.",
		sellPrice: 335,
		ingredients: [
			{ ingredient: "Kale", type: "Crop", amount: 1 },
			{ ingredient: "Cave Carrot", type: "Forage", amount: 1 },
			{ ingredient: "Common Mushroom", type: "Forage", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 200,
			health: 90,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Spring 7" },
		},
	},
	"Fish Taco": {
		name: "Fish Taco",
		version: 1.4,
		description: "It smells delicious.",
		sellPrice: 500,
		ingredients: [
			{ ingredient: "Tuna", type: "Fish", amount: 1 },
			{ ingredient: "Red Cabbage", type: "Crop", amount: 1 },
			{ ingredient: "Mayonnaise", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Tortilla", type: "Cooking", amount: 1 },
		],
		effects: {
			energy: 165,
			health: 74,
			buffs: [{ buff: "Fishing", value: 2 }],
			duration: [7],
		},
		sources: {
			Friendship: { friend: "Linus", hearts: 7 },
		},
	},
	"Complete Breakfast": {
		name: "Complete Breakfast",
		version: 1.4,
		description: "You'll feel ready to take on the world!",
		sellPrice: 350,
		ingredients: [
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			{ ingredient: "Fried Egg", type: "Cooking", amount: 1 },
			{ ingredient: "Hashbrowns", type: "Cooking", amount: 1 },
			{ ingredient: "Pancakes", type: "Cooking", amount: 1 },
		],
		effects: {
			energy: 200,
			health: 90,
			buffs: [
				{ buff: "Farming", value: 2 },
				{ buff: "Max Energy", value: 50 },
			],
			duration: [7],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Spring 21" },
		},
	},
	"Fish Stew": {
		name: "Fish Stew",
		version: 1.4,
		description: "It smells a lot like the sea. Tastes better, though.",
		sellPrice: 175,
		ingredients: [
			{ ingredient: "Crayfish", type: "Fish", amount: 1 },
			{ ingredient: "Mussel", type: "Fish", amount: 1 },
			{ ingredient: "Periwinkle", type: "Fish", amount: 1 },
			{ ingredient: "Tomato", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 225,
			health: 101,
			buffs: [{ buff: "Fishing", value: 3 }],
			duration: [16, 47],
		},
		sources: {
			Friendship: { friend: "Willy", hearts: 7 },
		},
	},
	"Rice Pudding": {
		name: "Rice Pudding",
		version: 1.4,
		description: "It's creamy, sweet, and fun to eat.",
		sellPrice: 260,
		ingredients: [
			{ ingredient: "Rice", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 115,
			health: 51,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Evelyn", hearts: 7 },
		},
	},
	"Parsnip Soup": {
		name: "Parsnip Soup",
		version: 1.4,
		description: "It's fresh and hearty.",
		sellPrice: 120,
		ingredients: [
			{ ingredient: "Parsnip", type: "Crop", amount: 1 },
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			{ ingredient: "Vinegar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 85,
			health: 38,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Caroline", hearts: 3 },
		},
	},
	"Miner's Treat": {
		name: "Miner's Treat",
		version: 1.4,
		description: "This should keep your energy up.",
		sellPrice: 200,
		ingredients: [
			{ ingredient: "Cave Carrot", type: "Forage", amount: 2 },
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 125,
			health: 56,
			buffs: [
				{ buff: "Mining", value: 3 },
				{ buff: "Magnetism", value: 32 },
			],
			duration: [5, 35],
		},
		sources: {
			Skill: { skill: "Mining", level: 3 },
		},
	},
	"Chocolate Cake": {
		name: "Chocolate Cake",
		version: 1.4,
		description: "Rich and moist with a thick fudge icing.",
		sellPrice: 200,
		ingredients: [
			{ ingredient: "Egg", type: "Animal Product", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 150,
			health: 67,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Winter 14" },
		},
	},
	Cookie: {
		name: "Cookie",
		version: 1.4,
		description: "Very chewy.",
		sellPrice: 140,
		ingredients: [
			{ ingredient: "Egg", type: "Animal Product", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 90,
			health: 40,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Evelyn", hearts: 4 },
		},
	},
	"Maple Bar": {
		name: "Maple Bar",
		version: 1.4,
		description: "It's a sweet doughnut topped with a rich maple glaze.",
		sellPrice: 300,
		ingredients: [
			{ ingredient: "Maple Syrup", type: "Crop", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 225,
			health: 101,
			buffs: [
				{ buff: "Farming", value: 1 },
				{ buff: "Fishing", value: 1 },
				{ buff: "Mining", value: 1 },
			],
			duration: [16, 47],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Summer 14" },
		},
	},
	"Poppyseed Muffin": {
		name: "Poppyseed Muffin",
		version: 1.4,
		description: "It has a soothing effect.",
		sellPrice: 250,
		ingredients: [
			{ ingredient: "Poppy", type: "Crop", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 150,
			health: 67,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Winter 7" },
		},
	},
	"Radish Salad": {
		name: "Radish Salad",
		version: 1.4,
		description: "The radishes are so crisp!",
		sellPrice: 300,
		ingredients: [
			{ ingredient: "Radish", type: "Crop", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Vinegar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 200,
			health: 90,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Spring 21" },
		},
	},
	Coleslaw: {
		name: "Coleslaw",
		version: 1.4,
		description: "It's light, fresh and very healthy.",
		sellPrice: 345,
		ingredients: [
			{ ingredient: "Red Cabbage", type: "Crop", amount: 1 },
			{ ingredient: "Mayonnaise", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Vinegar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 213,
			health: 95,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Spring 14" },
		},
	},
	"Rhubarb Pie": {
		name: "Rhubarb Pie",
		version: 1.4,
		description: "Mmm, tangy and sweet!",
		sellPrice: 400,
		ingredients: [
			{ ingredient: "Rhubarb", type: "Crop", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 215,
			health: 96,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Marnie", hearts: 7 },
		},
	},
	Pizza: {
		name: "Pizza",
		version: 1.4,
		description: "It's popular for all the right reasons.",
		sellPrice: 300,
		ingredients: [
			{ ingredient: "Tomato", type: "Crop", amount: 1 },
			{ ingredient: "Cheese", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 150,
			health: 67,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Spring 7" },
			Shop: { shopName: "Stardrop Saloon", price: 150 },
		},
	},
	"Crispy Bass": {
		name: "Crispy Bass",
		version: 1.4,
		description: "Wow, the breading is perfect.",
		sellPrice: 150,
		ingredients: [
			{ ingredient: "Largemouth Bass", type: "Fish", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 90,
			health: 40,
			buffs: [{ buff: "Magnetism", value: 64 }],
			duration: [7],
		},
		sources: {
			Friendship: { friend: "Kent", hearts: 3 },
		},
	},
	"Strange Bun": {
		name: "Strange Bun",
		version: 1.4,
		description: "What's inside?",
		sellPrice: 225,
		ingredients: [
			{ ingredient: "Periwinkle", type: "Fish", amount: 1 },
			{ ingredient: "Void Mayonnaise", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 100,
			health: 45,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Shane", hearts: 7 },
		},
	},
	"Fried Calamari": {
		name: "Fried Calamari",
		version: 1.4,
		description: "It's so chewy.",
		sellPrice: 150,
		ingredients: [
			{ ingredient: "Squid", type: "Fish", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 80,
			health: 36,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Jodi", hearts: 3 },
		},
	},
	"Blackberry Cobbler": {
		name: "Blackberry Cobbler",
		version: 1.4,
		description: "There's nothing quite like it.",
		sellPrice: 260,
		ingredients: [
			{ ingredient: "Blackberry", type: "Forage", amount: 2 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 175,
			health: 78,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Fall 14" },
		},
	},
	"Plum Pudding": {
		name: "Plum Pudding",
		version: 1.4,
		description: "A traditional holiday treat.",
		sellPrice: 260,
		ingredients: [
			{ ingredient: "Wild Plum", type: "Forage", amount: 2 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 175,
			health: 78,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Winter 7" },
		},
	},
	"Cranberry Candy": {
		name: "Cranberry Candy",
		version: 1.4,
		description: "It's sweet enough to mask the bitter fruit.",
		sellPrice: 175,
		ingredients: [
			{ ingredient: "Cranberries", type: "Crop", amount: 1 },
			{ ingredient: "Apple", type: "Crop", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 125,
			health: 56,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Winter 28" },
		},
	},
	"Fiddlehead Risotto": {
		name: "Fiddlehead Risotto",
		version: 1.4,
		description:
			"A creamy rice dish served with sauteed fern heads. It's a little bland.",
		sellPrice: 350,
		ingredients: [
			{ ingredient: "Fiddlehead Fern", type: "Forage", amount: 1 },
			{ ingredient: "Garlic", type: "Crop", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 225,
			health: 101,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Fall 28" },
		},
	},
	"Squid Ink Ravioli": {
		name: "Squid Ink Ravioli",
		version: 1.5,
		description: "Temporarily protects from debuffs.",
		sellPrice: 150,
		ingredients: [
			{ ingredient: "Squid Ink", type: "Forage", amount: 1 },
			{ ingredient: "Tomato", type: "Crop", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 125,
			health: 56,
			buffs: [
				{ buff: "Mining", value: 1 },
				{ buff: "Squid Ink Ravioli Buff", value: 0 },
			],
			duration: { Mining: [4, 39], "Squid Ink Ravioli Buff": [2, 59] },
		},
		sources: {
			Skill: { skill: "Combat", level: 9 },
		},
	},
	"Maki Roll": {
		name: "Maki Roll",
		version: 1.4,
		description: "Fish and rice wrapped in seaweed.",
		sellPrice: 220,
		ingredients: [
			{ ingredient: "Fish", type: "Fish", amount: 1 },
			{ ingredient: "Seaweed", type: "Fish", amount: 1 },
			{ ingredient: "Rice", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 100,
			health: 45,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Summer 21" },
			Shop: { shopName: "Stardrop Saloon", price: 300 },
		},
	},
	"Baked Fish": {
		name: "Baked Fish",
		version: 1.4,
		description: "Baked fish on a bed of herbs.",
		sellPrice: 100,
		ingredients: [
			{ ingredient: "Bream", type: "Fish", amount: 1 },
			{ ingredient: "Sunfish", type: "Fish", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 75,
			health: 33,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Summer 7" },
		},
	},
	"Mango Sticky Rice": {
		name: "Mango Sticky Rice",
		version: 1.5,
		description:
			"Sweet mango and coconut transforms this rice into something very special.",
		sellPrice: 250,
		ingredients: [
			{ ingredient: "Mango", type: "Crop", amount: 1 },
			{ ingredient: "Coconut", type: "Forage", amount: 1 },
			{ ingredient: "Rice", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 113,
			health: 50,
			buffs: [{ buff: "Defense", value: 3 }],
			duration: [5, 1],
		},
		sources: {
			Friendship: { friend: "Leo", hearts: 7 },
		},
	},
	"Fried Mushroom": {
		name: "Fried Mushroom",
		version: 1.4,
		description: "Earthy and aromatic.",
		sellPrice: 200,
		ingredients: [
			{ ingredient: "Common Mushroom", type: "Forage", amount: 1 },
			{ ingredient: "Morel", type: "Forage", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 135,
			health: 60,
			buffs: [{ buff: "Attack", value: 2 }],
			duration: [7],
		},
		sources: {
			Friendship: { friend: "Demetrius", hearts: 3 },
		},
	},
	Salad: {
		name: "Salad",
		version: 1.4,
		description: "A healthy garden salad.",
		sellPrice: 110,
		ingredients: [
			{ ingredient: "Dandelion", type: "Forage", amount: 1 },
			{ ingredient: "Leek", type: "Forage", amount: 1 },
			{ ingredient: "Vinegar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 113,
			health: 50,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Emily", hearts: 3 },
		},
	},
	Bruschetta: {
		name: "Bruschetta",
		version: 1.4,
		description: "Roasted tomatoes on a crisp white bread.",
		sellPrice: 210,
		ingredients: [
			{ ingredient: "Tomato", type: "Crop", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
			{ ingredient: "Bread", type: "Cooking", amount: 1 },
		],
		effects: {
			energy: 113,
			health: 50,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Winter 21" },
		},
	},
	"Lucky Lunch": {
		name: "Lucky Lunch",
		version: 1.4,
		description: "A special little meal.",
		sellPrice: 250,
		ingredients: [
			{ ingredient: "Sea Cucumber", type: "Fish", amount: 1 },
			{ ingredient: "Blue Jazz ", type: "Crop", amount: 1 },
			{ ingredient: "Tortilla", type: "Cooking", amount: 1 },
		],
		effects: {
			energy: 100,
			health: 45,
			buffs: [{ buff: "Luck", value: 3 }],
			duration: [11, 11],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Spring 28" },
		},
	},
	Stuffing: {
		name: "Stuffing",
		version: 1.4,
		description: "Ahh... the smell of warm bread and sage.",
		sellPrice: 165,
		ingredients: [
			{ ingredient: "Cranberries", type: "Crop", amount: 1 },
			{ ingredient: "Hazelnut", type: "Forage", amount: 1 },
			{ ingredient: "Bread", type: "Cooking", amount: 1 },
		],
		effects: {
			energy: 170,
			health: 76,
			buffs: [{ buff: "Defense", value: 2 }],
			duration: [5, 35],
		},
		sources: {
			Friendship: { friend: "Pam", hearts: 7 },
		},
	},
	"Survival Burger": {
		name: "Survival Burger",
		version: 1.4,
		description: "A convenient snack for the explorer.",
		sellPrice: 180,
		ingredients: [
			{ ingredient: "Eggplant", type: "Crop", amount: 1 },
			{ ingredient: "Cave Carrot", type: "Forage", amount: 1 },
			{ ingredient: "Bread", type: "Cooking", amount: 1 },
		],
		effects: {
			energy: 125,
			health: 56,
			buffs: [{ buff: "Foraging", value: 3 }],
			duration: [5, 35],
		},
		sources: {
			Skill: { skill: "Foraging", level: 2 },
		},
	},
	"Super Meal": {
		name: "Super Meal",
		version: 1.4,
		description: "It's a really energizing meal.",
		sellPrice: 220,
		ingredients: [
			{ ingredient: "Artichoke", type: "Crop", amount: 1 },
			{ ingredient: "Bok Choy", type: "Crop", amount: 1 },
			{ ingredient: "Cranberries", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 160,
			health: 72,
			buffs: [
				{ buff: "Max Energy", value: 40 },
				{ buff: "Speed", value: 1 },
			],
			duration: [3, 30],
		},
		sources: {
			Friendship: { friend: "Kent", hearts: 7 },
		},
	},
	"Fruit Salad": {
		name: "Fruit Salad",
		version: 1.4,
		description: "A delicious combination of summer fruits.",
		sellPrice: 450,
		ingredients: [
			{ ingredient: "Blueberry", type: "Crop", amount: 1 },
			{ ingredient: "Melon", type: "Crop", amount: 1 },
			{ ingredient: "Apricot", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 263,
			health: 118,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Fall 7" },
		},
	},
	"Salmon Dinner": {
		name: "Salmon Dinner",
		version: 1.4,
		description: "The lemon spritz makes it special.",
		sellPrice: 300,
		ingredients: [
			{ ingredient: "Salmon", type: "Fish", amount: 1 },
			{ ingredient: "Amaranth ", type: "Crop", amount: 1 },
			{ ingredient: "Kale", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 125,
			health: 56,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Gus", hearts: 3 },
		},
	},
	"Tropical Curry": {
		name: "Tropical Curry",
		version: 1.5,
		description: "An exotic, fragrant curry served in a pineapple bowl.",
		sellPrice: 500,
		ingredients: [
			{ ingredient: "Coconut", type: "Forage", amount: 1 },
			{ ingredient: "Pineapple", type: "Crop", amount: 4 },
			{ ingredient: "Hot Pepper", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 150,
			health: 67,
			buffs: [{ buff: "Foraging", value: 4 }],
			duration: [5, 1],
		},
		sources: {
			Shop: { shopName: "Ginger Island Resort", price: 2000 },
		},
	},
	"Shrimp Cocktail": {
		name: "Shrimp Cocktail",
		version: 1.4,
		description: "A sumptuous appetizer made with freshly-caught shrimp.",
		sellPrice: 160,
		ingredients: [
			{ ingredient: "Shrimp", type: "Fish", amount: 1 },
			{ ingredient: "Tomato", type: "Crop", amount: 1 },
			{ ingredient: "Wild Horseradish", type: "Forage", amount: 1 },
		],
		effects: {
			energy: 225,
			health: 101,
			buffs: [
				{ buff: "Fishing", value: 1 },
				{ buff: "Luck", value: 1 },
			],
			duration: [10, 2],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Winter 28" },
		},
	},
	"Seafoam Pudding": {
		name: "Seafoam Pudding",
		version: 1.4,
		description:
			"This briny pudding will really get you into the maritime mindset!",
		sellPrice: 300,
		ingredients: [
			{ ingredient: "Flounder", type: "Fish", amount: 1 },
			{ ingredient: "Midnight Carp", type: "Fish", amount: 1 },
			{ ingredient: "Squid Ink", type: "Forage", amount: 1 },
		],
		effects: {
			energy: 175,
			health: 78,
			buffs: [{ buff: "Fishing", value: 4 }],
			duration: [3, 30],
		},
		sources: {
			Skill: { skill: "Fishing", level: 9 },
		},
	},
	"Tom Kha Soup": {
		name: "Tom Kha Soup",
		version: 1.4,
		description: "These flavors are incredible!",
		sellPrice: 250,
		ingredients: [
			{ ingredient: "Shrimp", type: "Fish", amount: 1 },
			{ ingredient: "Coconut", type: "Forage", amount: 1 },
			{ ingredient: "Common Mushroom", type: "Forage", amount: 1 },
		],
		effects: {
			energy: 175,
			health: 78,
			buffs: [
				{ buff: "Farming", value: 2 },
				{ buff: "Max Energy", value: 30 },
			],
			duration: [7],
		},
		sources: {
			Friendship: { friend: "Sandy", hearts: 7 },
		},
	},
	Omelet: {
		name: "Omelet",
		version: 1.4,
		description: "It's super fluffy.",
		sellPrice: 125,
		ingredients: [
			{ ingredient: "Egg", type: "Animal Product", amount: 1 },
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
		],
		effects: {
			energy: 100,
			health: 45,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Spring 28" },
			Shop: { shopName: "Stardrop Saloon", price: 100 },
		},
	},
	"Artichoke Dip": {
		name: "Artichoke Dip",
		version: 1.4,
		description: "It's cool and refreshing.",
		sellPrice: 210,
		ingredients: [
			{ ingredient: "Artichoke", type: "Crop", amount: 1 },
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
		],
		effects: {
			energy: 100,
			health: 45,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Fall 28" },
		},
	},
	"Pumpkin Soup": {
		name: "Pumpkin Soup",
		version: 1.4,
		description: "A seasonal favorite.",
		sellPrice: 300,
		ingredients: [
			{ ingredient: "Pumpkin", type: "Crop", amount: 1 },
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
		],
		effects: {
			energy: 200,
			health: 90,
			buffs: [
				{ buff: "Defense", value: 2 },
				{ buff: "Luck", value: 2 },
			],
			duration: [7, 41],
		},
		sources: {
			Friendship: { friend: "Robin", hearts: 7 },
		},
	},
	"Lobster Bisque": {
		name: "Lobster Bisque",
		version: 1.4,
		description: "This delicate soup is a secret family recipe of Willy's.",
		sellPrice: 205,
		ingredients: [
			{ ingredient: "Lobster", type: "Fish", amount: 1 },
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
		],
		effects: {
			energy: 225,
			health: 101,
			buffs: [
				{ buff: "Fishing", value: 3 },
				{ buff: "Max Energy", value: 50 },
			],
			duration: [16, 47],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Winter 14" },
			Friendship: { friend: "Willy", hearts: 9 },
		},
	},
	Chowder: {
		name: "Chowder",
		version: 1.4,
		description: "A perfect way to warm yourself after a cold night at sea.",
		sellPrice: 135,
		ingredients: [
			{ ingredient: "Clam", type: "Forage", amount: 1 },
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
		],
		effects: {
			energy: 225,
			health: 101,
			buffs: [{ buff: "Fishing", value: 1 }],
			duration: [16, 47],
		},
		sources: {
			Friendship: { friend: "Willy", hearts: 3 },
		},
	},
	Pancakes: {
		name: "Pancakes",
		version: 1.4,
		description: "A double stack of fluffy, soft pancakes.",
		sellPrice: 80,
		ingredients: [
			{ ingredient: "Egg", type: "Animal Product", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 90,
			health: 40,
			buffs: [{ buff: "Foraging", value: 2 }],
			duration: [11, 11],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Summer 14" },
			Shop: { shopName: "Stardrop Saloon", price: 100 },
		},
	},
	"Ice Cream": {
		name: "Ice Cream",
		version: 1.4,
		description: "It's hard to find someone who doesn't like this.",
		sellPrice: 120,
		ingredients: [
			{ ingredient: "Milk", type: "Animal Product", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 100,
			health: 45,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Jodi", hearts: 7 },
		},
	},
	"Cheese Cauliflower": {
		name: "Cheese Cauliflower",
		version: 1.4,
		description: "It smells great!",
		sellPrice: 300,
		ingredients: [
			{ ingredient: "Cauliflower", type: "Crop", amount: 1 },
			{ ingredient: "Cheese", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 138,
			health: 62,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Pam", hearts: 3 },
		},
	},
	"Cranberry Sauce": {
		name: "Cranberry Sauce",
		version: 1.4,
		description: "A festive treat.",
		sellPrice: 120,
		ingredients: [
			{ ingredient: "Cranberries", type: "Crop", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 125,
			health: 56,
			buffs: [{ buff: "Mining", value: 2 }],
			duration: [3, 30],
		},
		sources: {
			Friendship: { friend: "Gus", hearts: 7 },
		},
	},
	"Ginger Ale": {
		name: "Ginger Ale",
		version: 1.5,
		description: "A zesty soda known for its soothing effect on the stomach.",
		sellPrice: 200,
		ingredients: [
			{ ingredient: "Ginger", type: "Crop", amount: 3 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 63,
			health: 28,
			buffs: [{ buff: "Luck", value: 1 }],
			duration: [5],
		},
		sources: {
			Shop: { shopName: "Dwarf Shop in Volcano Dungeon", price: 1000 },
		},
	},
	"Pepper Poppers": {
		name: "Pepper Poppers",
		version: 1.4,
		description: "Spicy breaded peppers filled with cheese.",
		sellPrice: 200,
		ingredients: [
			{ ingredient: "Hot Pepper", type: "Crop", amount: 1 },
			{ ingredient: "Cheese", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 130,
			health: 58,
			buffs: [
				{ buff: "Farming", value: 2 },
				{ buff: "Speed", value: 1 },
			],
			duration: [7],
		},
		sources: {
			Friendship: { friend: "Shane", hearts: 3 },
		},
	},
	Hashbrowns: {
		name: "Hashbrowns",
		version: 1.4,
		description: "Crispy and golden-brown!",
		sellPrice: 120,
		ingredients: [
			{ ingredient: "Potato", type: "Crop", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 90,
			health: 40,
			buffs: [{ buff: "Farming", value: 1 }],
			duration: [5, 35],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Spring 14" },
			Shop: { shopName: "Stardrop Saloon", price: 50 },
		},
	},
	Spaghetti: {
		name: "Spaghetti",
		version: 1.4,
		description: "An old favorite.",
		sellPrice: 120,
		ingredients: [
			{ ingredient: "Tomato", type: "Crop", amount: 1 },
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 75,
			health: 33,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Lewis", hearts: 3 },
		},
	},
	"Glazed Yams": {
		name: "Glazed Yams",
		version: 1.4,
		description:
			"Sweet and satisfying... The sugar gives it a hint of caramel.",
		sellPrice: 200,
		ingredients: [
			{ ingredient: "Yam", type: "Crop", amount: 1 },
			{ ingredient: "Sugar", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 200,
			health: 90,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Fall 21" },
		},
	},
	"Fried Eel": {
		name: "Fried Eel",
		version: 1.4,
		description: "Greasy but flavorful.",
		sellPrice: 120,
		ingredients: [
			{ ingredient: "Eel", type: "Fish", amount: 1 },
			{ ingredient: "Oil", type: "Artisan Goods", amount: 1 },
		],
		effects: {
			energy: 75,
			health: 33,
			buffs: [{ buff: "Luck", value: 1 }],
			duration: [7],
		},
		sources: {
			Friendship: { friend: "George", hearts: 3 },
		},
	},
	"Farmer's Lunch": {
		name: "Farmer's Lunch",
		version: 1.4,
		description: "This'll keep you going.",
		sellPrice: 150,
		ingredients: [
			{ ingredient: "Parsnip", type: "Crop", amount: 1 },
			{ ingredient: "Omelet", type: "Cooking", amount: 1 },
		],
		effects: {
			energy: 200,
			health: 90,
			buffs: [{ buff: "Farming", value: 3 }],
			duration: [5, 35],
		},
		sources: {
			Skill: { skill: "Farming", level: 3 },
		},
	},
	"Dish O' The Sea": {
		name: "Dish O' The Sea",
		version: 1.4,
		description: "This'll keep you warm in the cold sea air.",
		sellPrice: 220,
		ingredients: [
			{ ingredient: "Sardine", type: "Fish", amount: 2 },
			{ ingredient: "Hashbrowns", type: "Cooking", amount: 1 },
		],
		effects: {
			energy: 125,
			health: 56,
			buffs: [{ buff: "Fishing", value: 3 }],
			duration: [5, 35],
		},
		sources: {
			Skill: { skill: "Fishing", level: 3 },
		},
	},
	"Vegetable Medley": {
		name: "Vegetable Medley",
		version: 1.4,
		description: "This is very nutritious.",
		sellPrice: 120,
		ingredients: [
			{ ingredient: "Beet", type: "Crop", amount: 1 },
			{ ingredient: "Tomato", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 165,
			health: 74,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Caroline", hearts: 7 },
		},
	},
	"Eggplant Parmesan": {
		name: "Eggplant Parmesan",
		version: 1.4,
		description: "Tangy, cheesy, and wonderful.",
		sellPrice: 200,
		ingredients: [
			{ ingredient: "Eggplant", type: "Crop", amount: 1 },
			{ ingredient: "Tomato", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 175,
			health: 78,
			buffs: [
				{ buff: "Mining", value: 1 },
				{ buff: "Defense", value: 3 },
			],
			duration: [4, 39],
		},
		sources: {
			Friendship: { friend: "Lewis", hearts: 7 },
		},
	},
	"Autumn's Bounty": {
		name: "Autumn's Bounty",
		version: 1.4,
		description: "A taste of the season.",
		sellPrice: 350,
		ingredients: [
			{ ingredient: "Pumpkin", type: "Crop", amount: 1 },
			{ ingredient: "Yam", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 220,
			health: 99,
			buffs: [
				{ buff: "Foraging", value: 2 },
				{ buff: "Defense", value: 2 },
			],
			duration: [7, 41],
		},
		sources: {
			Friendship: { friend: "Demetrius", hearts: 7 },
		},
	},
	"Spicy Eel": {
		name: "Spicy Eel",
		version: 1.4,
		description: "It's really spicy! Be careful.",
		sellPrice: 175,
		ingredients: [
			{ ingredient: "Eel", type: "Fish", amount: 1 },
			{ ingredient: "Hot Pepper", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 115,
			health: 51,
			buffs: [
				{ buff: "Luck", value: 1 },
				{ buff: "Speed", value: 1 },
			],
			duration: [7],
		},
		sources: {
			Friendship: { friend: "George", hearts: 7 },
		},
	},
	Escargot: {
		name: "Escargot",
		version: 1.4,
		description: "Butter-soaked snails cooked to perfection.",
		sellPrice: 125,
		ingredients: [
			{ ingredient: "Snail", type: "Fish", amount: 1 },
			{ ingredient: "Garlic", type: "Crop", amount: 1 },
		],
		effects: {
			energy: 225,
			health: 101,
			buffs: [{ buff: "Fishing", value: 2 }],
			duration: [16, 47],
		},
		sources: {
			Friendship: { friend: "Willy", hearts: 5 },
		},
	},
	"Trout Soup": {
		name: "Trout Soup",
		version: 1.4,
		description: "Pretty salty.",
		sellPrice: 100,
		ingredients: [
			{ ingredient: "Rainbow Trout", type: "Fish", amount: 1 },
			{ ingredient: "Green Algae", type: "Fish", amount: 1 },
		],
		effects: {
			energy: 100,
			health: 45,
			buffs: [{ buff: "Fishing", value: 1 }],
			duration: [4, 39],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Fall 14" },
		},
	},
	"Roots Platter": {
		name: "Roots Platter",
		version: 1.4,
		description: "This'll get you digging for more.",
		sellPrice: 100,
		ingredients: [
			{ ingredient: "Cave Carrot", type: "Forage", amount: 1 },
			{ ingredient: "Winter Root", type: "Forage", amount: 1 },
		],
		effects: {
			energy: 125,
			health: 56,
			buffs: [{ buff: "Attack", value: 3 }],
			duration: [5, 35],
		},
		sources: {
			Skill: { skill: "Combat", level: 3 },
		},
	},
	"Fried Egg": {
		name: "Fried Egg",
		version: 1.4,
		description: "Sunny-side up.",
		sellPrice: 35,
		ingredients: [{ ingredient: "Egg", type: "Animal Product", amount: 1 }],
		effects: {
			energy: 50,
			health: 22,
			buffs: [],
		},
		sources: {
			Starter: { starter: "Starter" },
		},
	},
	"Banana Pudding": {
		name: "Banana Pudding",
		version: 1.4,
		description: "A creamy dessert with a wonderful tropical flavor.",
		sellPrice: 260,
		ingredients: [{ ingredient: "Milk", type: "Animal Product", amount: 1 }],
		effects: {
			energy: 125,
			health: 56,
			buffs: [
				{ buff: "Mining", value: 1 },
				{ buff: "Luck", value: 1 },
				{ buff: "Defense", value: 1 },
			],
			duration: [5, 1],
		},
		sources: {
			Shop: {
				shopName: "Island Trader",
				price: { artifact: "Bone Fragment", amount: 30 },
			},
		},
	},
	"Triple Shot Espresso": {
		name: "Triple Shot Espresso",
		version: 1.4,
		description: "It's more potent than regular coffee!",
		sellPrice: 450,
		ingredients: [{ ingredient: "Coffee", type: "Artisan Goods", amount: 3 }],
		effects: {
			energy: 8,
			health: 3,
			buffs: [{ buff: "Speed", value: 1 }],
			duration: [4, 12],
		},
		sources: {
			Shop: { shopName: "Stardrop Saloon", price: 5000 },
		},
	},
	Bread: {
		name: "Bread",
		version: 1.4,
		description: "A crusty baguette.",
		sellPrice: 60,
		ingredients: [
			{ ingredient: "Wheat Flour", type: "Artisan Goods", amount: 3 },
		],
		effects: {
			energy: 50,
			health: 22,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Summer 28" },
			Shop: { shopName: "Stardrop Saloon", price: 100 },
		},
	},
	Tortilla: {
		name: "Tortilla",
		version: 1.4,
		description: "Can be used as a vessel for food or eaten by itself.",
		sellPrice: 50,
		ingredients: [{ ingredient: "Corn", type: "Crop", amount: 2 }],
		effects: {
			energy: 50,
			health: 22,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 1", date: "Fall 7" },
			Shop: { shopName: "Stardrop Saloon", price: 100 },
		},
	},
	"Bean Hotpot": {
		name: "Bean Hotpot",
		version: 1.4,
		description: "It sure is healthy.",
		sellPrice: 100,
		ingredients: [{ ingredient: "Green Bean", type: "Crop", amount: 2 }],
		effects: {
			energy: 125,
			health: 56,
			buffs: [
				{ buff: "Max Energy", value: 30 },
				{ buff: "Magnetism", value: 32 },
			],
			duration: [7],
		},
		sources: {
			Friendship: { friend: "Clint", hearts: 7 },
		},
	},
	"Red Plate": {
		name: "Red Plate",
		version: 1.4,
		description: "Full of antioxidants.",
		sellPrice: 400,
		ingredients: [{ ingredient: "Radish", type: "Crop", amount: 1 }],
		effects: {
			energy: 240,
			health: 108,
			buffs: [{ buff: "Max Energy", value: 50 }],
			duration: [3, 30],
		},
		sources: {
			Friendship: { friend: "Emily", hearts: 7 },
		},
	},
	Poi: {
		name: "Poi",
		version: 1.5,
		description:
			"A traditional food with a delicate, sweet flavor when eaten fresh.",
		sellPrice: 400,
		ingredients: [{ ingredient: "Taro Root", type: "Crop", amount: 4 }],
		effects: {
			energy: 75,
			health: 33,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Leo", hearts: 3 },
		},
	},
	"Carp Surprise": {
		name: "Carp Surprise",
		version: 1.4,
		description: "It's bland and oily.",
		sellPrice: 150,
		ingredients: [{ ingredient: "Carp", type: "Fish", amount: 4 }],
		effects: {
			energy: 90,
			health: 40,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Summer 7" },
		},
	},
	Sashimi: {
		name: "Sashimi",
		version: 1.4,
		description: "Raw fish sliced into thin pieces.",
		sellPrice: 75,
		ingredients: [{ ingredient: "Fish", type: "Fish", amount: 1 }],
		effects: {
			energy: 75,
			health: 33,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Linus", hearts: 3 },
		},
	},
	"Algae Soup": {
		name: "Algae Soup",
		version: 1.4,
		description: "It's a little slimy.",
		sellPrice: 100,
		ingredients: [{ ingredient: "Green Algae", type: "Fish", amount: 4 }],
		effects: {
			energy: 75,
			health: 33,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Clint", hearts: 3 },
		},
	},
	"Pale Broth": {
		name: "Pale Broth",
		version: 1.4,
		description: "A delicate broth with a hint of sulfur.",
		sellPrice: 150,
		ingredients: [{ ingredient: "White Algae", type: "Fish", amount: 2 }],
		effects: {
			energy: 125,
			health: 56,
			buffs: [],
		},
		sources: {
			Friendship: { friend: "Marnie", hearts: 3 },
		},
	},
	"Roasted Hazelnuts": {
		name: "Roasted Hazelnuts",
		version: 1.4,
		description: "The roasting process creates a rich forest flavor.",
		sellPrice: 270,
		ingredients: [{ ingredient: "Hazelnut", type: "Forage", amount: 3 }],
		effects: {
			energy: 175,
			health: 78,
			buffs: [],
		},
		sources: {
			"The Queen of Sauce": { year: "Year 2", date: "Summer 28" },
		},
	},
};

exports.recipes = recipes;

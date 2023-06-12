// //
// animals db
const animals = {
	Dinosaur: {
		name: "Dinosaur",
		building: "Big Coop",
		buyPrice: 0,
		sellPrice: 1300,
		time: {
			"1heart": 7,
			"2hearts": 7,
			"3hearts": 7,
			"4hearts": 7,
			"5hearts": 7,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Dinosaur Egg",
		},
	},
	Duck: {
		name: "Duck",
		building: "Big Coop",
		buyPrice: 1200,
		sellPrice: 1560,
		time: {
			"1heart": 2,
			"2hearts": 2,
			"3hearts": 2,
			"4hearts": 2,
			"5hearts": 2,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Duck Egg",
			deluxe: "Duck Feather",
		},
	},
	Goat: {
		name: "Goat",
		building: "Big Barn",
		buyPrice: 4000,
		sellPrice: 5200,
		time: {
			"1heart": 2,
			"2hearts": 2,
			"3hearts": 2,
			"4hearts": 2,
			"5hearts": 2,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Goat Milk",
			deluxe: "Large Goat Milk",
		},
	},
	"Brown Cow": {
		name: "Brown Cow",
		building: "Barn",
		buyPrice: 1500,
		sellPrice: 1950,
		time: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Milk",
			deluxe: "Large Milk",
		},
	},
	"White Cow": {
		name: "White Cow",
		building: "Barn",
		buyPrice: 1500,
		sellPrice: 1950,
		time: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Milk",
			deluxe: "Large Milk",
		},
	},
	"Brown Chicken": {
		name: "Brown Chicken",
		building: "Coop",
		buyPrice: 800,
		sellPrice: 1040,
		time: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Small Brown Egg",
			deluxe: "Large Brown Egg",
		},
	},
	"Blue Chicken": {
		name: "Blue Chicken",
		building: "Coop",
		buyPrice: 800,
		sellPrice: 1040,
		time: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Small White Egg",
			deluxe: "Large White Egg",
		},
	},
	"White Chicken": {
		name: "White Chicken",
		building: "Coop",
		buyPrice: 800,
		sellPrice: 1040,
		time: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Small White Egg",
			deluxe: "Large White Egg",
		},
	},
	Pig: {
		name: "Pig",
		building: "Deluxe Barn",
		buyPrice: 16000,
		sellPrice: 208000,
		time: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1.5,
			"3hearts": 2,
			"4hearts": 2.5,
			"5hearts": 3,
		},
		products: {
			regular: "Truffle",
		},
	},
	"Void Chicken": {
		name: "Void Chicken",
		building: "Coop",
		buyPrice: 0,
		sellPrice: 1040,
		time: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Void Egg",
		},
	},
	Rabbit: {
		name: "Rabbit",
		building: "Deluxe Coop",
		buyPrice: 8000,
		sellPrice: 10400,
		time: {
			"1heart": 4,
			"2hearts": 4,
			"3hearts": 4,
			"4hearts": 4,
			"5hearts": 4,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Wool",
			deluxe: "Rabbit's Foot",
		},
	},
	Sheep: {
		name: "Sheep",
		building: "Big Barn",
		buyPrice: 8000,
		sellPrice: 10400,
		time: {
			"1heart": 2,
			"2hearts": 2,
			"3hearts": 2,
			"4hearts": 2,
			"5hearts": 1,
		},
		produces: {
			"1heart": 1,
			"2hearts": 1,
			"3hearts": 1,
			"4hearts": 1,
			"5hearts": 1,
		},
		products: {
			regular: "Wool",
		},
	},
};
exports.animals = animals;

// //
// animal products db
const animalProducts = {
	"Dinosaur Egg": {
		name: "Dinosaur Egg",
		animals: ["Dinosaur"],
		productType: "Dinosaur Egg",
		productSize: "Regular",
		sellPrice: { regular: 350, silver: 437, gold: 525, iridium: 700 },
	},
	"Duck Egg": {
		name: "Duck Egg",
		animals: ["Duck"],
		productType: "Duck Egg",
		productSize: "Regular",
		sellPrice: { regular: 95, silver: 118, gold: 142, iridium: 190 },
	},
	"Duck Feather": {
		name: "Duck Feather",
		animals: ["Duck"],
		productType: "Duck Feather",
		productSize: "Regular",
		sellPrice: { regular: 250, silver: 312, gold: 375, iridium: 500 },
	},
	"Brown Egg": {
		name: "Brown Egg",
		animals: ["Brown Chicken"],
		productType: "Egg",
		productSize: "Regular",
		sellPrice: { regular: 50, silver: 62, gold: 75, iridium: 100 },
	},
	"Large Brown Egg": {
		name: "Large Brown Egg",
		animals: ["Brown Chicken"],
		productType: "Egg",
		productSize: "Large",
		sellPrice: { regular: 95, silver: 118, gold: 142, iridium: 190 },
	},
	"White Egg": {
		name: "White Egg",
		animals: ["White Chicken", "Blue Chicken"],
		productType: "Egg",
		productSize: "Regular",
		sellPrice: { regular: 50, silver: 62, gold: 75, iridium: 100 },
	},
	"Large White Egg": {
		name: "Large White Egg",
		animals: ["White Chicken", "Blue Chicken"],
		productType: "Egg",
		productSize: "Large",
		sellPrice: { regular: 95, silver: 118, gold: 142, iridium: 190 },
	},
	"Goat Milk": {
		name: "Goat Milk",
		animals: ["Goat"],
		productType: "Goat Milk",
		productSize: "Regular",
		sellPrice: { regular: 225, silver: 281, gold: 337, iridium: 450 },
	},
	"Large Goat Milk": {
		name: "Large Goat Milk",
		animals: ["Goat"],
		productType: "Goat Milk",
		productSize: "Large",
		sellPrice: { regular: 345, silver: 431, gold: 517, iridium: 690 },
	},
	Milk: {
		name: "Milk",
		animals: ["Brown Cow", "White Cow"],
		productType: "Milk",
		productSize: "Regular",
		sellPrice: { regular: 125, silver: 156, gold: 187, iridium: 250 },
	},
	"Large Milk": {
		name: "Large Milk",
		animals: ["Brown Cow", "White Cow"],
		productType: "Milk",
		productSize: "Large",
		sellPrice: { regular: 190, silver: 237, gold: 285, iridium: 380 },
	},
	"Rabbit's Foot": {
		name: "Rabbit's Foot",
		animals: ["Rabbit"],
		productType: "Rabbit's Foot",
		productSize: "Regular",
		sellPrice: { regular: 565, silver: 706, gold: 847, iridium: 1130 },
	},
	Truffle: {
		name: "Truffle",
		animals: ["Pig"],
		productType: "Truffle",
		productSize: "Regular",
		sellPrice: { regular: 625, silver: 781, gold: 937, iridium: 1250 },
	},
	"Void Egg": {
		name: "Void Egg",
		animals: ["Void Chicken"],
		productType: "Void Egg",
		productSize: "Regular",
		sellPrice: { regular: 65, silver: 81, gold: 97, iridium: 130 },
	},
	Wool: {
		name: "Wool",
		animals: ["Rabbit", "Sheep"],
		productType: "Wool",
		productSize: "Regular",
		sellPrice: { regular: 340, silver: 425, gold: 510, iridium: 680 },
	},
};
exports.animalProducts = animalProducts;

// //
// types
exports.animalTimeTypes = [
	"1heart",
	"2hearts",
	"3hearts",
	"4hearts",
	"5hearts",
];
exports.animalProduceTypes = [
	"1heart",
	"2hearts",
	"3hearts",
	"4hearts",
	"5hearts",
];
exports.animalProductTypes = ["regular", "silver", "gold", "iridium"];
//
exports.productTypes = [
	"Dinosaur Egg",
	"Duck Egg",
	"Duck Feather",
	"Egg",
	"Goat Milk",
	"Milk",
	"Rabbit's Foot",
	"Truffle",
	"Void Egg",
	"Wool",
];
exports.productTypesData = {
	"Dinosaur Egg": {
		name: "Dinosaur Egg",
		animals: ["Dinosaur"],
		products: ["Dinosaur Egg"],
	},
	"Duck Egg": {
		name: "Duck Egg",
		animals: ["Duck"],
		products: ["Duck Egg"],
	},
	"Duck Feather": {
		name: "Duck Feather",
		animals: ["Duck"],
		products: ["Duck Feather"],
	},
	Egg: {
		name: "Egg",
		animals: ["Brown Chicken", "White Chicken", "Blue Chicken"],
		products: ["Brown Egg", "Large Brown Egg", "White Egg", "Large White Egg"],
		rate: 1,
	},
	"Goat Milk": {
		name: "Goat Milk",
		animals: ["Goat"],
		products: ["Goat Milk", "Large Goat Milk"],
		rate: 0.5,
	},
	Milk: {
		name: "Milk",
		animals: ["Brown Cow", "White Cow"],
		products: ["Milk", "Large Milk"],
		rate: 1,
	},
	"Rabbit's Foot": {
		name: "Rabbit's Foot",
		animals: ["Rabbit"],
		products: ["Rabbit's Foot"],
	},
	Truffle: {
		name: "Truffle",
		animals: ["Pig"],
		products: ["Truffle"],
	},
	"Void Egg": {
		name: "Void Egg",
		animals: ["Void Chicken"],
		products: ["Void Egg"],
		rate: 1,
	},
	Wool: {
		name: "Wool",
		animals: ["Rabbit"],
		products: ["Wool"],
	},
};
exports.productSizeTypes = ["Regular", "Large"];
exports.productSellPriceTypes = ["regular", "silver", "gold", "iridium"];

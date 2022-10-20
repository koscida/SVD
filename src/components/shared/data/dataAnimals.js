// ////
// Animals
//
/* 
animals = {
	animalName: {
		name: animalName,
		building: buildingName,
		buyPrice: buyPrice,
		sellPrice: sellPrice,
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
			productSize: {
				name: productName,
				quality: [quality]
			},
		},
	}
}

animalProducts: {
	productName: {
		name: productName,
		productType: itemType,
		productSize: itemSize,
		sellPrice: {
			regular: regularPrice,
			silver: silverPrice,
			gold: goldPrice,
			iridium: iridiumPrice
		},
		machineProcessing: {
			machineName: {
				name: MachineName,
				processingTime: processingTime,
				productName: productName,
				productQuality: {
					regular: {
						inputQuality: inputQuality,
						outputQuality: outputQuality,
						sellPrice: sellPrice,
					},
					silver: {
						inputQuality: inputQuality,
						outputQuality: outputQuality,
						sellPrice: sellPrice,
					},
					gold: {
						inputQuality: inputQuality,
						outputQuality: outputQuality,
						sellPrice: sellPrice,
					},
					iridium: {
						inputQuality: inputQuality,
						outputQuality: outputQuality,
						sellPrice: sellPrice,
					},
				},
				productSellPrice: {
					regular: regularPrice,
					silver: silverPrice,
					gold: goldPrice,
					iridium: iridiumPrice
				},
			}
		}
	}
}

buildings: {
	buildingName: {
		name: buildingName,
		buildCosts: {
			level1: {
				wood: woodAmount,
				stone: stoneAmount,
				gold: goldAmount
			},
		}
	}
}

machines: {
	machineName: {
		name: machineName,
		buildCost: {
			wood: woodAmount,
			stone: stoneAmount,
		}
	}
}

*/

// ////
// animals
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

const animalProducts = {
	"Brown Egg": {
		name: "Brown Egg",
		animals: ["White Chicken", "Brown Chicken", "Blue Chicken"],
		productType: "Egg",
		productSize: "Regular",
		sellPrice: { regular: 50, silver: 62, gold: 75, iridium: 100 },
		machineProcessing: {
			"Mayonnaise Machine": {
				name: "Mayonnaise Machine",
				processingTime: 3,
				productName: "Mayonnaise",
				productQuality: {
					regular: "regular",
					silver: "regular",
					gold: "regular",
					iridium: "regular",
				},
				productSellPrice: { regular: 190, gold: 285 },
			},
		},
	},
	"Dinosaur Egg": {
		name: "Dinosaur Egg",
		animals: ["Dinosaur"],
		productType: "Dinosaur Egg",
		productSize: "Regular",
		sellPrice: { regular: 350, silver: 437, gold: 525, iridium: 700 },
		machineProcessing: {
			"Mayonnaise Machine": {
				name: "Mayonnaise Machine",
				processingTime: 3,
				productName: "Dinosaur Mayonnaise",
				productQuality: {
					regular: "regular",
					silver: "regular",
					gold: "regular",
					iridium: "regular",
				},
				productSellPrice: { regular: 800 },
			},
		},
	},
	"Duck Egg": {
		name: "Duck Egg",
		animals: ["Duck"],
		productType: "Duck Egg",
		productSize: "Regular",
		sellPrice: { regular: 95, silver: 118, gold: 142, iridium: 190 },
		machineProcessing: {
			"Mayonnaise Machine": {
				name: "Mayonnaise Machine",
				processingTime: 3,
				productName: "Duck Mayonnaise",
				productQuality: {
					regular: "regular",
					silver: "regular",
					gold: "regular",
					iridium: "regular",
				},
				productSellPrice: { regular: 375 },
			},
		},
	},
	"Duck Feather": {
		name: "Duck Feather",
		animals: ["Duck"],
		productType: "Duck Feather",
		productSize: "Regular",
		sellPrice: { regular: 250, silver: 312, gold: 375, iridium: 500 },
	},
	"Goat Milk": {
		name: "Goat Milk",
		animals: ["Goat"],
		productType: "Goat Milk",
		productSize: "Regular",
		sellPrice: { regular: 225, silver: 281, gold: 337, iridium: 450 },
		machineProcessing: {
			"Cheese Press": {
				name: "Cheese Press",
				processingTime: 3,
				productName: "Goat Cheese",
				productQuality: {
					regular: "regular",
					silver: "regular",
					gold: "regular",
					iridium: "regular",
				},
				productSellPrice: { regular: 400 },
			},
		},
	},
	"Large Brown Egg": {
		name: "Large Brown Egg",
		animals: ["White Chicken", "Brown Chicken", "Blue Chicken"],
		productType: "Egg",
		productSize: "Large",
		sellPrice: { regular: 95, silver: 118, gold: 142, iridium: 190 },
		machineProcessing: {
			"Mayonnaise Machine": {
				name: "Mayonnaise Machine",
				processingTime: 3,
				productName: "Mayonnaise",
				productQuality: {
					regular: "gold",
					silver: "gold",
					gold: "gold",
					iridium: "gold",
				},
				productSellPrice: { regular: 190, gold: 285 },
			},
		},
	},
	"Large Goat Milk": {
		name: "Large Goat Milk",
		animals: ["Goat"],
		productType: "Milk",
		productSize: "Large",
		sellPrice: { regular: 345, silver: 431, gold: 517, iridium: 690 },
		machineProcessing: {
			"Cheese Press": {
				name: "Cheese Press",
				processingTime: 3,
				productName: "Goat Cheese",
				productQuality: {
					regular: "gold",
					silver: "gold",
					gold: "gold",
					iridium: "gold",
				},
				productSellPrice: { gold: 600 },
			},
		},
	},
	"Large Milk": {
		name: "Large Milk",
		animals: ["Brown Cow", "White Cow"],
		productType: "Milk",
		productSize: "Large",
		sellPrice: { regular: 190, silver: 237, gold: 285, iridium: 380 },
		machineProcessing: {
			"Cheese Press": {
				name: "Cheese Press",
				processingTime: 3.3,
				productName: "Cheese",
				productQuality: {
					regular: "gold",
					silver: "gold",
					gold: "gold",
					iridium: "gold",
				},
				productSellPrice: { gold: 345 },
			},
		},
	},
	"Large White Egg": {
		name: "Large White Egg",
		animals: ["White Chicken", "Brown Chicken", "Blue Chicken"],
		productType: "Egg",
		productSize: "Large",
		sellPrice: { regular: 95, silver: 118, gold: 142, iridium: 190 },
		machineProcessing: {
			"Mayonnaise Machine": {
				name: "Mayonnaise Machine",
				processingTime: 3,
				productName: "Mayonnaise",
				productQuality: {
					regular: "gold",
					silver: "gold",
					gold: "gold",
					iridium: "gold",
				},
				productSellPrice: { regular: 190, gold: 285 },
			},
		},
	},
	Milk: {
		name: "Milk",
		animals: ["Brown Cow", "White Cow"],
		productType: "Milk",
		productSize: "Regular",
		sellPrice: { regular: 125, silver: 156, gold: 187, iridium: 250 },
		machineProcessing: {
			"Cheese Press": {
				name: "Cheese Press",
				processingTime: 3.3,
				productName: "Cheese",
				productQuality: {
					regular: "regular",
					silver: "regular",
					gold: "regular",
					iridium: "regular",
				},
				productSellPrice: { regular: 230 },
			},
		},
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
		machineProcessing: {
			"Oil Maker": {
				name: "Oil Maker",
				processingTime: 6,
				productName: "Truffle Oil",
				productQuality: {
					regular: "regular",
					silver: "regular",
					gold: "regular",
					iridium: "regular",
				},
				productSellPrice: { regular: 1065 },
			},
		},
	},
	"Void Egg": {
		name: "Void Egg",
		animals: ["Void Chicken"],
		productType: "Void Egg",
		productSize: "Regular",
		sellPrice: { regular: 65, silver: 81, gold: 97, iridium: 130 },
		machineProcessing: {
			"Mayonnaise Machine": {
				name: "Mayonnaise Machine",
				processingTime: 3,
				productName: "Void Mayonnaise",
				productQuality: {
					regular: "regular",
					silver: "regular",
					gold: "regular",
					iridium: "regular",
				},
				productSellPrice: { regular: 275 },
			},
		},
	},
	"White Egg": {
		name: "White Egg",
		animals: ["White Chicken", "Brown Chicken", "Blue Chicken"],
		productType: "Egg",
		productSize: "Regular",
		sellPrice: { regular: 50, silver: 62, gold: 75, iridium: 100 },
		machineProcessing: {
			"Mayonnaise Machine": {
				name: "Mayonnaise Machine",
				processingTime: 3,
				productName: "Mayonnaise",
				productQuality: {
					regular: "regular",
					silver: "regular",
					gold: "regular",
					iridium: "regular",
				},
				productSellPrice: { regular: 190, gold: 285 },
			},
		},
	},
	Wool: {
		name: "Wool",
		animals: ["Rabbit", "Sheep"],
		productType: "Wool",
		productSize: "Regular",
		sellPrice: { regular: 340, silver: 425, gold: 510, iridium: 680 },
		machineProcessing: {
			Loom: {
				name: "Loom",
				processingTime: 4,
				productName: "Cloth",
				productQuality: {
					regular: "regular",
					silver: "regular",
					gold: "regular",
					iridium: "regular",
				},
				productSellPrice: { regular: 470 },
			},
		},
	},
};
exports.animalProducts = animalProducts;

const buildings = {
	Barn: {
		name: "Barn",
		footprint: { width: 7, height: 4 },
		size: "Regular",
		cost: { gold: 6000, wood: 350, stone: 150 },
		Big: {
			name: "Big Barn",
			size: "Big",
			cost: { gold: 12000, wood: 450, stone: 200 },
		},
		Deluxe: {
			name: "Deluxe Barn",
			size: "Deluxe",
			cost: { gold: 25000, wood: 550, stone: 300 },
		},
	},
	Coop: {
		name: "Coop",
		footprint: { width: 6, height: 3 },
		size: "Regular",
		cost: { gold: 4000, wood: 300, stone: 100 },
		Big: {
			name: "Big Coop",
			size: "Big",
			cost: { gold: 10000, wood: 400, stone: 150 },
		},
		Deluxe: {
			name: "Deluxe Coop",
			size: "Deluxe",
			cost: { gold: 20000, wood: 500, stone: 200 },
		},
	},
	Shed: {
		name: "Shed",
		footprint: { width: 7, height: 3 },
		size: "Regular",
		cost: { gold: 1500, wood: 300 },
		Big: {
			name: "Big Shed",
			size: "Big",
			cost: { gold: 20000, wood: 550, stone: 300 },
		},
	},
};
exports.buildings = buildings;

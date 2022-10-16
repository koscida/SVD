// ////
// fish
const fish = {
	Crimsonfish: {
		name: "Crimsonfish",
		id: 29,
		desc: "Lives deep in the ocean but likes to lay its eggs in the warm summer water.",
		type: "Legendary",
		legend: true,
		sell: { regular: 1500, silver: 1875, gold: 2250, iridium: 3000 },
		locations: ["Ocean"],
		locationSpecialNote: "East Pier",
		season: ["Summer"],
		weather: ["Sun", "Rain"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 95, behavior: "mixed" },
		size: { min: 19, max: 21 },
		tool: "Fishing Pole",
		baseXP: 170,
		fishPond: false,
		cooking: false,
	},
	Angler: {
		name: "Angler",
		id: 30,
		desc: "Uses a bioluminescent dangler to attract prey.",
		type: "Legendary",
		legend: true,
		sell: { regular: 900, silver: 1125, gold: 1350, iridium: 1800 },
		locations: ["Town River"],
		locationSpecialNote: "North of JojaMart",
		season: ["Fall"],
		weather: ["Sun", "Rain"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 85, behavior: "smooth" },
		size: { min: 17, max: 19 },
		tool: "Fishing Pole",
		baseXP: 155,
		fishPond: false,
		cooking: false,
	},
	Legend: {
		name: "Legend",
		id: 33,
		desc: "The king of all fish! They said he'd never be caught.",
		type: "Legendary",
		legend: true,
		sell: { regular: 5000, silver: 6250, gold: 7500, iridium: 10000 },
		locations: ["Mountain Lake"],
		locationSpecialNote: "On Island near Log",
		season: ["Spring"],
		weather: ["Rain"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 110, behavior: "mixed" },
		size: { min: 49, max: 51 },
		tool: "Fishing Pole",
		baseXP: 195,
		fishPond: false,
		cooking: false,
	},
	"Mutant Carp": {
		name: "Mutant Carp",
		id: 36,
		desc: "The strange waters of the sewer turned this carp into a monstrosity.",
		type: "Legendary",
		legend: true,
		sell: { regular: 1000, silver: 1250, gold: 1500, iridium: 2000 },
		locations: ["Sewers"],
		locationSpecialNote: "Sewers",
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Rain"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 80, behavior: "dart" },
		size: { min: 35, max: 37 },
		tool: "Fishing Pole",
		baseXP: 145,
		fishPond: false,
		cooking: false,
	},
	Glacierfish: {
		name: "Glacierfish",
		id: 57,
		desc: "Builds a nest on the underside of glaciers.",
		type: "Legendary",
		legend: true,
		sell: { regular: 1000, silver: 1250, gold: 1500, iridium: 2000 },
		locations: ["Forrest River"],
		locationSpecialNote: "South end of Arrowhead Island",
		season: ["Winter"],
		weather: ["Sun", "Rain"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 100, behavior: "mixed" },
		size: { min: 26, max: 28 },
		tool: "Fishing Pole",
		baseXP: 180,
		fishPond: false,
		cooking: false,
	},
	Pufferfish: {
		name: "Pufferfish",
		id: 1,
		desc: "Inflates when threatened.",
		type: "Regular",
		legend: false,
		sell: { regular: 200, silver: 250, gold: 300, iridium: 400 },
		locations: ["Ocean"],
		season: ["Summer"],
		weather: ["Sun"],
		times: [{ start: 12, end: 16 }],
		behavior: { difficulty: 80, behavior: "floater" },
		size: { min: 1, max: 37 },
		tool: "Fishing Pole",
		baseXP: 29,
		fishPond: true,
		cooking: false,
	},
	Anchovy: {
		name: "Anchovy",
		id: 2,
		desc: "A small silver fish found in the ocean.",
		type: "Regular",
		legend: false,
		sell: { regular: 30, silver: 37, gold: 45, iridium: 60 },
		locations: ["Ocean"],
		season: ["Spring", "Fall"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 30, behavior: "dart" },
		size: { min: 1, max: 17 },
		tool: "Fishing Pole",
		baseXP: 13,
		fishPond: true,
		cooking: false,
	},
	Tuna: {
		name: "Tuna",
		id: 3,
		desc: "A large fish that lives in the ocean.",
		type: "Regular",
		legend: false,
		sell: { regular: 100, silver: 125, gold: 150, iridium: 200 },
		locations: ["Ocean"],
		season: ["Summer", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 70, behavior: "smooth" },
		size: { min: 12, max: 61 },
		tool: "Fishing Pole",
		baseXP: 26,
		fishPond: true,
		cooking: true,
	},
	Sardine: {
		name: "Sardine",
		id: 4,
		desc: "A common ocean fish.",
		type: "Regular",
		legend: false,
		sell: { regular: 40, silver: 50, gold: 60, iridium: 80 },
		locations: ["Ocean"],
		season: ["Spring", "Fall"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 30, behavior: "dart" },
		size: { min: 1, max: 13 },
		tool: "Fishing Pole",
		baseXP: 13,
		fishPond: true,
		cooking: true,
	},
	Bream: {
		name: "Bream",
		id: 5,
		desc: "A fairly common river fish that becomes active at night.",
		type: "Regular",
		legend: false,
		sell: { regular: 45, silver: 56, gold: 67, iridium: 90 },
		locations: ["Town River", "Forrest River"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 18, end: 26 }],
		behavior: { difficulty: 35, behavior: "smooth" },
		size: { min: 12, max: 31 },
		tool: "Fishing Pole",
		baseXP: 14,
		fishPond: true,
		cooking: true,
	},
	"Largemouth Bass": {
		name: "Largemouth Bass",
		id: 6,
		desc: "A popular fish that lives in lakes.",
		type: "Regular",
		legend: false,
		sell: { regular: 100, silver: 125, gold: 150, iridium: 200 },
		locations: ["Mountain Lake"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 50, behavior: "mixed" },
		size: { min: 11, max: 31 },
		tool: "Fishing Pole",
		baseXP: 19,
		fishPond: true,
		cooking: true,
	},
	"Smallmouth Bass": {
		name: "Smallmouth Bass",
		id: 7,
		desc: "A freshwater fish that is very sensitive to pollution.",
		type: "Regular",
		legend: false,
		sell: { regular: 50, silver: 62, gold: 75, iridium: 100 },
		locations: ["Forrest River", "Forrest Pond"],
		season: ["Spring", "Fall"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 28, behavior: "mixed" },
		size: { min: 12, max: 25 },
		tool: "Fishing Pole",
		baseXP: 12,
		fishPond: true,
		cooking: false,
	},
	"Rainbow Trout": {
		name: "Rainbow Trout",
		id: 8,
		desc: "A freshwater trout with colorful markings.",
		type: "Regular",
		legend: false,
		sell: { regular: 65, silver: 81, gold: 97, iridium: 130 },
		locations: ["Mountain Lake", "Town River", "Forrest River"],
		season: ["Summer"],
		weather: ["Sun"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 45, behavior: "mixed" },
		size: { min: 10, max: 26 },
		tool: "Fishing Pole",
		baseXP: 18,
		fishPond: true,
		cooking: true,
	},
	Salmon: {
		name: "Salmon",
		id: 9,
		desc: "Swims upstream to lay its eggs.",
		type: "Regular",
		legend: false,
		sell: { regular: 75, silver: 93, gold: 112, iridium: 150 },
		locations: ["Town River", "Forrest River"],
		season: ["Fall"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 50, behavior: "mixed" },
		size: { min: 24, max: 66 },
		tool: "Fishing Pole",
		baseXP: 19,
		fishPond: true,
		cooking: true,
	},
	Walleye: {
		name: "Walleye",
		id: 10,
		desc: "A freshwater fish caught at night.",
		type: "Regular",
		legend: false,
		sell: { regular: 105, silver: 131, gold: 157, iridium: 210 },
		locations: ["Mountain Lake", "Town River", "Forrest River", "Forrest Pond"],
		season: ["Fall", "Winter"],
		weather: ["Rain"],
		times: [{ start: 12, end: 26 }],
		behavior: { difficulty: 45, behavior: "smooth" },
		size: { min: 10, max: 41 },
		tool: "Fishing Pole",
		baseXP: 18,
		fishPond: true,
		cooking: false,
	},
	Perch: {
		name: "Perch",
		id: 11,
		desc: "A freshwater fish of the winter.",
		type: "Regular",
		legend: false,
		sell: { regular: 55, silver: 68, gold: 82, iridium: 110 },
		locations: ["Mountain Lake", "Town River", "Forrest River", "Forrest Pond"],
		season: ["Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 35, behavior: "dart" },
		size: { min: 10, max: 25 },
		tool: "Fishing Pole",
		baseXP: 14,
		fishPond: true,
		cooking: false,
	},
	Carp: {
		name: "Carp",
		id: 12,
		desc: "A common pond fish.",
		type: "Regular",
		legend: false,
		sell: { regular: 30, silver: 37, gold: 45, iridium: 60 },
		locations: ["Mountain Lake", "Secret Woods Pond", "Sewers"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 15, behavior: "mixed" },
		size: { min: 15, max: 51 },
		tool: "Fishing Pole",
		baseXP: 8,
		fishPond: true,
		cooking: true,
	},
	Catfish: {
		name: "Catfish",
		id: 13,
		desc: "An uncommon fish found in streams.",
		type: "Regular",
		legend: false,
		sell: { regular: 200, silver: 250, gold: 300, iridium: 400 },
		locations: [
			"Town River",
			"Forrest River",
			"Secret Woods Pond",
			"Witch Swamp",
		],
		season: ["Spring", "Fall", "Winter"],
		weather: ["Rain"],
		times: [{ start: 6, end: 24 }],
		behavior: { difficulty: 75, behavior: "mixed" },
		size: { min: 12, max: 73 },
		tool: "Fishing Pole",
		baseXP: 28,
		fishPond: true,
		cooking: false,
	},
	Pike: {
		name: "Pike",
		id: 14,
		desc: "A freshwater fish that's difficult to catch.",
		type: "Regular",
		legend: false,
		sell: { regular: 100, silver: 125, gold: 150, iridium: 200 },
		locations: ["Mountain Lake", "Town River", "Forrest River", "Forrest Pond"],
		season: ["Summer", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 60, behavior: "dart" },
		size: { min: 15, max: 61 },
		tool: "Fishing Pole",
		baseXP: 23,
		fishPond: true,
		cooking: false,
	},
	Sunfish: {
		name: "Sunfish",
		id: 15,
		desc: "A common river fish.",
		type: "Regular",
		legend: false,
		sell: { regular: 30, silver: 37, gold: 45, iridium: 60 },
		locations: ["Town River", "Forrest River"],
		season: ["Spring", "Summer"],
		weather: ["Sun", "Wind"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 30, behavior: "mixed" },
		size: { min: 5, max: 16 },
		tool: "Fishing Pole",
		baseXP: 13,
		fishPond: true,
		cooking: true,
	},
	"Red Mullet": {
		name: "Red Mullet",
		id: 16,
		desc: "Long ago these were kept as pets.",
		type: "Regular",
		legend: false,
		sell: { regular: 75, silver: 93, gold: 112, iridium: 150 },
		locations: ["Ocean"],
		season: ["Summer", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 55, behavior: "smooth" },
		size: { min: 8, max: 23 },
		tool: "Fishing Pole",
		baseXP: 21,
		fishPond: true,
		cooking: false,
	},
	Herring: {
		name: "Herring",
		id: 17,
		desc: "A common ocean fish.",
		type: "Regular",
		legend: false,
		sell: { regular: 30, silver: 37, gold: 45, iridium: 60 },
		locations: ["Ocean"],
		season: ["Spring", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 25, behavior: "dart" },
		size: { min: 8, max: 21 },
		tool: "Fishing Pole",
		baseXP: 11,
		fishPond: true,
		cooking: false,
	},
	Eel: {
		name: "Eel",
		id: 18,
		desc: "A long, slippery little fish.",
		type: "Regular",
		legend: false,
		sell: { regular: 85, silver: 106, gold: 127, iridium: 170 },
		locations: ["Ocean"],
		season: ["Spring", "Fall"],
		weather: ["Rain"],
		times: [{ start: 16, end: 26 }],
		behavior: { difficulty: 70, behavior: "smooth" },
		size: { min: 12, max: 81 },
		tool: "Fishing Pole",
		baseXP: 26,
		fishPond: true,
		cooking: true,
	},
	Octopus: {
		name: "Octopus",
		id: 19,
		desc: "A mysterious and intelligent creature.",
		type: "Regular",
		legend: false,
		sell: { regular: 150, silver: 187, gold: 225, iridium: 300 },
		locations: ["Ocean"],
		season: ["Summer"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 13 }],
		behavior: { difficulty: 95, behavior: "sinker" },
		size: { min: 12, max: 49 },
		tool: "Fishing Pole",
		baseXP: 34,
		fishPond: true,
		cooking: false,
	},
	"Red Snapper": {
		name: "Red Snapper",
		id: 20,
		desc: "A popular fish with a nice red color.",
		type: "Regular",
		legend: false,
		sell: { regular: 50, silver: 62, gold: 75, iridium: 100 },
		locations: ["Ocean"],
		season: ["Summer", "Fall", "Winter"],
		weather: ["Rain"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 40, behavior: "mixed" },
		size: { min: 8, max: 26 },
		tool: "Fishing Pole",
		baseXP: 16,
		fishPond: true,
		cooking: false,
	},
	Squid: {
		name: "Squid",
		id: 21,
		desc: "A deep sea creature that can grow to enormous size.",
		type: "Regular",
		legend: false,
		sell: { regular: 80, silver: 100, gold: 120, iridium: 160 },
		locations: ["Ocean"],
		season: ["Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 18, end: 26 }],
		behavior: { difficulty: 75, behavior: "sinker" },
		size: { min: 12, max: 49 },
		tool: "Fishing Pole",
		baseXP: 28,
		fishPond: true,
		cooking: true,
	},
	Seaweed: {
		name: "Seaweed",
		id: 22,
		desc: "",
		type: "Regular",
		legend: false,
		sell: { regular: 20, silver: 25, gold: 30, iridium: 35 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Fishing Pole",
		baseXP: 5,
		fishPond: false,
		cooking: false,
	},
	"Green Algae": {
		name: "Green Algae",
		id: 23,
		desc: "",
		type: "Regular",
		legend: false,
		sell: { regular: 15, silver: 15, gold: 15, iridium: 15 },
		locations: [
			"Ocean",
			"Mountain Lake",
			"Town River",
			"Forrest River",
			"Forrest Pond",
			"Night Market",
			"Secret Woods Pond",
			"Desert",
			"Mines",
			"Sewers",
			"Mutant Bug Lair",
			"Witch Swamp",
		],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Fishing Pole",
		baseXP: 5,
		fishPond: false,
		cooking: true,
	},
	"Sea Cucumber": {
		name: "Sea Cucumber",
		id: 24,
		desc: "A slippery, slimy creature found on the ocean floor.",
		type: "Regular",
		legend: false,
		sell: { regular: 75, silver: 93, gold: 112, iridium: 150 },
		locations: ["Ocean"],
		season: ["Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 40, behavior: "sinker" },
		size: { min: 3, max: 21 },
		tool: "Fishing Pole",
		baseXP: 16,
		fishPond: true,
		cooking: true,
	},
	"Super Cucumber": {
		name: "Super Cucumber",
		id: 25,
		desc: "A rare, purple variety of sea cucumber.",
		type: "Regular",
		legend: false,
		sell: { regular: 250, silver: 312, gold: 375, iridium: 500 },
		locations: ["Ocean"],
		season: ["Summer", "Fall"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 18, end: 26 }],
		behavior: { difficulty: 80, behavior: "sinker" },
		size: { min: 12, max: 37 },
		tool: "Fishing Pole",
		baseXP: 29,
		fishPond: true,
		cooking: false,
	},
	Ghostfish: {
		name: "Ghostfish",
		id: 26,
		desc: "A pale, blind fish found in underground lakes.",
		type: "Special",
		legend: false,
		sell: { regular: 45, silver: 56, gold: 67, iridium: 90 },
		locations: ["Mines"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 50, behavior: "mixed" },
		size: { min: 10, max: 36 },
		tool: "Fishing Pole",
		baseXP: 19,
		fishPond: true,
		cooking: false,
	},
	"White Algae": {
		name: "White Algae",
		id: 27,
		desc: "",
		type: "Special",
		legend: false,
		sell: { regular: 25, silver: 25, gold: 25, iridium: 25 },
		locations: ["Mines", "Sewers", "Mutant Bug Lair", "Witch Swamp"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Fishing Pole",
		baseXP: 5,
		fishPond: false,
		cooking: true,
	},
	Stonefish: {
		name: "Stonefish",
		id: 28,
		desc: "A bizarre fish that's shaped like a brick.",
		type: "Special",
		legend: false,
		sell: { regular: 300, silver: 375, gold: 450, iridium: 600 },
		locations: ["Mines"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 65, behavior: "sinker" },
		size: { min: 14, max: 16 },
		tool: "Fishing Pole",
		baseXP: 24,
		fishPond: true,
		cooking: false,
	},
	"Ice Pip": {
		name: "Ice Pip",
		id: 31,
		desc: "A rare fish that thrives in extremely cold conditions.",
		type: "Special",
		legend: false,
		sell: { regular: 500, silver: 625, gold: 750, iridium: 1000 },
		locations: ["Mines"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 85, behavior: "dart" },
		size: { min: 7, max: 9 },
		tool: "Fishing Pole",
		baseXP: 31,
		fishPond: true,
		cooking: false,
	},
	"Lava Eel": {
		name: "Lava Eel",
		id: 32,
		desc: "It can somehow survive in pools of red-hot lava.",
		type: "Special",
		legend: false,
		sell: { regular: 700, silver: 875, gold: 1050, iridium: 1400 },
		locations: ["Mines"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 90, behavior: "mixed" },
		size: { min: 31, max: 33 },
		tool: "Fishing Pole",
		baseXP: 33,
		fishPond: true,
		cooking: false,
	},
	Sandfish: {
		name: "Sandfish",
		id: 34,
		desc: "It tries to hide using camouflage.",
		type: "Special",
		legend: false,
		sell: { regular: 75, silver: 93, gold: 112, iridium: 150 },
		locations: ["Desert"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 20 }],
		behavior: { difficulty: 65, behavior: "mixed" },
		size: { min: 8, max: 25 },
		tool: "Fishing Pole",
		baseXP: 24,
		fishPond: true,
		cooking: false,
	},
	"Scorpion Carp": {
		name: "Scorpion Carp",
		id: 35,
		desc: "It's like a regular carp but with a sharp stinger.",
		type: "Special",
		legend: false,
		sell: { regular: 150, silver: 187, gold: 225, iridium: 300 },
		locations: ["Desert"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 20 }],
		behavior: { difficulty: 90, behavior: "dart" },
		size: { min: 12, max: 33 },
		tool: "Fishing Pole",
		baseXP: 33,
		fishPond: true,
		cooking: false,
	},
	Sturgeon: {
		name: "Sturgeon",
		id: 37,
		desc: "An ancient bottom-feeder with a dwindling population. Females can live up to 150 years.",
		type: "Regular",
		legend: false,
		sell: { regular: 200, silver: 250, gold: 300, iridium: 400 },
		locations: ["Mountain Lake"],
		season: ["Summer", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 78, behavior: "mixed" },
		size: { min: 12, max: 61 },
		tool: "Fishing Pole",
		baseXP: 29,
		fishPond: true,
		cooking: false,
	},
	"Tiger Trout": {
		name: "Tiger Trout",
		id: 38,
		desc: "A rare hybrid trout that cannot bear offspring of its own.",
		type: "Regular",
		legend: false,
		sell: { regular: 150, silver: 187, gold: 225, iridium: 300 },
		locations: ["Town River", "Forrest River"],
		season: ["Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 60, behavior: "dart" },
		size: { min: 10, max: 21 },
		tool: "Fishing Pole",
		baseXP: 23,
		fishPond: true,
		cooking: false,
	},
	Bullhead: {
		name: "Bullhead",
		id: 39,
		desc: "A relative of the catfish that eats a variety of foods off the lake bottom.",
		type: "Regular",
		legend: false,
		sell: { regular: 75, silver: 93, gold: 112, iridium: 150 },
		locations: ["Mountain Lake"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 46, behavior: "smooth" },
		size: { min: 12, max: 31 },
		tool: "Fishing Pole",
		baseXP: 18,
		fishPond: true,
		cooking: false,
	},
	Tilapia: {
		name: "Tilapia",
		id: 40,
		desc: "A primarily vegetarian fish that prefers warm water.",
		type: "Regular",
		legend: false,
		sell: { regular: 75, silver: 93, gold: 112, iridium: 150 },
		locations: ["Ocean"],
		season: ["Summer", "Fall"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 14 }],
		behavior: { difficulty: 50, behavior: "mixed" },
		size: { min: 11, max: 31 },
		tool: "Fishing Pole",
		baseXP: 19,
		fishPond: true,
		cooking: false,
	},
	Chub: {
		name: "Chub",
		id: 41,
		desc: "A common freshwater fish known for its voracious appetite.",
		type: "Regular",
		legend: false,
		sell: { regular: 50, silver: 62, gold: 75, iridium: 100 },
		locations: ["Mountain Lake", "Forrest River"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 35, behavior: "dart" },
		size: { min: 12, max: 25 },
		tool: "Fishing Pole",
		baseXP: 14,
		fishPond: true,
		cooking: false,
	},
	Dorado: {
		name: "Dorado",
		id: 42,
		desc: "A fierce carnivore with brilliant orange scales.",
		type: "Regular",
		legend: false,
		sell: { regular: 100, silver: 125, gold: 150, iridium: 200 },
		locations: ["Forrest River"],
		season: ["Summer"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 19 }],
		behavior: { difficulty: 78, behavior: "mixed" },
		size: { min: 24, max: 33 },
		tool: "Fishing Pole",
		baseXP: 29,
		fishPond: true,
		cooking: false,
	},
	Albacore: {
		name: "Albacore",
		id: 43,
		desc: 'Prefers temperature ""edges"" where cool and warm water meet.',
		type: "Regular",
		legend: false,
		sell: { regular: 75, silver: 93, gold: 112, iridium: 150 },
		locations: ["Ocean"],
		season: ["Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [
			{ start: 6, end: 11 },
			{ start: 18, end: 2 },
		],
		behavior: { difficulty: 60, behavior: "mixed" },
		size: { min: 20, max: 41 },
		tool: "Fishing Pole",
		baseXP: 23,
		fishPond: true,
		cooking: false,
	},
	Shad: {
		name: "Shad",
		id: 44,
		desc: "Lives in a school at sea, but returns to the rivers to spawn.",
		type: "Regular",
		legend: false,
		sell: { regular: 60, silver: 75, gold: 90, iridium: 120 },
		locations: ["Town River", "Forrest River"],
		season: ["Spring", "Summer", "Fall"],
		weather: ["Rain"],
		times: [{ start: 9, end: 26 }],
		behavior: { difficulty: 45, behavior: "smooth" },
		size: { min: 20, max: 49 },
		tool: "Fishing Pole",
		baseXP: 18,
		fishPond: true,
		cooking: false,
	},
	Lingcod: {
		name: "Lingcod",
		id: 45,
		desc: "A fearsome predator that will eat almost anything it can cram into its mouth.",
		type: "Regular",
		legend: false,
		sell: { regular: 120, silver: 150, gold: 180, iridium: 240 },
		locations: ["Mountain Lake", "Town River", "Forrest River"],
		season: ["Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 85, behavior: "mixed" },
		size: { min: 30, max: 51 },
		tool: "Fishing Pole",
		baseXP: 31,
		fishPond: true,
		cooking: false,
	},
	Halibut: {
		name: "Halibut",
		id: 46,
		desc: "A flat fish that lives on the ocean floor.",
		type: "Regular",
		legend: false,
		sell: { regular: 80, silver: 100, gold: 120, iridium: 160 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [
			{ start: 6, end: 11 },
			{ start: 19, end: 2 },
		],
		behavior: { difficulty: 50, behavior: "sinker" },
		size: { min: 10, max: 34 },
		tool: "Fishing Pole",
		baseXP: 19,
		fishPond: true,
		cooking: false,
	},
	Lobster: {
		name: "Lobster",
		id: 47,
		desc: "A large ocean-dwelling crustacean with a strong tail.",
		type: "Crabpot",
		legend: false,
		sell: { regular: 120, silver: 120, gold: 120, iridium: 120 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Crabpot",
		baseXP: 5,
		fishPond: true,
		cooking: true,
	},
	Crayfish: {
		name: "Crayfish",
		id: 48,
		desc: "A small freshwater relative of the lobster.",
		type: "Crabpot",
		legend: false,
		sell: { regular: 75, silver: 75, gold: 75, iridium: 75 },
		locations: [
			"Mountain Lake",
			"Town River",
			"Forrest River",
			"Forrest Pond",
			"Secret Woods Pond",
		],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Crabpot",
		baseXP: 5,
		fishPond: true,
		cooking: true,
	},
	Crab: {
		name: "Crab",
		id: 49,
		desc: "A marine crustacean with two powerful pincers.",
		type: "Crabpot",
		legend: false,
		sell: { regular: 100, silver: 100, gold: 100, iridium: 100 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Crabpot",
		baseXP: 5,
		fishPond: true,
		cooking: true,
	},
	Cockle: {
		name: "Cockle",
		id: 50,
		desc: "A common saltwater clam.",
		type: "Crabpot",
		legend: false,
		sell: { regular: 50, silver: 62, gold: 75, iridium: 100 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Crabpot",
		baseXP: 5,
		fishPond: true,
		cooking: false,
	},
	Mussel: {
		name: "Mussel",
		id: 51,
		desc: "A common bivalve that often lives in clusters.",
		type: "Crabpot",
		legend: false,
		sell: { regular: 30, silver: 37, gold: 45, iridium: 60 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Crabpot",
		baseXP: 5,
		fishPond: true,
		cooking: true,
	},
	Shrimp: {
		name: "Shrimp",
		id: 52,
		desc: "A scavenger that feeds off the ocean floor. Widely prized for its meat.",
		type: "Crabpot",
		legend: false,
		sell: { regular: 60, silver: 60, gold: 60, iridium: 60 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Crabpot",
		baseXP: 5,
		fishPond: true,
		cooking: true,
	},
	Snail: {
		name: "Snail",
		id: 53,
		desc: "A wide-ranging mollusc that lives in a spiral shell.",
		type: "Crabpot",
		legend: false,
		sell: { regular: 65, silver: 65, gold: 65, iridium: 65 },
		locations: [
			"Mountain Lake",
			"Town River",
			"Forrest River",
			"Forrest Pond",
			"Secret Woods Pond",
		],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Crabpot",
		baseXP: 5,
		fishPond: true,
		cooking: true,
	},
	Periwinkle: {
		name: "Periwinkle",
		id: 54,
		desc: "A tiny freshwater snail that lives in a blue shell.",
		type: "Crabpot",
		legend: false,
		sell: { regular: 20, silver: 20, gold: 20, iridium: 20 },
		locations: [
			"Mountain Lake",
			"Town River",
			"Forrest River",
			"Forrest Pond",
			"Secret Woods Pond",
		],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Crabpot",
		baseXP: 5,
		fishPond: true,
		cooking: true,
	},
	Oyster: {
		name: "Oyster",
		id: 55,
		desc: "Constantly filters water to find food. In the process, it removes dangerous toxins from the environment.",
		type: "Crabpot",
		legend: false,
		sell: { regular: 40, silver: 50, gold: 60, iridium: 80 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Crabpot",
		baseXP: 5,
		fishPond: true,
		cooking: false,
	},
	Woodskip: {
		name: "Woodskip",
		id: 56,
		desc: "A very sensitive fish that can only live in pools deep in the forest.",
		type: "Special",
		legend: false,
		sell: { regular: 75, silver: 93, gold: 112, iridium: 150 },
		locations: ["Secret Woods Pond"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 50, behavior: "mixed" },
		size: { min: 11, max: 31 },
		tool: "Fishing Pole",
		baseXP: 19,
		fishPond: true,
		cooking: false,
	},
	"Void Salmon": {
		name: "Void Salmon",
		id: 58,
		desc: "A salmon, twisted by void energy. The fresh meat is jet black, but rapidly turns pink when exposed to air.",
		type: "Special",
		legend: false,
		sell: { regular: 150, silver: 187, gold: 225, iridium: 300 },
		locations: ["Witch Swamp"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 80, behavior: "mixed" },
		size: { min: 24, max: 66 },
		tool: "Fishing Pole",
		baseXP: 29,
		fishPond: true,
		cooking: false,
	},
	Slimejack: {
		name: "Slimejack",
		id: 59,
		desc: "He's coated in a very thick layer of slime. He keeps slipping out of your hands!",
		type: "Special",
		legend: false,
		sell: { regular: 100, silver: 125, gold: 150, iridium: 200 },
		locations: ["Mutant Bug Lair"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 55, behavior: "dart" },
		size: { min: 8, max: 26 },
		tool: "Fishing Pole",
		baseXP: 21,
		fishPond: true,
		cooking: false,
	},
	"Midnight Squid": {
		name: "Midnight Squid",
		id: 60,
		desc: "A strange and mysterious denizen of the ocean's twilight depths.",
		type: "Special",
		legend: false,
		sell: { regular: 100, silver: 125, gold: 150, iridium: 200 },
		locations: ["Night Market"],
		season: ["Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 55, behavior: "Sinker" },
		size: { min: 8, max: 25 },
		tool: "Fishing Pole",
		baseXP: 21,
		fishPond: true,
		cooking: false,
	},
	"Spook Fish": {
		name: "Spook Fish",
		id: 61,
		desc: "The huge eyes can detect the faint silhouettes of prey.",
		type: "Special",
		legend: false,
		sell: { regular: 220, silver: 275, gold: 330, iridium: 440 },
		locations: ["Night Market"],
		season: ["Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 60, behavior: "Dart" },
		size: { min: 8, max: 25 },
		tool: "Fishing Pole",
		baseXP: 23,
		fishPond: true,
		cooking: false,
	},
	Blobfish: {
		name: "Blobfish",
		id: 62,
		desc: "This odd creature floats above the ocean floor, consuming any edible material in its path.",
		type: "Special",
		legend: false,
		sell: { regular: 500, silver: 625, gold: 750, iridium: 1000 },
		locations: ["Night Market"],
		season: ["Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		behavior: { difficulty: 75, behavior: "Floater" },
		size: { min: 8, max: 25 },
		tool: "Fishing Pole",
		baseXP: 28,
		fishPond: true,
		cooking: false,
	},
	Flounder: {
		name: "Flounder",
		id: 63,
		desc: "It lives on the bottom, so both eyes are on top of its head.",
		type: "Regular",
		legend: false,
		sell: { regular: 100, silver: 125, gold: 150, iridium: 200 },
		locations: ["Ocean"],
		season: ["Spring", "Summer"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 20 }],
		behavior: { difficulty: 50, behavior: "sinker" },
		size: { min: 4, max: 17 },
		tool: "Fishing Pole",
		baseXP: 19,
		fishPond: true,
		cooking: true,
	},
	"Midnight Carp": {
		name: "Midnight Carp",
		id: 64,
		desc: "This shy fish only feels comfortable at night.",
		type: "Regular",
		legend: false,
		sell: { regular: 150, silver: 187, gold: 225, iridium: 300 },
		locations: ["Mountain Lake", "Forrest Pond"],
		season: ["Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 22, end: 26 }],
		behavior: { difficulty: 55, behavior: "mixed" },
		size: { min: 12, max: 53 },
		tool: "Fishing Pole",
		baseXP: 21,
		fishPond: true,
		cooking: true,
	},
	Clam: {
		name: "Clam",
		id: 65,
		desc: "",
		type: "Forage",
		legend: false,
		sell: { regular: 50, silver: 62, gold: 75, iridium: 100 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Forage",
		baseXP: 5,
		fishPond: false,
		cooking: false,
	},
	Coral: {
		name: "Coral",
		id: 66,
		desc: "",
		type: "Forage",
		legend: false,
		sell: { regular: 80, silver: 100, gold: 120, iridium: 160 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Forage",
		baseXP: 5,
		fishPond: true,
		cooking: false,
	},
	"Sea Urchin": {
		name: "Sea Urchin",
		id: 67,
		desc: "",
		type: "Forage",
		legend: false,
		sell: { regular: 160, silver: 200, gold: 240, iridium: 320 },
		locations: ["Ocean"],
		season: ["Spring", "Summer", "Fall", "Winter"],
		weather: ["Sun", "Wind", "Rain", "Snow"],
		times: [{ start: 6, end: 26 }],
		tool: "Forage",
		baseXP: 5,
		fishPond: true,
		cooking: false,
	},
};
exports.fish = fish;

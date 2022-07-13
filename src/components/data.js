const seasons = {
	'Spring': {
		id: 1,
		name: 'Spring',
		image: 'Spring.png',
		weather: ["Sun", "Rain", "Wind"],
	}, 
	'Summer': {
		id: 2,
		name: 'Summer',
		image: 'Summer.png',
		weather: ["Sun", "Rain",],
	}, 
	'Fall': {
		id: 3,
		name: 'Fall',
		image: 'Fall.png',
		weather: ["Sun", "Rain", "Wind"],
	}, 
	'Winter': {
		id: 4,
		name: 'Winter',
		image: 'Winter.png',
		weather: ["Sun", "Snow"],
	}
}
exports.seasons = seasons


const weather = {
	"Sun": {
		name: "Sun",
		shortName: "Su",
		type: 1,
		images: {
			"Spring": "StatusSun.png",
			"Summer": "StatusSun.png",
			"Fall": "StatusSun.png",
			"Winter": "StatusSun.png",
		},
	},
	"Rain": {
		name: "Rain",
		shortName: "Rn",
		type: 2,
		images: {
			"Spring": "StatusRain.png",
			"Summer": "StatusRain.png",
			"Fall": "StatusRain.png",
		},
	},
	"Snow": {
		name: "Snow",
		shortName: "Sw",
		type: 2,
		images: {
			"Winter": "StatusSnow.png",
		},
	},
	"Wind": {
		name: "Wind",
		shortName: "Wd",
		type: 4,
		images: {
			"Spring": "StatusWindSpring.png",
			"Fall": "StatusWindFall.png",
		},
	},
}
exports.weather = weather


const locationTown = {
	"Ocean" : {
		name: "Ocean",
		locationGroup: "Town",
		mapLocation: "Ocean",
		waterSalinity: "Salt",
		waterStillness: "Ocean",
		legendLocation: "North of JojaMart"
	},
	"Mountain Lake" : {
		name: "Mountain Lake",
		locationGroup: "Town",
		mapLocation: "Mountain",
		waterSalinity: "Fresh",
		waterStillness: "Lake",
		legendLocation : "On Island near Log"
	},
	"Town River" : {
		name: "Town River",
		locationGroup: "Town",
		mapLocation: "Town",
		waterSalinity: "Fresh",
		waterStillness: "River",
		legendLocation : "North of JojaMart"
	},
	"Forrest River" : {
		name: "Forrest River",
		locationGroup: "Town",
		mapLocation: "Forrest",
		waterSalinity: "Fresh",
		waterStillness: "River",
		legendLocation: "South end of Arrowhead Island"
	},
	"Forrest Pond" : {
		name: "Forrest Pond",
		locationGroup: "Town",
		mapLocation: "Forrest",
		waterSalinity: "Fresh",
		waterStillness: "Lake",
	},
}
const locationSpecial = {
	"Night Market" : {
		name: "Night Market",
		locationGroup: "Special",
		mapLocation: "Night Market",
	},
	"Secret Woods Pond" : {
		name: "Secret Woods Pond",
		locationGroup: "Special",
		mapLocation: "Secret Woods",
	},
	"Desert": {
		name: "Desert",
		locationGroup: "Special",
		mapLocation: "Desert",
	},
	"Mines" : {
		name: "Mines",
		locationGroup: "Special",
		mapLocation: "Mines",
	},
	"Sewers" : {
		name: "Sewers",
		locationGroup: "Special",
		mapLocation: "Sewers",
	},
	"Mutant Bug Lair" : {
		name: "Mutant Bug Lair",
		locationGroup: "Special",
		mapLocation: "Sewers",
	},
	"Witch Swamp" : {
		name: "Witch Swamp",
		locationGroup: "Special",
		mapLocation: "Swamp",
	},
}
const locationFarm = {
	"Farm Pond" : {
		name: "Farm Pond",
		locationGroup: "Farm",
		mapLocation: "Farm",
	},
	"Forrest Pond": {
		name: "Forrest Pond",
		locationGroup: "Farm",
		mapLocation: "Farm",
	},
}

const locations = {
	"locationTown" : locationTown,
	"locationSpecial" : locationSpecial,
	"locationFarm" : locationFarm,
}
exports.locations = locations



const fish = [
	{
name: 'Catfish',
id: 13,
desc: 'An uncommon fish found in streams.',
legend: false,
price: [200,250,300,400],
locationTown: ['Town River','Forrest River',],
locationSpecial: ['Secret Woods Pond','Witch Swamp',],
locationFarm: [],
season: ['Spring','Fall','Winter',],
weather: ['Rain',],
times: [{start: 6, end: 24},],
behavior: {difficulty: 75, behavior: 'mixed'},
size: {min: 12, max: 73},
tool: 'Fishing Pole',
baseXP: 28,
fishPond: true,
cooking: false,
},
{
name: 'Crab',
id: 49,
desc: 'A marine crustacean with two powerful pincers.',
legend: false,
price: [100,100,100,100],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Crabpot',
baseXP: 5,
fishPond: true,
cooking: true,
},
{
name: 'Periwinkle',
id: 54,
desc: 'A tiny freshwater snail that lives in a blue shell.',
legend: false,
price: [20,20,20,20],
locationTown: ['Mountain Lake','Town River','Forrest River','Forrest Pond',],
locationSpecial: ['Secret Woods Pond',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Crabpot',
baseXP: 5,
fishPond: true,
cooking: true,
},
{
name: 'Shrimp',
id: 52,
desc: 'A scavenger that feeds off the ocean floor. Widely prized for its meat.',
legend: false,
price: [60,60,60,60],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Crabpot',
baseXP: 5,
fishPond: true,
cooking: true,
},
{
name: 'Clam',
id: 65,
desc: '',
legend: false,
price: [50,62,75,100],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Forage',
baseXP: 5,
fishPond: false,
cooking: false,
},
{
name: 'Cockle',
id: 50,
desc: 'A common saltwater clam.',
legend: false,
price: [50,62,75,100],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Crabpot',
baseXP: 5,
fishPond: true,
cooking: false,
},
{
name: 'Anchovy',
id: 2,
desc: 'A small silver fish found in the ocean.',
legend: false,
price: [30,37,45,60],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Fall',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 30, behavior: 'dart'},
size: {min: 1, max: 17},
tool: 'Fishing Pole',
baseXP: 13,
fishPond: true,
cooking: false,
},
{
name: 'Smallmouth Bass',
id: 7,
desc: 'A freshwater fish that is very sensitive to pollution.',
legend: false,
price: [50,62,75,100],
locationTown: ['Forrest River','Forrest Pond',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Fall',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 28, behavior: 'mixed'},
size: {min: 12, max: 25},
tool: 'Fishing Pole',
baseXP: 12,
fishPond: true,
cooking: false,
},
{
name: 'Perch',
id: 11,
desc: 'A freshwater fish of the winter.',
legend: false,
price: [55,68,82,110],
locationTown: ['Mountain Lake','Town River','Forrest River','Forrest Pond',],
locationSpecial: [],
locationFarm: [],
season: ['Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 35, behavior: 'dart'},
size: {min: 10, max: 25},
tool: 'Fishing Pole',
baseXP: 14,
fishPond: true,
cooking: false,
},
{
name: 'Carp',
id: 12,
desc: 'A common pond fish.',
legend: false,
price: [30,37,45,60],
locationTown: ['Mountain Lake',],
locationSpecial: ['Secret Woods Pond','Sewers',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 15, behavior: 'mixed'},
size: {min: 15, max: 51},
tool: 'Fishing Pole',
baseXP: 8,
fishPond: true,
cooking: true,
},
{
name: 'Pike',
id: 14,
desc: 'A freshwater fish that\'s difficult to catch.',
legend: false,
price: [100,125,150,200],
locationTown: ['Mountain Lake','Town River','Forrest River','Forrest Pond',],
locationSpecial: [],
locationFarm: [],
season: ['Summer','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 60, behavior: 'dart'},
size: {min: 15, max: 61},
tool: 'Fishing Pole',
baseXP: 23,
fishPond: true,
cooking: false,
},
{
name: 'Herring',
id: 17,
desc: 'A common ocean fish.',
legend: false,
price: [30,37,45,60],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 25, behavior: 'dart'},
size: {min: 8, max: 21},
tool: 'Fishing Pole',
baseXP: 11,
fishPond: true,
cooking: false,
},
{
name: 'Seaweed',
id: 22,
desc: '',
legend: false,
price: [20,25,30,35],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Fishing Pole',
baseXP: 5,
fishPond: false,
cooking: false,
},
{
name: 'Green Algae',
id: 23,
desc: '',
legend: false,
price: [15,15,15,15],
locationTown: ['Ocean','Mountain Lake','Town River','Forrest River','Forrest Pond',],
locationSpecial: ['Night Market','Secret Woods Pond','Desert','Mines','Sewers','Mutant Bug Lair','Witch Swamp',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Fishing Pole',
baseXP: 5,
fishPond: false,
cooking: true,
},
{
name: 'Ghostfish',
id: 26,
desc: 'A pale, blind fish found in underground lakes.',
legend: false,
price: [45,56,67,90],
locationTown: [],
locationSpecial: ['Mines',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 50, behavior: 'mixed'},
size: {min: 10, max: 36},
tool: 'Fishing Pole',
baseXP: 19,
fishPond: true,
cooking: false,
},
{
name: 'White Algae',
id: 27,
desc: '',
legend: false,
price: [25,25,25,25],
locationTown: [],
locationSpecial: ['Mines','Sewers','Mutant Bug Lair','Witch Swamp',],
locationFarm: [],
season: ['Spring	Summer	Fall	Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Fishing Pole',
baseXP: 5,
fishPond: false,
cooking: true,
},
{
name: 'Stonefish',
id: 28,
desc: 'A bizarre fish that\'s shaped like a brick.',
legend: false,
price: [300,375,450,600],
locationTown: [],
locationSpecial: ['Mines',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 65, behavior: 'sinker'},
size: {min: 14, max: 16},
tool: 'Fishing Pole',
baseXP: 24,
fishPond: true,
cooking: false,
},
{
name: 'Crimsonfish',
id: 29,
desc: 'Lives deep in the ocean but likes to lay its eggs in the warm summer water.',
legend: true,
price: [1500,1875,2250,3000],
locationTown: ['East Pier',],
locationSpecial: [],
locationFarm: [],
season: ['Summer',],
weather: ['Sun','Rain',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 95, behavior: 'mixed'},
size: {min: 19, max: 21},
tool: 'Legendary',
baseXP: 170,
fishPond: false,
cooking: false,
},
{
name: 'Angler',
id: 30,
desc: 'Uses a bioluminescent dangler to attract prey.',
legend: true,
price: [900,1125,1350,1800],
locationTown: ['Town River',],
locationNote: 'North of JojaMart',
locationSpecial: [],
locationFarm: [],
season: ['Fall',],
weather: ['Sun','Rain',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 85, behavior: 'smooth'},
size: {min: 17, max: 19},
tool: 'Legendary',
baseXP: 155,
fishPond: false,
cooking: false,
},
{
name: 'Ice Pip',
id: 31,
desc: 'A rare fish that thrives in extremely cold conditions.',
legend: false,
price: [500,625,750,1000],
locationTown: [],
locationSpecial: ['Mines',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 85, behavior: 'dart'},
size: {min: 7, max: 9},
tool: 'Fishing Pole',
baseXP: 31,
fishPond: true,
cooking: false,
},
{
name: 'Lava Eel',
id: 32,
desc: 'It can somehow survive in pools of red-hot lava.',
legend: false,
price: [700,875,1050,1400],
locationTown: [],
locationSpecial: ['Mines',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 90, behavior: 'mixed'},
size: {min: 31, max: 33},
tool: 'Fishing Pole',
baseXP: 33,
fishPond: true,
cooking: false,
},
{
name: 'Mutant Carp',
id: 36,
desc: 'The strange waters of the sewer turned this carp into a monstrosity.',
legend: true,
price: [1000,1250,1500,2000],
locationTown: [],
locationNote: 'Sewers',
locationSpecial: ['Sewers',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Rain',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 80, behavior: 'dart'},
size: {min: 35, max: 37},
tool: 'Legendary',
baseXP: 145,
fishPond: false,
cooking: false,
},
{
name: 'Bullhead',
id: 39,
desc: 'A relative of the catfish that eats a variety of foods off the lake bottom.',
legend: false,
price: [75,93,112,150],
locationTown: ['Mountain Lake',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 46, behavior: 'smooth'},
size: {min: 12, max: 31},
tool: 'Fishing Pole',
baseXP: 18,
fishPond: true,
cooking: false,
},
{
name: 'Chub',
id: 41,
desc: 'A common freshwater fish known for its voracious appetite.',
legend: false,
price: [50,62,75,100],
locationTown: ['Mountain Lake','Forrest River',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 35, behavior: 'dart'},
size: {min: 12, max: 25},
tool: 'Fishing Pole',
baseXP: 14,
fishPond: true,
cooking: false,
},
{
name: 'Lingcod',
id: 45,
desc: 'A fearsome predator that will eat almost anything it can cram into its mouth.',
legend: false,
price: [120,150,180,240],
locationTown: ['Mountain Lake','Town River','Forrest River',],
locationSpecial: [],
locationFarm: [],
season: ['Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 85, behavior: 'mixed'},
size: {min: 30, max: 51},
tool: 'Fishing Pole',
baseXP: 31,
fishPond: true,
cooking: false,
},
{
name: 'Mussel',
id: 51,
desc: 'A common bivalve that often lives in clusters.',
legend: false,
price: [30,37,45,60],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Crabpot',
baseXP: 5,
fishPond: true,
cooking: true,
},
{
name: 'Woodskip',
id: 56,
desc: 'A very sensitive fish that can only live in pools deep in the forest.',
legend: false,
price: [75,93,112,150],
locationTown: [],
locationSpecial: ['Secret Woods Pond',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 50, behavior: 'mixed'},
size: {min: 11, max: 31},
tool: 'Fishing Pole',
baseXP: 19,
fishPond: true,
cooking: false,
},
{
name: 'Glacierfish',
id: 57,
desc: 'Builds a nest on the underside of glaciers.',
legend: true,
price: [1000,1250,1500,2000],
locationTown: ['Forrest River',],
locationNote: 'South end of Arrowhead Island',
locationSpecial: [],
locationFarm: [],
season: ['Winter',],
weather: ['Sun','Rain',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 100, behavior: 'mixed'},
size: {min: 26, max: 28},
tool: 'Legendary',
baseXP: 180,
fishPond: false,
cooking: false,
},
{
name: 'Void Salmon',
id: 58,
desc: 'A salmon, twisted by void energy. The fresh meat is jet black, but rapidly turns pink when exposed to air.',
legend: false,
price: [150,187,225,300],
locationTown: [],
locationSpecial: ['Witch Swamp',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 80, behavior: 'mixed'},
size: {min: 24, max: 66},
tool: 'Fishing Pole',
baseXP: 29,
fishPond: true,
cooking: false,
},
{
name: 'Slimejack',
id: 59,
desc: 'He\'s coated in a very thick layer of slime. He keeps slipping out of your hands!',
legend: false,
price: [100,125,150,200],
locationTown: [],
locationSpecial: ['Mutant Bug Lair',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 55, behavior: 'dart'},
size: {min: 8, max: 26},
tool: 'Fishing Pole',
baseXP: 21,
fishPond: true,
cooking: false,
},
{
name: 'Midnight Squid',
id: 60,
desc: 'A strange and mysterious denizen of the ocean\'s twilight depths.',
legend: false,
price: [100,125,150,200],
locationTown: [],
locationSpecial: ['Night Market',],
locationFarm: [],
season: ['Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 55, behavior: 'Sinker'},
size: {min: 8, max: 25},
tool: 'Fishing Pole',
baseXP: 21,
fishPond: true,
cooking: false,
},
{
name: 'Spook Fish',
id: 61,
desc: 'The huge eyes can detect the faint silhouettes of prey.',
legend: false,
price: [220,275,330,440],
locationTown: [],
locationSpecial: ['Night Market',],
locationFarm: [],
season: ['Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 60, behavior: 'Dart'},
size: {min: 8, max: 25},
tool: 'Fishing Pole',
baseXP: 23,
fishPond: true,
cooking: false,
},
{
name: 'Blobfish',
id: 62,
desc: 'This odd creature floats above the ocean floor, consuming any edible material in its path.',
legend: false,
price: [500,625,750,1000],
locationTown: [],
locationSpecial: ['Night Market',],
locationFarm: [],
season: ['Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 75, behavior: 'Floater'},
size: {min: 8, max: 25},
tool: 'Fishing Pole',
baseXP: 28,
fishPond: true,
cooking: false,
},
{
name: 'Lobster',
id: 47,
desc: 'A large ocean-dwelling crustacean with a strong tail.',
legend: false,
price: [120,120,120,120],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Crabpot',
baseXP: 5,
fishPond: true,
cooking: true,
},
{
name: 'Snail',
id: 53,
desc: 'A wide-ranging mollusc that lives in a spiral shell.',
legend: false,
price: [65,65,65,65],
locationTown: ['Mountain Lake','Town River','Forrest River','Forrest Pond',],
locationSpecial: ['Secret Woods Pond',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Crabpot',
baseXP: 5,
fishPond: true,
cooking: true,
},
{
name: 'Oyster',
id: 55,
desc: 'Constantly filters water to find food. In the process, it removes dangerous toxins from the environment.',
legend: false,
price: [40,50,60,80],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Crabpot',
baseXP: 5,
fishPond: true,
cooking: false,
},
{
name: 'Coral',
id: 66,
desc: '',
legend: false,
price: [80,100,120,160],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Forage',
baseXP: 5,
fishPond: true,
cooking: false,
},
{
name: 'Crayfish',
id: 48,
desc: 'A small freshwater relative of the lobster.',
legend: false,
price: [75,75,75,75],
locationTown: ['Mountain Lake','Town River','Forrest River','Forrest Pond',],
locationSpecial: ['Secret Woods Pond',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Crabpot',
baseXP: 5,
fishPond: true,
cooking: true,
},
{
name: 'Sea Urchin',
id: 67,
desc: '',
legend: false,
price: [160,200,240,320],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 26},],
tool: 'Forage',
baseXP: 5,
fishPond: true,
cooking: false,
},
{
name: 'Legend',
id: 33,
desc: 'The king of all fish! They said he\'d never be caught.',
legend: true,
price: [5000,6250,7500,10000],
locationTown: ['Mountain Lake',],
locationNote: 'On Island near Log',
locationSpecial: [],
locationFarm: [],
season: ['Spring',],
weather: ['Rain',],
times: [{start: 6, end: 26},],
behavior: {difficulty: 110, behavior: 'mixed'},
size: {min: 49, max: 51},
tool: 'Legendary',
baseXP: 195,
fishPond: false,
cooking: false,
},
{
name: 'Shad',
id: 44,
desc: 'Lives in a school at sea, but returns to the rivers to spawn.',
legend: false,
price: [60,75,90,120],
locationTown: ['Town River','Forrest River',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall',],
weather: ['Rain',],
times: [{start: 9, end: 26},],
behavior: {difficulty: 45, behavior: 'smooth'},
size: {min: 20, max: 49},
tool: 'Fishing Pole',
baseXP: 18,
fishPond: true,
cooking: false,
},
{
name: 'Walleye',
id: 10,
desc: 'A freshwater fish caught at night.',
legend: false,
price: [105,131,157,210],
locationTown: ['Mountain Lake','Town River','Forrest River','Forrest Pond',],
locationSpecial: [],
locationFarm: [],
season: ['Fall','Winter',],
weather: ['Rain',],
times: [{start: 12, end: 26},],
behavior: {difficulty: 45, behavior: 'smooth'},
size: {min: 10, max: 41},
tool: 'Fishing Pole',
baseXP: 18,
fishPond: true,
cooking: false,
},
{
name: 'Eel',
id: 18,
desc: 'A long, slippery little fish.',
legend: false,
price: [85,106,127,170],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Fall',],
weather: ['Rain',],
times: [{start: 16, end: 26},],
behavior: {difficulty: 70, behavior: 'smooth'},
size: {min: 12, max: 81},
tool: 'Fishing Pole',
baseXP: 26,
fishPond: true,
cooking: true,
},
{
name: 'Bream',
id: 5,
desc: 'A fairly common river fish that becomes active at night.',
legend: false,
price: [45,56,67,90],
locationTown: ['Town River','Forrest River',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 18, end: 26},],
behavior: {difficulty: 35, behavior: 'smooth'},
size: {min: 12, max: 31},
tool: 'Fishing Pole',
baseXP: 14,
fishPond: true,
cooking: true,
},
{
name: 'Squid',
id: 21,
desc: 'A deep sea creature that can grow to enormous size.',
legend: false,
price: [80,100,120,160],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 18, end: 26},],
behavior: {difficulty: 75, behavior: 'sinker'},
size: {min: 12, max: 49},
tool: 'Fishing Pole',
baseXP: 28,
fishPond: true,
cooking: true,
},
{
name: 'Super Cucumber',
id: 25,
desc: 'A rare, purple variety of sea cucumber.',
legend: false,
price: [250,312,375,500],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Summer','Fall',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 18, end: 26},],
behavior: {difficulty: 80, behavior: 'sinker'},
size: {min: 12, max: 37},
tool: 'Fishing Pole',
baseXP: 29,
fishPond: true,
cooking: false,
},
{
name: 'Midnight Carp',
id: 64,
desc: 'This shy fish only feels comfortable at night.',
legend: false,
price: [150,187,225,300],
locationTown: ['Mountain Lake','Forrest Pond',],
locationSpecial: [],
locationFarm: [],
season: ['Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 22, end: 26},],
behavior: {difficulty: 55, behavior: 'mixed'},
size: {min: 12, max: 53},
tool: 'Fishing Pole',
baseXP: 21,
fishPond: true,
cooking: true,
},
{
name: 'Albacore',
id: 43,
desc: 'Prefers temperature ""edges"" where cool and warm water meet.',
legend: false,
price: [75,93,112,150],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 11},{start: 18, end: 2},],
behavior: {difficulty: 60, behavior: 'mixed'},
size: {min: 20, max: 41},
tool: 'Fishing Pole',
baseXP: 23,
fishPond: true,
cooking: false,
},
{
name: 'Halibut',
id: 46,
desc: 'A flat fish that lives on the ocean floor.',
legend: false,
price: [80,100,120,160],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 11},{start: 19, end: 2},],
behavior: {difficulty: 50, behavior: 'sinker'},
size: {min: 10, max: 34},
tool: 'Fishing Pole',
baseXP: 19,
fishPond: true,
cooking: false,
},
{
name: 'Octopus',
id: 19,
desc: 'A mysterious and intelligent creature.',
legend: false,
price: [150,187,225,300],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Summer',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 13},],
behavior: {difficulty: 95, behavior: 'sinker'},
size: {min: 12, max: 49},
tool: 'Fishing Pole',
baseXP: 34,
fishPond: true,
cooking: false,
},
{
name: 'Tilapia',
id: 40,
desc: 'A primarily vegetarian fish that prefers warm water.',
legend: false,
price: [75,93,112,150],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Summer','Fall',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 14},],
behavior: {difficulty: 50, behavior: 'mixed'},
size: {min: 11, max: 31},
tool: 'Fishing Pole',
baseXP: 19,
fishPond: true,
cooking: false,
},
{
name: 'Pufferfish',
id: 1,
desc: 'Inflates when threatened.',
legend: false,
price: [200,250,300,400],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Summer',],
weather: ['Sun',],
times: [{start: 12, end: 16},],
behavior: {difficulty: 80, behavior: 'floater'},
size: {min: 1, max: 37},
tool: 'Fishing Pole',
baseXP: 29,
fishPond: true,
cooking: false,
},
{
name: 'Tuna',
id: 3,
desc: 'A large fish that lives in the ocean.',
legend: false,
price: [100,125,150,200],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Summer','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 70, behavior: 'smooth'},
size: {min: 12, max: 61},
tool: 'Fishing Pole',
baseXP: 26,
fishPond: true,
cooking: true,
},
{
name: 'Sardine',
id: 4,
desc: 'A common ocean fish.',
legend: false,
price: [40,50,60,80],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Fall',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 30, behavior: 'dart'},
size: {min: 1, max: 13},
tool: 'Fishing Pole',
baseXP: 13,
fishPond: true,
cooking: true,
},
{
name: 'Largemouth Bass',
id: 6,
desc: 'A popular fish that lives in lakes.',
legend: false,
price: [100,125,150,200],
locationTown: ['Mountain Lake',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 50, behavior: 'mixed'},
size: {min: 11, max: 31},
tool: 'Fishing Pole',
baseXP: 19,
fishPond: true,
cooking: true,
},
{
name: 'Rainbow Trout',
id: 8,
desc: 'A freshwater trout with colorful markings.',
legend: false,
price: [65,81,97,130],
locationTown: ['Mountain Lake','Town River','Forrest River',],
locationSpecial: [],
locationFarm: [],
season: ['Summer',],
weather: ['Sun',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 45, behavior: 'mixed'},
size: {min: 10, max: 26},
tool: 'Fishing Pole',
baseXP: 18,
fishPond: true,
cooking: true,
},
{
name: 'Salmon',
id: 9,
desc: 'Swims upstream to lay its eggs.',
legend: false,
price: [75,93,112,150],
locationTown: ['Town River','Forrest River',],
locationSpecial: [],
locationFarm: [],
season: ['Fall',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 50, behavior: 'mixed'},
size: {min: 24, max: 66},
tool: 'Fishing Pole',
baseXP: 19,
fishPond: true,
cooking: true,
},
{
name: 'Sunfish',
id: 15,
desc: 'A common river fish.',
legend: false,
price: [30,37,45,60],
locationTown: ['Town River','Forrest River',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer',],
weather: ['Sun','Wind',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 30, behavior: 'mixed'},
size: {min: 5, max: 16},
tool: 'Fishing Pole',
baseXP: 13,
fishPond: true,
cooking: true,
},
{
name: 'Red Mullet',
id: 16,
desc: 'Long ago these were kept as pets.',
legend: false,
price: [75,93,112,150],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Summer','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 55, behavior: 'smooth'},
size: {min: 8, max: 23},
tool: 'Fishing Pole',
baseXP: 21,
fishPond: true,
cooking: false,
},
{
name: 'Sea Cucumber',
id: 24,
desc: 'A slippery, slimy creature found on the ocean floor.',
legend: false,
price: [75,93,112,150],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 40, behavior: 'sinker'},
size: {min: 3, max: 21},
tool: 'Fishing Pole',
baseXP: 16,
fishPond: true,
cooking: true,
},
{
name: 'Sturgeon',
id: 37,
desc: 'An ancient bottom-feeder with a dwindling population. Females can live up to 150 years.',
legend: false,
price: [200,250,300,400],
locationTown: ['Mountain Lake',],
locationSpecial: [],
locationFarm: [],
season: ['Summer','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 78, behavior: 'mixed'},
size: {min: 12, max: 61},
tool: 'Fishing Pole',
baseXP: 29,
fishPond: true,
cooking: false,
},
{
name: 'Tiger Trout',
id: 38,
desc: 'A rare hybrid trout that cannot bear offspring of its own.',
legend: false,
price: [150,187,225,300],
locationTown: ['Town River','Forrest River',],
locationSpecial: [],
locationFarm: [],
season: ['Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 60, behavior: 'dart'},
size: {min: 10, max: 21},
tool: 'Fishing Pole',
baseXP: 23,
fishPond: true,
cooking: false,
},
{
name: 'Dorado',
id: 42,
desc: 'A fierce carnivore with brilliant orange scales.',
legend: false,
price: [100,125,150,200],
locationTown: ['Forrest River',],
locationSpecial: [],
locationFarm: [],
season: ['Summer',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 78, behavior: 'mixed'},
size: {min: 24, max: 33},
tool: 'Fishing Pole',
baseXP: 29,
fishPond: true,
cooking: false,
},
{
name: 'Red Snapper',
id: 20,
desc: 'A popular fish with a nice red color.',
legend: false,
price: [50,62,75,100],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Summer','Fall','Winter',],
weather: ['Rain',],
times: [{start: 6, end: 19},],
behavior: {difficulty: 40, behavior: 'mixed'},
size: {min: 8, max: 26},
tool: 'Fishing Pole',
baseXP: 16,
fishPond: true,
cooking: false,
},
{
name: 'Sandfish',
id: 34,
desc: 'It tries to hide using camouflage.',
legend: false,
price: [75,93,112,150],
locationTown: [],
locationSpecial: ['Desert',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 20},],
behavior: {difficulty: 65, behavior: 'mixed'},
size: {min: 8, max: 25},
tool: 'Fishing Pole',
baseXP: 24,
fishPond: true,
cooking: false,
},
{
name: 'Scorpion Carp',
id: 35,
desc: 'It\'s like a regular carp but with a sharp stinger.',
legend: false,
price: [150,187,225,300],
locationTown: [],
locationSpecial: ['Desert',],
locationFarm: [],
season: ['Spring','Summer','Fall','Winter',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 20},],
behavior: {difficulty: 90, behavior: 'dart'},
size: {min: 12, max: 33},
tool: 'Fishing Pole',
baseXP: 33,
fishPond: true,
cooking: false,
},
{
name: 'Flounder',
id: 63,
desc: 'It lives on the bottom, so both eyes are on top of its head.',
legend: false,
price: [100,125,150,200],
locationTown: ['Ocean',],
locationSpecial: [],
locationFarm: [],
season: ['Spring','Summer',],
weather: ['Sun','Wind','Rain','Snow',],
times: [{start: 6, end: 20},],
behavior: {difficulty: 50, behavior: 'sinker'},
size: {min: 4, max: 17},
tool: 'Fishing Pole',
baseXP: 19,
fishPond: true,
cooking: true,
},

]
exports.fish = fish

exports.seasonalFish = fish.filter( thisFish => thisFish.season.length < 4 )

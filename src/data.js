

const fish = [
	{
	name: 'Pufferfish',
	id: 1,
	desc: 'Inflates when threatened.',
	price: [200,250,300,400],
	location: ['Ocean',],
	season: ['Summer',],
	weather: ['Sun',],
	times: [{start: '12:00:00 PM', end: '4:00:00 PM'},],
	behavior: {difficulty: 80, behavior: 'floater'},
	size: {min: 1, max: 37},
	tool: 'Fishing Pole',
	baseXP: 29,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Anchovy',
	id: 2,
	desc: 'A small silver fish found in the ocean.',
	price: [30,37,45,60],
	location: ['Ocean',],
	season: ['Spring','Fall',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 30, behavior: 'dart'},
	size: {min: 1, max: 17},
	tool: 'Fishing Pole',
	baseXP: 13,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Tuna',
	id: 3,
	desc: 'A large fish that lives in the ocean.',
	price: [100,125,150,200],
	location: ['Ocean',],
	season: ['Summer','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
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
	price: [40,50,60,80],
	location: ['Ocean',],
	season: ['Spring','Fall',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
	behavior: {difficulty: 30, behavior: 'dart'},
	size: {min: 1, max: 13},
	tool: 'Fishing Pole',
	baseXP: 13,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Bream',
	id: 5,
	desc: 'A fairly common river fish that becomes active at night.',
	price: [45,56,67,90],
	location: ['Town River','Forrest River',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 PM', end: '2:00:00 AM'},],
	behavior: {difficulty: 35, behavior: 'smooth'},
	size: {min: 12, max: 31},
	tool: 'Fishing Pole',
	baseXP: 14,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Largemouth Bass',
	id: 6,
	desc: 'A popular fish that lives in lakes.',
	price: [100,125,150,200],
	location: ['Mountain Lake',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
	behavior: {difficulty: 50, behavior: 'mixed'},
	size: {min: 11, max: 31},
	tool: 'Fishing Pole',
	baseXP: 19,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Smallmouth Bass',
	id: 7,
	desc: 'A freshwater fish that is very sensitive to pollution.',
	price: [50,62,75,100],
	location: ['Forrest River','Forrest Pond',],
	season: ['Spring','Fall',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 28, behavior: 'mixed'},
	size: {min: 12, max: 25},
	tool: 'Fishing Pole',
	baseXP: 12,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Rainbow Trout',
	id: 8,
	desc: 'A freshwater trout with colorful markings.',
	price: [65,81,97,130],
	location: ['Mountain Lake','Town River','Forrest River',],
	season: ['Summer',],
	weather: ['Sun',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
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
	price: [75,93,112,150],
	location: ['Town River','Forrest River',],
	season: ['Fall',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
	behavior: {difficulty: 50, behavior: 'mixed'},
	size: {min: 24, max: 66},
	tool: 'Fishing Pole',
	baseXP: 19,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Walleye',
	id: 10,
	desc: 'A freshwater fish caught at night.',
	price: [105,131,157,210],
	location: ['Mountain Lake','Town River','Forrest River','Forrest Pond',],
	season: ['Fall','Winter',],
	weather: ['Rain',],
	times: [{start: '12:00:00 PM', end: '2:00:00 AM'},],
	behavior: {difficulty: 45, behavior: 'smooth'},
	size: {min: 10, max: 41},
	tool: 'Fishing Pole',
	baseXP: 18,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Perch',
	id: 11,
	desc: 'A freshwater fish of the winter.',
	price: [55,68,82,110],
	location: ['Mountain Lake','Town River','Forrest River','Forrest Pond',],
	season: ['Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [30,37,45,60],
	location: ['Mountain Lake','Secret Woods Pond','Sewers',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 15, behavior: 'mixed'},
	size: {min: 15, max: 51},
	tool: 'Fishing Pole',
	baseXP: 8,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Catfish',
	id: 13,
	desc: 'An uncommon fish found in streams.',
	price: [200,250,300,400],
	location: ['Town River','Forrest River','Secret Woods Pond','Witch Swamp',],
	season: ['Spring','Fall','Winter',],
	weather: ['Rain',],
	times: [{start: '6:00:00 AM', end: '12:00:00 AM'},],
	behavior: {difficulty: 75, behavior: 'mixed'},
	size: {min: 12, max: 73},
	tool: 'Fishing Pole',
	baseXP: 28,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Pike',
	id: 14,
	desc: 'A freshwater fish that\'s difficult to catch.',
	price: [100,125,150,200],
	location: ['Mountain Lake','Town River','Forrest River','Forrest Pond',],
	season: ['Summer','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 60, behavior: 'dart'},
	size: {min: 15, max: 61},
	tool: 'Fishing Pole',
	baseXP: 23,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Sunfish',
	id: 15,
	desc: 'A common river fish.',
	price: [30,37,45,60],
	location: ['Town River','Forrest River',],
	season: ['Spring','Summer',],
	weather: ['Sun','Wind',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
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
	price: [75,93,112,150],
	location: ['Ocean',],
	season: ['Summer','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
	behavior: {difficulty: 55, behavior: 'smooth'},
	size: {min: 8, max: 23},
	tool: 'Fishing Pole',
	baseXP: 21,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Herring',
	id: 17,
	desc: 'A common ocean fish.',
	price: [30,37,45,60],
	location: ['Ocean',],
	season: ['Spring','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 25, behavior: 'dart'},
	size: {min: 8, max: 21},
	tool: 'Fishing Pole',
	baseXP: 11,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Eel',
	id: 18,
	desc: 'A long, slippery little fish.',
	price: [85,106,127,170],
	location: ['Ocean',],
	season: ['Spring','Fall',],
	weather: ['Rain',],
	times: [{start: '4:00:00 PM', end: '2:00:00 AM'},],
	behavior: {difficulty: 70, behavior: 'smooth'},
	size: {min: 12, max: 81},
	tool: 'Fishing Pole',
	baseXP: 26,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Octopus',
	id: 19,
	desc: 'A mysterious and intelligent creature.',
	price: [150,187,225,300],
	location: ['Ocean',],
	season: ['Summer',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '1:00:00 PM'},],
	behavior: {difficulty: 95, behavior: 'sinker'},
	size: {min: 12, max: 49},
	tool: 'Fishing Pole',
	baseXP: 34,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Red Snapper',
	id: 20,
	desc: 'A popular fish with a nice red color.',
	price: [50,62,75,100],
	location: ['Ocean',],
	season: ['Summer','Fall','Winter',],
	weather: ['Rain',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
	behavior: {difficulty: 40, behavior: 'mixed'},
	size: {min: 8, max: 26},
	tool: 'Fishing Pole',
	baseXP: 16,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Squid',
	id: 21,
	desc: 'A deep sea creature that can grow to enormous size.',
	price: [80,100,120,160],
	location: ['Ocean',],
	season: ['Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 PM', end: '2:00:00 AM'},],
	behavior: {difficulty: 75, behavior: 'sinker'},
	size: {min: 12, max: 49},
	tool: 'Fishing Pole',
	baseXP: 28,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Seaweed',
	id: 22,
	desc: '',
	price: [20,25,30,35],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Fishing Pole',
	baseXP: 5,
	fishPond: false,
	cooking: false,
	},
	{
	name: 'Green Algae',
	id: 23,
	desc: '',
	price: [15,15,15,15],
	location: ['Ocean','Night Market','Mountain Lake','Town River','Forrest River','Forrest Pond','Secret Woods Pond','Desert','Mines','Sewers','Mutant Bug Lair','Witch Swamp',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Fishing Pole',
	baseXP: 5,
	fishPond: false,
	cooking: true,
	},
	{
	name: 'Sea Cucumber',
	id: 24,
	desc: 'A slippery, slimy creature found on the ocean floor.',
	price: [75,93,112,150],
	location: ['Ocean',],
	season: ['Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
	behavior: {difficulty: 40, behavior: 'sinker'},
	size: {min: 3, max: 21},
	tool: 'Fishing Pole',
	baseXP: 16,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Super Cucumber',
	id: 25,
	desc: 'A rare, purple variety of sea cucumber.',
	price: [250,312,375,500],
	location: ['Ocean',],
	season: ['Summer','Fall',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 PM', end: '2:00:00 AM'},],
	behavior: {difficulty: 80, behavior: 'sinker'},
	size: {min: 12, max: 37},
	tool: 'Fishing Pole',
	baseXP: 29,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Ghostfish',
	id: 26,
	desc: 'A pale, blind fish found in underground lakes.',
	price: [45,56,67,90],
	location: ['Mines',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [25,25,25,25],
	location: ['Mines','Sewers','Mutant Bug Lair','Witch Swamp',],
	season: ['Spring	Summer	Fall	Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Fishing Pole',
	baseXP: 5,
	fishPond: false,
	cooking: true,
	},
	{
	name: 'Stonefish',
	id: 28,
	desc: 'A bizarre fish that\'s shaped like a brick.',
	price: [300,375,450,600],
	location: ['Mines',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [1500,1875,2250,3000],
	location: ['East Pier',],
	season: ['Summer',],
	weather: ['Sun','Rain',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [900,1125,1350,1800],
	location: ['North of JojaMart',],
	season: ['Fall',],
	weather: ['Sun','Rain',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [500,625,750,1000],
	location: ['Mines',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [700,875,1050,1400],
	location: ['Mines',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 90, behavior: 'mixed'},
	size: {min: 31, max: 33},
	tool: 'Fishing Pole',
	baseXP: 33,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Legend',
	id: 33,
	desc: 'The king of all fish! They said he\'d never be caught.',
	price: [5000,6250,7500,10000],
	location: ['On Island near Log',],
	season: ['Spring',],
	weather: ['Rain',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 110, behavior: 'mixed'},
	size: {min: 49, max: 51},
	tool: 'Legendary',
	baseXP: 195,
	fishPond: false,
	cooking: false,
	},
	{
	name: 'Sandfish',
	id: 34,
	desc: 'It tries to hide using camouflage.',
	price: [75,93,112,150],
	location: ['Desert',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '8:00:00 PM'},],
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
	price: [150,187,225,300],
	location: ['Desert',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '8:00:00 PM'},],
	behavior: {difficulty: 90, behavior: 'dart'},
	size: {min: 12, max: 33},
	tool: 'Fishing Pole',
	baseXP: 33,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Mutant Carp',
	id: 36,
	desc: 'The strange waters of the sewer turned this carp into a monstrosity.',
	price: [1000,1250,1500,2000],
	location: ['Sewers',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Rain',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 80, behavior: 'dart'},
	size: {min: 35, max: 37},
	tool: 'Legendary',
	baseXP: 145,
	fishPond: false,
	cooking: false,
	},
	{
	name: 'Sturgeon',
	id: 37,
	desc: 'An ancient bottom-feeder with a dwindling population. Females can live up to 150 years.',
	price: [200,250,300,400],
	location: ['Mountain Lake',],
	season: ['Summer','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
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
	price: [150,187,225,300],
	location: ['Town River','Forrest River',],
	season: ['Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
	behavior: {difficulty: 60, behavior: 'dart'},
	size: {min: 10, max: 21},
	tool: 'Fishing Pole',
	baseXP: 23,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Bullhead',
	id: 39,
	desc: 'A relative of the catfish that eats a variety of foods off the lake bottom.',
	price: [75,93,112,150],
	location: ['Mountain Lake',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 46, behavior: 'smooth'},
	size: {min: 12, max: 31},
	tool: 'Fishing Pole',
	baseXP: 18,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Tilapia',
	id: 40,
	desc: 'A primarily vegetarian fish that prefers warm water.',
	price: [75,93,112,150],
	location: ['Ocean',],
	season: ['Summer','Fall',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 PM'},],
	behavior: {difficulty: 50, behavior: 'mixed'},
	size: {min: 11, max: 31},
	tool: 'Fishing Pole',
	baseXP: 19,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Chub',
	id: 41,
	desc: 'A common freshwater fish known for its voracious appetite.',
	price: [50,62,75,100],
	location: ['Mountain Lake','Forrest River',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 35, behavior: 'dart'},
	size: {min: 12, max: 25},
	tool: 'Fishing Pole',
	baseXP: 14,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Dorado',
	id: 42,
	desc: 'A fierce carnivore with brilliant orange scales.',
	price: [100,125,150,200],
	location: ['Forrest River',],
	season: ['Summer',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '7:00:00 PM'},],
	behavior: {difficulty: 78, behavior: 'mixed'},
	size: {min: 24, max: 33},
	tool: 'Fishing Pole',
	baseXP: 29,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Albacore',
	id: 43,
	desc: 'Prefers temperature ""edges"" where cool and warm water meet.',
	price: [75,93,112,150],
	location: ['Ocean',],
	season: ['Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '11:00:00 AM'},{start: '6:00:00 PM', end: '2:00:00 AM'},],
	behavior: {difficulty: 60, behavior: 'mixed'},
	size: {min: 20, max: 41},
	tool: 'Fishing Pole',
	baseXP: 23,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Shad',
	id: 44,
	desc: 'Lives in a school at sea, but returns to the rivers to spawn.',
	price: [60,75,90,120],
	location: ['Town River','Forrest River',],
	season: ['Spring','Summer','Fall',],
	weather: ['Rain',],
	times: [{start: '9:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 45, behavior: 'smooth'},
	size: {min: 20, max: 49},
	tool: 'Fishing Pole',
	baseXP: 18,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Lingcod',
	id: 45,
	desc: 'A fearsome predator that will eat almost anything it can cram into its mouth.',
	price: [120,150,180,240],
	location: ['Mountain Lake','Town River','Forrest River',],
	season: ['Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 85, behavior: 'mixed'},
	size: {min: 30, max: 51},
	tool: 'Fishing Pole',
	baseXP: 31,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Halibut',
	id: 46,
	desc: 'A flat fish that lives on the ocean floor.',
	price: [80,100,120,160],
	location: ['Ocean',],
	season: ['Spring','Summer','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '11:00:00 AM'},{start: '7:00:00 PM', end: '2:00:00 AM'},],
	behavior: {difficulty: 50, behavior: 'sinker'},
	size: {min: 10, max: 34},
	tool: 'Fishing Pole',
	baseXP: 19,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Lobster',
	id: 47,
	desc: 'A large ocean-dwelling crustacean with a strong tail.',
	price: [120,120,120,120],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Thu','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Crabpot',
	baseXP: 5,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Crayfish',
	id: 48,
	desc: 'A small freshwater relative of the lobster.',
	price: [75,75,75,75],
	location: ['Mountain Lake','Town River','Forrest River','Forrest Pond','Secret Woods Pond',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Wed','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Crabpot',
	baseXP: 5,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Crab',
	id: 49,
	desc: 'A marine crustacean with two powerful pincers.',
	price: [100,100,100,100],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Fri','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Crabpot',
	baseXP: 5,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Cockle',
	id: 50,
	desc: 'A common saltwater clam.',
	price: [50,62,75,100],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sat','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Crabpot',
	baseXP: 5,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Mussel',
	id: 51,
	desc: 'A common bivalve that often lives in clusters.',
	price: [30,37,45,60],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Crabpot',
	baseXP: 5,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Shrimp',
	id: 52,
	desc: 'A scavenger that feeds off the ocean floor. Widely prized for its meat.',
	price: [60,60,60,60],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Mon','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Crabpot',
	baseXP: 5,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Snail',
	id: 53,
	desc: 'A wide-ranging mollusc that lives in a spiral shell.',
	price: [65,65,65,65],
	location: ['Mountain Lake','Town River','Forrest River','Forrest Pond','Secret Woods Pond',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Thu','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Crabpot',
	baseXP: 5,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Periwinkle',
	id: 54,
	desc: 'A tiny freshwater snail that lives in a blue shell.',
	price: [20,20,20,20],
	location: ['Mountain Lake','Town River','Forrest River','Forrest Pond','Secret Woods Pond',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Fri','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Crabpot',
	baseXP: 5,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Oyster',
	id: 55,
	desc: 'Constantly filters water to find food. In the process, it removes dangerous toxins from the environment.',
	price: [40,50,60,80],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Tue','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Crabpot',
	baseXP: 5,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Woodskip',
	id: 56,
	desc: 'A very sensitive fish that can only live in pools deep in the forest.',
	price: [75,93,112,150],
	location: ['Secret Woods Pond',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [1000,1250,1500,2000],
	location: ['South end of Arrowhead Island',],
	season: ['Winter',],
	weather: ['Sun','Rain',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [150,187,225,300],
	location: ['Witch Swamp',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [100,125,150,200],
	location: ['Mutant Bug Lair',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [100,125,150,200],
	location: ['Night Market',],
	season: ['Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [220,275,330,440],
	location: ['Night Market',],
	season: ['Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
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
	price: [500,625,750,1000],
	location: ['Night Market',],
	season: ['Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	behavior: {difficulty: 75, behavior: 'Floater'},
	size: {min: 8, max: 25},
	tool: 'Fishing Pole',
	baseXP: 28,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Flounder',
	id: 63,
	desc: 'It lives on the bottom, so both eyes are on top of its head.',
	price: [100,125,150,200],
	location: ['Ocean',],
	season: ['Spring','Summer',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '8:00:00 PM'},],
	behavior: {difficulty: 50, behavior: 'sinker'},
	size: {min: 4, max: 17},
	tool: 'Fishing Pole',
	baseXP: 19,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Midnight Carp',
	id: 64,
	desc: 'This shy fish only feels comfortable at night.',
	price: [150,187,225,300],
	location: ['Mountain Lake','Forrest Pond',],
	season: ['Fall','Winter',],
	weather: ['Sun','Wind','Rain','Snow',],
	times: [{start: '10:00:00 PM', end: '2:00:00 AM'},],
	behavior: {difficulty: 55, behavior: 'mixed'},
	size: {min: 12, max: 53},
	tool: 'Fishing Pole',
	baseXP: 21,
	fishPond: true,
	cooking: true,
	},
	{
	name: 'Coral',
	id: 66,
	desc: '',
	price: [80,100,120,160],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Tue','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Forage',
	baseXP: 5,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Sea Urchin',
	id: 67,
	desc: '',
	price: [160,200,240,320],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Wed','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Forage',
	baseXP: 5,
	fishPond: true,
	cooking: false,
	},
	{
	name: 'Clam',
	id: 65,
	desc: '',
	price: [50,62,75,100],
	location: ['Ocean',],
	season: ['Spring','Summer','Fall','Winter',],
	weather: ['Mon','Wind','Rain','Snow',],
	times: [{start: '6:00:00 AM', end: '2:00:00 AM'},],
	tool: 'Forage',
	baseXP: 5,
	fishPond: false,
	cooking: false,
	},
]
exports.fish = fish

exports.seasonalFish = fish.filter( thisFish => thisFish.season.length < 4 )

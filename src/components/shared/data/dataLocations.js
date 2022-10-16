// ////
// locations
const locationTown = {
	Ocean: {
		name: "Ocean",
		locationGroup: "Town",
		mapLocation: "Ocean",
		waterSalinity: "Salt",
		waterStillness: "Ocean",
		legendLocation: "North of JojaMart",
	},
	"Town River": {
		name: "Town River",
		locationGroup: "Town",
		mapLocation: "Town",
		waterSalinity: "Fresh",
		waterStillness: "River",
		legendLocation: "North of JojaMart",
	},
	"Mountain Lake": {
		name: "Mountain Lake",
		locationGroup: "Town",
		mapLocation: "Mountain",
		waterSalinity: "Fresh",
		waterStillness: "Lake",
		legendLocation: "On Island near Log",
	},
	"Forrest River": {
		name: "Forrest River",
		locationGroup: "Town",
		mapLocation: "Forrest",
		waterSalinity: "Fresh",
		waterStillness: "River",
		legendLocation: "South end of Arrowhead Island",
	},
	"Forrest Pond": {
		name: "Forrest Pond",
		locationGroup: "Town",
		mapLocation: "Forrest",
		waterSalinity: "Fresh",
		waterStillness: "Lake",
	},
};
const locationSpecial = {
	"Night Market": {
		name: "Night Market",
		locationGroup: "Special",
		mapLocation: "Night Market",
	},
	"Secret Woods Pond": {
		name: "Secret Woods Pond",
		locationGroup: "Special",
		mapLocation: "Secret Woods",
	},
	Desert: {
		name: "Desert",
		locationGroup: "Special",
		mapLocation: "Desert",
	},
	Mines: {
		name: "Mines",
		locationGroup: "Special",
		mapLocation: "Mines",
	},
	Sewers: {
		name: "Sewers",
		locationGroup: "Special",
		mapLocation: "Sewers",
	},
	"Mutant Bug Lair": {
		name: "Mutant Bug Lair",
		locationGroup: "Special",
		mapLocation: "Sewers",
	},
	"Witch Swamp": {
		name: "Witch Swamp",
		locationGroup: "Special",
		mapLocation: "Swamp",
	},
};
const locationFarm = {
	"Farm Pond": {
		name: "Farm Pond",
		locationGroup: "Farm",
		mapLocation: "Farm",
	},
	"Forrest Pond": {
		name: "Forrest Pond",
		locationGroup: "Farm",
		mapLocation: "Farm",
	},
};

const locations = {
	locationTown: locationTown,
	locationSpecial: locationSpecial,
	locationFarm: locationFarm,
};
exports.locations = locations;
